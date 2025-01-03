// interface
interface CategoryItem {
  category: string;
  content: string[];
}

interface WorkItem {
  name: string;
  duration: string;
  month: string;
  items: CategoryItem[];
}

// data
const workList: WorkItem[] = [
  {
    name: "IGI Korea",
    duration: "2022.12 ~ 2024.09",
    month: "1년 10개월",
    items: [
      {
        category: "Role",
        content: [
          "2D, 3D 프론트엔드 개발자 재직",
          "메타버스 컨텐츠 기획 참여",
          "대국민 서비스 북한정보포털 유지관리 참여",
        ],
      },
      {
        category: "Projects",
        content: [
          "AWS 서버리스 수습과제 개발",
          "Digital Twin(수자원공사, 신성이엔지) 개발",
          "Metaverse(KISTI 가상실험) 개발",
          "북한정보포털 대국민 서비스 플랫폼 유지관리",
        ],
      },
      {
        category: "Performance",
        content: ["사내 성과발표 2023 베스트 프리젠테이션상 수상"],
      },
    ],
  },
];

function Work() {
  return (
    <>
      {workList.map((work) => {
        return (
          <div
            className="relative w-full rounded-3xl shadow-lg ring-[0.3px] ring-zinc-700/20"
            key={work.name}
          >
            {/* 도트 포인트 */}
            <span className="bg-accent-700/25 absolute left-4 top-4 h-2 w-2 rounded-full"></span>
            <span className="bg-accent-700/55 absolute bottom-4 right-4 h-2 w-2 rounded-full"></span>

            {/* 본문 영역 */}
            <div className="px-10 py-7 text-sm/6">
              {/* 기업명 */}
              <h3 className="text-3xl font-bold">{work.name}</h3>
              {/* 재직 기간 */}
              <div className="xs:gap-[16px] xs:flex-row xs:items-center mt-1 flex flex-col items-start gap-[8px]">
                <span className="text-gray-400">{work.duration}</span>
                <span className="text-accent-400 py-1/2 rounded-full bg-zinc-50/50 px-3 text-[10px] font-semibold tracking-tighter ring-1">
                  {work.month}
                </span>
              </div>
              {/* 역할, 프로젝트, 성과 내용 영역 */}
              {work.items.map((item) => {
                return (
                  <div className="mt-3">
                    <h4 className="text-base font-semibold underline underline-offset-2">
                      {item.category}
                    </h4>
                    <ul aria-hidden="true">
                      {item.content.map((content, index) => {
                        return (
                          <li key={`${item.category} + ${index}`}>
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
