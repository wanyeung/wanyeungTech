import React, { useRef } from 'react';
import { ReactComponent as Icon1 } from 'teenyicons/solid/info.svg';
import { ReactComponent as Icon2 } from 'teenyicons/solid/code.svg';
import { ReactComponent as Icon3 } from 'teenyicons/solid/scribble.svg';
import { ReactComponent as Icon4 } from 'teenyicons/solid/refresh-alt.svg';
import './Introduction.scss';
import GifWithTooltip from './GifWithTooltip';
import Particles from './Particles';

<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9998 5.94V12H41.9998V5.94H47.9998ZM41.9998 78H11.9998V84H77.9998V78H47.9998L47.9998 24L23.9998 24V30H41.9998L41.9998 78Z" fill="black"/>
</svg>

function Introduction() {
  const circleRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

    const handleMouseMove = (event) => {
        if(isMobile === false){
          const x = event.clientX;  // Get the horizontal coordinate of the mouse
          const y = event.clientY;  // Get the vertical coordinate of the mouse
  
          if (circleRef.current) {
              circleRef.current.style.left = `${x}px`;
              circleRef.current.style.top = `${y}px`;
          }
        }
        else{
          circleRef.current.style.left = `${window.innerWidth/2}px`;
        }
    };
    
    return (
      <section id="introduction" onMouseMove={handleMouseMove}>
        <Particles id="tsparticles" />
        <div className="moving-circle" ref={circleRef}></div>
        <ul>
          <li>
            <a href="#ai-driven-ux-dev" className="icon-link">
              <div className="icon-wrapper">
                <Icon1 className="icon-class" />
              </div>
            </a>
            <div className="text-wrapper">
              <a href="#ai-driven-ux-dev">am</a>
            </div>
          </li>
          <li>
            <a href="#DevAI" className="icon-link">
              <div className="icon-wrapper">
                <Icon2 className="icon-class" />
              </div>
            </a>
            <div className="text-wrapper">
              <a href="#DevAI">AI-Driven UX / Dev</a>
            </div>
          </li>
          <li>
            <a href="#new-media-artist" className="icon-link">
              <div className="icon-wrapper">
                <Icon3 className="icon-class" />
              </div>
            </a>
            <div className="text-wrapper">
              <a href="#new-media-artist">New Media Amateur Artist</a>
            </div>
          </li>
          <li>
            <a href="#life-long-learner" className="icon-link">
              <div className="icon-wrapper">
                <Icon4 className="icon-class" />
              </div>
            </a>
            <div className="text-wrapper">
              <a href="#life-long-learner">Life-Long Learner</a>
            </div>
          </li>
        </ul>
        <GifWithTooltip />
      </section>
    );
  }  

export default Introduction;
