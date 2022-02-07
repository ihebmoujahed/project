import React,{useState,useEffect} from "react";
import Commints from "./Commints.jsx";
import axios from "axios";
const Postes=(props)=> {
    const [like, setLike] = useState(0); 
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
    
    const handleShare = (title,url,id) =>{
      axios.post('/api/post', {
        title:title,
        image:url,
        userid:id
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{console.log(error)})
  }
  const handleLike = (id,postid) =>{
    axios.post('/api/likes', {
      postid:postid,
      userid:id
  })
  .then((result)=>{
      console.log(result)
  })
  .catch((error)=>{console.log(error)})
}

  return (
      <div style={{textAlign: 'center'}}  className="home">
        <div className="post-container" id={props.data.id}>
          <p>{props.data.title}</p>
          <img src={props.data.image} className="image" width="300" height="300"/>
          <button className="like-btn" onClick={()=>{handleLike(props.userid,props.data.id)}}>Like</button>
          <button className="comment-btn"  onClick={()=>{setStatus(true);setCommentId(props.data.id)} }>Comment</button>
          <button className="share-btn" onClick={()=>{handleShare(props.data.title,props.data.image,props.userid)} }>Share</button>
          {status?
            <div className="comments">
             <textarea name="comments" 
                onChange={(e)=> setComment(e.target.value)}>
              </textarea> 
              <input type="submit" value="submit"onClick={()=>{handleComment();setStatus(false);}}/>
            </div>
            :null
          }
          <Commints id={props.data.id}  />
        </div>
      </div>
  );  
  }
    
    export default Postes;