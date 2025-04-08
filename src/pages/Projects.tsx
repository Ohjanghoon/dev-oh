// node modules
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";

// components
import ProjectCard from "../components/ProjectCard";
import DetailDialog from "../components/DetailDiaglog";
import Title from "../components/layouts/Title";
import Learning from "../components/Learning";

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

  // 모든 프로젝트를 하나의 배열로 병합 후 날짜 내림차순 정렬(#All 태그를 활용하기 위함.)
  const allProjects = projectList
    .flatMap((project) => project.items)
    .sort((a, b) => {
      const dateA = new Date(a.duration.start.replace(".", "-")).getTime();
      const dateB = new Date(b.duration.start.replace(".", "-")).getTime();

      if (dateA == dateB) {
        const dateAend = new Date(a.duration.end.replace(".", "-")).getTime();
        const dateBend = new Date(b.duration.end.replace(".", "-")).getTime();
        return dateBend - dateAend;
      }
      return dateB - dateA;
    });

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
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title
            title="Projects"
            description="다양한 프로젝트를 통해 경험과 기술들을 쌓고 있습니다."
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
        >
          <TabGroup className="p-1 md:mx-20">
            <TabList className="grid grid-cols-2 place-items-center gap-5 px-10 lg:grid-cols-[repeat(4,_minmax(100px,_1fr))]">
              <Tab
                value="all"
                className="neumorphism-btn-selected neumorphism-btn w-full rounded-xl p-3 text-sm/6 focus:outline-none"
              >
                # All
              </Tab>
              {projectList.map((project, index) => (
                <Tab
                  className="neumorphism-btn-selected neumorphism-btn w-full rounded-xl p-3 text-sm/6 focus:outline-none"
                  key={index}
                >
                  # {project.category}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-12">
              {/* All Projects */}
              <TabPanel>
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
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20"
        >
          <Title title="learnings" description="" />
          <Learning />
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
