import React from 'react';
import "../styles/style.css"
function Input  ({ label, value,name, onChange, type,placeholder }) {
  return (
    <div className='input-group '>
  <label className='mt-3' >{label}</label>
        <input className='input '
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e)=>onChange(e)}
        
          required
        />
      
  
    </div>
  );
};

export default Input;