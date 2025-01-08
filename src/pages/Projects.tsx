// node modules
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";

// components
import ProjectCard from "../components/ProjectCard";
import DetailDialog from "../components/DetailDiaglog";

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
            <Tab
              value="all"
              className="neumorphism-btn w-1/6 rounded-xl px-1 py-2 text-sm/6 font-semibold data-[selected]:bg-accent-hover/15 data-[selected]:text-accent-hover data-[selected]:shadow-neumorphism-pressed focus:outline-none"
            >
              # All
            </Tab>
            {projectList.map((project, index) => (
              <Tab
                key={index}
                className="neumorphism-btn w-1/6 rounded-xl p-2 text-sm/6 font-semibold data-[selected]:bg-accent-hover/15 data-[selected]:text-accent-hover data-[selected]:shadow-neumorphism-pressed focus:outline-none"
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
        {openDialog && selectedProject !== null && (
          <DetailDialog
            data={selectedProject}
            handleOpenDialog={setOpenDialog}
          />
        )}
      </section>
    </motion.div>
  );
};

export default Projects;
