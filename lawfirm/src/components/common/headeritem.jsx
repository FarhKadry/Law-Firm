import React from 'react';
import './headeritem.css';

const HeadItem = (props) => {
    return ( <>
    <li className='item'>
        <a href={props.path}>{props.name}</a>
    </li>
    </> );
}
 
export default HeadItem;