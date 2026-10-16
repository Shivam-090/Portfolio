export const projects = [
  {
    id: 'ai-resume-screener',
    name: 'AI-Powered Resume Screening System',
    description:
      'Full-stack AI/ML platform for automated resume scoring, grading, and actionable feedback from uploaded PDFs.',
    featuredDescription:
      'A full-stack AI/ML platform for automated resume scoring, grading, and candidate feedback from uploaded PDFs. Features Groq Llama 3.3/4 Scout integration for rapid analysis and scanned-PDF OCR support, JD Advisor, Job Match engine, and an AI Resume Builder — architected with Python/FastAPI, PyMuPDF, async SQLAlchemy/SQLite, and React/TypeScript/Tailwind.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Groq Llama 3.3', 'PyMuPDF', 'SQLAlchemy'],
    github: 'https://github.com/Shivam-090',
    featured: true,
    highlights: [
      {
        title: 'Groq Llama 3.3 & OCR',
        badge: 'Sub-second AI',
        desc: 'Instant resume parsing, section-by-section scoring, and scanned document extraction via PyMuPDF.',
        codeSnippet: 'inference: groq llama-3.3 · async pipeline',
      },
      {
        title: 'JD Match & Advisor',
        badge: 'Semantic Match',
        desc: 'Evaluates candidate fit against target job descriptions with keyword gap recommendations.',
        codeSnippet: 'matcher: cosine similarity + LLM rubric',
      },
      {
        title: 'AI Resume Builder',
        badge: 'Full Stack',
        desc: 'Interactive guided editor generating ATS-optimized resumes with async persistence.',
        codeSnippet: 'backend: FastAPI + async SQLAlchemy',
      },
    ],
  },
  {
    id: 'ai-interviewer',
    name: 'AI-Powered Technical Interviewer Platform',
    description:
      'Voice + coding technical interview prep platform with role-specific assessments, Ollama (Mistral) question generation, answer evaluation, and Whisper speech transcription.',
    tech: ['React.js', 'FastAPI', 'MongoDB', 'Ollama', 'Whisper'],
    github: 'https://github.com/Shivam-090',
    featured: false,
  },
  {
    id: 'ai-blog',
    name: 'AI-Powered Blog Platform',
    description:
      'Production-ready blogging platform with dual-role (user/writer) JWT auth, HTTP-only cookie sessions, Google Gemini AI content generation, and ImageKit CDN.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'ImageKit'],
    github: 'https://github.com/Shivam-090',
    featured: false,
  },
  {
    id: 'wellnest',
    name: 'WellNest AI',
    description:
      'Mental wellness platform featuring AI-powered therapy chat with a local Ollama LLM, real-time mood tracking, guided journaling, and personalized recommendations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Ollama LLM'],
    github: 'https://github.com/Shivam-090/WellNest',
    featured: false,
  },
];
