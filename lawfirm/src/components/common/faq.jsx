import React from 'react';
import Body from './bodytxt';
import './faq.css'
import arrow from '../../assets/arrow1.svg'

const Question = (props) => {
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
                    <span><img src={arrow} alt="" /> </span>
            </div>
            <div className="answer">
                <Body text={props.answer} />
            </div>
        </div>
    </div>
    </> );
}
 
export default Question;