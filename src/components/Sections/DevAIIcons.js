import React from 'react';
import Icon1 from 'teenyicons/solid/more-horizontal.svg';
import Icon2 from 'teenyicons/solid/minus.svg';
import Icon3 from 'teenyicons/solid/x.svg';
import Scene from './Scene'; 

function DevAIIcons() {
    
    return (
        <div className="left-div">
            <div className="icon-div">
                <div className="left-icon">
                    <img src={Icon1} alt="More Horizontal Icon" />
                </div>
                <div className="right-icons-container">
                    <div className="right-icons"><img src={Icon2} alt="Minus Icon" /></div>
                    <div className="right-icons"><img src={Icon3} alt="X Icon" /></div>
                </div>
            </div>

            <div className="scene-container">
                <Scene />
            </div>
        </div>
    );
}

export default DevAIIcons;
