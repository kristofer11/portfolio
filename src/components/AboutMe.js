import React from 'react'
import Headshot from '../app/images/IMG_5207.jpg';

const AboutMe = () => {
    return (
        <div className='sub-section' id='about-me' >
            <div className='information'>
                    <h2>About Me</h2>
                <p>Hello! My name is Kris Hvattum. I am a front-end web developer with a background in education.</p>
            </div>
            <div className='headshot-container'>
                <img src={Headshot} class='headshot' alt='Kris hvattum Headshot' />
            </div>
        </div>

    )
}

export default AboutMe;