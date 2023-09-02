import React, { useState, useEffect } from 'react';
import './GifWithTooltip.scss';

function GifWithTooltip() {
    const myGif = require("../assets/quq_m09.gif");
    const myGif2 = require("../assets/move.gif");
    const myGifClick = require("../assets/shock.gif");

    const [gifSrc, setGifSrc] = useState(myGif);
    const [tooltipText, setTooltipText] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState('left');
    const [autoShowTooltip, setAutoShowTooltip] = useState(true);

    const greetings = ["Hello!!", "I am waiting here for Wan to dev", "Howdy!", ":D!", "Scroll Down for More!"];
    const isMobile = window.innerWidth <= 768;
    const autoShowInterval = 2500; // Auto-show interval in milliseconds

    const autoShowTooltipFunction = () => {
        if (isMobile === true) {
            let randomIndex = Math.floor(Math.random() * greetings.length);
            setTooltipText(greetings[randomIndex]);
            setGifSrc(myGif2);

            setTimeout(() => {
                setTooltipText(''); // Reset tooltip text after showing one message
                setTimeout(() => {
                    setAutoShowTooltip(true); // Enable auto-showing tooltips again after waiting
                    setGifSrc(myGif);
                }, autoShowInterval);
            }, autoShowInterval);
        }
        else {
            setAutoShowTooltip(false);
        }
    };
    
    const handleMouseOver = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * greetings.length);
        } while (tooltipText === greetings[randomIndex]); // Ensure new greeting is different from the current one

        setTooltipText(greetings[randomIndex]);
        if (isMobile === false){
            setGifSrc(myGif2);
            }   
    };

    const handleClick = () => {   
        setGifSrc(myGifClick);
        setTooltipText('?');
        if(isMobile === true){
            setAutoShowTooltip(false)
        }
        setTimeout(() => {  
            setGifSrc(myGif);
            setTooltipText('');
            if(isMobile === true){
                setAutoShowTooltip(true)
            } 
        }, 700); // Assuming the GIF plays for 2 seconds. Adjust accordingly.
    };

    useEffect(() => {
        let intervalId;
    
        if (autoShowTooltip) {
            intervalId = setInterval(autoShowTooltipFunction, 3000); // Show tooltip every 3 seconds, adjust as needed
            
        } else {
            clearInterval(intervalId);
            setAutoShowTooltip(false)
        }
    
        return () => {
            clearInterval(intervalId);
        };
    }, [autoShowTooltip]);

    return (
        <div className="gif-container">
            <img 
                src= {gifSrc}
                alt="Description of GIF" 
                className="my-gif"
                onMouseOver={handleMouseOver}
                onMouseOut={() => {
                    setGifSrc(myGif);
                    setTooltipText('');
                }}
                onMouseEnter={(e) => {
                    if (e.clientX < window.innerWidth / 2) {
                        setTooltipPosition('left');
                    } else {
                        setTooltipPosition('right');
                    }
                }}
                onClick={handleClick} 
            />
            {tooltipText && <div className={`tooltip tooltip-${tooltipPosition}`}>{tooltipText}</div>}
        </div>
    );
};

export default GifWithTooltip;
