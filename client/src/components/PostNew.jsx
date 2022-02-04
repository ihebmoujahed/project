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
    <div>
        <label>Title</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)}></input>
        <label>URL</label>
        <input type='url' onChange={(e)=>setUrl(e.target.value)}></input>
        <button type='submit' onClick={()=>{posting;navigate("/MainPage");}}>Post</button>
    </div>
  )     
}

export default PostNew;
