import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

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

function Social() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map((item, index) => {
        return (
          <a
            href={item.path}
            key={index}
            className="neumorphism-btn flex h-12 w-12 items-center justify-center rounded-full text-2xl"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}

export default Social;
