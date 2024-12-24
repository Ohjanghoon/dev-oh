import { motion } from "framer-motion";
import { fadeIn } from "../util/variants";

import ProfileCard from "./ProfileCard";
import Social from "./Social";
import { FiDownload } from "react-icons/fi";
import FloatingCard from "./\bFloatingCard";

function Home() {
  return (
    <motion.div className="animated-gradient">
      <section id="home" className="min-h-screen pt-36 lg:pt-40">
        <div className="container h-[32rem] items-center lg:grid lg:grid-cols-2 lg:gap-10">
          {/* Home 설명 영역 */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h-full w-full"
          >
            {/* Home 설명__프로필 영역 */}
            <div className="mb-4 flex items-center gap-3 pt-10">
              <div className="flex items-center gap-1.5 text-sm tracking-wide text-gray-700">
                <figure className="img-box h-9 w-9 rounded-lg">
                  <img
                    src="/src/assets/dev-oh avatar.png"
                    width={40}
                    height={40}
                    alt="dev-oh portrait"
                    className="img-cover"
                  />
                </figure>
                <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
                </span>
                Active
              </div>
            </div>
            {/* Home 설명__슬로건 영역 */}
            <div className="font-mono">
              <h2 className="h2 mb-8 mt-3 break-keep">
                Hello I'm <br />
                <p className="text-accent-hover mt-3">JangHoon Oh</p>
              </h2>
              <p className="mb-9 max-w-[500px]">
                성장을 위해 끊임없이 노력하고, <br />
                협력의 가치를 소중히 여기는 2년차 프론트엔드 개발자 입니다.
              </p>
            </div>

            {/* btn & socials */}
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <button className="neumorphisom-btn flex items-center gap-2 rounded-full border px-8 py-5 uppercase">
                <span>Download CV</span>
                <FiDownload className="text-secandary text-xl" />
              </button>
              <div className="mb-8 md:mb-0">
                <Social />
              </div>
            </div>
            {/* <div className="flex items-center gap-3">
              <Social />
            </div> */}
          </motion.div>

          <ProfileCard />
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
