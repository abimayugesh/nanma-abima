export default function  LoginValidation(input) {
    const errors = {};
    const phonePattern = /^[0-9\b]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

    if (input.phone === "") {
      errors.phone = "Phone number is required";
    } else if (!phonePattern.test(input.phone)) {
        errors.phone = "Please enter only numbers.";
      } else if (input.phone.length !== 10) {
        errors.phone = "Please enter a valid 10-digit phone number.";
      }
    if (input.password === "") {
      errors.password = "Password required";
    } else if (!passwordRegex.test(input.password)) {
      errors.password = "Atleast 8chars,1digit,1special char,1uppercase";
    }
    
    return errors;
  }
  