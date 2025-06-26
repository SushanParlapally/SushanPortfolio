import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Sushan_Resume.pdf';
    link.download = 'Sushan_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>My introduction</p>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-img">
              <div className="placeholder-img">SP</div>
            </div>
          </motion.div>

          <motion.div 
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="about-boxes">
              <div className="about-box">
                <FaIcons.FaBriefcase />
                <h3>Experience</h3>
                <span>1+ Years</span>
              </div>
              <div className="about-box">
                <FaIcons.FaAward />
                <h3>Completed</h3>
                <span>10+ Projects</span>
              </div>
            </div>

            <p className="about-description">
              Hi Everyone! My name is Sushan Parlapally. I am a Full Stack Developer 
              and final-year B.Tech CS student with 6 months building and debugging C#, 
              .NET 8.0, ASP.NET Core, React, TypeScript, and SQL Server solutions. 
              I enjoy utilizing logic and code to give shape to my new innovative ideas. 
              Currently I am working on React.js and making beautiful UI-UX designs and websites.
            </p>

            <p className="about-description">
              Apart from that, I thrive in Agile/Scrum teams and am ready to deliver 
              scalable, customer-focused web features end-to-end.
            </p>

            <button onClick={handleDownloadCV} className="btn">
              Download CV 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;