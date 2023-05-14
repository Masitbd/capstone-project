import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const nevigate = useNavigate()
    return (
        <section className='LL-Hero'>
         <div className='LL-Hero-left'>
           <h1>Little Lemon</h1> 
           <p className='subtitle'>Chicago</p>
           <p className='LL-Hero-desc'>We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.</p>
          <button className='LL-Hero-btn'>
            Reserve a Table
          </button>
         </div>
         <div className='LL-Hero-right'>
            <img src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pizzas_v269Oq2LM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273890"
 
             width={400} height={300} alt="Lettle lemon -Hero section"/>
         </div>
        </section>
    );
};

export default Hero;