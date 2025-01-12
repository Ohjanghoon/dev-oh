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
  };

  const Icon = item.icon;
  return (
    <motion.div
      initial={{ backgroundColor: "#f4f4f5", color: "#374151" }}
      whileHover={{
        scale: 1.07, // 카드 크기를 1.05배로 증가
        // backgroundColor: "#3849e4",
        color: "#3849e4",
        transition: {
          // delay: 0.3,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      key={item.id}
      className="card group relative flex min-h-[290px] w-full cursor-pointer flex-col rounded-lg p-5 shadow-lg ring-[0.3px] ring-zinc-700/20"
      onClick={openDialog}
    >
      <span className="border-anim absolute inset-0 rounded-lg"></span>

      <Icon className="text-5xl text-accent-hover" />

      {/* 이미지 영역 */}
      {/* <img
        src={item.thumbnail}
        alt=""
        className="h-full w-full rounded-xl object-fill md:max-h-[180px]"
      /> */}
      <h5 className="h5 mt-5 tracking-tight">{item.title}</h5>
      <p className="mt-1 text-sm text-text-secondary">
        {item.duration.start} ~ {item.duration.end}
      </p>
      <p className="my-5 line-clamp-3 overflow-hidden text-ellipsis text-sm text-text-secondary">
        {item.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 text-xs">
        {item.technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="rounded border-[1px] border-[#3b82f6] px-2 py-1 group-hover:bg-white/80 group-hover:text-text-dark group-hover:transition-all group-hover:delay-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
