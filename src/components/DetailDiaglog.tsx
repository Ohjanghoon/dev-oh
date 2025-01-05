import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import { ProjectItem } from "./Projects";

interface Props {
  data: ProjectItem;
  handleOpenDialog: (isOpen: boolean) => void;
}

function DetailDialog({ data: item, handleOpenDialog }: Props) {
  const onClose = () => {
    handleOpenDialog(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative max-w-2xl rounded-xl bg-white p-6 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <button
            className="absolute right-3 top-3 text-gray-600"
            onClick={onClose}
          >
            ✖
          </button>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="my-2">{item.description}</p>
          <h4 className="mt-4 font-semibold">Technologies</h4>
          <ul className="ml-4 list-disc">
            {item.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <h4 className="mt-4 font-semibold">Responsibilities</h4>
          <ul className="ml-4 list-disc">
            {item.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          {item.repositoryUrl && (
            <a
              href={item.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-blue-500 underline"
            >
              View Repository
            </a>
          )}
          {item.liveDemoUrl && (
            <a
              href={item.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-blue-500 underline"
            >
              Live Demo
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DetailDialog;
