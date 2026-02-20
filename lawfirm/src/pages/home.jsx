import React from 'react';
import './home.css';

import heroimg from '../assets/heroimg.png';

import Navbar from '../components/layout/nav';
import Button from '../components/common/button';

const Home = () => {
    return ( <>
    <header>
        <Navbar />
    </header>
    <main>
        <section>
            <div className="secContainer heroContainer">
                <div className="hero">
                    <h1>Fighting<span> with justice</span> — for justice</h1>
<div className="heroimg"><img src={heroimg} alt="hero" /></div>
                </div>
                <div className="heroText">
                    <h3>Fighting for Justice.  Protecting Your Rights.</h3>
                    <p>At our firm, we combine experience, integrity, and strategic advocacy to deliver strong legal representation for individuals, families, and businesses. Your case deserves dedication, precision, and results.</p>
                    <div className="buttonflex">
                        <Button style1="primary" cta="Contact Us" />
                        <Button style1="secondary" cta="Learn More" />

                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="secContainer cardsContainer"> 
                
            </div>
        </section>
    </main>
    </> );
}
 
export default Home;