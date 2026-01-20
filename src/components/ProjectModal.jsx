import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
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
          <div className="mt-6 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800 cursor-pointer"
              >
                Live demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectModal;
