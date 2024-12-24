import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { fadeIn } from "../util/variants";

const skills = [
  {
    category: "Languages",
    list: [
      {
        name: "JavaScript",
        icon: <StackIcon className="stack-icon" name="js" />,
      },
      {
        name: "TypeScript",
        icon: <StackIcon className="stack-icon" name="typescript" />,
      },
      { name: "Java", icon: <StackIcon className="stack-icon" name="java" /> },
      {
        name: "Python",
        icon: <StackIcon className="stack-icon" name="python" />,
      },
    ],
  },
  {
    category: "Frontend",
    list: [
      {
        name: "React",
        icon: <StackIcon className="stack-icon" name="reactjs" />,
      },
      {
        name: "Angular",
        icon: <StackIcon className="stack-icon" name="angular" />,
      },
      {
        name: "Next.js",
        icon: <StackIcon className="stack-icon" name="nextjs" />,
      },
      {
        name: "TailwindCSS",
        icon: <StackIcon className="stack-icon" name="tailwindcss" />,
      },
    ],
  },
  {
    category: "Backend",
    list: [
      {
        name: "Spring",
        icon: <StackIcon className="stack-icon" name="spring" />,
      },
    ],
  },
  {
    category: "Database",
    list: [
      {
        name: "Spring",
        icon: <StackIcon className="stack-icon" name="spring" />,
      },
    ],
  },
];

function Skill() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="flex h-screen max-h-screen w-full flex-col items-center justify-center"
    >
      <h2 className="h2 underline underline-offset-8">My Tech Skills</h2>
      <div className="mt-12">
        {skills.map((item, index) => {
          return (
            <div key={index} className="flex gap-6">
              <h3 className="h3">{item.category}</h3>
              {item.list.map((skill, index) => (
                <div
                  key={index}
                  className="shadow-neumorphism flex items-center gap-2 rounded-full bg-gray-200 p-3 font-semibold text-gray-700"
                >
                  <div className="shadow-neumorphism-pressed flex h-[40px] w-[40px] items-center justify-center rounded-full">
                    {skill.icon}
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skill;
