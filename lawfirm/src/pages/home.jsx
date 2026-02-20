import React from 'react';
import './home.css';
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
                </div>
            </div>
        </section>
    </main>
    </> );
}
 
export default Home;