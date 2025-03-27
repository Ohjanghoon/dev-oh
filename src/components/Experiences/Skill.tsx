// node modules
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

// data
import { skillList } from "../../data/experienceData";

function Skill() {
  return (
    <>
      {/* Skill 본문 영역 */}
      <div className="w-full px-3 md:px-0">
        {skillList.map((item, index) => {
          return (
            <div
              key={index}
              className="mb-6 flex flex-col justify-center gap-3"
            >
              <h6>{item.category}</h6>
              <ul className="flex flex-wrap items-center gap-2">
                {item.list.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={50} key={index}>
                        <Tooltip>
                          <TooltipTrigger className="bg-primary neumorphism-card group flex cursor-default items-center justify-center rounded-xl p-2 text-4xl sm:text-6xl md:text-3xl">
                            {typeof skill.icon !== "string" ? (
                              <skill.icon
                                style={{
                                  color: skill.color,
                                }}
                                className="rounded-lg bg-[#f3f4f6] p-1 dark:bg-[#ffffff15]"
                              />
                            ) : (
                              <img
                                className="h-[36px] w-[36px] rounded-lg bg-[#f3f4f6] p-1 dark:bg-[#ffffff15] sm:h-[60px] sm:w-[60px] md:h-[30px] md:w-[30px]"
                                src={skill.icon}
                              />
                            )}
                            <span className="ml-2 hidden text-xs md:block">
                              {skill.name}
                            </span>
                          </TooltipTrigger>
                          {/* <TooltipContent
                            side="bottom"
                            className="px-2 py-1 text-sm rounded-xl bg-zinc-700/10"
                          >
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent> */}
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
