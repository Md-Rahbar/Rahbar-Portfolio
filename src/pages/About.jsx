import { useState } from "react";
import { motion } from "framer-motion";

import realImg from "../assets/Real.jpeg";
import avatarImg from "../assets/avatar.jpeg";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="w-full bg-[#fef7e9] py-24 px-6">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN — IMAGE FLIP */}
        <div className="flex justify-center md:justify-end perspective">
          <motion.div
            className="relative w-72 md:w-96 h-72 md:h-96 cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={() => setFlipped(prev => !prev)}
          >
            {/* FRONT IMAGE */}
            <div className="absolute inset-0 backface-hidden">
              <img
                src={realImg}
                alt="About me"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>

            {/* BACK IMAGE */}
            <div
              className="absolute inset-0 backface-hidden"
              style={{ transform: "rotateY(180deg)" }}
            >
              <img
                src={avatarImg}
                alt="Hobbies"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — TEXT FLIP */}
        <div className="perspective">
          <motion.div
            className="relative min-h-[26rem]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* FRONT TEXT */}
            <div className="absolute inset-0 backface-hidden space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-gray-900">
                  About me
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Hello! I’m Rahbar, a full-stack developer who enjoys building
                  clean, scalable, and user-focused web applications using
                  modern technologies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Development Philosophy
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  I believe great software is built at the intersection of clean
                  code, thoughtful design, and real-world usability. I focus on
                  writing maintainable code and creating intuitive interfaces.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Personal touch
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  I enjoy refining UI animations and micro-interactions until
                  they feel just right.
                </p>
                <p className="italic text-gray-500 mt-1">
                  “Simplicity is the soul of efficiency.”
                </p>
              </div>
            </div>

            {/* BACK TEXT */}
            <div
              className="absolute inset-0 backface-hidden space-y-4"
              style={{ transform: "rotateY(180deg)" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Fun &amp; hobbies
              </h3>
              <ul className="space-y-3 text-gray-600 text-base md:text-lg">
                <li>🎧 Music lover</li>
                <li>📸 Photography</li>
                <li>🏏 Cricket fan</li>
                <li>💻 UI & animation experiments</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
