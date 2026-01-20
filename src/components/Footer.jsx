import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full z-20 bg-[#fff6e3] border-t border-gray-200">
      {/* Full-width bar */}
      <div className="w-full h-12 flex items-center">
        {/* Content container */}
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">

          {/* Left */}
          <span className="text-xs sm:text-sm text-gray-500 tracking-wide">
            © {new Date().getFullYear()} All rights reserved.
          </span>

          {/* Right */}
          <div className="flex items-center gap-5 text-lg">
            <a
              href="https://github.com/Md-Rahbar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:opacity-70 transition cursor-pointer"
            >
              <FaGithub />
            </a>
            
            <a
              href="https://www.linkedin.com/in/md-rahbar-alam"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-70 transition cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
