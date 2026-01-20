import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="w-full bg-[#fef7e9] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16 text-gray-900">
          Skills &amp; Experience
        </h2>

        {/* EXISTING CONTENT — UNCHANGED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT — SKILLS */}
          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase mb-10 text-gray-500">
              &lt;my skills /&gt;
            </h2>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-10 text-3xl opacity-90">
              <SkillIcon big><FaReact /></SkillIcon>
              <SkillIcon big><FaJava /></SkillIcon>
              <SkillIcon big><SiSpringboot /></SkillIcon>

              <SkillIcon><SiJavascript /></SkillIcon>
              <SkillIcon><FaHtml5 /></SkillIcon>
              <SkillIcon><FaCss3Alt /></SkillIcon>
              <SkillIcon><SiMysql /></SkillIcon>
              <SkillIcon><SiMongodb /></SkillIcon>
              <SkillIcon><FaGitAlt /></SkillIcon>
              <SkillIcon><FaGithub /></SkillIcon>
            </div>
          </div>

          {/* RIGHT — EXPERIENCE */}
          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase mb-10 text-gray-500">
              &lt;experience /&gt;
            </h2>

            <div className="space-y-6">

              <ExperienceCard
                id="dhee"
                active={active}
                toggle={toggle}
                date="Feb 2025 – Present"
                role="Software Developer Intern"
                company="Dhee Coding Lab"
                points={[
                  "Built backend features using Spring Boot and REST APIs.",
                  "Integrated React frontend with backend services.",
                  "Improved API structure and maintainability through refactoring.",
                ]}
              />

              <ExperienceCard
                id="bluestock"
                active={active}
                toggle={toggle}
                date="Jan 2025 – Feb 2025"
                role="Frontend Developer Intern"
                company="Bluestock · Remote, India"
                points={[
                  "Designed responsive trading dashboards using React and TailwindCSS.",
                  "Integrated REST APIs for real-time data visualization.",
                  "Reduced dashboard load time by 30% and improved retention by 15%.",
                  "Enhanced user engagement through UI/UX improvements.",
                ]}
              />

              <ExperienceCard
                id="spurzee"
                active={active}
                toggle={toggle}
                date="Jul 2024 – Aug 2024"
                role="Software Developer Intern"
                company="Spurzee Technologies"
                points={[
                  "Worked on Java and Python backend modules.",
                  "Handled data processing and optimization tasks.",
                  "Contributed to scalable backend service development.",
                ]}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ================= COMPONENTS ================= */

const SkillIcon = ({ children, big }) => (
  <motion.div
    whileHover={{ y: -2, opacity: 1 }}
    transition={{ duration: 0.2 }}
    className={`cursor-pointer ${big ? "text-4xl" : ""}`}
  >
    {children}
  </motion.div>
);

const ExperienceCard = ({ id, active, toggle, date, role, company, points }) => {
  const open = active === id;

  return (
    <div
      onClick={() => toggle(id)}
      className={`cursor-pointer rounded-lg border border-black/20 px-5 py-4 transition
        ${open ? "bg-black/5" : "hover:bg-black/5"}`}
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="text-xs opacity-70">{date}</p>
          <p className="font-semibold">{role}</p>
          <p className="italic text-sm opacity-80">{company}</p>
        </div>
        <span className="text-sm opacity-60">
          {open ? "−" : "+"}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2 text-sm leading-relaxed"
          >
            {points.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
