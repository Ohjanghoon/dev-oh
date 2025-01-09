// node modules
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";

// data
import { experiencesList } from "../data/experienceData";

function Experiences() {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="my-8 text-center md:mx-20 md:my-10 md:text-start"
        >
          <h2 className="h3 inline-block rounded-lg bg-gradient-to-r from-accent to-accent-400 bg-clip-text font-[900] uppercase tracking-wider text-transparent">
            Experiences
          </h2>
          {/* <p className="my-2 h-[4px] bg-accent/30"></p> */}
          <p className="my-2 h-[2px] bg-gradient-to-r from-accent via-transparent to-accent md:to-transparent"></p>
          <p className="text-text-secondary text-[11px] md:text-base">
            실무 경험부터 학업과 교육, 그리고 제가 다룰 수 있는 기술 스택까지,
            저의 성장 여정을 담았습니다.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TabGroup className="flex flex-col gap-0 md:mx-20 lg:flex-row lg:gap-[40px]">
            <TabList className="mx-auto inline-flex h-auto w-full max-w-[280px] flex-row justify-center gap-3 p-1 text-sm lg:mx-0 lg:flex-col lg:justify-start lg:gap-0 xl:max-w-[330px]">
              {experiencesList.map((experience, index) => {
                const Icon = experience.icon;
                return (
                  <Tab
                    key={index}
                    className="neumorphism-btn my-3 rounded-xl p-3 data-[selected]:text-accent-hover/70 data-[selected]:shadow-neumorphism-pressed focus:outline-none"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Icon />
                      {experience.title}
                    </div>
                  </Tab>
                );
              })}
            </TabList>
            <TabPanels className="min-h-[70vh] w-full p-3">
              {experiencesList.map((experience, index) => {
                const Content = experience.content;

                return (
                  <TabPanel key={index}>
                    {/* 제목 영역 */}
                    <h3 className="hidden text-center text-2xl font-bold lg:inline-block lg:text-start xl:text-3xl">
                      My {experience.title}
                    </h3>
                    {/* 제목 설명 영역 */}
                    <p className="my-2 w-full break-keep text-center text-sm font-light tracking-tighter sm:text-base lg:text-start">
                      "{experience.description}"
                    </p>
                    {/* 본문 영역 */}
                    <motion.div
                      variants={fadeIn("right", 0)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.05 }}
                      className="mt-8 w-full"
                    >
                      <Content />
                    </motion.div>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </TabGroup>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experiences;
