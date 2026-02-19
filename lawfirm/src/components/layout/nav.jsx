import React from 'react';
import './nav.css';
import HeadItem from '../common/headeritem';

const Navbar = () => {
    return ( <>
    <nav>
        <HeadItem path="/home" name="Home" />
        <HeadItem path="/about" name="About Us" />
        <HeadItem path="/services" name="Services" />
        <HeadItem path="/contact" name="Contact Us" />
    </nav>
    </> );
}
 
export default Navbar;