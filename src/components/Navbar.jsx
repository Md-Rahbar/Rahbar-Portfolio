import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills & Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fff6e3]/80 backdrop-blur border-b border-gray-200">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight cursor-pointer"
        >
          Rahbar
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-gray-900 transition cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-lg text-gray-600">
          <a href="https://github.com/Md-Rahbar" target="_blank" rel="noreferrer" className="cursor-pointer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/md-rahbar-alam" target="_blank" rel="noreferrer" className="cursor-pointer">
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#fef7e9] px-6 pb-6 border-t border-gray-200"
          >
            <ul className="flex flex-col gap-4 pt-4 ">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer text-gray-700 hover:text-gray-900 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
