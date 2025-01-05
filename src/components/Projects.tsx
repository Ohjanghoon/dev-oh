// node modules
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import Card from "./Card";

export interface ProjectItem {
  id: string; // 프로젝트 고유 식별자
  title: string; // 프로젝트 제목
  description: string; // 프로젝트에 대한 간략한 설명
  technologies: string[]; // 사용한 기술 스택
  role: string; // 프로젝트에서의 역할 (개발자, 디자이너 등)
  duration: {
    start: string; // 시작 날짜 (YYYY-MM-DD)
    end?: string; // 종료 날짜 (종료하지 않은 경우 undefined)
  };
  teamSize?: number; // 팀 규모 (혼자 진행한 경우 1)
  responsibilities: string[]; // 프로젝트에서 담당한 주요 업무
  achievements?: string[]; // 프로젝트에서 달성한 주요 성과 (선택 사항)
  repositoryUrl?: string; // 코드 저장소 URL (GitHub 등, 선택 사항)
  liveDemoUrl?: string; // 라이브 데모 URL (배포된 경우, 선택 사항)
  screenshots?: string[]; // 프로젝트 스크린샷 경로 (이미지 배열)
}

interface Project {
  category: string;
  items: ProjectItem[];
}

// data
const projectList: Project[] = [
  {
    category: "Personal",
    items: [
      {
        id: "1",
        title: "Galaxy Animation Portfolio",
        description:
          "A portfolio showcasing personal projects with an interactive galaxy animation.",
        technologies: ["React", "Framer Motion", "TailwindCSS"],
        role: "Frontend Developer",
        duration: {
          start: "2024-11-01",
          end: "2024-12-15",
        },
        teamSize: 1,
        responsibilities: [
          "Developed interactive galaxy animation using Framer Motion",
          "Designed responsive layout with TailwindCSS",
          "Implemented SEO optimization",
        ],
        achievements: [
          "Increased portfolio traffic by 40% after launch",
          "Praised for innovative animation by peers",
        ],
        repositoryUrl: "https://github.com/username/galaxy-portfolio",
        liveDemoUrl: "https://galaxy-portfolio.com",
        screenshots: ["/images/project1-1.png", "/images/project1-2.png"],
      },
    ],
  },
  {
    category: "Corporate",
    items: [
      {
        id: "corporate_project_01",
        title: "북한정보포털",
        description:
          "A portfolio showcasing personal projects with an interactive galaxy animation.",
        technologies: ["React", "Framer Motion", "TailwindCSS"],
        role: "Frontend Developer",
        duration: {
          start: "2024-11-01",
          end: "2024-12-15",
        },
        teamSize: 1,
        responsibilities: [
          "Developed interactive galaxy animation using Framer Motion",
          "Designed responsive layout with TailwindCSS",
          "Implemented SEO optimization",
        ],
        achievements: [
          "Increased portfolio traffic by 40% after launch",
          "Praised for innovative animation by peers",
        ],
        repositoryUrl: "https://github.com/username/galaxy-portfolio",
        liveDemoUrl: "https://galaxy-portfolio.com",
        screenshots: ["/images/project1-1.png", "/images/project1-2.png"],
      },
    ],
  },
  {
    category: "Educational",
    items: [
      {
        id: "1",
        title: "Galaxy Animation Portfolio",
        description:
          "A portfolio showcasing personal projects with an interactive galaxy animation.",
        technologies: ["React", "Framer Motion", "TailwindCSS"],
        role: "Frontend Developer",
        duration: {
          start: "2024-11-01",
          end: "2024-12-15",
        },
        teamSize: 1,
        responsibilities: [
          "Developed interactive galaxy animation using Framer Motion",
          "Designed responsive layout with TailwindCSS",
          "Implemented SEO optimization",
        ],
        achievements: [
          "Increased portfolio traffic by 40% after launch",
          "Praised for innovative animation by peers",
        ],
        repositoryUrl: "https://github.com/username/galaxy-portfolio",
        liveDemoUrl: "https://galaxy-portfolio.com",
        screenshots: ["/images/project1-1.png", "/images/project1-2.png"],
      },
    ],
  },
];

const Projects = () => {
  // 모든 프로젝트를 하나의 배열로 병합
  const allProjects = projectList.flatMap((project) => project.items);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center py-12 xl:py-0"
    >
      <section className="container">
        <h2 className="h2 text-center">Projects</h2>
        <p className="my-3 text-center">
          Explore the projects I've worked on in various categories.
        </p>
        <TabGroup>
          <TabList className="flex justify-center gap-5">
            <Tab className="neumorphism-btn w-1/6 rounded-full px-1 py-2 text-sm/6 font-semibold data-[selected]:bg-accent-hover/15 data-[selected]:text-accent-hover data-[selected]:shadow-neumorphism-pressed focus:outline-none">
              # All
            </Tab>
            {projectList.map((project, index) => (
              <Tab
                key={index}
                className="neumorphism-btn w-1/6 rounded-full p-2 text-sm/6 font-semibold data-[selected]:bg-accent-hover/15 data-[selected]:text-accent-hover data-[selected]:shadow-neumorphism-pressed focus:outline-none"
              >
                # {project.category}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {/* All Projects */}
            <TabPanel className="mt-6">
              <div className="grid justify-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {allProjects.map((item) => (
                  <Card key={item.id} data={item} />
                ))}
              </div>
            </TabPanel>
            {/* Individual Categories */}
            {projectList.map((project, index) => (
              <TabPanel key={index} className="mt-6">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {project.items.map((item) => (
                    <Card key={item.id} data={item} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </section>
    </motion.div>
  );
};

export default Projects;
