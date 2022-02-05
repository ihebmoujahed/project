import React,{useState,useEffect} from "react";
import Nav from "./Nav.jsx";
import Postes from "./Postes.jsx";
import axios from "axios";
import 'regenerator-runtime/runtime';
const MainPage=(props)=> {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    axios.get("/api/get/post")
    .then(async(res)=>{
      var awai = await res.data
      setPosts(awai)
      console.log(awai, "hello")
    })
     .catch((err)=>
     console.log(err))
  },[])
  
return (
    <div>
        <Nav />
        <h1>postes</h1>
        {posts.map((element, i)=>{return <Postes data={element} key={i} userid={props.userId} /> })}   
    </div>
);  
}
  
  export default MainPage;