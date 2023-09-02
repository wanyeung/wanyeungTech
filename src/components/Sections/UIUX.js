import React from 'react';
import { BehanceProjects } from './Projects/BehanceProjects';
import './UIUX.scss';

function AiUxDev() {
    
    return (
        <div id="ai-driven-ux-dev" className="ai-ux-dev-container">
            {BehanceProjects.map((project, index) => (
                <a 
                    key={index} 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    <div 
                        className="project-box" 
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                        loading="lazy"
                    >
                        <div className="project-image" style={{ backgroundImage: `url(${project.cover})` }}></div>
                        <h3>{project.name}</h3>
                    </div>
                </a>
            ))}
        </div>
    );
}


export default AiUxDev;