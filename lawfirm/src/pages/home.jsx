import React from 'react';
import './home.css';

import heroimg from '../assets/heroimg.png';

import Navbar from '../components/layout/nav';

const Home = () => {
    return ( <>
    <header>
        <Navbar />
    </header>
    <main>
        <section>
            <div className="secContainer">
                <div className="hero">
                    <h1>Fighting with justice
— for justice</h1>
<img className='heroimg' src={heroimg} alt="hero" />
                </div>
            </div>
        </section>
    </main>
    </> );
}
 
export default Home;