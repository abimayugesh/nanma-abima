import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiEyeClosedBold, PiEyeClosedFill } from "react-icons/pi";
import "./styles/loginstyle.css"
import { Link } from "react-router-dom";
import Validation from "../../utilis/validators/validator";
function Login() {
  const[errors,setErrors]=useState([])
  const [input,setInput]=useState({username:"", password:""});
  const [ showPassword, setShowPassword] = useState(false);
    const handleShowPassword =()=>{
    setShowPassword(!showPassword);
    };

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
    <div className="bg-black">
    <div className="container">
    <div className ="section">
    <div className="relative">
      <IoCloseCircleOutline className="align-end absolute right-2 mr-4 text-3xl cursor-pointer mt-2" />
      </div>
      <h1 className="heading">Welcome back!</h1>
        <div className="para-1">Where Every Bite Tells a Story, and Every<br/> Moment Feels Like Home!</div>
        
    <form className="form"  onSubmit={handleValidation}>
      <Input  
      type="text"
      name="username"
      value={input.username} 
      label="EmailID/Mobile Number"
      onChange={handleOnchange}
      placeholder="Mobile number"
       required />
      {errors.email && <p className="text-red-500 text-[13px]">{errors.email}</p>}
       <div className="relative mt-0">
      <Input 
      type={showPassword ? "text" :"password"}
      name="password"
      value={input.password} 
      label="Password"
      placeholder="****"
      onChange={handleOnchange}
      required />
      {errors.password && <p className="text-red-500 text-[14px] text-center  ">{errors.password}</p>}
    { showPassword ? 
   <PiEyeClosedBold onClick={handleShowPassword} className="absolute h-4  w-10 top-14 md:top-15  lg:top-12 inset-y-0 right-1 pr-3 flex items-center cursor-pointer" />
 :<PiEyeClosedFill onClick={handleShowPassword} className="absolute h-5 w-10 top-14 md:top-15  lg:top-12 inset-y-0 right-1 pr-3 flex items-center cursor-pointer" />}
              
    <p className=" text-right  text-xs text-zinc-400">Forgot Password ?</p>
        </div>
        
        

        
        <div>
      <Button
        text="Login"
        onClick={handleButtonClick} />
     </div>
     
     <div  className="link ">
     <h1 className="text-[15px]">Don't have an account?</h1>
     <Link className="link-colour" to="/signup">Sign up</Link>
     </div>
    
      
    </form>
    </div>
    </div>
    </div>
  );
}

export default Login;