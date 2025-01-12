// icons
import { GiCubes } from "react-icons/gi";
import { MdFactory } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { HiServer } from "react-icons/hi";
import { PiTentDuotone } from "react-icons/pi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";

import { ProjectDTO } from "../types/projectTypes";

export const projectList: ProjectDTO[] = [
  {
    category: "Personal",
    items: [],
  },
  {
    category: "Corporate",
    items: [
      // 북한정보포털(24.01 ~ 24.09)
      {
        id: "corporate_project_04",
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
        icon: MdOutlineDesktopWindows,
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
          "/src/assets/images/projects/corporate/project_05_01.png",
          "/src/assets/images/projects/corporate/project_05_02.png",
          "/src/assets/images/projects/corporate/project_05_03.png",
          "/src/assets/images/projects/corporate/project_05_04.png",
        ],
      },
      // KISTI (23.05 ~ 23.11)
      {
        id: "corporate_project_03",
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
        icon: GiCubes,
        role: "Frontend Developer",
        duration: {
          start: "2023.05",
          end: "2023.11",
        },
        teamSize: 1,
        responsibilities: [""],
        achievements: [""],
        repositoryUrl: "",
        liveDemoUrl:
          "https://vlabon.re.kr/contents/3c233aedb486b17b84d3f85bf44303c6",
        thumbnail: "/src/assets/images/projects/project_04_01.png",
        screenshots: [],
      },
      // DIGITAL TWIN (23.02 ~ 23.05)
      {
        id: "corporate_project_02",
        title: "Digitial Twin",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        description: "",
        technologies: [
          "Angular",
          "RxJS",
          "BabylonJS",
          "TypeScript",
          "AWS(Amplify)",
        ],
        icon: MdFactory,
        role: "Frontend Developer",
        duration: {
          start: "2023.02",
          end: "2023.05",
        },
        teamSize: 1,
        responsibilities: [""],
        achievements: [""],
        repositoryUrl: "",
        liveDemoUrl: "",
        thumbnail: "/src/assets/images/projects/project_04_01.png",
        screenshots: [],
      },
      // AWS Serverless (22.12 ~ 23.02)
      {
        id: "corporate_project_01",
        title: "AWS Serverless",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        description: "",
        technologies: [
          "Angular",
          "TypeScript",
          "AWS(Amplify)",
          "AWS(S3)",
          "AWS(Lamda)",
          "AWS(APIGateway)",
          "AWS(Cognito)",
          "AWS(DynamoDB)",
        ],
        icon: HiServer,
        role: "Frontend Developer",
        duration: {
          start: "2022.12",
          end: "2023.02",
        },
        teamSize: 1,
        responsibilities: [""],
        achievements: [""],
        repositoryUrl: "",
        liveDemoUrl: "",
        thumbnail: "/src/assets/images/projects/project_04_01.png",
        screenshots: [],
      },
    ],
  },
  {
    category: "Educational",
    items: [
      // 캠핑이지 프로젝트 (22.06 ~ 22.07)
      {
        id: "educational_project_03",
        title: "Spring 기초 프로젝트",
        type: {
          name: "공부 프로젝트",
          color: "bg-blue-400",
        },
        description: "",
        technologies: [
          "Java",
          "Spring",
          "OracleDB",
          "myBatis",
          "JSP",
          "Ajax",
          "CSS",
          "Bootstrap",
        ],
        icon: PiTentDuotone,
        role: "Frontend Developer",
        duration: {
          start: "2022.08",
          end: "2022.09",
        },
        teamSize: 1,
        responsibilities: [
          "마이페이지의 주요 기능인 장바구니, 주문내역, 관심상품, 작성글 조회 기능을 담당하여 개발하였습니다.",
        ],
        achievements: [
          "Increased portfolio traffic by 40% after launch",
          "Praised for innovative animation by peers",
        ],
        repositoryUrl: "Ohjanghoon.github.io",
        liveDemoUrl: "https://ohjanghoon.github.io/",
        thumbnail: "",
        screenshots: [
          "/src/assets/images/projects/educational/educational_project_02_01.png",
        ],
      },
      // 주신사 프로젝트 (22.06 ~ 22.07)
      {
        id: "educational_project_02",
        title: "Java 기초 프로젝트",
        type: {
          name: "공부 프로젝트",
          color: "bg-blue-400",
        },
        description:
          "Java 기반으로 MVC 패턴을 적용하여 회원가입, 상품 조회, 장바구니 등 주요 기능을 개발하였고 더불어 관계형 DB 설계를 진행하였습니다. 무신사 쇼핑몰을 참고하여 진행한 팀 프로젝트로 역할 분담을 통해 팀워크 및 프로젝트 관리 역량을 강화할 수 있었습니다. ",
        technologies: ["Java", "OracleDB", "Servlet/JSP", "Ajax", "CSS"],
        icon: RiShoppingBag3Fill,
        role: "Frontend Developer",
        duration: {
          start: "2022.06",
          end: "2022.06",
        },
        teamSize: 1,
        responsibilities: [
          "마이페이지의 주요 기능인 장바구니, 주문내역, 관심상품, 작성글 조회 기능을 담당하여 개발하였습니다.",
        ],
        achievements: [
          "Increased portfolio traffic by 40% after launch",
          "Praised for innovative animation by peers",
        ],
        repositoryUrl: "Ohjanghoon.github.io",
        liveDemoUrl: "https://ohjanghoon.github.io/",
        thumbnail: "",
        screenshots: [
          "/src/assets/images/projects/educational/educational_project_02_01.png",
        ],
      },
      // HTML/CSS/JS 기초 프로젝트 (22.06 ~ 22.06)
      {
        id: "educational_project_01",
        title: "HTML/CSS/JS 기초 프로젝트",
        type: {
          name: "공부 프로젝트",
          color: "bg-blue-400",
        },
        description:
          "HTML과 CSS, JavaScript를 활용하여 정적인 웹사이트를 설계 및 구현을 통해 웹 개발 기초 역량과 코딩 감각을 학습하였습니다.",
        technologies: ["HTML", "CSS", "JavaScript"],
        icon: FaHtml5,
        role: "Frontend Developer",
        duration: {
          start: "2022.06",
          end: "2022.06",
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
        repositoryUrl: "Ohjanghoon.github.io",
        liveDemoUrl: "https://ohjanghoon.github.io/",
        thumbnail: "",
        screenshots: [
          "/src/assets/images/projects/educational/educational_project_01_01.png",
          "/src/assets/images/projects/educational/educational_project_01_02.png",
          "/src/assets/images/projects/educational/educational_project_01_03.png",
          "/src/assets/images/projects/educational/educational_project_01_04.png",
        ],
      },
    ],
  },
];
