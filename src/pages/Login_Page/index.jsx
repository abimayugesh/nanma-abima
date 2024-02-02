import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiEyeClosedThin } from "react-icons/pi";
import "./styles/loginstyle.css"
import { Link } from "react-router-dom";
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
    <div className="">
    <div className="container">
    <div className ="section">
    <div className="relative">
      <IoCloseCircleOutline className="align-end absolute right-2 mr-4 text-3xl cursor-pointer mt-2" />
      </div>
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
       <div className="relative">
      <Input 
      type="password"
      name="password"
      value={input.password} 
      label="Password"
      placeholder="****"
      onChange={handleOnchange}
      required />
    <PiEyeClosedThin className="absolute h-5 w-7 top-7 lg:top-10 inset-y-0 right-1 pr-3 flex items-center cursor-pointer" />
        </div>
        <div>
      <Button
        text="Login"
        onClick={handleButtonClick} />
     </div>
     <Link className="mt-3 link-colour" to="/forgot-password">Forgot password?</Link>
     <div  className="link">
     <h1 className="md:text-xl lg:text-[15px]">Don't have an account?</h1>
     <Link className="link-colour" to="/signup">Sign up</Link>
     </div>
    
      
    </form>
    </div>
    </div>
    </div>
  );
}

export default Login;
