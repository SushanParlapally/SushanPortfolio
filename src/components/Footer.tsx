import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    const LinkedinIcon = FaLinkedin as any;

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="footer-title">Sushan Parlapally</h1>

                <div className="footer-navbar">
                    <ul className="footer-list">
                        <li>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="footer-link"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('skills')}
                                className="footer-link"
                            >
                                Skills
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className="footer-link"
                            >
                                Portfolio
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="footer-social">
                    <a
                        href="https://www.linkedin.com/in/sushanparlapally/"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon />
                    </a>
                </div>

                <span className="rights-reserved">©sushanparlapally. All rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;