import React, { useEffect } from 'react';

function DevAIText() {
    const projects = [
        {
            description: "AI - Finturing CIFAR-10 #Python #CNNs #PyTorch",
            link: "https://colab.research.google.com/github/wanyeung/AI-Intro-Course-Homework/blob/main/Homwork3_Wan_CIFAR_PyTorch_CNNs.ipynb"
        },
        {
            description: "C++ Terminal Cross Puzzle Games #C++ #Window",
            link: "https://github.com/wanyeung/2042-puzzle-cpp/blob/main/Source%20Code.cpp"
        },
        {
            description: "Java ATM Prototype #Java #Swing #GUI",
            link: "https://github.com/wanyeung/2242-APM/tree/main"
        },
        {
            description: "Portfolio Site #React #Git #HTML,SCSS,JavaScript",
            link: "https://github.com/wanyeung/wanyeungTech"
        },
        {
            description: "Covid Virus Pattern Generator #Processing #Java",
            link: "https://github.com/wanyeung/Pandemic-Generator"
        },
        {
            description: "Visual impairment NGO Website #Wordpress",
            link: "https://www.behance.net/gallery/177480569/Freelance-Project-NGO-Site-(Wordpress-Project)"
        },
        {
            description: "+ Many Tiny Projects & Practices",
            link: "https://github.com/wanyeung?tab=repositories" 
        }
    ];

    const renderStyledText = (text) => {
        const words = text.split(' ').map((word, index) => {
            if (word.startsWith('#')) {
                return <span key={index} className="hash-tag">{word}</span>;
            } else {
                return word;
            }
        }).reduce((acc, word, index) => acc.concat(index > 0 ? [' ', word] : [word]), []);

        return words;
    };


    useEffect(() => {
        const lines = document.querySelectorAll('.right-div p');
        lines.forEach((line, index) => {
            line.style.animationDelay = `${index * 3.5}s`;
            line.addEventListener('animationstart', () => {
                line.classList.add('typing');
            });
            line.addEventListener('animationend', () => {
                line.classList.remove('typing');
            });
        });
    }, []);

    return (
        <div className="right-div">
            {projects.map((project, index) => (
                <p key={index}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {renderStyledText(project.description)}
                    </a>
                </p>
            ))}
        </div>
    );
}

export default DevAIText;
