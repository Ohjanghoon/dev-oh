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
  return (
    <div
      key={item.id}
      className="card flex w-full flex-col gap-2 rounded-2xl border-[1px] border-zinc-600 bg-[#f4f3f3] p-5"
      onClick={openDialog}
    >
      <img
        src="/src/assets/dev-oh avatar.png"
        alt=""
        className="max-h-[180px] w-full rounded-2xl object-cover"
      />
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm">{item.description}</p>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        {item.technologies.map((tech, index) => (
          <span key={index} className="rounded bg-gray-200 px-2 py-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
