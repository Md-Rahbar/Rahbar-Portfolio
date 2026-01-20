import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-black/15 hover:border-black/25"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
