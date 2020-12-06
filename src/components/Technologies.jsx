import React, { useState } from 'react';
import './Technologies.css';

const Technologies = () => {
    const [ tech, setTech ] = 
        useState([
            {
                name: 'HTML5',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png'
            },
            {
                name: 'CSS3',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
            },
            {
                name: 'JavaScript',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
            },
            {
                name: 'ReactJS',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
            },
            {
                name: 'NodeJS',
                icon: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
            },
            {
                name: 'MySQL',
                icon: 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png'
            }
        ]);

    return(
        <section id="techs" className="tech-section">
            <h1 className="tech-subtitle">Les technologies que je connais :</h1>
            {tech.map((element) => 
                <div className="tech-card">
                    <img className="tech-img" src={element.icon} />
                    <p className="tech-name">{element.name}</p>
                </div>
            )}
        </section>
    )
}

export default Technologies;