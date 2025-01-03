// icons
import { FaCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

// interface
interface EducationItem {
  name: string;
  duration: string;
  icon: JSX.Element;
}

// data
const educationList: EducationItem[] = [
  {
    name: "KH정보교육원(JAVA 과정) 수료",
    duration: "2022.02 ~ 2022.09",
    icon: <FaCode />,
  },
  {
    name: "제주대학교(컴퓨터공학과) 졸업",
    duration: "2013.03 ~ 2021.08",
    icon: <FaGraduationCap />,
  },
  {
    name: "대기고등학교 졸업",
    duration: "2010.03 ~ 2013.02",
    icon: <FaSchool />,
  },
];

function Education() {
  return (
    <div className="flex flex-col gap-5">
      {educationList.map((education) => {
        return (
          <div
            className="relative flex w-full justify-center rounded-3xl shadow-lg ring-[0.3px] ring-zinc-700/20 md:justify-start"
            key={education.name}
          >
            {/* 도트 포인트 */}
            <span className="bg-accent-700/25 absolute left-4 top-4 h-2 w-2 rounded-full"></span>
            <span className="bg-accent-700/55 absolute bottom-4 right-4 h-2 w-2 rounded-full"></span>

            {/* 본문 내용 영역 */}
            <div className="flex flex-col items-center justify-stretch gap-x-5 px-8 py-6 md:flex-row md:justify-center">
              <h3 className="bg-accent-500 rounded-2xl p-3 align-middle text-3xl text-zinc-100 sm:mb-1 sm:text-2xl">
                {education.icon}
              </h3>
              <span className="font-semibold text-gray-500 sm:text-lg">
                {education.duration}
              </span>
              <h3 className="sm:text-lg">{education.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
