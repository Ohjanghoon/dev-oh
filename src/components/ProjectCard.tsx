// node modules
import { motion } from "framer-motion";

// types
import { ProjectItem } from "../types/projectTypes";

interface CardProps {
  data: ProjectItem;
  handleDialog: (isOpen: boolean) => void;
  handleSetData: (data: ProjectItem) => void;
}

function ProjectCard({ data: item, handleDialog, handleSetData }: CardProps) {
  const openDialog = () => {
    handleDialog(true);
    handleSetData(item);
    document.body.style.overflow = "hidden";
  };

  const Icon = item.icon;
  return (
    <motion.div
      // initial={{ backgroundColor: "#f4f4f5", color: "#374151" }}
      whileHover={{
        scale: 1.07, // 카드 크기를 1.05배로 증가
        // backgroundColor: "#3849e4",
        // color: "#3849e4",
        transition: {
          // delay: 0.3,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      key={item.id}
      className="border-anim-card neumorphism-card group flex min-h-[290px] w-full flex-col p-5"
      onClick={openDialog}
    >
      <span className="border-anim absolute inset-0 rounded-lg"></span>

      <Icon className="text-5xl text-accent-hover/50 group-hover:text-accent-hover group-hover:transition-all group-hover:duration-[0.4s]" />

      {/* 이미지 영역 */}
      <h5 className="h5 mt-5">{item.title}</h5>
      <p className="mt-1 text-sm text-light-text-secondary">
        {item.duration.start} ~ {item.duration.end}
      </p>
      <p className="my-5 line-clamp-3 overflow-hidden text-ellipsis text-sm text-light-text-secondary">
        {item.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 text-xs">
        {item.technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="rounded border-[1px] border-[#3b82f6] px-2 py-1 group-hover:bg-white/80 group-hover:text-light-text-dark group-hover:transition-all group-hover:delay-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
