import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Image1 from '../assets/image-1.jpg';

function AboutPage(props) {
    return (
        <div className='bear'>
            <Hero title={props.title} subtitle={props.subtitle}/>
            <Content >
            Welcome to my page!  My Name is Nick Damario and my focus is full stack web development.  I graduated from Johns Hopkins University Full Stack Coding Bootcamp and I'm currntly looking to land an entry level job, where I would be able to continue working on my skills and adding to my resume.  Since Graduating from highschool I've worked a few retail and warehouse jobs, but now I'm shifting my focus on a starting a new sustainable career in Web Developement.  
            <p><a target="_blank" href="https://docs.google.com/document/d/1RbAiQSEeRK7YalVLxs3tqAVkrLztowV120E1OEIvivU/edit?usp=sharing">Resume</a></p>
            <img className='yeeter' src={Image1}/>

            </Content>

        </div>
    )
}

export default AboutPage
