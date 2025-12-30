import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpg';

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2E1E] mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2B2E1E] mb-4 leading-tight">
            Kousthubh N Gowda
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#7A6B5E] leading-tight">
            {/* #8245ec */}
            <span className="text-[#2B2E1E]">I am a </span>
            <ReactTypingEffect
              text={[
                'ML Developer',
                'Generative AI Expert',
                'Data Analyst',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#7A6B5E]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-[#4a4d3e] mb-10 mt-8 leading-relaxed">
            I am a Computer Science undergraduate with a strong interest in artificial intelligence and intelligent system development. I have hands-on experience working with machine learning models, data-driven pipelines, and full-stack applications, focusing on building scalable, efficient, and well-structured solutions. I enjoy solving complex problems by combining software engineering principles with modern AI technologies.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1UYIfMSZiP7xSNjEbr74A6BkQelcWG9R-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#EDE3D6] py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #2B2E1E, #3a3d2e)',
              boxShadow: '0 0 2px #2B2E1E, 0 0 2px #2B2E1E, 0 0 40px rgba(43,46,30,0.3)',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#2B2E1E] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Kousthubh N Gowda"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(43,46,30,0.4)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
