import React, { useState } from 'react';
import './input.css';
import Button from './button';

const Input = (props) => {

  const [value, setValue] = useState('');

  function validateForm() {
    if (value === "") {
      alert("Recheck you values");
      return false;
    }
    return true;
  }

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={props.state} onClick={validateForm}>
              <Button style1="primary" cta="submit"/>
      </button>
    </>
  );
}

export default Input;