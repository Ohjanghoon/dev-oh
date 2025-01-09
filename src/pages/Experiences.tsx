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
        <TabGroup className="flex flex-col gap-0 md:mx-20 md:mt-14 lg:flex-row lg:gap-[40px]">
          <TabList className="mx-auto inline-flex h-auto w-full max-w-[280px] flex-row justify-center gap-3 p-1 text-sm lg:mx-0 lg:flex-col lg:justify-start lg:gap-0 xl:max-w-[330px]">
            {experiencesList.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <Tab
                  key={index}
                  className="neumorphism-btn my-3 rounded-xl p-3 data-[selected]:bg-accent-hover/5 data-[selected]:text-accent-hover data-[selected]:shadow-neumorphism-pressed focus:outline-none"
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
                  <h3 className="text-center text-2xl font-bold underline lg:text-start xl:text-3xl">
                    My {experience.title}
                  </h3>
                  {/* 제목 설명 영역 */}
                  <p className="my-2 w-full break-keep text-center text-sm font-light tracking-tighter sm:text-base lg:text-start">
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
                    <Content />
                  </motion.div>
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </motion.div>
    </section>
  );
}

export default Experiences;
