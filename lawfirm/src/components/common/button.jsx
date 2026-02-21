import React from 'react';
import './button.css';

const Button = (props) => {
    return ( <>
    <a href={props.link}>
        <button className={props.style1}>
        {props.cta}
    </button>
    </a>
    </> );
}

export default Button;