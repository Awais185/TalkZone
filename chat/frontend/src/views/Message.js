import {React,useState,useEffect} from "react";
import './style/Message.css'
import  './style/Message.css'
import useAxios from "../utils/useAxios";
import jwtDecode from "jwt-decode";
import moment from "moment";
import { Link,useHistory } from "react-router-dom/";

function Message() {

    // define base api urls 
  const basedUrl='http://127.0.0.1:8000/api' 
    // create new state

    const [messages,setMessage]=useState([])
        let [NewMessage, setNewMessage] = useState({message:""});
        let [newSearch, setnewSearch] = useState({search:""});
        const history=useHistory()

    const axios=useAxios()

    // get token

    const token=localStorage.getItem("authTokens")
    const decoded=jwtDecode(token)

    const user_id=decoded.user_id

    console.log("User id",user_id)
    useEffect(()=>{
      try{
        axios.get(basedUrl + '/my-messages/' + user_id + '/').then((response)=>{
          console.log(response.data)
          setMessage(response.data)
        })
      }
      catch (error){
        console.log(error)

      }
    },[])

    console.log("Message",messages)

    const heandleSearch=(event)=>{
      setnewSearch({
        ...newSearch,
        [event.target.name]: event.target.value
      })
    }

    console.log(newSearch.username);
    

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

    return (
        <div>
            <main className="content" style={{marginTop:"150px"}}>
        <div className="container p-0">
          <h1 className="h3 mb-3">Messages</h1>
          <div className="card">
            <div className="row g-0">
              <div className="col-12 col-lg-5 col-xl-3 border-right">
                <div className="px-4 d-none d-md-block">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-grow-1">
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

                {messages.map((message) => (
  <Link 
  to={'/inbox/' + (message.sender===user_id ? message.receiver : message.sender)} className="list-group-item list-group-item-action border-0">
    <div className="badge bg-success float-right text-white">
      {moment.utc(message.date).local().startOf('seconds').fromNow()}
    </div>
    <div className="d-flex align-items-start">
      {message.sender.id !== user_id &&
        <img
          src={message.sender_profile.image} className="rounded-circle mr-1" alt="User Avatar" width={40} height={40}/>
      }

      {message.sender.id === user_id &&
        <img src={message.sender_profile.image} className="rounded-circle mr-1" alt="User Avatar" width={40} height={40}
        />
      }
      <div className="flex-grow-1 ml-3">
        {message.sender.id === user_id &&
          (message.sender_profile.full_name)
          }

          {message.sender.id !== user_id &&
          (message.sender_profile.full_name)}
        
        <div className="small">
          <span className="fas fa-circle chat-online" /> {message.message.slice(0, 10) + '.....'}
        </div>
      </div>
    </div>
  </Link>
  
))}


                

                <hr className="d-block d-lg-none mt-1 mb-0" />
              </div>
              <div className="col-12 col-lg-7 col-xl-9">
                <div className="py-2 px-4 border-bottom d-none d-lg-block">
                  <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        className="rounded-circle mr-1"
                        alt="Sharon Lessman"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex-grow-1 pl-3">
                      <strong>Sharon Lessman</strong>
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
                </div>
                <div className="position-relative">
                  <div className="chat-messages p-4">
                    <div className="chat-message-right pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width={40}
                          height={40}
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:33 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:34 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">Sharon Lessman</div>
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                        erat animal commodo.
                      </div>
                    </div>
                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width={40}
                          height={40}
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:35 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        Cum ea graeci tractatos.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:36 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">Sharon Lessman</div>
                        Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                        porttitor magna, vitae commodo lectus mauris et velit. Proin
                        ultricies placerat imperdiet. Morbi varius quam ac venenatis
                        tempus.
                      </div>
                    </div>
                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width={40}
                          height={40}
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:37 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">Sharon Lessman</div>
                        Cras pulvinar, sapien id vehicula aliquet, diam velit
                        elementum orci.
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div className="flex-grow-0 py-3 px-4 border-top">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message"
                    />
                    <button className="btn btn-primary">Send</button>
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

export default Message