import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import "./styles/style.css"
function Login() {
  
  const [input,setInput]=useState({username:"", password:""});

  const handleOnchange=(e)=>{
    const{name,value}=e.target;
    setInput({...input,[name]:value})
  };
  const handleButtonClick = () => {
    console.log('Button clicked!');
  
  };

  return (

    <div className="container">
    <div className ="section">
       <h1 className="heading">Welcome back!</h1>
        <h6 className="para-1">Where Every Bite Tells a Story, and Every<br/> Moment Feels Like Home!</h6>
      
    <form className="form">
      <Input 
      type="text"
      name="username"
      value={input.username} 
      label="EmailID/Mobile Number"
      onChange={handleOnchange}
      placeholder="Mobile number"
       required />
      <Input 
      type="password"
      name="password"
      value={input.password} 
      label="Password"
      placeholder="****"
      onChange={handleOnchange}
       required />
      
      <Button
        text="Login"
        onClick={handleButtonClick} />
    
      
    </form>
    </div>
    </div>
  );
}

export default Login;
