// data
import { workList } from "../../data/experienceData";

function Work() {
  return (
    <>
      {workList.map((work) => {
        return (
          <div
            className="neumorphism-card relative mt-5 w-full rounded-3xl first:mt-0"
            key={work.id}
          >
            {/* 도트 포인트 */}
            <span className="absolute left-4 top-4 h-2 w-2 rounded-full bg-accent-hover/25"></span>
            <span className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-accent-hover/55"></span>

            {/* 본문 영역 */}
            <div className="px-10 py-7 text-sm/6">
              {/* 기업명 */}
              <h3 className="text-3xl font-bold">{work.name}</h3>
              {/* 재직 기간 */}
              <div className="mt-1 flex flex-col items-start gap-[8px] xs:flex-row xs:items-center xs:gap-[16px]">
                <span className="text-light-text-neutral">{work.duration}</span>
                <span className="py-1/2 rounded-full bg-zinc-50/50 px-3 text-[10px] font-semibold text-accent-400 ring-1 dark:bg-accent-400 dark:text-zinc-50">
                  {work.month}
                </span>
              </div>
              {/* 역할, 프로젝트, 성과 내용 영역 */}
              {work.items.map((item) => {
                return (
                  <div className="mt-5" key={item.category}>
                    <p className="text-base font-semibold underline underline-offset-2">
                      {item.category}
                    </p>
                    <ul aria-hidden="true">
                      {item.content.map((content, index) => {
                        return (
                          <li key={index} className="mt-[2px]">
                            &middot; {content}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Work;
