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
          viewport={{ once: true, amount: 0.2 }}
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
          viewport={{ once: true, amount: 0.2 }}
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
                  className="relative flex min-h-[250px] cursor-pointer flex-col gap-3 overflow-hidden rounded-xl p-3 shadow-neumorphism"
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
                    className="bg-primary group absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-xl p-5"
                  >
                    <div className="bg-surface rounded-3xl p-5 transition-all duration-300 ease-in group-hover:rounded-[50%] group-hover:shadow-neumorphism-pressed">
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
                      src="/assets/dev-oh avatar.png"
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
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
