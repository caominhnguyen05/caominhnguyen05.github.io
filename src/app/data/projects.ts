import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "CS Revision Platform",
    category: "FULL-STACK APPLICATION",
    description:
      "A revision platform for my CS students, bringing past papers, notes, and syllabuses together with personal accounts and progress tracking.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "OAuth",
      "Vercel",
    ],
    githubUrl: "https://github.com/caominhnguyen05/cs-revision-web",
    liveUrl: "https://cs-revision.vercel.app/",
    imageUrl: "/projects/cs-revision.png",
  },
  {
    title: "Multi-Domain Support Triage Agent",
    category: "AI ENGINEERING",
    description:
      "A hackathon-built support agent using retrieval-augmented generation and GPT-4o-mini to classify issues, retrieve answers, and escalate tickets.",
    tags: ["RAG", "ChromaDB", "OpenAI LLM", "Python", "TF-IDF"],
    githubUrl:
      "https://github.com/caominhnguyen05/support-agent-hackerrank-orchestrate",
    imageUrl: "/projects/support_agent.png",
  },
  {
    title: "Personal Portfolio",
    category: "FRONTEND DEVELOPMENT",
    description:
      "My personal portfolio, built with Next.js and Magic UI. A responsive showcase of my work, experience, and education with thoughtful interactions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Magic UI", "Vercel"],
    githubUrl: "https://github.com/caominhnguyen05/caominh-portfolio",
    liveUrl: "https://caominhnguyen.vercel.app",
    imageUrl: "/projects/portfolio.png",
  },
  {
    title: "Bill-Splitting Application",
    category: "BACKEND & DESKTOP",
    description:
      "A collaborative Java desktop app for splitting group expenses. Calculates balances and simplifies settlements to minimise the number of payments.",
    tags: [
      "Spring Boot",
      "Java",
      "REST APIs",
      "Database Design",
      "GitLab",
      "JavaFX",
    ],
    githubUrl: "https://github.com/caominhnguyen05/splitty_manage_expenses",
    imageUrl: "/projects/splitty.png",
  },
  {
    title: "CineBrowse",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A movie browser web app using React.js and the OMDb API, enabling users to search for keywords in movie titles and get dynamically updating results.",
    tags: ["React.js", "JavaScript", "CSS", "OMDb API"],
    githubUrl: "https://github.com/caominhnguyen05/cinebrowse_movie_app",
  },
];
