import React from 'react';
import './heading.css';

const Heading = (props) => {
    return ( <h2>
        {props.title}
    </h2> );
}
 
export default Heading;