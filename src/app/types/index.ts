export interface Education {
  institution: string;
  website: string;
  logo: string;
  faculty?: string;
  degree: string;
  years: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  tags: string[];
  description: string[];
}

export interface Project {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}
