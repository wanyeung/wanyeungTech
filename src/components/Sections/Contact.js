import React from 'react';
import './Contact.scss';

// Import your icons here
import Icon1 from 'teenyicons/solid/linkedin.svg';
import Icon2 from 'teenyicons/solid/instagram.svg';
import Icon3 from 'teenyicons/solid/envelope.svg';

function Contact() {
  return (
    <div className="Contact" id="contact">
      <p>Thank You for Watching! Here’s All My Contact:</p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/wan-yeung-hk" target="_blank" rel="noopener noreferrer">
          <img src={Icon1} alt="linkedin Icon" />
          Wan Yeung
        </a>
        <a href="mailto:lowanyeung@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={Icon3} alt="envelope Icon" />
          lowanyeung<span>@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
