import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");

  const signing = () => {
    axios
      .post("http://localhost:3000/api/register", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phonenumber: phoneNum,
        password: password,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/MainPage";
    navigate(path);
  };

  return (
    <div className="Registration">
      <h3>Create a New Account :</h3>
      <br />
      <label>Frist Name</label>
      <input type="text" onChange={(e) => setFirstName(e.target.value)}></input>
      <label>Last Name</label>
      <input type="text" onChange={(e) => setLastName(e.target.value)}></input>
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      <label>Phone Number</label>
      <input
        type="number"
        onChange={(e) => setPhoneNum(e.target.value)}
      ></input>
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button id="register-btn" type="submit" onClick={()=>{
        signing;
        routeChange
         }}>
        Register
      </button>
    </div>
  );
};

export default Register;