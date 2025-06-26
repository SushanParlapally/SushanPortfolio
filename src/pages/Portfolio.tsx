import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaUtensils, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const Portfolio: React.FC = () => {
  const CloudIcon = FaCloud as any;
  const UtensilsIcon = FaUtensils as any;
  const GithubIcon = FaGithub as any;
  const ExternalLinkIcon = FaExternalLinkAlt as any;

  const projects: Project[] = [
    {
      id: 1,
      title: 'Trawell',
      description: 'Workflow automation app - Built a travel-request system with ASP.NET Core MVC, React, Bootstrap, and SQL Server, cutting processing time 60% for 500+ users.',
      icon: <CloudIcon />,
      technologies: ['ASP.NET Core', 'React', 'Bootstrap', 'SQL Server'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Detection of Fraudulent Payments',
      description: 'Engineered a Python/FastAPI pipeline in Docker that reduced manual reviews 70% at 92% accuracy. Integrated secure REST endpoints with a React dashboard.',
      icon: <UtensilsIcon />,
      technologies: ['Python', 'FastAPI', 'React', 'Docker', 'SQL Server'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section className="portfolio section">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Projects</p>
        </div>

        <div className="portfolio-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="portfolio-icon">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <div className="portfolio-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="portfolio-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    <GithubIcon /> GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    <ExternalLinkIcon /> View More →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;