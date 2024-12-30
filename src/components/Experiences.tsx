import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Work from "./Work";
import Education from "./Education";

export interface ExperienceItem {
  name: string;
  duration: string;
  month?: string;
  roles?: string[];
  projects?: string[];
  performences?: string[];
}

interface ExperienceCategory {
  title: string;

  icon: JSX.Element;
  items: ExperienceItem[];
}

const experiencesList: ExperienceCategory[] = [
  {
    title: "Work",
    icon: <FaBriefcase />,
    items: [
      {
        name: "IGI Korea",
        duration: "2022.12 ~ 2024.09",
        month: "1년 10개월",
        roles: [
          "2D, 3D 프론트엔드 개발자 재직",
          "메타버스 컨텐츠 기획 참여",
          "대국민 서비스 북한정보포털 유지관리 참여",
        ],
        projects: [
          "AWS 서버리스 수습과제 개발",
          "Digital Twin(수자원공사, 신성이엔지) 개발",
          "Metaverse(KISTI 가상실험) 개발",
          "북한정보포털 대국민 서비스 플랫폼 유지관리",
        ],
        performences: ["사내 성과발표 2023 베스트 프리젠테이션상 수상"],
      },
    ],
  },
  {
    title: "Education",

    icon: <FaGraduationCap />,
    items: [
      {
        name: "KH정보교육원(JAVA 과정) 수료",
        duration: "2022.02 ~ 2022.09",
      },
      {
        name: "제주대학교(컴퓨터공학과) 졸업",
        duration: "2013.03 ~ 2021.08",
      },
      {
        name: "대기고등학교 졸업",
        duration: "2010.03 ~ 2013.02",
      },
    ],
  },
];

function Experiences() {
  return (
    <section className="container">
      <div className="mx-auto w-[75%]">
        <h2 className="mb-6 text-center text-3xl">Experiences</h2>
        <TabGroup>
          <TabList className="mx-auto flex justify-center gap-6 rounded-full p-3">
            {experiencesList.map((experience, index) => {
              return (
                <Tab
                  key={index}
                  className="neumorphism-btn data-[selected]:bg-accent-hover/15 data-[selected]:shadow-neumorphism-pressed data-[selected]:text-accent-hover w-1/5 rounded-full p-2 text-sm/6 font-semibold focus:outline-none"
                >
                  <div className="flex items-center justify-center gap-2">
                    {experience.icon}
                    {experience.title}
                  </div>
                </Tab>
              );
            })}
          </TabList>
          <TabPanels className="mt-5">
            {experiencesList.map((experience, index) => {
              return (
                <TabPanel className="max-h-[65vh] w-full overflow-y-scroll p-5">
                  {experience.items.map((item, index) => {
                    {
                      switch (experience.title) {
                        case "Work":
                          return <Work key={index} data={item} />;
                        case "Education":
                          return <Education key={index} data={item} />;
                      }
                    }
                  })}
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}

export default Experiences;
