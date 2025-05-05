from django.shortcuts import render
from django.http import JsonResponse
from api.models import User, Todo, ChatMessage, Profile
from django.db.models import Subquery,OuterRef,Q

from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer, TodoSerializer,MessageSerializer , ProfileSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


# Get All Routes

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


class TodoListView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        user = User.objects.get(id=user_id)

        todo = Todo.objects.filter(user=user) 
        return todo
    

class TodoDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    premession_classes=[IsAuthenticated]
    def get_object(self):
        user_id = self.kwargs['user_id']
        todo_id = self.kwargs['todo_id']

        user = User.objects.get(id=user_id)
        todo = Todo.objects.get(id=todo_id, user=user)

        return todo
    

class TodoMarkAsCompleted(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    premession_classes=[IsAuthenticated]
    def get_object(self):
        user_id = self.kwargs['user_id']
        todo_id = self.kwargs['todo_id']

        user = User.objects.get(id=user_id)
        todo = Todo.objects.get(id=todo_id, user=user)

        todo.completed = True
        todo.save()

        return todo
    
class MyInbox(generics.ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs['user_id']

        # Get all unique users who sent or received messages with this user
        related_users = ChatMessage.objects.filter(
            Q(sender=user_id) | Q(receiver=user_id)
        ).values_list('sender', 'receiver')

        user_ids = set()
        for sender_id, receiver_id in related_users:
            if sender_id != user_id:
                user_ids.add(sender_id)
            if receiver_id != user_id:
                user_ids.add(receiver_id)

        # Get the latest message for each user
        messages = []
        for uid in user_ids:
            last_msg = ChatMessage.objects.filter(
                Q(sender=user_id, receiver=uid) | Q(sender=uid, receiver=user_id)
            ).order_by("-id").first()
            if last_msg:
                messages.append(last_msg.id)

        return ChatMessage.objects.filter(id__in=messages).order_by("-id")
    
class GetMessage(generics.ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]  # Fixed typo 'premission_classes' to 'permission_classes'

    def get_queryset(self):
        sender_id = self.kwargs['sender_id']
        receiver_id = self.kwargs['receiver_id']

        # Filter messages where either sender or receiver is one of the two ids
        messages = ChatMessage.objects.filter(
            sender__in=[sender_id, receiver_id],  # Fixed 'sender_in' to 'sender__in'
            receiver__in=[sender_id, receiver_id]  # Fixed 'reciever_in' to 'receiver__in'
        )
        return messages 
    
class SendMessage(generics.CreateAPIView):
    serializer_class = MessageSerializer
    premession_classes=[IsAuthenticated]

class ProfileDetail(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    querset=Profile.objects.all()
    premession_classes=[IsAuthenticated]


class SearchUser(generics.ListAPIView):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        # Just return something to satisfy DRF's requirement
        return Profile.objects.none()

    def list(self, request, *args, **kwargs):
        username = self.kwargs['username']
        logged_in_user = self.request.user
        
        users = Profile.objects.filter(
            Q(user__username__icontains=username) |
            Q(full_name__icontains=username) |
            Q(user__email__icontains=username)
        )

        if not users.exists():
            return Response(
                {"details": "No user found"},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = self.get_serializer(users, many=True)
        return Response(serializer.data)