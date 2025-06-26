import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './Home.css';

const Home: React.FC = () => {
  const GithubIcon = FaGithub as any;
  const LinkedinIcon = FaLinkedin as any;
  const TelegramIcon = FaTelegram as any;

  return (
    <section className="home section">
      <div className="container">
        <div className="home-content">
          <motion.div 
            className="home-social"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a 
              href="www.linkedin.com/in/sushanparlapally" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
          </motion.div>

          <motion.div 
            className="home-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1>Sushan Parlapally <span className="wave">👋</span></h1>
            <h3>Full Stack Developer</h3>
            <p className="typing-text">
              I am a <span className="highlight">Junior Full Stack Developer</span>
            </p>
            <p className="description">
              I'm a software developer and here is my portfolio website. 
              Have a look at my journey as a software developer and all of 
              my project works to learn more about me.
            </p>
            <Link to="/contact" className="btn">
              Say Hello 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L3 11L10 14L13 21L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>

          <motion.div 
            className="home-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="image-wrapper">
              <div className="profile-img">
                <div className="placeholder-img">SP</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="mouse"></div>
          <p>Scroll Down ↓</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;