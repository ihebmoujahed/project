import React,{useState,useEffect} from "react";
import Nav from "./Nav.jsx";

// import axios from "axios";

const MainPage=(props)=> {
//   const [posts,setPosts] =useState([])
//   useEffect(()=>{
//    axios.get("api/get/post")
//    .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
//   })
return (
    <div>
        <Nav/>
        <h1>postes</h1>
    </div>
);  
}
  
  export default MainPage;