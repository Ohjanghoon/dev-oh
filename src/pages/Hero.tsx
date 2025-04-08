// node modules
import { motion } from "framer-motion";

// components
import ProfileCard from "../components/ProfileCard";
import Social from "../components/Social";
import GalaxyBackground from "../components/BackgroundAnimation";

// utils
import { fadeIn } from "../utils/variants";

// icons
import { FiDownload } from "react-icons/fi";

function Hero() {
  return (
    <section className="container">
      <GalaxyBackground />
      <div className="mt-0 flex flex-col items-center justify-around md:mt-28 md:flex-row">
        {/* Home 설명 영역 */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="z-10 order-2 p-4 md:order-1"
        >
          {/* Home 설명__프로필 영역 */}
          <div className="flex items-center gap-1.5 pt-5 text-sm tracking-wide text-light-text-secondary">
            <span className="relative h-3 w-3 rounded-full bg-emerald-400">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
            </span>
            Active
          </div>

          {/* Home 설명__슬로건 영역 */}
          <div className="mt-4">
            <h1 className="h1 break-keep font-extrabold">
              Hello I'm <br />
              <motion.p
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-3 text-accent-hover"
              >
                JangHoon Oh
              </motion.p>
            </h1>
            <div className="mt-5 max-w-[400px] text-light-text-secondary">
              <p>"안녕하세요. 소통하는 웹 프론트엔드 개발자 오장훈입니다.</p>
              <p>
                해당 사이트는 React 기반으로 구현된 개인 포트폴리오
                사이트입니다."
              </p>
            </div>
          </div>

          {/* btn & socials */}
          <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
            <a
              title="resume_download_link"
              href="/assets/resume/경력기술서_오장훈.pdf"
              download="경력기술서_오장훈.pdf"
            >
              <button
                aria-label="resume_download_button"
                className="flex items-center gap-2 rounded-[6rem] bg-gradient-to-br from-accent/50 to-cyan-400/60 px-8 py-5 uppercase text-white"
              >
                <span className="text-[11px] xs:text-[13px] md:text-base">
                  PDF로 보기
                </span>
                <FiDownload className="text-secandary md:text-xl" />
              </button>
            </a>

            <Social />
          </div>
          {/* <div className="flex items-center gap-3">
      <Social />
    </div> */}
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{
            scale: 1.05, // 카드 크기를 1.05배로 증가
            // rotate: -2, // 약간 회전시켜서 바운스 효과를 강조
            transition: { type: "spring", stiffness: 200, damping: 10 }, // 바운스 효과
          }}
          className="z-10 order-1 md:order-2"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
