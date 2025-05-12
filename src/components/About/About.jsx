import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Guljar Hussain
          </h2>
          { /* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-blue-800 leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                'Java Developer', 2000,
                'Basic Frontend Developer', 2000,
                'Backend Developer', 2000,
                'Machine Learning Enthusiast', 2000,
                'Data Science Enthusiast', 2000,
                'Coder', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block', color: '#1E40AF' }}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-white mb-10 mt-8 leading-relaxed">
            I am a passionate Java Developer and versatile Backend Developer with a strong foundation in software engineering principles. With hands-on experience in both backend systems and basic frontend development, I build reliable and efficient web applications. As a Machine Learning and Data Science Enthusiast, I enjoy exploring intelligent solutions and integrating data-driven insights into my projects. Beyond development, I thrive as a Coder who constantly learns and adapts to new technologies to deliver impactful and optimized solutions.

          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1U_CmjWyV3vB7Q22z5a2NrbAnfWi6n35T/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #1E40AF, #2563EB)', // Blue-800 gradient
              boxShadow: '0 0 2px #1E40AF, 0 0 2px #1E40AF, 0 0 40px #1E40AF',
            }}
          >
            DOWNLOAD RESUME
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            style={{
              border: '4px solid #2563EB', // Blue-700 border
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
          >
            <img
              src={profileImage}
              alt="Guljar Hussain"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;