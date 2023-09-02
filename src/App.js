import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar'; 
import Introduction from './components/Introduction';
import gifTalk from "./assets/talk.gif";
import { Element } from 'react-scroll';
import UIUX from './components/Sections/UIUX';
import DevAI from './components/Sections/DevAI';
import NewMediaArt from './components/Sections/NewMediaArt';
import VlogBlog from './components/Sections/VlogBlog';
import FixedBottom from './components/Sections/FixedBottom';
import Contact from './components/Sections/Contact';
import Icon1 from 'teenyicons/solid/behance.svg';
import Icon2 from 'teenyicons/solid/envelope.svg';
import Icon3 from 'teenyicons/solid/github.svg';
import Icon4 from 'teenyicons/solid/linkedin.svg';
import Icon5 from 'teenyicons/solid/mood-laugh.svg';
import Icon6 from 'teenyicons/solid/instagram.svg';
import Icon7 from 'teenyicons/solid/youtube.svg';
import Icon8 from 'teenyicons/solid/medium.svg';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [showFixedBottom, setShowFixedBottom] = useState(false);

  const SectionState = {
    INTRODUCTION: 'introduction',
    UIUX: 'uiux',
    DEV_PROJECT: 'dev_project',
    NEW_MEDIA_ARTIST: 'new_media_artist',
    LIFE_LONG_LEARNER: 'life_long_learner'
    // ... add more sections as needed
  };  
  const [currentSection, setCurrentSection] = useState(SectionState.INTRODUCTION);

  useEffect(() => {
    const handleScroll = () => {

      const introductionSection = document.getElementById('introduction'); // Ensure you have this ID in the Introduction component
      const introRect = introductionSection.getBoundingClientRect();
      const uiuxRect = document.querySelector('[name="UIUX"]').getBoundingClientRect();
      const devProjectRect = document.querySelector('[name="Dev Project"]').getBoundingClientRect();
      const newMediaArtistRect = document.querySelector('[name="New Media Artist"]').getBoundingClientRect();
      const lifeLongLearnerRect = document.querySelector('[name="Life-Long Learner"]').getBoundingClientRect();

      if (introductionSection) {
        const rect = introductionSection.getBoundingClientRect();
        if (rect.top < 0 && rect.top < -150) {
          setIsNavbarVisible(true);
        }else{
          setIsNavbarVisible(false);
          setShowFixedBottom(false);
        }

        if (introRect.top <= -250 && introRect.bottom >= 585) {
          setCurrentSection(SectionState.INTRODUCTION);
        } else if (uiuxRect.top <= 585 && uiuxRect.bottom >= 372) {
          setCurrentSection(SectionState.UIUX);
          setShowFixedBottom(true);
        } else if (devProjectRect.top <= 171 && devProjectRect.bottom >= 200) {
          setCurrentSection(SectionState.DEV_PROJECT);
          setShowFixedBottom(true);
        } else if (newMediaArtistRect.top <= 90 && newMediaArtistRect.bottom >= 300) {
          setCurrentSection(SectionState.NEW_MEDIA_ARTIST);
          setShowFixedBottom(true);
        } else if (lifeLongLearnerRect.top <= 200 && lifeLongLearnerRect.bottom >= 450) {
          setCurrentSection(SectionState.LIFE_LONG_LEARNER);
          setShowFixedBottom(true);
        } else {
          setShowFixedBottom(false);
          setCurrentSection(null);
        }

        console.log(showFixedBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showFixedBottom, SectionState]);

  let fixedBottomProps;

  switch (currentSection) {

    case SectionState.UIUX:
      fixedBottomProps = {
        title: "UX/UI Designer with Project Management Experience",
        description: "With more than 1 year of hands-on experience in UI/UX Design, I've conceptualized a diverse range of projects, complemented by my product management expertise.  It's what most people know me for.",
        logos:[
          { src: Icon1, alt: 'Behance Logo', link: 'https://www.behance.net/wanyeunghk' },
          { src: Icon2, alt: 'Mail Logo', link: 'mailto:lowanyeung@gmail.com' },
          // ... add more logos as needed
        ],
        gifSrc: gifTalk,
        showFixedBottom: showFixedBottom
      };
      break;

    case SectionState.DEV_PROJECT:
      fixedBottomProps = {
        title: "Strong Technical Background in AI & Web Development",
        description: "I'm currently pursuing my bachelor's degree at HKUST, diving deep into the technical aspects of creating exciting products, including Neural Network & Deep Learning, Web Development, and more.",
        logos:[
          { src: Icon3, alt: 'Github Logo', link: 'https://github.com/wanyeung' },
          { src: Icon4, alt: 'linkedin Logo', link: 'https://www.linkedin.com/in/wan-yeung-hk' },
          // ... add more logos as needed
        ],
        gifSrc: gifTalk,
        showFixedBottom: showFixedBottom
      };
      break;

    case SectionState.NEW_MEDIA_ARTIST:
      fixedBottomProps = {
        title: "Hobby as a New Media Amateur Artist",
        description: "Blending philosophy with digital artistry, my hobby is to craft tech-enhanced artworks. These pieces explore themes like avatars, the Metaverse, and mirror real-life bonds with friends.",
        logos:[
          { src: Icon5, alt: 'Artstation Logo', link: 'https://wanyeunguin.artstation.com/' },
          { src: Icon6, alt: 'Instagram Logo', link: 'https://www.instagram.com/quq_wan' },
          // ... add more logos as needed
        ],
        gifSrc: gifTalk,
        showFixedBottom: showFixedBottom
      };
      break;

    case SectionState.LIFE_LONG_LEARNER:
      fixedBottomProps = {
        title: "Life-Long Learner with Open-minded Attitude",
        description: "Embracing transformative experiences, I eagerly seek new concepts and skills, driven by a pure love for learning's sake. I record & share those with vlogs and blogs to help others.",
        logos:[
          { src: Icon7, alt: 'Youtube Logo', link: 'https://www.youtube.com/@Wan-Uin' },
          { src: Icon8, alt: 'Medium Logo', link: 'https://medium.com/@wanyeungUIN' },
          // ... add more logos as needed
        ],
        gifSrc: gifTalk,
        showFixedBottom: showFixedBottom
      };
      break;
      
    default:
      fixedBottomProps = {showFixedBottom: showFixedBottom};  // default props or you can set it to null to not render anything
    }

  return (
    <div className="Layout">
      <Navbar isNavbarVisible = {isNavbarVisible} />
      <Introduction id="introduction"/>
      {fixedBottomProps && <FixedBottom {...fixedBottomProps} />}
      <Element name="UIUX">
        <UIUX />
      </Element>
      <Element name="Dev Project">
        <DevAI />
      </Element>
      <Element name="New Media Artist">
        <NewMediaArt />
      </Element>
      <Element name="Life-Long Learner">
        <VlogBlog />
      </Element>
      <Contact />
    </div>
  );
}

export default App;
