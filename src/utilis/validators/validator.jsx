export default function Validation(input) {
  const errors = {};
  const phonePattern = /^[0-9\b]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  const otpPattern = /^[0-9\b]+$/;
  if (input.phone === "") {
    errors.phone = "Phone number is required";
  } else if (!phonePattern.test(input.phone)) {
      errors.phone = "Please enter only numbers.";
    } else if (input.phone.length !== 10) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }
  
 if (input.name === "") {
    errors.name = "Name is required";
  }
  if (input.email === "") {
    errors.email = "Email is required";
  } else if (!emailPattern.test(input.email)) {
    errors.email = "Email did not match";
  }
  if (input.password === "") {
    errors.password = "Password required";
  } else if (!passwordRegex.test(input.password)) {
    errors.password = "Atleast 8chars,1digit,1special char,1uppercase";
  }
  if (input.password !== "undefined" && input.confirmPassword !== "undefined") {
    if (input.password !== input.confirmPassword) {
      errors.confirmPassword = "Passwords don't match.";
    }
  }
  if (input.otp === "") {
    errors.otp = "Enter the otp";
  } 
  else if (!otpPattern.test(input.otp)) {
    errors.phone = "Please enter only numbers.";
  } 
  return errors;
}
