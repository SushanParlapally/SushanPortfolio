import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaJs, 
  FaReact, 
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiCplusplus,
  SiDotnet,
  SiMysql,
  SiExpress,
  SiMaterialdesign,
  SiGnubash
} from 'react-icons/si';
import './Skills.css';

interface Skill {
  name: string;
  icon: React.ReactNode;
  colorClass: string;
}

const Skills: React.FC = () => {
  // Cast all icons as any to avoid TypeScript errors
  const Html5Icon = FaHtml5 as any;
  const Css3Icon = FaCss3Alt as any;
  const BootstrapIcon = FaBootstrap as any;
  const TailwindIcon = SiTailwindcss as any;
  const JsIcon = FaJs as any;
  const ReactIcon = FaReact as any;
  const ExpressIcon = SiExpress as any;
  const ReduxIcon = SiRedux as any;
  const MaterialIcon = SiMaterialdesign as any;
  const MongodbIcon = SiMongodb as any;
  const NodeIcon = FaNodeJs as any;
  const LinuxIcon = FaLinux as any;
  const PythonIcon = FaPython as any;
  const MysqlIcon = SiMysql as any;
  const BashIcon = SiGnubash as any;
  const CppIcon = SiCplusplus as any;
  const DockerIcon = FaDocker as any;
  const GitIcon = FaGitAlt as any;
  const DotnetIcon = SiDotnet as any;
  const TypescriptIcon = SiTypescript as any;

  const skills: Skill[] = [
    { name: 'HTML', icon: <Html5Icon />, colorClass: 'html' },
    { name: 'CSS', icon: <Css3Icon />, colorClass: 'css' },
    { name: 'Bootstrap', icon: <BootstrapIcon />, colorClass: 'bootstrap' },
    { name: 'Tailwind', icon: <TailwindIcon />, colorClass: 'tailwind' },
    { name: 'Javascript', icon: <JsIcon />, colorClass: 'javascript' },
    { name: 'React', icon: <ReactIcon />, colorClass: 'react' },
    { name: 'Express', icon: <ExpressIcon />, colorClass: 'express' },
    { name: 'Redux', icon: <ReduxIcon />, colorClass: 'redux' },
    { name: 'Material UI', icon: <MaterialIcon />, colorClass: 'material' },
    { name: 'MongoDB', icon: <MongodbIcon />, colorClass: 'mongodb' },
    { name: 'NodeJs', icon: <NodeIcon />, colorClass: 'nodejs' },
    { name: 'Linux', icon: <LinuxIcon />, colorClass: 'linux' },
    { name: 'Python', icon: <PythonIcon />, colorClass: 'python' },
    { name: 'SQL', icon: <MysqlIcon />, colorClass: 'sql' },
    { name: 'Bash', icon: <BashIcon />, colorClass: 'bash' },
    { name: 'C++', icon: <CppIcon />, colorClass: 'cplusplus' },
    { name: 'Docker', icon: <DockerIcon />, colorClass: 'docker' },
    { name: 'Git', icon: <GitIcon />, colorClass: 'git' },
    { name: 'C#', icon: <DotnetIcon />, colorClass: 'csharp' },
    { name: 'ASP.NET Core', icon: <DotnetIcon />, colorClass: 'aspnet' },
    { name: 'TypeScript', icon: <TypescriptIcon />, colorClass: 'typescript' },
  ];

  return (
    <section className="skills section">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>My Technical Skillset</p>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
            >
              <div className={`skill-icon ${skill.colorClass}`}>
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;