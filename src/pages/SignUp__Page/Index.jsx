import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiEyeClosedBold, PiEyeClosedFill } from "react-icons/pi";
import "./styles/signupstyle.css"
import { Link,useNavigate } from "react-router-dom";
import Validation from "../../utilis/validators/validator";
import usePost from "../../api/hooks/usePost";

function SignUp() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const {
    loading,
    error: apiErrors,
    postData,
  } = usePost({
    url: "https://portal.umall.in/api/customer/register",
    successCB: signUpSuccess
  });



  const[errors,setErrors]=useState({})
    const [ showPassword, setShowPassword] = useState(false);
    const handleShowPassword =()=>{
    setShowPassword(!showPassword);
    };
   
    const navigate=useNavigate()

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  

  const handleValidation = async (event) => {
    event.preventDefault()
    setErrors(Validation(input))
      await postData({
        body: {
          name: input.name, email: input.email, password: input.password, phone: input.phone
        },
      });
  }

  function signUpSuccess({ data = {} }) {
    const userId = data?.user?.id;
    if (userId) {
        console.log(userId, 'from signup form');
        navigate('/');
    } else {
        console.error('User ID not found in response data');
    }  
  }



 return (
    <div className="bg-black mih-h-screen">
      <div className="container-1">
        <div className="section-1">
          <div className="relative">
            <IoCloseCircleOutline className="align-end absolute right-2 mr-4 text-3xl cursor-pointer mt-2" />
          </div>
          <h1 className="heading-1">Sign Up</h1>
          <div>
           <form className="form-1" onSubmit={handleValidation}>
            <Input
              type="text"
              name="name"
              value={input.name}
              label="Name"
              onChange={handleOnchange}
              placeholder="Your Name"
              id={"nam"}
              
            />{errors.name && <p className="text-red-500 text-[14px]">{errors.name}</p>}
            <Input
              type="email"
              name="email"
              value={input.email}
              label="Email"
              onChange={handleOnchange}
              placeholder="Your Email"
              id={"ema"}
              
            />{errors.email && <p className="text-red-500 text-[13px]">{errors.email}</p>}
            <Input
              type="number"
              name="phone"
              value={input.phone}
              label="Mobile Number"
              onChange={handleOnchange}
              placeholder="Your Mobile Number"
              id={"pho"}
              
            />{errors.phone && <p className="text-red-500 text-[14px] text-center">{errors.phone}</p>}
            <div className="relative">
              <Input
                type={showPassword ? "text" :"password"}
                name="password"
                value={input.password}
                label="Password"
                placeholder="****"
                onChange={handleOnchange}
                autocomplete="on"
                id={"pass"}
                
              />{errors.password && <p className="text-red-500 text-[14px] text-center  ">{errors.password}</p>}
              
              { showPassword ? 
              <PiEyeClosedBold onClick={handleShowPassword} className="absolute h-4  w-10 top-14 md:top-15  lg:top-12 inset-y-0 right-1 pr-3 flex items-center cursor-pointer" />
             :  <PiEyeClosedFill onClick={handleShowPassword} className="absolute h-5 w-10 top-14 md:top-15  lg:top-12 inset-y-0 right-1 pr-3 flex items-center cursor-pointer" />}
              
            </div>
            <Input
              type="password"
              name="confirmPassword"
              value={input.confirmPassword}
              label="Confirm Password"
              placeholder="****"
              onChange={handleOnchange}
              autocomplete="on"
              id={"cpass"}
              
            />{errors.confirmPassword && <p className="text-red-500  text-center text-[13px]">{errors.confirmPassword}</p>}
           
           
           
     <div className="signup-button">
        <Button  text="Register"  />
        </div>

        <h1 className=" p-2 mb-20px">Already have an account? <Link className="link-colour" to="/">Log in</Link></h1>
        
          </form>
          </div>
        </div>
      </div>
    </div>
  );
  


}

export default SignUp;