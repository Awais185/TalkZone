import { React, useState, useEffect } from "react";
import './style/Message.css'
import useAxios from "../utils/useAxios";
import jwtDecode from "jwt-decode";
import { useParams,Link,useHistory } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";

function SearchUser() {
    const basedUrl = 'http://127.0.0.1:8000/api'; 
    let [newSearch, setnewSearch] = useState({search:""});
    let [user,setUser] = useState([]);


    const username = useParams();  // destructured directly
    console.log(username.username);
    const axios = useAxios();
    const history=useHistory()

    useEffect(() => {
        axios.get(basedUrl + /search/ + username.username + '/').then((res)=>{
            setUser(res.data)
            console.log(res.data);
            
        }).catch((error)=>{
            Swal.fire({
                title:"User not exist ",
                icon:"error",
                toast:true,
                timer:2000,
                position:"middle",
            })
            console.log(error);
            
        })


    }, [history,newSearch.username]);


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
              setUser(res.data)
            }
            
          }).catch(error=>{
            alert("User not found");
          })
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <>
   <div>
               <main className="content" style={{marginTop:"150px"}}>
           <div className="container p-0">
             <h1 className="h3 mb-3">Messages</h1>
             <div className="card">
               <div className="row g-0">
                 <div className="col-12 col-lg-5 col-xl-3 border-right">
                   <div className="px-4 d-none d-md-block">
                     <div className="d-flex align-items-center">
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

                    {user.map((user, index)=>
                   <Link
                   to={'/inbox/'+user.id}
                   className="list-group-item list-group-item-action border-0" href="#!" >
                    <small> <div className="d-flex align-items-centet"></div></small>
                    
                    <div className="d-flex align-items-center">
                    <img src={user.image} className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                    <div className="flex-grow-1 ml-3">
                      {user.full_name}
                      
                   <div className="small">
                    <small><i className="fas fa-envelope">Send Message</i></small>
                    </div>
                    </div>
                    </div>
                    </Link>
                      )}
                   {/* Sender profile user */}
   
                  
     
   
   
   
                   
   
                   <hr className="d-block d-lg-none mt-1 mb-0" />
                 </div>
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
               </div>
             </div>
           </div>
   </main>
           </div>
    </>
  );
}

export default SearchUser;