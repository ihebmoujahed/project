import React,{useState,useEffect} from "react";
import Nav from "./Nav.jsx";
import axios from "axios";

const MainPage=(props)=> {
    

  const [posts,setPosts] = useState([]);
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState('');
  const [commentId, setCommentId] = useState(0);
  const [share, setShare] = useState();
  const [status, setStatus] = useState(false);

  // useEffect(()=>{
  //  axios.get("api/get/post")
  //  .then((res)=>{
  //    setPosts(res.data);
  //    console.log(res.data, "hello")
  //  })
  //   .catch((err)=>
  //   console.log(err))
  // })
  

  const handleComment = () =>{
    axios.post("/commits", {
      des:comment,
      user_id:props.userId,
      post_id:commentId
    })
  }


return (
    <div>
        <Nav />
        <h1>postes</h1>
        {posts.map((elem,i)=>{
          {console.log(elem)}

          return (
            <div className="post-container">
            <img src={elem.image} className="image" widh="500" height="600"/>
              <button className="like-btn" onClick={setLike(like+1)}>Like</button>
              <button className="comment-btn" onClick={setStatus(status+true)}>Comment</button>
              {status===true
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
              <button className="share-btn">Share</button>
            </div>
          )
        })}
    </div>
);  
}
  
  export default MainPage;