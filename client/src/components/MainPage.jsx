import React,{useState,useEffect} from "react";
import Nav from "./Nav.jsx";
import axios from "axios";
import 'regenerator-runtime/runtime';
const MainPage=(props)=> {
  const [posts,setPosts] = React.useState([]);
  // const [like, setLike] = useState(0); onClick={setLike(like+1)}
  // const [comment, setComment] = useState(''); onClick={setStatus(true)}
  // const [commentId, setCommentId] = useState(0);
  // const [share, setShare] = useState();
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
  //   axios.post("/commits", {
  //     des:comment,
  //     user_id:props.userId,
  //     post_id:commentId
  //   })
  // }

return (
    <div>
        <Nav />
        <h1>postes</h1>
        {posts.map((elem,i)=>{
          return (
            <div className="post-container" key={i}>
              <p>{elem.title}</p>
            <img src={elem.image} className="image" width="100" height="100"/>
              <button className="like-btn">Like</button>
              <button className="comment-btn">Comment</button>
              {/* {status===true
              ?
              <textarea 
              name="comments" 
              id={setCommentId(commentId+i)}
              onChange={(e)=> setComment(e.target.value)}>
              </textarea> &&
              <input 
              type="submit" 
              value="submit"
              onClick={handleComment}
              ></input>
              :
              null}
              <button className="share-btn">Share</button> */}
            </div>
          )
        })}
    </div>
);  
}
  
  export default MainPage;