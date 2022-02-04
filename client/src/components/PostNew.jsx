import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function PostNew(props) {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    
    const navigate = useNavigate()

    const posting = () => {
        axios.post('/api/post', {
            title:title,
            image:url,
            userid:props.data
        })
        .then((result)=>{
            console.log(result)
        });
    }
console.log(title,url,props.data)
  return (
    <div className='post-new-container'>
        <label className='post-title'>TITLE</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)}></input>
        <label className='post-url'>URL</label>
        <input type='url' onChange={(e)=>setUrl(e.target.value)}></input>
        <button className='post-btn' type='submit' onClick={()=>{posting();navigate("/MainPage")}}>Post</button>
        
    </div>
  )     
}

export default PostNew;
