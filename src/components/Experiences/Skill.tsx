// node modules
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

// data
import { skillList } from "../../data/experienceData";

function Skill() {
  return (
    <>
      {/* Skill 본문 영역 */}
      <div className="w-full">
        {skillList.map((item, index) => {
          return (
            <div
              key={index}
              className="mb-6 flex flex-col justify-center gap-3"
            >
              <ul className="flex items-center justify-center gap-5 lg:justify-start">
                {item.list.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={50} key={index}>
                        <Tooltip>
                          <TooltipTrigger className="group flex cursor-default items-center justify-center rounded-xl bg-gray-200 p-3 text-4xl shadow-neumorphism transition-all duration-500 hover:text-accent-hover sm:text-6xl md:text-3xl">
                            <Icon />
                            <span className="ml-3 hidden text-sm md:block">
                              {skill.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent
                            side="bottom"
                            className="rounded-xl bg-zinc-700/10 px-2 py-1 text-sm"
                          >
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skill;
