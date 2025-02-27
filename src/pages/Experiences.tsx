// node modules
import { motion } from "framer-motion";

// components
import Title from "../components/layouts/Title";

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
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title
            title="Experiences"
            description="실무부터 학업과 교육, 다룰 수 있는 기술 스택까지, 저의 성장 경험을
            담았습니다."
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          {experiencesList.map((experience) => {
            const Content = experience.content;
            return (
              <div
                key={experience.id}
                className="my-14 grid grid-cols-1 gap-[20px] p-3 last:mb-0 md:mx-20 lg:grid-cols-[1fr_2fr]"
              >
                <div className="w-full place-self-start px-3">
                  {/* 제목 영역 */}
                  <h2 className="relative inline-block font-extrabold">
                    {experience.title}
                    <span className="absolute bottom-1 left-0 -z-10 h-[10px] w-full rounded-full bg-gradient-to-r from-accent-400"></span>
                  </h2>
                  {/* 제목 설명 영역 */}
                  <p className="text-light-text-secondary my-2 w-full break-keep text-sm font-light tracking-tighter sm:text-base">
                    {experience.description}
                  </p>
                </div>
                <div className="w-full">
                  {/* 본문 영역 */}
                  <motion.div
                    variants={fadeIn("right", 0)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.05 }}
                  >
                    <Content />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experiences;
