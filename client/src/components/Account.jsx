import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
const Account = (props) =>{ 
  const [info,setinfo]=useState(props.data)
  const [infopost,setinfopost]=useState([])
  useEffect(() =>{
    axios.post("/api/get/post/id",{id:props.data.id})
    .then((res)=>{setinfopost(res.data)})
    .catch((err)=>{console.log(err)})
   },[])
  const deletepost=(id)=>{
    console.log(id);
    axios.delete("/api/delete/poste/commit",{data:{id:id}})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
    
    axios.delete("/api/delete/poste",{data:{id:id}})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
   
    axios.post("/api/get/post/id",{id:props.data.id})
   .then((res)=>{setinfopost(res.data)})
   .catch((err)=>{console.log(err)})
  }   
  
 //switch to class component && fix the delete

  return(
  <div id="color">
    <div className="account-container">
      <h1 id="name">
      {info.firstName}
      </h1>
      <Link to='/Editprofile'>
      <li id="editprofile">Edit profile</li>
      </Link> 
      <Link to='/MainPage'>
      <li>HomePage</li>
      </Link> 
    </div>
    <div className="info-account-container">
      <h3 className="name1">{infopost.length} posts</h3>
      <h3 className="name1">50 likes</h3>
    </div>
    {
      infopost.map((elem,key)=>{
        return ( 
          <div id={elem.id}>
            <button onClick={()=>{deletepost(elem.id)}}>x</button>
           <div  >
             <p>{elem.title}</p>
             <img src={elem.image} width="100" height="100" />
           </div>
         </div>
        )
      })
    }
  </div>
);}


export default Account;
