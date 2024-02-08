import React from 'react';
import "../styles/style.css"
function Input  ({ label, value,name, onChange, type,placeholder,id }) {
  return (
    <div className='input-group '>
  <label className='mt-1 flex items-center' >{label}</label>
        <input className='input '
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e)=>onChange(e)}
          autoComplete='off'
          id={id}
         />
      
  
    </div>
  );
};

export default Input;