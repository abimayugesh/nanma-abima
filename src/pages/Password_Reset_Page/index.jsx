import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./styles/password-resetstyle.css"
import usePost from "../../api/hooks/usePost";
import ResetpassValidation from "../../utilis/validators/resetpassValidation";
import { useNavigate } from "react-router-dom";

function PasswordReset() {
  const[errors,setErrors]=useState([])

  
  const [input,setInput]=useState({
    phone:"", 
    otp:"",
  password:"",
  confirmPassword:""});
  const navigate =useNavigate()
  const {
    loading,
    postData:getOtp,
    resetCode,
  } = usePost({
    url: 'https://portal.umall.in/api/check-mobile',
    
  });
  const {
    loading:resetLoading,
    postData: resetPassword,
  } = usePost({
    url: 'https://portal.umall.in/api/reset-password',
    
  });

  const handleOnchange=(e)=>{
    const{name,value}=e.target;
    setInput({...input,[name]:value})
  };

  const handleGetOTP = async (event) => {
    event.preventDefault();
    await getOtp({
      body: { number: input.phone },
    });
  };

  

  const handleResetPassword = async (event) => {
    event.preventDefault()
    const resetpassErrors = ResetpassValidation(input);
    if(Object.keys(resetpassErrors).length === 0 && input.otp == resetCode ) {
      await  resetPassword({
        body: {
          number: input.phone, password: input.password
        },
      }); 
      navigate('/');  
    } 
    else {
        setErrors(resetpassErrors);
        console.log(resetpassErrors);
      }
     }
      

  

return (
  <div className="resetpass-container">
    <div className ="resetpass-section">
    <div className="relative">
      <IoCloseCircleOutline className="align-end absolute right-2 mr-4 text-3xl cursor-pointer mt-2" />
      </div>
      <h1 className="resetpass-heading">Welcome back!</h1>
        <div className="resetpass-para">Where Every Bite Tells a Story, and Every<br/> Moment Feels Like Home!</div>
        
    <form className="form"  onSubmit={handleResetPassword}>
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
        onClick={handleGetOTP} />
     
     </div>
      <div className="mt-3">
      <Input  
      type="text"
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
       name="confirmPassword"
      value={input.confirmPassword}
      placeholder="****"
     onChange={handleOnchange}/>
     {errors.confirmPassword && <p className="text-red-500  text-center text-[13px]">{errors.confirmPassword}</p>}       
     </div>
    <div className="resetbutton mt-6">
      <Button
        text="Reset Password"
        />
     </div>
      </form>
    </div>
    </div>
    
  );
}

export default PasswordReset;