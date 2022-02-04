import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Editprofile = (props) => {
console.log(props.data );
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [password, setPassword] = useState("");

   function Edit () {
        axios.put('/api/updateAccunt', {
            firstname:firstName,
            lastname:lastName,
            email:email,
            phonenumber:phoneNum,
            password:password,
            id:props.data 
        })
        .then((result)=>{
            console.log(result);
        }).catch((err)=>{console.log(err)})
    };
    const navigate = useNavigate()
    return (
        <div className='Registration'>
            <h3>Create a New Account :</h3>
            <label>Frist Name</label>
            <input type="text" onChange={(e)=>setFirstName(e.target.value)}></input>
            <label>Last Name</label>
            <input type="text" onChange={(e)=>setLastName(e.target.value)}></input>
            <label>Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Phone Number</label>
            <input type="number" onChange={(e)=>setPhoneNum(e.target.value)}></input>
            <label>Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit' onClick={()=>{
                Edit();
                navigate("/account")}}
                > done </button>
           
        </div>
    );
}

export default Editprofile;