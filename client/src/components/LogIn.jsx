import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const navigate = useNavigate()

    return (
        <div className='login-container'>
        <h3>Connect to your account :</h3>
        <br/>
            <input type="email" placeholder='Your E-mail...' onChange={(e)=>setEmailLog(e.target.value)}></input>
            <br/>
            <input type="password" placeholder='Your Password...' onChange={(e)=>setPasswordLog(e.target.value)}></input>
            <br/>
            <button id='login-button' type='submit'onClick={()=>{
                props.connect(emailLog,passwordLog);
                navigate("/MainPage");
                }} > Login </button>
            {/* <Link to='/MainPage' >Login</Link> */}
        </div>
    );
}

export default Login;
