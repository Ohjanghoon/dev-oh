import { ProjectDTO } from "../types/projectTypes";

export const projectList: ProjectDTO[] = [
  {
    category: "Personal",
    items: [
      {
        id: "1",
        title: "Galaxy Animation Portfolio",
        type: {
          name: "개인 프로젝트",
          color: "",
        },
        description:
          "A portfolio showcasing personal projects with an interactive galaxy animation.",
        technologies: ["React", "Framer Motion", "TailwindCSS"],
        role: "Frontend Developer",
        duration: {
          start: "2024-11-01",
          end: "2024-12-15",
        },
        teamSize: 1,
        responsibilities: [
          "Developed interactive galaxy animation using Framer Motion",
          "Designed responsive layout with TailwindCSS",
          "Implemented SEO optimization",
        ],
        achievements: [
          "Increased portfolio traffic by 40% after launch",
          "Praised for innovative animation by peers",
        ],
        repositoryUrl: "https://github.com/username/galaxy-portfolio",
        liveDemoUrl: "https://galaxy-portfolio.com",
        thumbnail: "",
        screenshots: ["/images/project1-1.png", "/images/project1-2.png"],
      },
    ],
  },

  {
    category: "Corporate",
    items: [
      // 북한정보포털(24.01 ~ 24.09)
      {
        id: "corporate_project_05",
        title: "북한정보포털",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        description:
          "통일부에서 운영하는 북한 관련 데이터 제공 웹사이트의 안정적인 서비스 제공 및 기능 개선을 목표로 한 유지보수 프로젝트에 참여하였습니다.",
        technologies: [
          "Java",
          "전자정부 프레임워크",
          "CUBRID",
          "JavaScript",
          "Apache",
          "Tomcat",
          "JBoss",
          "Python",
          "GitLab",
          "Google Workspace",
        ],
        role: "Frontend Developer",
        duration: {
          start: "2024.01",
          end: "2024.09",
        },
        teamSize: 1,
        responsibilities: [
          "신규 기능 개발 및 기존 코드 최적화, 에러사항 수정",
          "운영 환경 배포",
          "보안 점검 및 패치 적용",
        ],
        achievements: [
          "고객의 요구 사항을 신속히 반영하여 사용자 편의성 및 만족도 향상에 기여 ",
          "메인 페이지의 JS 파일 및 데이터베이스 쿼리를 최적화하여 로딩 시간을 단축하고 성능 개선에 기여",
        ],
        repositoryUrl: "https://github.com/username/galaxy-portfolio",
        liveDemoUrl: "https://nkinfo.unikorea.go.kr/nkp/main/portalMain.do",
        thumbnail: "/src/assets/images/projects/project_05_01.png",
        screenshots: [
          "/src/assets/images/projects/project_05_01.png",
          "/src/assets/images/projects/project_05_02.png",
          "/src/assets/images/projects/project_05_03.png",
          "/src/assets/images/projects/project_05_04.png",
        ],
      },
      // KISTI (24.01 ~ 24.09)
      {
        id: "corporate_project_04",
        title: "KISTI 가상실험실 메타버스",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        description:
          "교육용 메타버스 플랫폼에서 실험 콘텐츠를 직관적이고 인터랙티브하게 구현하여, 학습자들이 몰입감 있게 실험 과정을 경험할 수 있도록 설계 및 개발에 참여하였습니다.",
        technologies: [
          "Angular",
          "RxJS",
          "BabylonJS",
          "TypeScript",
          "AWS(Amplify)",
        ],
        role: "Frontend Developer",
        duration: {
          start: "2023.04",
          end: "2023.11",
        },
        teamSize: 1,
        responsibilities: [
          "신규 기능 개발 및 레거시 코드 최적화, 에러사항 수정",
          "폐쇄형 내부 CMS(콘텐츠 관리 시스템) 기능 개발",
          "운영 환경 배포",
          "보안 점검 및 패치 적용",
        ],
        achievements: [
          "고객의 요구 사항을 신속히 반영하여 사용자 편의성 및 만족도 향상에 기여 ",
          "메인 페이지의 JS 파일 및 데이터베이스 쿼리를 최적화하여 로딩 시간을 단축하고 성능 개선에 기여",
        ],
        repositoryUrl: "",
        liveDemoUrl:
          "https://vlabon.re.kr/contents/3c233aedb486b17b84d3f85bf44303c6",
        thumbnail: "/src/assets/images/projects/project_04_01.png",
        screenshots: [
          "/src/assets/images/projects/project_05_01.png",
          "/src/assets/images/projects/project_05_02.png",
          "/src/assets/images/projects/project_05_03.png",
          "/src/assets/images/projects/project_05_04.png",
        ],
      },
    ],
  },
  {
    category: "Educational",
    items: [
      {
        id: "2",
        title: "Galaxy Animation Portfolio",
        type: {
          name: "공부 프로젝트",
          color: "bg-blue-400",
        },
        description:
          "A portfolio showcasing personal projects with an interactive galaxy animation.",
        technologies: ["React", "Framer Motion", "TailwindCSS"],
        role: "Frontend Developer",
        duration: {
          start: "2024-11-01",
          end: "2024-12-15",
        },
        teamSize: 1,
        responsibilities: [
          "Developed interactive galaxy animation using Framer Motion",
          "Designed responsive layout with TailwindCSS",
          "Implemented SEO optimization",
        ],
        achievements: [
          "Increased portfolio traffic by 40% after launch",
          "Praised for innovative animation by peers",
        ],
        repositoryUrl: "https://github.com/username/galaxy-portfolio",
        liveDemoUrl: "https://galaxy-portfolio.com",
        thumbnail: "",
        screenshots: ["/images/project1-1.png", "/images/project1-2.png"],
      },
    ],
  },
];
