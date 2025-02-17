// data
import { educationList } from "../../data/experienceData";

function Education() {
  return (
    <div className="flex flex-col gap-5">
      {educationList.map((education) => {
        const Icon = education.icon;
        return (
          <div
            className="neumorphism-card relative flex w-full justify-center rounded-3xl md:justify-start"
            key={education.name}
          >
            {/* 도트 포인트 */}
            <span className="absolute left-4 top-4 h-2 w-2 rounded-full bg-accent-hover/25"></span>
            <span className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-accent-hover/55"></span>

            {/* 본문 내용 영역 */}
            <div className="flex flex-col items-center justify-stretch gap-x-5 px-8 py-6 md:flex-row md:justify-center">
              <h3 className="rounded-2xl bg-accent-500 p-3 align-middle text-3xl text-zinc-100 sm:mb-1 sm:text-2xl">
                <Icon />
              </h3>
              <span className="text-light-text-secondary font-semibold sm:text-lg">
                {education.duration}
              </span>
              <p className="font-semibold sm:text-lg">{education.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
