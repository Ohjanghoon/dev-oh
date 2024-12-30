import { ExperienceItem } from "./Experiences";

interface Props {
  data: ExperienceItem;
}

function Work({ data: item }: Props) {
  return (
    <div className="relative mb-10 w-full rounded-3xl shadow-lg ring-[0.3px] ring-zinc-700/20">
      <span className="bg-accent-700/25 absolute left-4 top-4 h-2 w-2 rounded-full"></span>
      <span className="bg-accent-700/55 absolute bottom-4 right-4 h-2 w-2 rounded-full"></span>
      <div className="px-10 py-7 text-sm/6">
        <h3 className="text-3xl font-extrabold">{item.name}</h3>
        {/* 재직 기간 */}
        <div className="mt-1 flex items-center gap-[16px]">
          <span className="text-gray-400">{item.duration}</span>
          <span className="text-accent-400 py-1/2 rounded-full bg-zinc-50/50 px-3 text-[10px] font-semibold tracking-tighter ring-1">
            {item.month}
          </span>
        </div>
        {/* 역할 */}
        <div className="mt-3">
          <h4 className="text-base font-semibold underline underline-offset-2">
            Role
          </h4>
          <ul className="gap-2" aria-hidden="true">
            {item.roles?.map((role, index) => {
              return <li key={index}>&middot; {role}</li>;
            })}
          </ul>
        </div>
        {/* 참여 프로젝트 */}
        <div className="mt-3">
          <h4 className="text-base font-semibold underline underline-offset-2">
            Projects
          </h4>
          <ul className="gap-2" aria-hidden="true">
            {item.projects?.map((project, index) => {
              return <li key={index}>&middot; {project}</li>;
            })}
          </ul>
        </div>
        {/* 성과 */}
        <div className="mt-3">
          <h4 className="text-base font-semibold underline underline-offset-2">
            Performences
          </h4>
          <ul className="gap-2" aria-hidden="true">
            {item.performences?.map((performence, index) => {
              return <li key={index}>&middot; {performence}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Work;
