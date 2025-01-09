// node modules
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";

// components
import ProjectCard from "../components/ProjectCard";
import DetailDialog from "../components/DetailDiaglog";

// utils
import { fadeIn } from "../utils/variants";

// data
import { projectList } from "../data/projectData";

// types
import { ProjectItem } from "../types/projectTypes";

const Projects = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  // 모든 프로젝트를 하나의 배열로 병합(#All 태그를 활용하기 위함.)
  const allProjects = projectList.flatMap((project) => project.items);

  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* className="flex items-center justify-center py-12 xl:py-0" */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="my-8 text-center md:mx-20 md:my-10 md:text-start"
        >
          {/* <h2 className="h2 inline-block rounded-lg bg-gradient-to-r from-accent to-accent-400 bg-clip-text font-[900] uppercase tracking-wider text-transparent">
            Projects
          </h2> */}
          <h2 className="h3 inline-block bg-gradient-to-r from-accent/90 to-accent-400 bg-clip-text text-lg font-[900] uppercase tracking-wider text-transparent">
            Projects
          </h2>
          <p className="my-2 h-[2px] bg-gradient-to-r from-accent via-transparent to-accent md:to-transparent"></p>
          <p className="text-text-secondary text-[11px] md:text-sm">
            다양한 기술을 적용하고 문제를 해결하며 완성한 프로젝트를
            확인해보세요.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TabGroup className="p-1 md:mx-20">
            <TabList className="grid grid-cols-2 place-items-center gap-5 md:grid-cols-[repeat(4,_minmax(100px,200px))]">
              <Tab
                value="all"
                className="neumorphism-btn w-full rounded-xl p-2 text-sm/6 data-[selected]:text-accent-hover/70 data-[selected]:shadow-neumorphism-pressed focus:outline-none"
              >
                # All
              </Tab>
              {projectList.map((project, index) => (
                <Tab
                  key={index}
                  className="neumorphism-btn w-full rounded-xl p-2 text-sm/6 data-[selected]:text-accent-hover/80 data-[selected]:shadow-neumorphism-pressed focus:outline-none"
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
                    <ProjectCard
                      key={item.id}
                      data={item}
                      handleDialog={setOpenDialog}
                      handleSetData={setSelectedProject}
                    />
                  ))}
                </div>
              </TabPanel>
              {/* Individual Categories */}
              {projectList.map((project, index) => (
                <TabPanel key={index} className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {project.items.map((item) => (
                      <ProjectCard
                        key={item.id}
                        data={item}
                        handleDialog={setOpenDialog}
                        handleSetData={setSelectedProject}
                      />
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </motion.div>
        {openDialog && selectedProject !== null && (
          <DetailDialog
            data={selectedProject}
            handleOpenDialog={setOpenDialog}
          />
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
