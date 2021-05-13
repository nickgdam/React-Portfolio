import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Carousel from "../components/Carousel";
import Aos from "aos";

function HomePage(props) {
    useEffect(() => {
        Aos.init({ duration: 1000});
    }, []);
    return (
        <div   className="bear">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel/>

        </div>
    )
}

export default HomePage
