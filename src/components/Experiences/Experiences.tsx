import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { HiCircleStack } from "react-icons/hi2";
import Work from "./Work";
import Education from "./Education";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { fadeIn } from "../../util/variants";

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
  id: string;
  description: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const experiencesList: ExperienceCategory[] = [
  {
    title: "Work",
    id: "work",
    description:
      "도전과 협업을 통해 끊임없이 성장하며 쌓아온 실무 경험들입니다.",
    icon: <FaBriefcase />,
    content: <Work />,
  },
  {
    title: "Education",
    id: "education",
    description: "배움으로 나아가 성장을 이끌어낸 경험들입니다.",
    icon: <FaGraduationCap />,
    content: <Education />,
  },
  {
    title: "Skills",
    id: "skill",
    description:
      "끊임없이 확장하고 성장한 기술 역량입니다. 이러한 기술들을 사용해 봤어요.",
    icon: <HiCircleStack />,
    content: <Skill />,
  },
];

function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <section className="container">
        <TabGroup className="flex flex-col gap-0 py-12 lg:flex-row lg:gap-[60px]">
          <TabList className="mx-auto inline-flex h-auto w-full max-w-[280px] flex-row justify-center gap-3 p-1 text-sm lg:mx-0 lg:flex-col lg:justify-start lg:gap-0 xl:max-w-[330px]">
            {experiencesList.map((experience, index) => {
              return (
                <Tab
                  key={index}
                  className="neumorphism-btn data-[selected]:bg-accent-hover/5 data-[selected]:shadow-neumorphism-pressed data-[selected]:text-accent-hover my-3 rounded-xl p-3 focus:outline-none"
                >
                  <div className="flex items-center justify-center gap-2">
                    {experience.icon}
                    {experience.title}
                  </div>
                </Tab>
              );
            })}
          </TabList>
          <TabPanels className="min-h-[70vh] w-full p-3">
            {experiencesList.map((experience, index) => {
              return (
                <TabPanel key={index}>
                  {/* 제목 영역 */}
                  <h3 className="text-center text-2xl font-bold underline lg:text-start xl:text-3xl">
                    My {experience.title}
                  </h3>
                  {/* 제목 설명 영역 */}
                  <p className="xs:text-base my-2 w-full text-center text-sm font-light lg:text-start">
                    "{experience.description}"
                  </p>
                  {/* 본문 영역 */}
                  <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-8 w-full"
                  >
                    {experience.content}
                  </motion.div>
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </section>
    </motion.div>
  );
}

export default Experiences;
