import React,{useState,useEffect} from "react";
import Nav from "./Nav.jsx";
import Postes from "./Postes.jsx";
import axios from "axios";
import 'regenerator-runtime/runtime';
const MainPage=(props)=> {
  const [posts,setPosts] = useState([]);
  // const [like, setLike] = useState(0); onClick={setLike(like+1)}
  // const [comment, setComment] = useState(''); 
  // const [commentId, setCommentId] = useState(0);
  // // const [share, setShare] = useState();
  // const [status, setStatus] = useState(false);

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
  

  // const handleComment = () =>{
  //   // axios.post("/commits", {
  //   //   des:comment,
  //   //   user_id:props.userId,
  //   //   post_id:commentId
  //   // })
  //   console.log(comment,"user",props.userId,"comid",commentId);
  // }

return (
    <div>
        <Nav />
        <h1>postes</h1>
        {posts.map((element, i)=>{return <Postes data={element} key={i} userid={props.userId} /> })}   
    </div>
);  
}
  
  export default MainPage;