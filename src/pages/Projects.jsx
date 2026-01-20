import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "AI Press Release Video Generator",
    image: "/project1.svg",
    duration: "3 weeks",
    stack: "React, Flask, NLP",
    description:
      "An AI-powered system that converts press releases into short-form videos.",
    points: [
      "Automated script generation from URLs",
      "Keyword-based image fetching",
      "Video creation using FFmpeg",
    ],
    demoUrl: "https://your-demo-link-1.com",
    repoUrl: "https://github.com/Md-Rahbar/ai-press-release-video-generator",
  },
  {
    id: 2,
    title: "Trading Dashboard",
    image: "/project2.svg",
    duration: "1 month",
    stack: "React, Tailwind, REST APIs",
    description:
      "A real-time trading dashboard focused on performance and usability.",
    points: [
      "Reduced load time by 30%",
      "Integrated real-time APIs",
      "Improved user retention by 15%",
    ],
    demoUrl: "https://your-demo-link-2.com",
    repoUrl: "https://github.com/Md-Rahbar/trading-dashboard",
  },
  {
    id: 3,
    title: "PetCare CRM Platform",
    image: "/project3.svg",
    duration: "6 weeks",
    stack: "React, Node.js, MySQL",
    description:
      "A secure CRM platform for veterinary clinics.",
    points: [
      "JWT-based authentication",
      "Role-based access control",
      "Modular MVC architecture",
    ],
    demoUrl: "https://your-demo-link-3.com",
    repoUrl: "https://github.com/Md-Rahbar/petcare-crm-platform",
  },
  {
    id: 4,
    title: "Online Code Translator",
    image: "/project4.svg",
    duration: "4 weeks",
    stack: "React, Node.js",
    description:
      "A web app that translates and executes code across languages.",
    points: [
      "Live code execution",
      "Multi-language support",
      "Terminal-style UI",
    ],
    demoUrl: "https://your-demo-link-4.com",
    repoUrl: "https://github.com/Md-Rahbar/online-code-translator",
  },
];

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full bg-transparent py-24 px-6">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16 text-gray-900">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActive(project)}
            />
          ))}
        </div>

        {/* Link to more projects on GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Md-Rahbar?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-900 hover:text-white transition cursor-pointer"
          >
            View more projects on GitHub
          </a>
        </div>

        <AnimatePresence>
          {active && (
            <ProjectModal
              project={active}
              onClose={() => setActive(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
