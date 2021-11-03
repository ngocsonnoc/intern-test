import React from 'react'
import { AboutWrapper } from './about.elm'
import bg from '../../assets/images/introduction-bg.png'
const About = () => {
    return (
        <AboutWrapper>
            <div className='bg'> <img src={bg} alt="" /></div>
            <div className='about-content'>
                <h2>What happened !</h2>
                <p>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create
                    mobile-optimized videos in minutes.</p>
            </div>
        </AboutWrapper>
    )
}

export default About
