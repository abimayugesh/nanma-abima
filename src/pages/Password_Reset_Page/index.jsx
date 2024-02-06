import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./styles/password-resetstyle.css"

import Validation from "../../utilis/validators/validator";
function PasswordReset() {
  const[errors,setErrors]=useState([])
  const [input,setInput]=useState({
    phone:"", 
    otp:"",
  password:"",
  confirmpass:""});


  const handleOnchange=(e)=>{
    const{name,value}=e.target;
    setInput({...input,[name]:value})
  };
  const handleButtonClick = () => {
    console.log('Button clicked!');
  
  };
  
  function handleValidation(e){
    e.preventDefault();
    setErrors(Validation(input));
  }

  return (
  
    <div className="resetpass-container">
    <div className ="resetpass-section">
    <div className="relative">
      <IoCloseCircleOutline className="align-end absolute right-2 mr-4 text-3xl cursor-pointer mt-2" />
      </div>
      <h1 className="resetpass-heading">Welcome back!</h1>
        <div className="resetpass-para">Where Every Bite Tells a Story, and Every<br/> Moment Feels Like Home!</div>
        
    <form className="form"  onSubmit={handleValidation}>
      <div>
      <Input  
      type="number"
      name="phone"
      value={input.phone} 
      onChange={handleOnchange}
      placeholder="Mobile"
       required />
      {errors.phone && <p className="text-red-500 text-center text-[13px]">{errors.phone}</p>}
      </div>
      
      <div className="otpbutton ">
      <Button 
        text="GET OTP"
        onClick={handleButtonClick} />
     
     </div>
      <div className="mt-3">
      <Input  
      type="number"
      name="otp"
      value={input.otp} 
      onChange={handleOnchange}
      placeholder="Enter OTP"
       required />
      {errors.otp && <p className="text-red-500 text-center text-[13px]">{errors.otp}</p>}
      </div>
      <div className="mt-5">
      <Input 
      type="password"
      name="password"
      value={input.password} 
      placeholder="****"
      onChange={handleOnchange}
      required />
      {errors.password && <p className="text-red-500 text-[14px] text-center  ">{errors.password}</p>}
      </div>
      <div className="mt-5">
      <Input
        type="password"
       name="confirmpass"
      value={input.confirmpass}
      placeholder="****"
     onChange={handleOnchange}/>
     {errors.confirmPassword && <p className="text-red-500  text-center text-[13px]">{errors.confirmPassword}</p>}       
     </div>
    <div className="resetbutton mt-6">
      <Button
        text="Reset Password"
        onClick={handleButtonClick} />
     </div>
     
     
      
    </form>
    </div>
    </div>
    
  );
}

export default PasswordReset;