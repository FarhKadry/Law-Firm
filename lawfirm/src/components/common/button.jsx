import React from 'react';
import './button.css';

const Button = (props) => {
    return ( <>
    <button className={props.style1}>
        {props.cta}
    </button>
    </> );
}
 
export default Button;