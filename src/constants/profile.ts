export const profile = {
  email: "aashusin0015@gmail.com",
  phone: "+91 7517371859",
  github: "https://github.com/CodeCrafter1859",
  linkedin: "https://www.linkedin.com/in/ashutosh-sinha-470343251",
  leetcode: "https://leetcode.com/u/ashu_okk/",
  summary:
    "Software Engineer with 2+ years of experience building backend and full-stack applications using Python, FastAPI, Django, React, and PostgreSQL. Experienced in designing RESTful APIs, integrating AWS services, developing scalable web applications, authentication, payments, and AI-powered solutions. Focused on clean architecture, performance, and maintainable software development.",
};
export const navigation = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Contact",
];
export interface Project {
  name: string;
  description: string;
  stack: string[];
  details: string[];
  theme: "orange" | "teal" | "purple" | "blue";
}
export const projects: Project[] = [
  {
    name: "Bharatnova",
    theme: "orange",
    description:
      "A full-stack social platform for sharing content, discovering personalized feeds, and streaming media.",
    stack: ["Python", "Django", "React", "TypeScript", "PostgreSQL", "AWS"],
    details: [
      "Built a full-stack social media platform with profiles, personalized feeds, content sharing, and user interactions.",
      "Enabled JWT authentication, role-based access, payments, notifications, S3 uploads, HLS video streaming, subscriptions, KYC, and referrals.",
      "Supports creator management, content monetization, short-video streaming, and secure media delivery.",
    ],
  },
  {
    name: "SereniBase",
    theme: "teal",
    description:
      "A no-code database platform with relational data, customizable views, and a spreadsheet-like interface.",
    stack: ["Python", "FastAPI", "React", "TypeScript"],
    details: [
      "Created a no-code database platform to create tables, define relationships, and manage data through a spreadsheet-like interface.",
      "Enabled database integration without migration, tenant management, real-time record updates, and collaborative access control.",
      "Supports internal admin panels, CRM, inventory and task management, and rapid prototyping.",
    ],
  },
  {
    name: "Learning Record Store",
    theme: "blue",
    description:
      "A multi-tenant learning admin platform with xAPI validation and configurable analytics dashboards.",
    stack: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
    details: [
      "Developed a multi-tenant LRS Admin UI for tenant onboarding, domain setup, space and store administration, and role-based access control.",
      "Integrated REST and analytics APIs for reports, custom charts, statement filtering, access keys, and multilingual experiences.",
      "Supports centralized learning data, course tracking, completion monitoring, and performance analytics.",
    ],
  },
  {
    name: "AI Course Builder",
    theme: "purple",
    description:
      "Transform PDF notes or a rough idea into complete courses, learning goals, and ready-to-use assessments.",
    stack: ["Python", "LangChain", "LLM", "FastAPI"],
    details: [
      "Designed an intelligent assistant for educational content creation from PDF notes or a rough idea.",
      "Implemented PDF course parsing, learning objectives generation, course creation from scratch, and assessment generation end to end.",
      "Supports EdTech course creation, corporate training, and personal study.",
    ],
  },
];
export const experience = [
  {
    role: "Full-Stack Python Developer",
    company: "Satyavratnova Technologies Private Limited",
    location: "Bengaluru, Karnataka",
    date: "June 2026 – November 2026",
    points: [
      "Architected scalable applications with React, Django, and PostgreSQL, delivering RESTful APIs and responsive interfaces.",
      "Engineered secure AWS S3 uploads with presigned URLs and browser-side video compression using FFmpeg and WebAssembly.",
      "Integrated JWT authentication, KYC verification, Cashfree payments, and role-based access control.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Aptlogica Technologies",
    location: "Pune, Maharashtra",
    date: "October 2024 – June 2026",
    points: [
      "Developed scalable Python and FastAPI services for AI-driven web applications.",
      "Built PDF processing, course generation, automated assessments, and integrated React and TypeScript interfaces.",
      "Collaborated through Git workflows and code reviews to improve scalability, maintainability, and service reliability.",
    ],
  },
];
export const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript"] },
  {
    label: "Backend",
    items: ["FastAPI", "Django", "Node.js", "REST APIs", "JWT / RBAC"],
  },
  {
    label: "Frontend",
    items: ["React", "Tailwind CSS", "HTML / CSS", "React Hooks"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization"],
  },
  {
    label: "Cloud",
    items: ["AWS S3", "EC2", "Elastic Beanstalk", "CodePipeline", "Amplify"],
  },
  {
    label: "AI / LLM",
    items: ["LangChain", "LlamaIndex", "Vector DB", "LLM Integration"],
  },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Cursor", "Jira"] },
];
