import React from 'react';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Special from './components/specials/Special';
import Testimonil from './components/testimonials/Testimonil';
import Specials  from '../../settings/specials.json';
import testimonials  from '../../settings/testimonials.json';

const Home = () => {
    return (
     <>
        <Hero />
        <Special data={Specials} />
        <Testimonil data = {testimonials}/>
        <About />
     </>
    );
};

export default Home;