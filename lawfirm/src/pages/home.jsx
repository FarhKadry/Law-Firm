import React from 'react';
import './home.css';

import heroimg from '../assets/heroimg.png';
import cardicon1 from '../assets/cardicon01.svg';
import cardicon2 from '../assets/cardicon02.svg';
import cardicon3 from '../assets/cardicon03.svg';
import cardicon4 from '../assets/cardicon04.svg';

import Navbar from '../components/layout/nav';
import Button from '../components/common/button';
import Card from '../components/common/card';

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
                <Card title="Family Law" desc="Navigating the complexities of family law with compassion and expertise. Our dedicated team provides comprehensive legal support for divorce, child custody, adoption, and more, ensuring your family's best interests are protected." img={cardicon1} />
                <Card title="Criminal Law" desc="Defending your rights with unwavering commitment. Our experienced criminal defense team provides strategic representation for a wide range of cases, ensuring you receive a fair trial and the best possible outcome." img={cardicon2} />
                <Card title="Corporate Law" desc="Guiding your business to success with expert legal counsel. Our corporate law services cover everything from formation and compliance to mergers and acquisitions, helping your company thrive in a complex legal landscape." img={cardicon3} />  
                <Card title="Real Estate Law" desc="Navigating the complexities of real estate law with expertise and precision. Our team provides comprehensive legal support for property transactions, disputes, and regulatory compliance, ensuring your real estate interests are protected." img={cardicon4} />  
            </div>
        </section>
    </main>
    </> );
}
 
export default Home;