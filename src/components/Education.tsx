import { ExperienceItem } from "./Experiences";

interface Props {
  data: ExperienceItem;
}

function Education({ data: item }: Props) {
  return (
    <div className="relative mb-10 w-full rounded-3xl shadow-lg ring-[0.3px] ring-zinc-700/20">
      <span className="bg-accent-700/25 absolute left-4 top-4 h-2 w-2 rounded-full"></span>
      <span className="bg-accent-700/55 absolute bottom-4 right-4 h-2 w-2 rounded-full"></span>

      <div className="flex items-center px-10 py-7 text-sm/6">
        {/* 재직 기간 */}
        <div className="mt-1 flex items-center justify-stretch gap-[50px]">
          <span className="text-xl font-semibold">{item.duration}</span>
          <h3 className="text-lg">{item.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Education;
