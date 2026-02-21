import React from 'react';
import './secheading.css'
import Heading from '../common/heading';
import Body from '../common/bodytxt';
import Button from '../common/button';


const Head = (props) => {
    return ( <>
    <div className="secHeading">
                    <Heading title={props.title} />
                    <div>
                        <Body text={props.text} />
                        <Button style1="secondary" cta={props.cta} />
                    </div>
         </div>
    </> );
}
 
export default Head;