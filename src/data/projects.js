export const projects = [
  {
    id: 'nexigos',
    name: 'Nexigos',
    description:
      'Enterprise digital agency web platform & headless CMS engineered with React 19, Three.js/WebGL 3D particle backgrounds, Node.js, Express, PostgreSQL, and Prisma ORM.',
    featuredDescription:
      'An enterprise-grade, full-stack digital agency web platform and headless content management suite engineered with React 19, Vite, Tailwind CSS v4, Three.js / WebGL, Node.js, Express, and PostgreSQL (via Prisma ORM). Features 15+ interactive 3D WebGL particle geometry engines, 7 dedicated service deep-dives, a Tiptap v3 WYSIWYG blog composer with SEO configuration, threaded visitor comments with moderation queues, dynamic single-source agency settings, and Cloudinary CDN media delivery.',
    tech: ['React 19', 'Three.js / WebGL', 'Tailwind CSS v4', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Tiptap v3', 'Cloudinary'],
    github: null,
    isPrivate: true,
    images: ['/Nexigos.png', '/Nexigos1.png'],
    featured: true,
    highlights: [
      {
        title: 'Interactive 3D WebGL Engines',
        badge: 'Three.js & WebGL',
        desc: '15+ bespoke mathematical particle geometry presets (Globe, Mesh, Torus, Waves) reacting dynamically to cursor movement and viewport scroll.',
        codeSnippet: '3d: three.js + ogl particle shaders',
      },
      {
        title: 'Headless CMS & Tiptap Editor',
        badge: 'WYSIWYG & SEO',
        desc: 'Full headless content suite with Tiptap v3 composer, automated slug generation, Cloudinary CDN uploads, and threaded comment moderation.',
        codeSnippet: 'cms: tiptap v3 · seo meta & moderation',
      },
      {
        title: 'PostgreSQL & Prisma Architecture',
        badge: 'Prisma ORM',
        desc: 'Scalable Express REST API backed by PostgreSQL and Prisma ORM, featuring JWT-based RBAC, soft-delete safety, and multi-tier rate limiting.',
        codeSnippet: 'db: postgresql + prisma orm 6 · rbac',
      },
    ],
  },
  {
    id: 'prepai',
    name: 'PrepAI',
    description:
      'End-to-end technical interview and AI tutor platform featuring live coding in Monaco Editor, voice answer recording with Whisper transcription, offline Ollama (Mistral) grading, and real-time Socket.IO updates.',
    featuredDescription:
      'An enterprise-grade technical interview practice and AI learning platform built with React 19, Redux Toolkit, and an asynchronous FastAPI dual-microservice backend with MongoDB and python-socketio. PrepAI empowers software developers to practice role-specific technical and oral interviews, solve coding challenges in a live Monaco Editor, record verbal explanations via browser audio, and receive real-time evaluations and multi-turn tutoring powered by offline Ollama (Mistral) and OpenAI Whisper.',
    tech: ['React 19', 'FastAPI', 'Python', 'Ollama (Mistral)', 'OpenAI Whisper', 'Monaco Editor', 'Socket.IO', 'MongoDB (Motor)', 'Redux Toolkit'],
    github: 'https://github.com/Shivam-090/AI-Interviewer',
    images: ['/aiPrep.png', '/aiPrep1.png', '/aiPrep2.png'],
    featured: false,
    highlights: [
      {
        title: 'Dual-Microservice Engine',
        badge: 'FastAPI & Ollama',
        desc: 'Dedicated AI microservice running offline Ollama (Mistral LLM) and Whisper speech transcription with async FastAPI backend.',
        codeSnippet: 'microservice: fastapi · ollama + whisper',
      },
      {
        title: 'Live Monaco & Audio Recorder',
        badge: 'Interactive IDE',
        desc: 'In-browser audio recording for verbal answers paired with a multi-language Monaco Editor code workspace.',
        codeSnippet: 'editor: monaco ide + audio recording',
      },
      {
        title: 'Real-Time WebSocket Scoring',
        badge: 'Socket.IO & Metrics',
        desc: 'python-socketio pushing live question generation and evaluation metrics with quantitative technical & confidence scoring.',
        codeSnippet: 'scoring: socket.io live pipeline · metrics',
      },
    ],
  },
  {
    id: 'wellnest',
    name: 'WellNest AI',
    description:
      'Empathetic, privacy-first mental wellness platform powered by a specialized local clinical LLM (maxwell1500/psycho:12b via Ollama), featuring CBT grounding companion chat, 20-dimension psychometric evaluation, and gamified streak progression.',
    featuredDescription:
      'A modern student and personal wellness companion designed to support emotional balance, reduce academic anxiety, and track holistic growth with zero cloud data leaks. Built with React 19, Express, Node.js, and MongoDB, WellNest leverages a specialized local clinical intelligence model (maxwell1500/psycho:12b via Ollama) to deliver multi-turn CBT companion chat, a 20-dimension psychometric evaluator, dynamic StressMeter gauge, automatic midnight routine resets, and a 6-theme adaptive aesthetic engine.',
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Ollama (psycho:12b)', 'CBT AI Engine', 'Tailwind CSS', 'Vite', 'JWT Auth'],
    github: 'https://github.com/Shivam-090/WellNest',
    images: ['/wellNest.png', '/wellNest1.png', '/wellNest2.png'],
    featured: false,
    highlights: [
      {
        title: 'Local Clinical AI (psycho:12b)',
        badge: 'Local LLM',
        desc: 'Therapeutic conversations with CBT grounding (4-4-4 Box Breathing, 5-4-3-2-1 Sensory) and zero cloud data leaks.',
        codeSnippet: 'inference: ollama maxwell1500/psycho:12b',
      },
      {
        title: '20-Dimension Psychometrics',
        badge: 'Clinical Assessment',
        desc: 'Multi-factor evaluation across physical, mental, and academic wellbeing with dynamic StressMeter gauge.',
        codeSnippet: 'evaluator: 20-indicator clinical rubric',
      },
      {
        title: 'Path to Bloom & Routine Engine',
        badge: 'Gamification',
        desc: 'Streak-based milestone progression, automatic midnight habit resets, +25 XP rewards, and 6 adaptive themes.',
        codeSnippet: 'engine: midnight reset · xp streak matrix',
      },
    ],
  },
  {
    id: 'skillswap',
    name: 'SkillSwap',
    description:
      'MERN-based peer learning platform with Google OAuth, real-time Socket.IO chat, email meeting scheduler, reciprocal skill matching, and Docker/HAProxy containerization.',
    featuredDescription:
      'MERN-based reciprocal peer learning platform where users sign in with Google OAuth, build public skill profiles, discover relevant learners, and exchange knowledge. Features real-time 1-on-1 messaging via Socket.IO, Nodemailer meeting scheduling, post-session ratings/moderation, Cloudinary media handling, and production multi-container Docker deployment with Nginx and HAProxy load balancing.',
    tech: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Docker', 'HAProxy', 'Cloudinary', 'Nodemailer'],
    github: 'https://github.com/Shivam-090/Skill-Swap',
    images: ['/skillSwap.png'],
    featured: false,
    highlights: [
      {
        title: 'Real-Time Messaging',
        badge: 'Socket.IO',
        desc: 'One-to-one instant chat workspace with active connection requests and message history.',
        codeSnippet: 'realtime: bidirectional socket streams',
      },
      {
        title: 'Reciprocal Discovery',
        badge: 'Skill Match',
        desc: 'Categorized recommendations based on what users want to teach vs learn.',
        codeSnippet: 'matcher: categorized query pipeline',
      },
      {
        title: 'Docker & HAProxy',
        badge: 'DevOps',
        desc: 'Production architecture with Nginx frontend, two load-balanced Express API containers, and HAProxy.',
        codeSnippet: 'infra: docker-compose + haproxy load balancer',
      },
    ],
  },
  {
    id: 'live-chat',
    name: 'DigiTalk — Live Chat Application',
    description:
      'Full-stack real-time communication platform built with Stream Chat & Stream Video SDKs, featuring 1-on-1 messaging, in-app video calling, friend discovery, and an admin moderation panel.',
    featuredDescription:
      'A full-stack real-time chat and video calling platform built with React 19, Express 5, Node.js, MongoDB, and Stream. Features secure JWT auth with HTTP-only cookies, social matching onboarding, real-time 1-on-1 direct messaging via Stream Chat, in-app video calling with Stream Video SDK, friend request workflows, user blocking/reporting, and an admin dashboard for user moderation and account management.',
    tech: ['React 19', 'Node.js', 'Express 5', 'MongoDB', 'Stream Chat SDK', 'Stream Video SDK', 'Zustand', 'React Query', 'Tailwind CSS 4'],
    github: 'https://github.com/Shivam-090/DigiTalk',
    images: ['/digiTalk.png', '/digiTalk1.png'],
    featured: false,
    highlights: [
      {
        title: 'Stream Chat & Video SDKs',
        badge: 'Real-Time Media',
        desc: 'One-to-one real-time messaging and in-app video calling powered by Stream Chat and Stream Video SDKs.',
        codeSnippet: 'stream: chat & video webrtc calling',
      },
      {
        title: 'Admin Moderation Dashboard',
        badge: 'Admin & Safety',
        desc: 'Dedicated admin panel to review user reports, manage account activation status, and moderate content.',
        codeSnippet: 'admin: report management · user activation',
      },
      {
        title: 'Social Matching & Discovery',
        badge: 'Social Matching',
        desc: 'Language-learning style onboarding, friend request workflows, and profile discovery with blocking/reporting.',
        codeSnippet: 'social: friend requests · blocking/reporting',
      },
    ],
  },
  {
    id: 'ai-blog',
    name: 'Blog Website MERN',
    description:
      'Full-stack MERN blogging platform featuring dual-role authentication (reader/writer), Google Gemini AI writing assistance, ImageKit CDN image hosting, and an author dashboard.',
    featuredDescription:
      'A full-stack blogging platform built with the MERN stack (React 19, Express 5, Node.js, MongoDB), featuring public blog discovery, reader engagement (likes, bookmarks, comments), role-based JWT authentication, ImageKit CDN media hosting, Google Gemini AI writing assistance, and an author dashboard for draft management and comment moderation.',
    tech: ['React 19', 'Node.js', 'Express 5', 'MongoDB', 'Google Gemini', 'ImageKit', 'Tailwind CSS 4', 'Quill'],
    github: 'https://github.com/Shivam-090/Blog-Website-MERN-',
    images: ['/blog.png', '/blog1.png', '/blog2.png'],
    featured: false,
    highlights: [
      {
        title: 'Gemini AI Writing Engine',
        badge: 'AI Assisted',
        desc: 'In-dashboard generative AI writing assistance powered by Google Gemini via @google/genai.',
        codeSnippet: 'ai: gemini api integration · content drafting',
      },
      {
        title: 'Dual-Role JWT Auth',
        badge: 'Auth & Security',
        desc: 'Separate reader & writer access models with JWT tokens and protected middleware routes.',
        codeSnippet: 'auth: role-based access · reader & writer',
      },
      {
        title: 'ImageKit & Quill CMS',
        badge: 'Rich Content',
        desc: 'Cloud-hosted image uploads via Multer and ImageKit with rich-text formatting and comment moderation.',
        codeSnippet: 'media: imagekit cdn + quill rich-text',
      },
    ],
  },
];
