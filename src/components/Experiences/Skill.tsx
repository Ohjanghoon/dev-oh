import {
  RiJavascriptFill,
  RiJavaFill,
  RiReactjsFill,
  RiAngularjsFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoPython, BiLogoAws } from "react-icons/bi";
import { SiSpring, SiOracle, SiMongodb } from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const skills = [
  {
    category: "Languages",
    list: [
      {
        name: "JavaScript",
        icon: <RiJavascriptFill />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript />,
      },
      { name: "Java", icon: <RiJavaFill /> },
      {
        name: "Python",
        icon: <BiLogoPython />,
      },
    ],
  },
  {
    category: "Frontend",
    list: [
      {
        name: "React",
        icon: <RiReactjsFill />,
      },
      {
        name: "Angular",
        icon: <RiAngularjsFill />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill />,
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill />,
      },
    ],
  },
  {
    category: "ETC",
    list: [
      {
        name: "Spring",
        icon: <SiSpring />,
      },
      {
        name: "Oracle",
        icon: <SiOracle />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "AWS",
        icon: <BiLogoAws />,
      },
    ],
  },
];

function Skill() {
  return (
    <>
      {/* Skill 본문 영역 */}
      <div className="w-full">
        {skills.map((item, index) => {
          return (
            <div
              key={index}
              className="mb-6 flex flex-col justify-center gap-3"
            >
              <ul className="flex items-center justify-center gap-5 lg:justify-start">
                {item.list.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={50} key={index}>
                      <Tooltip>
                        <TooltipTrigger className="shadow-neumorphism hover:text-accent-hover group flex cursor-default items-center justify-center rounded-xl bg-gray-200 p-3 text-4xl transition-all duration-500 sm:text-6xl">
                          {skill.icon}
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
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skill;
