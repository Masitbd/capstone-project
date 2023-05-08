import React from 'react';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Special from './components/specials/Special';
import Testimonil from './components/testimonials/Testimonil';

const Home = () => {
    return (
     <>
        <Hero />
        <Special />
        <Testimonil />
        <About />
     </>
    );
};

export default Home;