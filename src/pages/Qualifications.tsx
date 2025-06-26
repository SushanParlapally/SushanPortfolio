import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Qualifications.css';

const Qualifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');
  const GraduationCapIcon = FaGraduationCap as any;
  const BriefcaseIcon = FaBriefcase as any;

  const education = [
    {
      title: "Bachelor of Technology - Computer Science Engineering",
      institution: "Vivekananda Institute of Technology and Sciences",
      duration: "2021 - Present",
      description: "Currently pursuing"
    }
  ];

  const experience = [
    {
      title: "Full-stack Developer Intern",
      company: "Abstract Tech Limited",
      duration: "06/2024 - 12/2024",
      description: "Implemented customer-requested modules with C#, ASP.NET Core, React, and TypeScript"
    },
    {
      title: "Python Developer Intern",
      company: "Intraniz",
      duration: "08/2023 - 10/2023",
      description: "Delivered REST micro-services in FastAPI and optimised SQL Server queries"
    }
  ];

  return (
    <section className="qualifications section">
      <div className="container">
        <div className="section-title">
          <h2>Qualification</h2>
          <p>My Personal Journey</p>
        </div>

        <div className="qualification-content">
          <div className="qualification-tabs">
            <button
              className={`qualification-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCapIcon /> Education
            </button>
            <button
              className={`qualification-button ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <BriefcaseIcon /> Experience
            </button>
          </div>

          <motion.div 
            className="qualification-sections"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={activeTab}
          >
            {activeTab === 'education' ? (
              <div className="qualification-timeline">
                {education.map((item, index) => (
                  <div key={index} className="qualification-data">
                    <div className="qualification-info">
                      <h3>{item.title}</h3>
                      <span className="qualification-subtitle">{item.institution}</span>
                      <p className="qualification-description">{item.description}</p>
                      <div className="qualification-calendar">
                        📅 {item.duration}
                      </div>
                    </div>
                    <div className="qualification-time">
                      <span className="qualification-rounder"></span>
                      <span className="qualification-line"></span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="qualification-timeline">
                {experience.map((item, index) => (
                  <div key={index} className="qualification-data">
                    <div className="qualification-info">
                      <h3>{item.title}</h3>
                      <span className="qualification-subtitle">{item.company}</span>
                      <p className="qualification-description">{item.description}</p>
                      <div className="qualification-calendar">
                        📅 {item.duration}
                      </div>
                    </div>
                    <div className="qualification-time">
                      <span className="qualification-rounder"></span>
                      <span className="qualification-line"></span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;