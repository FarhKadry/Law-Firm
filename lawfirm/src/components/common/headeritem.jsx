import React from 'react';
import './headeritem.css';

const HeadItem = (props) => {
    return ( <>
    <li className='item'>
        <a href={props.link}>{props.name}</a>
    </li>
    </> );
}
 
export default HeadItem;