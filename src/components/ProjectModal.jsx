import { motion } from "framer-motion";
import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* BACKDROP — CLICK TO CLOSE */}
      <motion.div
        className="fixed inset-0 bg-black/40 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* EXPANDED CARD */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className="bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl text-gray-800 border border-black/15"
          onClick={(e) => e.stopPropagation()} // prevent close when clicking card
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          <h3 className="text-2xl font-semibold mb-1 text-gray-900">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            {project.duration} • {project.stack}
          </p>

          <p className="mb-4 text-sm sm:text-base text-gray-700">
            {project.description}
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            {project.points.map((point, i) => (
              <li key={i}>– {point}</li>
            ))}
          </ul>

          {/* Links */}
          <div className="mt-6 flex items-center justify-between flex-wrap">
            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm hover:bg-gray-100  hover:text-black cursor-pointer border-2"
                >
                  Live demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border bg-yellow-200 border-gray-300 text-sm text-gray-800 hover:bg-gray-600 hover:text-white cursor-pointer"
                >
                  GitHub
                </a>
              )}
            </div>

            <div className="mt-3 sm:mt-0">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full border bg-yellow-400 border-gray-300 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectModal;
