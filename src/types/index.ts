export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}