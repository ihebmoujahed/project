import React,{useState,useEffect} from "react";

import axios from "axios";
const Postes=(props)=> {
    // const [posts,setPosts] = useState([]);
    // const [like, setLike] = useState(0); onClick={setLike(like+1)}
    const [comment, setComment] = useState(''); 
    const [commentId, setCommentId] = useState(undefined);
    // const [share, setShare] = useState();
    const [status, setStatus] = useState(false);

    const handleComment = () =>{
      axios.post("/api/commits", {
        des:comment,
        userid:props.userid,
        postid:commentId
      })
      console.log(comment,"user",props.userid,"comid",commentId);
    }
    //try the share 
    const handleShare = (title,url,id) =>{
      axios.post('/api/post', {
        title:title,
        image:url,
        userid:id
    })
    .then((result)=>{
        console.log(result)
    });
    }
  
  return (
      <div>
        <div className="post-container" id={props.data.id}>
          <p>{props.data.title}</p>
          <img src={props.data.image} className="image" width="100" height="100"/>
          <button className="like-btn" >Like</button>
          <button className="comment-btn"  onClick={()=>{setStatus(true);setCommentId(props.data.id)} }>Comment</button>
          <button className="share-btn" onClick={()=>{handleShare(props.data.title,props.data.image,props.userid)} }>Share</button>
          {status?
            <div>
             <textarea name="comments" 
                onChange={(e)=> setComment(e.target.value)}>
              </textarea> 
              <input type="submit" value="submit"onClick={()=>{handleComment();setStatus(false);}}/>
            </div>
            :null
          }
        </div>
      </div>
  );  
  }
    
    export default Postes;