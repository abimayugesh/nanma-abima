import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiEyeClosedThin } from "react-icons/pi";
import "./styles/signupstyle.css"
import { Link } from "react-router-dom";

function SignUp() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleButtonClick = () => {
    console.log("Button clicked!", input);
    
  };
 return (
    <div className="bg-black">
      <div className="container-1">
        <div className="section-1">
          <div className="relative">
            <IoCloseCircleOutline className="align-end absolute right-2 mr-4 text-3xl cursor-pointer mt-2" />
          </div>
          <h1 className="heading-1">Sign Up</h1>
          <div>
           <form className="form-1">
            <Input
              type="text"
              name="name"
              value={input.name}
              label="Name"
              onChange={handleOnchange}
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="email"
              value={input.email}
              label="Email"
              onChange={handleOnchange}
              placeholder="Your Email"
              required
            />
            <Input
              type="text"
              name="number"
              value={input.number}
              label="Mobile Number"
              onChange={handleOnchange}
              placeholder="Your Mobile Number"
              required
            />
            <div className="relative">
              <Input
                type="password"
                name="password"
                value={input.password}
                label="Password"
                placeholder="****"
                onChange={handleOnchange}
                required
              />
              <PiEyeClosedThin className="absolute h-5 w-10 top-12 md:top-15  lg:top-13 inset-y-0 right-1 pr-3 flex items-center cursor-pointer" />
            </div>
            <Input
              type="password"
              name="confirmPassword"
              value={input.confirmPassword}
              label="Confirm Password"
              placeholder="****"
              onChange={handleOnchange}
              required
            />
        <Button text="Register" onClick={handleButtonClick} />
        <h1 className=" p-2 mb-20px">Already have an account? <Link className="link-colour" to="/">Log in</Link></h1>
          
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;