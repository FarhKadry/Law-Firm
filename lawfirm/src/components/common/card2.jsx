import React from 'react';
import './card2.css'

const Card2 = (props) => {
    return ( <>
    <div className="card2flex">
        <img src={props.img} alt='att' />
        <h5>{props.name}</h5>
        <h6>{props.title}</h6>
    </div>
    
    </> );
}
 
export default Card2;