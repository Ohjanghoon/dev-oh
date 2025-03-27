// node modules
import { motion } from "framer-motion";

// data
import { studyList } from "../data/projectData";

function Learning() {
  return (
    <div className="flex w-full flex-col flex-wrap gap-5 p-1 text-xs md:px-52 lg:flex-row">
      {studyList.map((item) => {
        const Icon = item.icon;
        return (
          <a
            href={item.repositoryUrl}
            target="_blank"
            className="flex-1 basis-1/3"
            key={item.id}
          >
            <motion.div
              whileHover={{
                border: "1px solid black",
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              className="flex items-center gap-6 rounded-lg px-5 py-2 ring-1 ring-gray-400"
            >
              <Icon className="text-3xl" />
              <div className="text-start">
                <p className="text-[15px] font-semibold">{item.title}</p>
                <p className="mt-1 text-light-text-secondary">
                  {item.duration.start} ~ {item.duration.end}
                </p>
                <span className="mt-2 inline-block rounded border-[1px] border-gray-400 p-1">
                  {item.reference}
                </span>
              </div>
            </motion.div>
          </a>
        );
      })}
    </div>
  );
}

export default Learning;
