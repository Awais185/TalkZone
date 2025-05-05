import { React, useState, useEffect } from "react";
import './style/Message.css'
import useAxios from "../utils/useAxios";
import jwtDecode from "jwt-decode";
import { useParams,Link,useHistory } from "react-router-dom";
import moment from "moment";
function MessagesDetails() {
    const basedUrl = 'http://127.0.0.1:8000/api'; 

    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);
    let [NewMessage, setNewMessage] = useState({message:""});
    let [newSearch, setnewSearch] = useState({search:""});
    // console.log("New messages ==" ,NewMessage.message);
    


    const id = useParams();  // destructured directly
    const axios = useAxios();
    const token = localStorage.getItem("authTokens");
    const decoded = jwtDecode(token); 
    const user_id = decoded.user_id;
    const history=useHistory()



     useEffect(()=>{
          try{
            axios.get(basedUrl + '/my-messages/' + user_id + '/').then((response)=>{

              setMessages(response.data)
            })
          }
          catch (error){
            console.log(error)
    
          }
        },[])


    useEffect(()=>{
        let interval=setInterval(()=>{
          try {
            axios.get(basedUrl + '/get-messages/' + user_id + '/' + id.id + '/').then((res)=>{
          
                setMessages(res.data);
            })
            
        } catch (error) {
            console.log(error);
            
        }
        },400)
        return () =>{
          clearInterval(interval);
        } 
    },[])

    const handelChange=(event) =>{
        setNewMessage({
          ...NewMessage, 
          [event.target.name]: event.target.value})
    }

   


    const sendMessage=()=>{
      const formData = new FormData();
      formData.append("user", user_id);
      formData.append("sender", user_id);
      formData.append("receiver", id.id);
      formData.append("is_read", false);
      formData.append("message", NewMessage.message);

      try {
        axios.post(basedUrl + '/send-messages/',formData).then((res)=>{
          // console.log(res.data);
          document.getElementById("text-input").value = ""; // Clear the input field after sending the message
          setNewMessage(NewMessage=""); // Reset the state to clear the input field
          
        })
      } catch (error) {
        console.log(error);
        
      }

    }
    

    const heandleSearch=(event)=>{
      setnewSearch({
        ...newSearch,
        [event.target.name]: event.target.value
      })
    }

    // console.log(newSearch.username);
    

    const SearchUser=()=>{
      try {
        axios.get(basedUrl + '/search/' + newSearch.username + '/').then((res)=>{
          if(res.status===404){
            alert("User not found");
          }
          else{
            console.log("User found");
            
            history.push("/search/"+ newSearch.username);
            
          }
          
        }).catch(error=>{
          alert("User not found");
        })
      } catch (error) {
        console.log(error);
      }
    }

    const uniqueUsers = [];

messages.forEach(msg => {
  const otherUser = msg.sender === user_id ? msg.receiver : msg.sender;
  if (!uniqueUsers.find(user => user.id === otherUser.id)) {
    uniqueUsers.push({
      id: otherUser.id,
      profile: msg.sender === user_id ? msg.receiver_profile : msg.sender_profile,
      lastMessage: msg.message,
      date: msg.date
    });
  }
});

    return (
        <div>
        <main className="content" style={{marginTop:"150px"}}>
    <div className="container p-0">
      <h1 className="h3 mb-3">Messages</h1>
      <div className="card">
        <div className="row g-0">
          <div className="col-12 col-lg-5 col-xl-3 border-right">
            <div className="px-4 d-none d-md-block">
              <div className="align-items-center">
                <div className="flex-grow-1 d-flex">
                  <input
                    type="text"
                    className="form-control my-3"
                    placeholder="Search..."
                    onChange={heandleSearch}
                    name="username"
                  />
                  <button className="ml-2" onClick={SearchUser} style={{border:"none", background:"none"}}><i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
            
            {/* Sender profile user */}

            {uniqueUsers.map(user => (  
  <Link to={'/inbox/' + user.id} className="list-group-item list-group-item-action border-0" key={user.id}>
    <div className="badge bg-success float-right text-white">
      {moment.utc(user.date).local().startOf('seconds').fromNow()}
    </div>
    <div className="d-flex align-items-start">
      <img src={user.profile.image} className="rounded-circle mr-1" alt="User Avatar" width={40} height={40} />
      <div className="flex-grow-1 ml-3">
        {user.profile.full_name}
        <div className="small">
          <span className="fas fa-circle chat-online" /> {user.lastMessage.slice(0, 10) + '.....'}
        </div>
      </div>
    </div>
   
  </Link>

  
))}

  <div className="d-flex align-items-center justify-content-center mt-3">

  <Link
    to={'/inbox/'}
    ><button className="mt-2 pl-3"style={{border:"none", background:"green", color:"white"}}>Back to Inbox</button></Link>

  </div>


            <hr className="d-block d-lg-none mt-1 mb-0" />
          </div>
          <div className="col-12 col-lg-7 col-xl-9">
            <div className="py-2 px-4 border-bottom d-none d-lg-block">
            {uniqueUsers.map(user => (
              <div className="d-flex align-items-center py-1">
                <div className="position-relative">
                <img src={user.profile.image} className="rounded-circle mr-1" alt="User Avatar" width={40} height={40} />

                </div>
                <div className="flex-grow-1 pl-3">
                  <strong>{user.profile.full_name}</strong>
                  <div className="text-muted small">
                    <em>Online</em>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary btn-lg mr-1 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-phone feather-lg"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </button>
                  <button className="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-video feather-lg"
                    >
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
                    </svg>
                  </button>
                  <button className="btn btn-light border btn-lg px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-more-horizontal feather-lg"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                      <circle cx={5} cy={12} r={1} />
                    </svg>
                  </button>
                </div>
              </div>
              ))}
            </div>

            <div className="position-relative">
  <div className="chat-messages d-flex flex-column-reverse p-4" style={{ overflowY: 'auto', height: '400px' }}>
    {messages.map((m, index) => (
      m.sender === user_id ? (
        <div key={index} className="d-flex justify-content-start align-items-start mb-4">
          {/* Sender message: image and time on the left */}
          <div className="d-flex flex-column align-items-start">
            <img src={m.sender_profile.image} className="rounded-circle mb-1" alt="Sender" width={40} height={40} />
            <div className="text-muted small text-nowrap mt-1">
              {moment(m.date).format('hh:mm A')}
            </div>
          </div>
          <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
            <div className="font-weight-bold mb-1">{m.sender_profile.full_name}</div>
            {m.message}
          </div>
        </div>
      ) : (
        <div key={index} className="d-flex justify-content-end align-items-start mb-4">
          {/* Your message: image and time on the right */}
          <div className="order-2 d-flex flex-column align-items-end">
            <img src={m.sender_profile.image} className="rounded-circle mb-1" alt="You" width={40} height={40} />
            <div className="text-muted small text-nowrap mt-1">
              {moment(m.date).format('hh:mm A')}
            </div>
          </div>
          <div className="order-1 flex-shrink-1 bg-primary text-white rounded py-2 px-3 mr-3 text-end">
            <div className="font-weight-bold mb-1">{m.sender_profile.full_name}</div>
            {m.message}
          </div>
        </div>
      )
    ))} 
  </div>
</div>

            <div className="flex-grow-0 py-3 px-4 border-top">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message"
                  name="message"
                  value={NewMessage.message}
                  onChange={handelChange}
                  id="text-input"
                />
                <button onClick={sendMessage} className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</main>
    </div>
    )
}
 
export default MessagesDetails;
