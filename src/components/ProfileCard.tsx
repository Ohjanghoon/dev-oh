// node modules
import { useState } from "react";
import { motion } from "framer-motion";

// icons
import { BsPhoneFlip } from "react-icons/bs";

const ProfileCard = () => {
  const [flip, setFlip] = useState(false);

  const profileInfo = [
    { title: "Name", content: "오장훈" },
    { title: "Age", content: "1995.02.20" },
    { title: "Phone", content: "010-8567-4105" },
    { title: "Address", content: "서울시 영등포구" },
    { title: "E-mail", content: "ojh4105@naver.com" },
  ];
  return (
    <div className="flip">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        className="flip_front flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl"
      >
        <div>
          <img
            src="/assets/dev-oh profile.png"
            alt="Ohjanghoon"
            className="h-52 w-full lg:h-72"
          />
        </div>
        <p className="text-sm font-semibold text-text-secondary underline underline-offset-2">
          Frontend Developer
        </p>
        <span
          className="cursor-pointer rounded-full px-4 py-1 text-accent-hover ring-1 ring-accent-hover hover:bg-accent-hover hover:text-text-light"
          onClick={() => setFlip((prev) => !prev)}
        >
          More Info
        </span>
      </motion.div>
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flip ? 360 : 180 }}
        transition={{ duration: 0.7 }}
        className="flip_back flex h-full w-full flex-col items-center justify-center gap-6 bg-white/50"
      >
        <table className="text-sm md:text-lg">
          <tbody>
            {profileInfo.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="font-extrabold text-accent-hover">
                    {item.title}
                  </td>
                  <td className="px-4 py-2">{item.content}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <span
          className="cursor-pointer rounded-full bg-accent-hover px-6 py-2 text-text-light"
          onClick={() => setFlip((prev) => !prev)}
        >
          <BsPhoneFlip className="text-2xl" />
        </span>
      </motion.div>
    </div>
  );
};

export default ProfileCard;

// {/* 이름 */}
<h2 className="my-2 hidden text-xl font-semibold text-gray-800 lg:block">
  오장훈
</h2>;
{
  /* 직책 */
}
<p className="hidden text-sm text-gray-600 lg:block">Frontend Developer</p>;
{
  /* 추가 정보 */
}
<div className="mt-4 w-full rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-500">
  <p>
    <span className="hidden lg:inline">E-mail:</span>
    <span className="tracking-wider">ojh9502@gmail.com</span>
  </p>
</div>;
