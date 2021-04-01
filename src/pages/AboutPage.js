import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Resume from '../assets/nickresume2020.pdf'

function AboutPage(props) {
    return (
        <div className='bear'>
            <Hero title={props.title} />
            <Content >
            Greetings! My Name is Nick Damario and I am learning web design! I'm 23 and currently living in Annapolis, Maryland.  I grew up in Southern Maryland and graduated from Northern High school in 2015. Since Graduation I've bounced around from warehouse to retail jobs but now I'm shifting my focus on a sustainable carreer change in Web Design!
            <p><a href="assets/nickresume2020.pdf">Resume</a></p>
            </Content>

        </div>
    )
}

export default AboutPage
