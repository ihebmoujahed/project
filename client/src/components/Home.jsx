import React from 'react';
import { Link } from 'react-router-dom';
const Home = ()=>{
 return(
   <div className='container-home'>
     <div className='home-list-container'>
     <Link to='/register'>
     <li id='register'>REGISTER</li>
     </Link>
     </div>
     <div className='home-list-container'>
     <Link to='/LogIn'>
       <li id='login'>LOGIN</li>
     </Link>
     </div>

      
   </div>
 )
}
export default Home;



