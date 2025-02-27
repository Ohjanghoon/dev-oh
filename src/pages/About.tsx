// node modules
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";

// data
import Title from "../components/layouts/Title";

function About() {
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
          // className="my-8 grid min-h-[50vh] gap-6 p-3 text-center md:mx-20"
        >
          <div className="my-14 grid grid-cols-1 gap-[20px] p-3 last:mb-0 md:mx-20 lg:grid-cols-[1fr_2fr]">
            <div className="w-full place-self-start px-3">
              {/* 제목 영역 */}
              <h2 className="relative inline-block font-extrabold">
                Introduce
                <span className="absolute bottom-1 left-0 -z-10 h-[10px] w-full rounded-full bg-gradient-to-r from-accent-400"></span>
              </h2>
              {/* 제목 설명 영역 */}
              <p className="text-light-text-secondary my-2 w-full break-keep text-sm font-light tracking-tighter sm:text-base">
                #프론트엔드 #성장 #배움
              </p>
            </div>
            <div className="neumorphism-card relative mt-0 w-full rounded-3xl">
              {/* 도트 포인트 */}
              <span className="absolute left-4 top-4 h-2 w-2 rounded-full bg-accent-hover/25"></span>
              <span className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-accent-hover/55"></span>

              {/* 본문 영역 */}
              <div className="px-10 py-7 text-sm/6">
                <div className="w-full leading-8 tracking-tighter">
                  <p className="align-middle text-lg font-semibold">
                    “안녕하세요! 2년차 웹 프론트엔드 개발자 오장훈입니다.”
                  </p>
                  <br />
                  <p>
                    저는{" "}
                    <span className="font-semibold">
                      TypeScript, React, Angular
                    </span>
                    를 중심으로 개발하며, Java, OracleDB, Python, AWS 등 다양한
                    기술을 활용한 경험이 있습니다.
                    <br />
                    메타버스 교육 플랫폼과 대국민 서비스 웹사이트 유지보수 등
                    다양한 프로젝트에서 쌓은 경험을 바탕으로 UI/UX 최적화 및 웹
                    성능 개선에 기여해 왔습니다.
                  </p>
                  <br />
                  <p>
                    또한, 개발은 혼자가 아닌 팀과 함께 만들어가는 과정이라고
                    생각합니다. 개발팀, 디자이너, 기획자 등 다양한 동료들과
                    협업하며, 원활한 소통을 통해 요구사항을 효과적으로 반영하고
                    있습니다. <br />
                    특히, 북한정보포털 프로젝트에서는 기획자 및 관리자들과
                    긴밀히 소통하며 CMS 시스템의 UX를 개선하는 작업에
                    참여하였고, 이를 통해 사용자 편의성을 높이고, 다양한
                    요구사항을 개발에 효과적으로 반영하는 경험을 쌓을 수
                    있었습니다.
                  </p>
                  <br />
                  <p>
                    나아가 저는 기술을 학습한 뒤 실무에 적용하는 과정을 중요하게
                    생각합니다. 새로운 기술을 배우는 것에 그치지 않고, 이를 실제
                    프로젝트에 효과적으로 적용하여 사용자 경험을 개선하는 데
                    집중하고 있습니다.
                    <br />
                    앞으로도 지속적인 배움을 통해 기술을 익히고, 경험을 바탕으로
                    꾸준히 성장하는 개발자가 되고자 합니다.
                  </p>
                  <br />
                  <p>감사합니다.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="my-14 grid grid-cols-1 gap-[20px] p-3 last:mb-0 md:mx-20 lg:grid-cols-[1fr_2fr]">
            <div className="w-full px-3 place-self-start">
              <h2 className="relative inline-block font-extrabold">
                Interview
                <span className="absolute bottom-1 left-0 -z-10 h-[10px] w-full rounded-full bg-gradient-to-r from-accent-400"></span>
              </h2>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-6">
                {aboutList.map((item, index) => {
                  const Icon = item.icon;
                  const isClicked = isVisibleIndex === index;
                  return (
                    <div
                      key={index}
                      onClick={() =>
                        setIsVisibleIndex(isClicked ? null : index)
                      }
                      className="relative flex min-h-[150px] cursor-pointer flex-col gap-2 overflow-hidden rounded-xl p-3 shadow-neumorphism"
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
                        className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-5 bg-primary group rounded-xl"
                      >
                        <div className="bg-surface rounded-3xl p-5 transition-all duration-300 ease-in group-hover:rounded-[50%] group-hover:shadow-neumorphism-pressed">
                          <Icon className="text-3xl group-hover:text-accent-hover" />
                        </div>
                        <h5 className="mt-5 h5 group-hover:text-accent-hover">
                          {item.keyword}
                        </h5>
                      </motion.div>
                      <div className="flex">
                        <h5 className="p-3 h5 rounded-xl text-accent-hover">
                          Q.
                        </h5>
                        <span
                          className="my-auto text-[13px] font-extrabold xs:text-[14.8px] md:text-lg md:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: item.question,
                          }}
                        ></span>
                      </div>
                      <div className="flex">
                        <img
                          src="/assets/dev-oh avatar.png"
                          alt="dev-oh portrait"
                          className="h-[30px] w-[30px] rounded-full"
                        />
                        <p className="w-full rounded-lg p-2 text-start text-[13px] xs:text-[14.8px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
              </div>*/}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
