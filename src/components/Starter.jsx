import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const Starter = () => {
  const [tab, setTab] = useState("about");
  const snippets = useMemo(
    () => ({
      about: `// about.ts\nexport const me = {\n  name: "Rahbar",\n  role: "Full‑stack Developer",\n  focus: ["clean UI", "scalable APIs", "performance"],\n};\n`,
      skills: `// skills.ts\nexport const skills = [\n  "Java", "Spring Boot",\n  "React", "Tailwind",\n  "Node.js", "MySQL"\n];\n`,
      contact: `// contact.ts\nexport const links = {\n  email: "md.rahbar.cs@gmail.com",\n  github: "github.com/Md-Rahbar",\n  linkedin: "linkedin.com/in/md-rahbar-alam"\n};\n`,
    }),
    []
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center px-6 bg-transparent">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center py-10">
        {/* LEFT: Copy */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Eyebrow */}
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500"
          >
            Portfolio · 2024 – 2025
          </motion.span>

          {/* Main title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900"
            >
              Hi, I&apos;m Rahbar.
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
            >
              A full‑stack developer focused on building clean, scalable, and
              user‑centric web experiences.
            </motion.p>
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="https://leetcode.com/u/Rahbar10/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer px-5 py-2.5 rounded-2xl border bg-gray-300 border-black/20 text-sm font-medium text-gray-900 hover:bg-black hover:text-white transition"
            >
              View LeetCode
            </a>
            <a
              href="https://github.com/Md-Rahbar"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer px-5 py-2.5 rounded-2xl border bg-yellow-200 border-black/20 text-sm font-medium text-gray-900 hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/md-rahbar-alam"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer px-5 py-2.5 rounded-2xl border bg-yellow-100 border-black/20 text-sm font-medium text-gray-900  hover:text-white hover:bg-black transition"
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
              Available for opportunities
            </span>
            <span className="h-px w-6 bg-gray-300" />
            <span>Based in India · Full‑stack</span>
          </motion.div>
        </div>

        {/* RIGHT: Interactive code block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md">
            <div className="rounded-3xl bg-white/70 border border-black/15 shadow-md overflow-hidden">
              {/* top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setTab("about")}
                    className={`cursor-pointer px-2.5 py-1 rounded-full border transition ${
                      tab === "about"
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-transparent text-gray-800 border-black/15 hover:bg-black/5"
                    }`}
                  >
                    About
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("skills")}
                    className={`cursor-pointer px-2.5 py-1 rounded-full border transition ${
                      tab === "skills"
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-transparent text-gray-800 border-black/15 hover:bg-black/5"
                    }`}
                  >
                    Skills
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("contact")}
                    className={`cursor-pointer px-2.5 py-1 rounded-full border transition ${
                      tab === "contact"
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-transparent text-gray-800 border-black/15 hover:bg-black/5"
                    }`}
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* code body */}
              <div className="px-4 py-4">
                <pre className="text-[12px] leading-5 text-gray-800 whitespace-pre-wrap font-mono">
                  {snippets[tab]}
                </pre>

                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Starter;
