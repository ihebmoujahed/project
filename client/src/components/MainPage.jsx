import React,{useState,useEffect} from "react";
import Nav from "./Nav.jsx";
import axios from "axios";

const MainPage=(props)=> {
    

  const [posts,setPosts] = useState([]);
  const [like, setLike] = useState();
  const [comment, setComment] = useState('');
  const [share, setShare] = useState();

   useEffect(()=>{
   axios.get("api/get/post")
   .then((res)=>{
     setPosts(res.data);
     console.log(res)
   })
    .catch((err)=>
    console.log(err))
  })

return (
    <div>
        <Nav />
        <h1>postes</h1>
        {posts.map((elem,i)=>{
          return (
            <div className="post-container" id={i}>
            <div className="image">
            {elem}
            </div>
              <button className="like-btn">Like</button>
              <button className="comment-btn">Comment</button>
              <button className="share-btn">Share</button>
            </div>
          )
        })}
    </div>
);  
}
  
  export default MainPage;