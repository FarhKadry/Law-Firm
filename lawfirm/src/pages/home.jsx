import React from 'react';
import './home.css';

import heroimg from '../assets/heroimg2.png';
import cardicon1 from '../assets/cardicon01.svg';
import cardicon2 from '../assets/cardicon02.svg';
import cardicon3 from '../assets/cardicon03.svg';
import cardicon4 from '../assets/cardicon04.svg';
import abtimg from '../assets/aboutimg.png'

import Navbar from '../components/layout/nav';
import Button from '../components/common/button';
import Card from '../components/common/card';
import Heading from '../components/common/heading';
import Body from '../components/common/bodytxt';
import Question from '../components/common/faq';
import { useState } from 'react';


const Home = () => {


    return ( <>
    <header>
        <Navbar />
         <button>
        </button>
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
                    <Body text="At our firm, we are dedicated to providing exceptional legal services with a commitment to justice and client satisfaction. With a team of experienced attorneys, we offer comprehensive legal solutions tailored to meet the unique needs of each client. Whether you are facing a complex legal challenge or seeking guidance on a legal matter, we are here to advocate for your rights and achieve the best possible outcome." />
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
        <section>
            <div className="secContainer aboutSec">
                <div className="aboutFlex">
                <Heading title="about our firm" />
                <Body text="Founded on the principles of integrity, transparency, and justice, our firm provides comprehensive legal services to individuals and businesses.We believe in clear communication, strategic planning, and aggressive advocacy when necessary. From consultation to resolution, we stand beside our clients every step of the way. Whether negotiating settlements or litigating in court, we are dedicated to protecting your rights and securing favorable outcomes." />   
            <Button style1="secondary" cta="Learn More" />
            </div>
            <img src={abtimg} alt="" />
            </div>
        </section>
        <section className='faqSec'>
            <div className="secContainer faq">
                <div className="faqHeading">
                    <Heading title="Frequently asked questIons" />
                    <div>
                        <Body text="We believe in clear communication, strategic planning, and aggressive advocacy when necessary. From consultation to resolution, we stand beside our clients every step of the way." />
                        <Button style1="secondary" cta="find us" />
                    </div>
                </div>
            </div>
            <div className="faqCardFlex">
                    <Question number="I" question="Where is your firm located?" answer="Our office is centrally located and available for in-person consultations by appointment. We also offer virtual consultations for your convenience." />
                    <Question number="II" question="How do I schedule a consultation?" answer="Our office is centrally located and available for in-person consultations by appointment. We also offer virtual consultations for your convenience." />
                    <Question number="IIV" question="What should I bring to my first meeting?" answer="Our office is centrally located and available for in-person consultations by appointment. We also offer virtual consultations for your convenience." />
                </div>
        </section>
    </main>
    </> );
}
 
export default Home;