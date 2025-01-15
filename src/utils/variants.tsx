export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const dotVariant = {
  animate: () => ({
    y: ["-10vh", "80vh"], // 위에서 아래로 떨어짐
    x: ["10vw", "-10vw"], // 좌측에서 우측으로 사선 이동
    opacity: [0, 1, 0], // 페이드 인-아웃 효과
    transition: {
      duration: Math.random() * 20 + 3, // 3~6초의 랜덤 지속시간
      repeat: Infinity,
      delay: Math.random() * 2, // 시작 지연 시간
    },
  }),
};
