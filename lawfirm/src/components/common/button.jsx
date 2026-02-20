import React from 'react';
import './button.css';

const Button = (props) => {
    return ( <>
    <button className={props.style}>
        {props.cta}
    </button>
    </> );
}
 
export default Button;