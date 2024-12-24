import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { Link } from "react-router-dom";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <SiNotion />,
    path: "",
  },
];

// containerStyles=""
// iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"

function Social() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map((item, index) => {
        return (
          <a
            href={item.path}
            key={index}
            className="neumorphisom-btn flex h-12 w-12 items-center justify-center rounded-full text-2xl"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}

export default Social;
