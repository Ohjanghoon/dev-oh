import { motion } from "framer-motion";
import { dotVariant } from "../utils/variants";

const GalaxyDiagonalBackground = () => {
  const dots = Array.from({ length: 30 }); // 50개의 도트 생성

  return (
    <div className="absolute inset-0 overflow-hidden bg-transparent">
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-accent-hover/10"
          variants={dotVariant}
          custom={i}
          animate="animate"
          style={{
            top: `${Math.random() * 20}vh`, // 초기 위치 (화면 상단)
            left: `${Math.random() * 100}vw`, // 초기 위치 (화면 랜덤 위치)
          }}
        />
      ))}
    </div>
  );
};

export default GalaxyDiagonalBackground;
