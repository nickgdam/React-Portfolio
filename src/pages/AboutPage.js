import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
            Greetings! My Name is Nick Damario and I am learning web design! I'm 23 and currently living in Winchester, Virginia. I grew up in Southern Maryland and graduated from Northern High school in 2015. Since Graduation I've bounced around from warehouse to retail jobs but now I'm shifting my focus on a sustainable carreer change in Web Design!
            </Content>

        </div>
    )
}

export default AboutPage
