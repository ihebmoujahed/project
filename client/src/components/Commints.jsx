import React,{useState,useEffect} from 'react';
import axios from "axios";
const commints=(props)=> {
    const [comitofposts,setcomitofposts]=useState([]); 
    useEffect(()=>{
        console.log('yoyoy',props.id)
        axios.post('/api/get/commit', {id:props.id})
        .then((result)=>{
            console.log(result)
            setcomitofposts(result.data)
        })
        .catch((error)=>{console.log(error)})
    },[])
    
  return (
  <div>
      {()=>{props.ref('do it')}}
    {comitofposts.map((element, i)=>{return  (<p>{element.des}</p>) })}  
  </div>
  );
}
export default commints;