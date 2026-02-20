import React from 'react';
import './card.css';

const Card = (props) => {
    return ( <>
    <div className="cardFlex">
        <div className="cardTitle">
            <h4>{props.title}</h4>
            <img src={props.img} alt={props.title} />
        </div>
            <p>{props.desc}</p>
    </div>
    
    </> );
}
 
export default Card;