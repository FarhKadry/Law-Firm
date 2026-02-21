// import React, { useState } from 'react';
import Body from './bodytxt';
import './faq.css'
import arrow from '../../assets/arrow1.svg'

const Question = (props) => {

    // const [open, setOpen] = useState(false);

    // const toggleAnswer = () => {
    //     setOpen(prev => !prev);
    // };

    return ( <>
    <div className="questFlex">
        <div className="qsNo">
            {props.number}
        </div>
        <div className="qsFlex">
            <div> 
                <h5>
                    {props.question}
                </h5>
                    <button className='btn1' ><img src={arrow} alt="" /></button>
            </div>
            <div className="answer">
                <Body text={props.answer} />
            </div>
        </div>
    </div>
    </> );
}
 
export default Question;