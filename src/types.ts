export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  details?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  association?: string;
  description: string[];
  links?: {
    label: string;
    url: string;
  }[];
  tags: string[];
  featured?: boolean;
}

export interface Achievement {
  title: string;
  category: 'academic' | 'sports' | 'hackathon' | 'other';
  links?: {
    label: string;
    url: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
