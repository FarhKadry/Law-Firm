import React from 'react';
import './home.css';

import heroimg from '../assets/heroimg2.png';
import cardicon1 from '../assets/cardicon01.svg';
import cardicon2 from '../assets/cardicon02.svg';
import cardicon3 from '../assets/cardicon03.svg';
import cardicon4 from '../assets/cardicon04.svg';
import abtimg from '../assets/aboutimg.png'
import att1 from '../assets/att01.jpg'
import att2 from '../assets/att02.jpg'
import att3 from '../assets/att03.jpg'
import att4 from '../assets/att04.jpg'
import att5 from '../assets/att05.jpg'
import contact from '../assets/contact.jpg'


import Navbar from '../components/layout/nav';
import Button from '../components/common/button';
import Card from '../components/common/card';
import Heading from '../components/common/heading';
import Body from '../components/common/bodytxt';
import Question from '../components/common/faq';
import Theme from '../components/common/theme';
import Head from '../components/layout/secheading';
import Card2 from '../components/common/card2';
import Input from '../components/common/input';
import Item2 from '../components/common/footeritem';


const Home = () => {


    return ( <>
    <header>
        <Navbar />
        <Theme />
    </header>
    <main>
        <section className='heroSec'>
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
        {/* 4 */}
        <section className='faqSec'>
            <div className=" faq">
                <div>
                <Head  title="Frequently asked questIons" text="We believe in clear communication, strategic planning, and aggressive advocacy when necessary. From consultation to resolution, we stand beside our clients every step of the way." cta="find us"/>
                </div>
            </div>
            <div className="faqCardFlex">
                    <Question number="I" question="Where is your firm located?" answer="Our office is centrally located and available for in-person consultations by appointment. We also offer virtual consultations for your convenience." />
                    <Question number="II" question="How do I schedule a consultation?" answer="Our office is centrally located and available for in-person consultations by appointment. We also offer virtual consultations for your convenience." />
                    <Question number="IIV" question="What should I bring to my first meeting?" answer="Our office is centrally located and available for in-person consultations by appointment. We also offer virtual consultations for your convenience." />
            </div>
        </section>
        {/* 5 */}
        <section className='faqSec'>
                <Head  title="Meet our Top rated ATTORNEYS" text="Our legal team is composed of seasoned litigators and advisors who bring decades of courtroom experience and negotiation expertise to every case.We are committed to protecting your interests, upholding justice, and delivering practical legal solutions tailored to your unique situation." cta="View All Attorneys"/>
            
        <div className="wrapper">
            <div className="attFlex">
                <Card2 img={att3} name="Ben Uric" title="Criminal Law"/>
                <Card2 img={att5} name="Nadeem Hamada" title="State Law"/>
                <Card2 img={att2} name="Karen Paige" title="Family Law"/>
                <Card2 img={att1} name="Foggy Nelson " title="State Law"/>
                <Card2 img={att4} name="Matt Murdock" title="Criminal Law"/>
            </div>
        </div>
        </section>
        {/* 6 */}
        <section>
            <div className="secContainer">
                <div className='contact' >
                    <h1><span>Our team is ready to assist you.</span></h1>
                    <div className="contactFlex">
                        <img src={contact} alt="" />
                        <h3>Reach out to us</h3>
                        <div class="form1">
                            <Input type="name" placeholder="Name" state="inactive first" />
                            <Input type="email" placeholder="Email" state="inactive first" />
                </div>
                            <Input class="form2" type="text" placeholder="Message" state="active first" />
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
    <div className="col1">
        <Heading title="BIU & CO"/>
            <Body text="We believe in clear communication, strategic planning, and aggressive advocacy when necessary. From consultation to resolution, we stand beside our clients every step of the way." />        
    </div>
    <div className="col2">
        <h3>Follow us</h3>
        <ul>
            <Item2 name="Twitter"  link="#"/>
            <Item2 name="Facebook"  link="#"/>
            <Item2 name="Instagram"  link="#"/>
            <Item2 name="LinkedIn"  link="#"/>

        </ul>
    </div>
</footer>
    </> );
}
 
export default Home;