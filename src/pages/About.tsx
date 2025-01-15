// node modules
import { motion } from "framer-motion";
import { useState } from "react";

// utils
import { fadeIn } from "../utils/variants";

// data
import { aboutList } from "../data/aboutData";
import Title from "../components/layouts/Title";

function About() {
  const [isVisibleIndex, setIsVisibleIndex] = useState<number | null>(null);
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* title 영역 */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="my-8 text-center md:mx-20"
        >
          <Title
            title="About Me"
            description="열정과 도전으로 성장하는 IT 개발자, 저를 소개합니다."
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="my-8 grid min-h-[50vh] gap-6 p-3 text-center md:mx-20"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {aboutList.map((item, index) => {
              const Icon = item.icon;
              const isClicked = isVisibleIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setIsVisibleIndex(isClicked ? null : index)}
                  className="relative flex cursor-pointer flex-col gap-3 overflow-hidden rounded-xl p-3 shadow-neumorphism"
                >
                  <motion.div
                    initial={{ top: 0, opacity: 1 }}
                    animate={{
                      top: isClicked ? "-100%" : "0%",
                      opacity: isClicked ? "0.7" : "1",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="group absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-xl bg-background-light p-5"
                  >
                    <div className="rounded-3xl bg-zinc-100 p-5 transition-all duration-300 ease-in group-hover:rounded-full group-hover:shadow-neumorphism-pressed">
                      <Icon className="text-5xl group-hover:text-accent-hover" />
                    </div>
                    <h5 className="h5 mt-5 group-hover:text-accent-hover">
                      {item.keyword}
                    </h5>
                  </motion.div>
                  <div className="flex">
                    <h5 className="h5 rounded-xl p-3 text-accent-hover">Q.</h5>
                    <span className="my-auto text-[13px] font-extrabold xs:text-[14.8px] md:text-lg md:font-semibold">
                      {item.question}
                    </span>
                  </div>
                  <div className="flex">
                    <img
                      src="/public/assets/dev-oh avatar.png"
                      alt="dev-oh portrait"
                      className="h-[40px] w-[40px] rounded-full"
                    />
                    <p className="w-full rounded-lg p-2 text-start text-[13px] xs:text-[14.8px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="relative flex min-h-[30vh] flex-col justify-between rounded-lg bg-zinc-100 ring-2 ring-zinc-800">
            <div className="flex p-3">
              <h5 className="h5 h-[40px] w-[40px] rounded-lg bg-accent px-3 py-2 text-text-light">
                Q
              </h5>
              <span className="mx-3 my-auto text-[13px] font-extrabold xs:text-[14.8px] md:text-lg md:font-semibold">
                개발자로서 중요하게 생각하는 가치는 무엇인가요?
              </span>
            </div>
            <div className="flex justify-end gap-3 p-3">
              <p className="w-full p-2 rounded-lg text-start">
                꾸준한 학습을 위해 기술 서적을 읽고, 온라인 강의를 통해 새로운
                기술 트렌드를 익히고 있습니다. <br /> 또한, 개인 프로젝트를 통해
                배운 지식을 실습하고, GitHub를 활용해 결과를 공유하며 성장의
                기록을 남기고 있습니다.
              </p>
              <img
                src="src/public/assets/notion-avatar-right.png"
                alt="dev-oh portrait"
                className="h-[50px] w-[50px] rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {aboutList.map((item) => {
              return (
                <div
                  className="relative flex flex-col w-full gap-4 p-4 rounded-lg card group hover:h-fit"
                  key={item.id}
                >
                  <div className="flex">
                    <h5 className="h5 h-[40px] w-[40px] rounded-lg bg-accent px-3 py-2 text-text-light">
                      Q
                    </h5>
                    <span className="mx-3 my-auto text-[13px] font-extrabold xs:text-[14.8px] md:text-lg md:font-semibold">
                      {item.question}
                    </span>
                  </div>

                  <div className="hidden group-hover:flex group-hover:transition-all group-hover:duration-500">
                    <span className="h5 h-[38px] min-w-[38px] rounded-lg px-3 py-2 text-accent ring-[1px] ring-accent">
                      A
                    </span>
                    <p className="mx-3 mt-1 text-base leading-7 break-keep text-start">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
