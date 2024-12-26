import { motion } from "framer-motion";
import { fadeIn } from "../util/variants";

const ProfileCard = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{
        scale: 1.05, // 카드 크기를 1.05배로 증가
        rotate: -2, // 약간 회전시켜서 바운스 효과를 강조
        transition: { type: "spring", stiffness: 200, damping: 10 }, // 바운스 효과
      }}
      className="z-10 hidden lg:flex lg:justify-center"
    >
      <div className="flex h-[32rem] w-[22rem] flex-col items-center justify-center rounded-3xl bg-white/50 p-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:rotate-2">
        <div className="rounded-3xl pt-10">
          <img
            src="/src/assets/dev-oh profile.png"
            alt="Ohjanghoon"
            className="h-72"
          />
        </div>
        {/* 이름 */}
        <h2 className="my-2 text-xl font-semibold text-gray-800">오장훈</h2>
        {/* 직책 */}
        <p className="mb-4 text-sm text-gray-600">Frontend Developer</p>
        {/* 추가 정보 */}
        <div className="w-full rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-500">
          <p>
            E-mail: <span className="tracking-wider">ojh9502@gmail.com</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
