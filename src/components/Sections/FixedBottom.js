import React from 'react';
import './FixedBottom.scss';

function FixedBottom({ title, description, logos = [], gifSrc, showFixedBottom }) {
  return (
    <section className="fixed-bottom-section" style={{ 
        transform: showFixedBottom ? 'translateY(0%)' : 'translateY(80%)',
        opacity: showFixedBottom ? 1 : 0 
        }}>

        {/* Left-hand side: Content */}
        <div className="content-container">
          <h2>{title}</h2>
          <p>{description}</p>
          
          <div className="logos">
            {logos.map((logo, index) => (
              <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
        </div>

        {/* Right-hand side: GIF */}
        <div className="gif-container">
          <img className="resized-image" src={gifSrc} alt="GIF" />
        </div>
        
    </section>
  );
}

export default FixedBottom;
