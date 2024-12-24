import React, { useState } from "react";
import { motion } from "framer-motion";

const DynamicFloatingCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 마우스 위치 업데이트 함수
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100; // 카드의 가로 위치 (%)
    const y = ((e.clientY - top) / height) * 100; // 카드의 세로 위치 (%)
    setMousePosition({ x, y });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <motion.div
        className="relative h-96 w-80 rounded-xl"
        style={{
          perspective: "1000px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 50, y: 50 })} // 초기화
      >
        <motion.div
          className="absolute inset-0 rounded-xl shadow-lg"
          style={{
            background: "linear-gradient(to right, #0000C5, #4D4DFF)",
            transformStyle: "preserve-3d",
            boxShadow: `${(mousePosition.x - 50) / 5}px ${
              (mousePosition.y - 50) / 5
            }px 20px rgba(0, 0, 0, 0.4)`,
          }}
          animate={{
            rotateX: -(mousePosition.y - 50) / 5, // Y축 회전
            rotateY: (mousePosition.x - 50) / 5, // X축 회전
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          {/* 카드 내용 */}
          <div className="flex h-[32rem] w-[22rem] flex-col items-center justify-center rounded-3xl bg-white/90 p-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
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
              <p>사원번호: 123456</p>
              <p>입사일: 2022-03-01</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DynamicFloatingCard;
