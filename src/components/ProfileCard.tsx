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
    { title: "E-mail", content: "ojh4105@naver.com" },
  ];
  return (
    <div className="flip-card">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        className="flip-card-front flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl"
      >
        <div>
          <img
            src="/assets/dev-oh profile.png"
            alt="Ohjanghoon"
            className="h-52 w-full lg:h-72"
          />
        </div>
        <p className="text-light-text-secondary text-sm font-semibold underline underline-offset-2">
          Frontend Developer
        </p>
        <span
          className="hover:text-light-text-light cursor-pointer rounded-full px-4 py-1 text-accent-hover ring-1 ring-accent-hover hover:bg-accent-hover"
          onClick={() => setFlip((prev) => !prev)}
        >
          More Info
        </span>
      </motion.div>
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flip ? 360 : 180 }}
        transition={{ duration: 0.7 }}
        className="flip-card-back flex h-full w-full flex-col items-center justify-center gap-6 bg-white/50"
      >
        <table className="text-sm md:text-lg">
          <tbody>
            <tr>
              <td colSpan={2}>
                <img
                  src="/assets/dev-oh avatar.png"
                  className="mx-auto my-5 h-28 w-28 rounded-full"
                  alt="avatar"
                />
              </td>
            </tr>
            {profileInfo.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="font-extrabold text-accent-hover">
                    {item.title}
                  </td>
                  <td className="py-2 md:px-3">{item.content}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <span
          className="text-light-text-light cursor-pointer rounded-full bg-accent-hover px-6 py-2"
          onClick={() => setFlip((prev) => !prev)}
        >
          <BsPhoneFlip className="text-2xl" />
        </span>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
