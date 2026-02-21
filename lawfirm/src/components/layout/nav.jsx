import React from 'react';
import './nav.css';
import HeadItem from '../common/headeritem';

const Navbar = () => {
    return ( <>
    <nav>
        <HeadItem  name="About Us" link="#about" />
        <HeadItem name="FAQ" link="#FAQ" />
        <HeadItem  name="Attorneys" link="#attorneys" />
        <HeadItem  name="Contact Us" link="#contact" />
    </nav>
    </> );
}
 
export default Navbar;