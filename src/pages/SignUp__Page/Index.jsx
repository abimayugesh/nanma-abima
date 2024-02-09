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
    if(Object.keys(errors).length === 0){
      await postData({
        body: {
          name: input.name, email: input.email, password: input.password, phone: input.phone
        },
      });
  }
  }
  function signUpSuccess({ data = {} }) {
    const userId = data?.user?.id;
    if (userId) {
        console.log(userId, 'from signup form');
        navigate('/');
    } else {
        console.error('User id is not found in response');
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
        <Button  text="Register" disabled={loading}  />
        </div>

        <h1 className=" p-2 mb-20px">Already have an account? <Link className="link-colour" to="/">Log in</Link></h1>
        
          </form>
          { loading ? <div class="text-center">
           <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div> : ""} 
          </div>
        </div>
      </div>
     
    </div>
  );
  


}

export default SignUp;