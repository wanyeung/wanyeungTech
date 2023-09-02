import {React, useEffect } from 'react';
import './DevAI.scss';
import DevAIIcons from './DevAIIcons'; 
import DevAIText from './DevAIText';

function DevAI() {
      
      return (
        <div className="DevAI" id='DevAI'>
            <div className="container">
                <DevAIIcons/>
                <DevAIText />
            </div>
        </div>
    );
}

export default DevAI;
