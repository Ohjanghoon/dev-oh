import { Img } from "react-image";

// icons
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const socials = [
  {
    name: "github",
    icon: FaGithub,
    path: "https://github.com/Ohjanghoon",
  },
  {
    name: "blog",
    icon: "/assets/icons/oh-note.svg",
    path: "https://oh-note.vercel.app",
  },
  {
    name: "notion",
    icon: SiNotion,
    path: "https://resonant-domain-4e3.notion.site/53cfc191e88c49bfa18e5134d8ac8eb0?v=29e43a1b1646438aac4082068e0398d4&pvs=4",
  },
];

function Social() {
  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map((item, index) => {
        return (
          <a
            href={item.path}
            target="_blank"
            key={index}
            className="neumorphism-btn flex h-12 w-12 items-center justify-center rounded-full text-2xl"
          >
            {typeof item.icon === "string" ? (
              <Img
                src={item.icon}
                alt={`${item.name} image`}
                className="h-6 w-6 rounded-md"
              />
            ) : (
              <item.icon />
            )}
          </a>
        );
      })}
    </div>
  );
}

export default Social;
