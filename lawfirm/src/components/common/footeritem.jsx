import React from 'react';
import './footeritem.css'
import arrow from '../../assets/arrow1.svg'

const Item2 = (props) => {
    return ( 
        <>
        <li>
            <img src={arrow} alt="" />
                <a href={props.link}>
                {props.name}
                </a>
            </li>
        </>
     );
}
 
export default Item2;