// src/pages/HomePage.jsx
import React from 'react';
import '../styles/HomePage.css';
import RobotImage from '../assets/Robots.png';
import StemImage from '../assets/stem-1.png';
import Robots1 from '../assets/robots1.png';
import Robots2 from '../assets/robots2.png';

const HomePage = () => {
  return (
    <>
      <section className='home-page'>
        <div className='text-container'>
          <h1>Welcome To</h1>
          <h2>RoboWorld</h2>
          <p><i>your ultimate destination for all things robotics</i></p>
        </div>
        <div className="image-container">
        </div> 
    </section>
    <section>
      <div className='home-page2'>
        <div className='why-robotics'>
          <h1>Why Robotics</h1>
          <p>"As robots become more integrated into our environments, 
            the challenge lies in fostering relationships where they serve as friends and productive teammates. 
            Robots that exhibit attractive designs, 
            engaging personalities, and a high level of social intelligence could pave the way for deep and meaningful human-robot connections."</p>
        </div>
        <button>Learn More</button>
      </div>
    </section>
    <section className='home-page3'>
      <div className='home-page3'>
        <div className='robotics-projects'>
          <h1>Robotics Projects</h1>
          <p>Our projects are designed to inspire and motivate students to learn more about robotics. 
            We offer a wide range of projects that cater to all ages and skill levels. 
            Whether you're a beginner or an expert, we have something for everyone.</p>
        <button>View Projects</button>
        </div>
            <img src={StemImage} alt="stem" />
      </div>
    </section>
    </>
  )
}

export default HomePage;
