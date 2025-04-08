// icons
import { GiCubes } from "react-icons/gi";
import {
  MdFactory,
  MdOutlineDesktopWindows,
  MdPhotoLibrary,
} from "react-icons/md";
import { HiServer } from "react-icons/hi";
import { PiTentDuotone, PiStairsDuotone } from "react-icons/pi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaHtml5, FaReact } from "react-icons/fa";
import { BsPersonBadgeFill } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import { LuNotebookPen } from "react-icons/lu";

import { ProjectDTO } from "../types/projectTypes";

export const projectList: ProjectDTO[] = [
  {
    category: "Personal",
    items: [
      // oh-note(25.03 ~ 25.03)
      {
        id: "personal/personal_project_06",
        title: "oh-note 블로그",
        type: {
          name: "개인 프로젝트",
          color: "bg-emerald-300",
        },
        description: `해당 프로젝트는 Next.js를 접하며 공부한 내용을 실제로 적용해보고, 학습한 개발 지식을 기록하고 공유하기 위한 개인 기술 블로그 프로젝트입니다. 블로그 프로젝트를 실제 운영가능한 서비스를 구축하고, 배포 및 유지보수 과정을 경험하며, 시스템 설계와 기능 확장 경험에 중점을 둔 프로젝트입니다.`,
        technologies: [
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "TailwindCSS",
          "Supabase",
          "Framer Motion",
          "Vercel",
          "GitHub",
        ],
        icon: LuNotebookPen,
        role: "Frontend Developer",
        duration: {
          start: "2025.03",
          end: "2025.03",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "Markdown 기반의 게시글 작성 및 렌더링",
            content: [
              "@next/mdx를 활용하여 Markdown으로 작성된 MDX파일 렌더링 적용",
              "MDX 파일 내부에 컴포넌트를 사용하여 커스텀 요소 추가(코드블럭, 콜아웃 등)",
              "파일 시스템을 통해 MDX 파일을 읽어오고, 각 파일명에서 slug를 추출하여 동적 라우팅 제공",
            ],
          },
          {
            title: "데이터베이스 및 상호작용 기능 추가",
            content: [
              `게시글 좋아요(likes) 기능
               - localStorage의 clientToken을 생성을 통한 익명의 좋아요 기능 처리(중복 좋아요 방지)
               - Supabase DB에 좋아요 추가/삭제 기능`,
              `익명 방명록 기능
               - 선택적으로 닉네임을 기입할 수 있도록, DB 테이블 설계
               - 익명 방명록 새로고침 없이 자동 실시간 업데이트 기능(Supabase Realtime 활용)`,
            ],
          },
          {
            title: "반응형 UI 및 다크 모드 지원",
            content: [
              "CSS Grid 시스템 레이아웃을 활용하여 반응형 레이아웃 구성",
              "Tailwind CSS의 프리픽스(xl:, dark: 등)를 활용하여 다크 모드와 반응형 스타일 적용",
            ],
          },
        ],
        achievements: [
          `해당 프로젝트는 마크다운 기반의 게시글을 효과적으로 관리하고자 MDX를 도입하고 콘텐츠 렌더링 구조를 설계해 보았습니다. 단순 텍스트를 보여주는 것이 아닌, 코드 블럭이나 콜아웃과 같은 커스텀 컴포넌트를 마크다운에 삽입함으로써 콘텐츠의 표현력을 높이고, 기술 블로그로서의 활용성을 확장할 수 있었습니다.

정적 블로그이지만, Supabase를 활용하여 사용자와의 상호작용이 가능한 좋아요 기능과 익명 방명록 기능도 구현하며, 실시간 데이터 처리 흐름에 대한 이해도를 함께 쌓을 수 있었습니다.

UI 측면에서는 Tailwind CSS와 CSS Grid 시스템을 적극적으로 활용하여 반응형 디자인을 구성하였고, 다크 모드 지원을 통해 다양한 환경에서도 일관된 사용자 경험을 제공하고자 노력했습니다. 프리픽스 유틸리티를 적극 활용하며, 미디어 쿼리와 다크 모드를 Tailwind에서 어떻게 효율적으로 구현하는지 알 수 있었습니다.

이러한 과정들을 통해 정적 사이트에서 동적인 사용자 경험 설계와 마크다운 콘텐츠 구성부터 UI/UX 구현까지 프론트엔드 전반의 흐름을 스스로 설계하고 구축해보는 값진 경험을 할 수 있었습니다.`,
        ],

        repositoryUrl: {
          available: true,
          url: "https://github.com/Ohjanghoon/oh-note",
          expression: "",
        },
        liveDemoUrl: {
          available: true,
          url: "https://oh-note.vercel.app",
          expression: "",
        },
        thumbnail: "",
        screenshots: [
          "personal/personal_project_02_01.png",
          "personal/personal_project_02_02.png",
          "personal/personal_project_02_03.png",
          "personal/personal_project_02_04.png",
          "personal/personal_project_02_05.png",
          "personal/personal_project_02_06.png",
        ],
      },
      // dev-oh(24.12 ~ 25.02)
      {
        id: "personal/personal_project_05",
        title: "dev-oh 포트폴리오",
        type: {
          name: "개인 프로젝트",
          color: "bg-emerald-300",
        },
        description:
          "해당 프로젝트는 프론트엔드 개발자로서의 역량을 보여주기 위해 React와 TailwindCSS를 활용하여 구축된 정적 사이트로, 프로젝트 경험과 기술 스택을 정리하는 데 목적을 두고 있습니다.",
        technologies: [
          "React",
          "TypeScript",
          "TailwindCSS",
          "Framer Motion",
          "Firebase",
          "GitHub",
        ],
        icon: BsPersonBadgeFill,
        role: "Frontend Developer",
        duration: {
          start: "2024.12",
          end: "2025.02",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "UI/UX 작업",
            content: [
              `TailwindCSS 적용
              - 효율적인 스타일 관리 및 UI의 일관성 유지, 반응형/다크모드 제공`,
              `Framer Motion 활용
              - 메인 페이지에 은하수가 떨어지는 듯한 무빙 도트 애니메이션 적용`,
            ],
          },
          {
            title: "다크 모드 기능",
            content: [
              "Redux Toolkit을 활용하여 테마 상태를 전역으로 관리",
              "localStorage를 이용해 사용자의 다크 모드 설정을 저장하여 새로고침 후에도 유지",
              "TailwindCSS의 다크 모드 기능과 연계하여 최적화된 UI 제공",
            ],
          },
        ],
        achievements: [
          `해당 프로젝트를 통해 직접 사이트를 제작하며 React의 기본 사용법을 익히고, TailwindCSS를 통한 효율성과 생산성을 직접 체감할 수 있었습니다. 나아가, UX적인 요소에 대해서도 고민하며, 사용자 경험을 고려한 인터페이스 설계의 중요성을 배울 수 있었습니다.
          
          추가적으로, 저의 포트폴리오 사이트는 테마 전환과 같은 간단한 상태만을 관리하는 정적 사이트로 Context API만으로도 충분했지만, Redux Toolkit의 기본 사용법을 익히고자 도입하여 직접 상태 관리 도구를 적용해보는 경험을 할 수 있었습니다.`,
        ],

        repositoryUrl: {
          available: true,
          url: "https://github.com/Ohjanghoon/dev-oh",
          expression: "",
        },
        liveDemoUrl: {
          available: true,
          url: "",
          expression: "",
        },
        thumbnail: "",
        screenshots: [
          "personal/personal_project_01_01.png",
          "personal/personal_project_01_02.png",
          "personal/personal_project_01_03.png",
          "personal/personal_project_01_04.png",
        ],
      },
      /*// unsplash clone project(24.11 ~ 24.12)
      {
        id: "personal/personal_project_04",
        title: "unsplash clone",
        type: {
          name: "개인 프로젝트",
          color: "bg-emerald-300",
        },
        description: "",
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
        icon: MdPhotoLibrary,
        role: "Frontend Developer",
        duration: {
          start: "2024.11",
          end: "2024.12",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "",
            content: [""],
          },
          {
            title: "",
            content: [""],
          },
          {
            title: "",
            content: [""],
          },
        ],
        achievements: ["", ""],

        repositoryUrl: {
          available: true,
          url: "",
          expression: "",
        },
        liveDemoUrl: {
          available: true,
          url: "",
          expression: "",
        },
        thumbnail: "",
        screenshots: [],
      },
      // nextJS/TailwindCSS learn(24.10 ~ 24.10)
      {
        id: "personal/personal_project_03",
        title: "nextJS/TailwindCSS learn",
        type: {
          name: "개인 프로젝트",
          color: "bg-emerald-300",
        },
        description: "",
        technologies: ["NextJS"],
        icon: PiStairsDuotone,
        role: "Frontend Developer",
        duration: {
          start: "2024.10",
          end: "2024.10",
        },
        teamSize: 1,
        responsibilities: [],
        achievements: [],

        repositoryUrl: {
          available: true,
          url: "",
          expression: "",
        },
        liveDemoUrl: {
          available: true,
          url: "",
          expression: "",
        },
        thumbnail: "",
        screenshots: [],
      },
      // nextJS learn(24.09 ~ 24.10)
      {
        id: "personal/personal_project_02",
        title: "nextJS learn",
        type: {
          name: "개인 프로젝트",
          color: "bg-emerald-300",
        },
        description: "",
        technologies: ["NextJS"],
        icon: SiNextdotjs,
        role: "Frontend Developer",
        duration: {
          start: "2024.09",
          end: "2024.10",
        },
        teamSize: 1,
        responsibilities: [],
        achievements: [],

        repositoryUrl: {
          available: true,
          url: "",
          expression: "",
        },
        liveDemoUrl: {
          available: true,
          url: "",
          expression: "",
        },
        thumbnail: "",
        screenshots: [],
      },
      // react learn(24.09 ~ 24.09)
      {
        id: "personal/personal_project_01",
        title: "reactJS learn",
        type: {
          name: "개인 프로젝트",
          color: "bg-emerald-300",
        },
        description: "",
        technologies: ["NextJS"],
        icon: FaReact,
        role: "Frontend Developer",
        duration: {
          start: "2024.09",
          end: "2024.09",
        },
        teamSize: 1,
        responsibilities: [],
        achievements: [],

        repositoryUrl: {
          available: true,
          url: "",
          expression: "",
        },
        liveDemoUrl: {
          available: true,
          url: "",
          expression: "",
        },
        thumbnail: "",
        screenshots: [],
      },*/
    ],
  },
  {
    category: "Work",
    items: [
      // 북한정보포털(24.01 ~ 24.09)
      {
        id: "work_project_04",
        title: "북한정보포털",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        description:
          "통일부의 북한정보포털 유지보수 프로젝트에 참여하여 웹 사이트의 성능 최적화 및 안정적인 서비스 운영을 지원하였습니다. 또한, 내부 CMS 시스템(콘텐츠 관리 시스템)도 함께 유지보수하며, 관리자 페이지의 UI/UX 개선 및 다양한 요구사항을 반영해 개발 진행하였습니다.",
        technologies: [
          "Java",
          "전자정부 프레임워크",
          "JavaScript",
          "jQuery",
          "CUBRID(DBMS)",
          "MyBatis",
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
          {
            title: "UI/UX 개선 작업",
            content: [
              "내부 CMS 및 웹 사이트의 UI 수정, 사용자 피드백과 요구사항을 반영한 UX 개선",
            ],
          },
          {
            title: "성능 최적화",
            content: [
              "기존 코드를 개선하고 쿼리 최적화를 통해 메인 페이지의 로딩 속도 개선",
            ],
          },
          {
            title: "보안 강화 및 안정성 개선",
            content: [
              "웹 취약점 점검 결과에 따른 비밀번호 정책 강화 및 권한별 페이지 접근 제어 로직 개선",
            ],
          },
          {
            title: "데이터 처리",
            content: [
              "CMS 콘텐츠 관리 기능의 데이터 CRUD 작업",
              "한글 파일 라이브러리를 활용하여 CMS에서 업로드된 HWP 파일을 파싱 및 데이터베이스 저장 구축",
              "백엔드에서 DB 데이터를 조회하여 엑셀 파일로 변환 및 다운로드 기능 개발",
            ],
          },
        ],
        achievements: [
          "고객의 요구 사항을 신속히 반영하여 사용자 편의성 및 만족도 향상에 기여 ",
          "메인 페이지의 JS 파일 및 데이터베이스 쿼리를 최적화하여 로딩 시간을 단축하고 성능 개선에 기여",
        ],

        repositoryUrl: {
          available: false,
          url: "",
          expression:
            "보안 정책에 따라 소스 코드를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        liveDemoUrl: {
          available: true,
          url: "https://nkinfo.unikorea.go.kr/nkp/main/portalMain.do",
          expression: "",
        },
        thumbnail: "project_05_01.png",
        screenshots: [
          "work/work_project_05_01.png",
          "work/work_project_05_02.png",
          "work/work_project_05_03.png",
          "work/work_project_05_04.png",
        ],
      },
      // KISTI (23.05 ~ 23.11)
      {
        id: "work_project_03",
        title: "KISTI 가상실험실 메타버스",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        description:
          "한국과학기술정보연구원(KISTI)의 메타버스 기반 가상 실험실 프로젝트로, 게임과 같은 콘텐츠로 단계를 통해 사용자가 체계적으로 학습할 수 있는 교육 서비스입니다. 해당 프로젝트에서 [체세포, DNA, 주기율표, 소방, 수학] 5가지 콘텐츠에 참여하여 다양한 3D 실험과 2D 학습 자료를 통합하고, 학습 효율을 극대화하는 것을 목표로 하여 개발하였습니다.",
        technologies: [
          "TypeScript",
          "JavaScript",
          "Angular",
          "BabylonJS",
          "RxJS",
          "AWS(Amplify)",
          "GitHub",
          "Google Workspace",
        ],
        icon: GiCubes,
        role: "Frontend Developer",
        duration: {
          start: "2023.05",
          end: "2023.11",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "UI/UX 개발 및 데이터 연동 작업",
            content: [
              "실험 콘텐츠의 이론 학습, 튜토리얼, 퀴즈 등의 데이터를 UI와 바인딩하여 동적 인터페이스 구현",
              "학습 게시판 및 학습 스코어 연동을 위한 플랫폼 API 연계 작업 수행",
            ],
          },
          {
            title: "사용자 인터랙션 실험 기능 개발",
            content: [
              "실험실 3D 오브젝트 클릭 이벤트를 활용한 단계별 실험 진행 로직 구현",
              "실험 난이도 선택에 따른 동적 변화 처리 로직 구현",
              "HTML 요소 이동, 회전, 뒤집기 등 사용자 조작 기반 애니메이션 및 상호작용 기능 개발",
            ],
          },
          {
            title: "시·청각적 요소를 통한 사용자 경험 개선",
            content: [
              "WebGL 기반 BabylonJS의 Material 및 Texture를 활용하여 연기·불꽃 애니메이션을 구현하고, 실험 환경의 그래픽 렌더링 성능 최적화",
              "BGM, 효과음, TTS 음량 조절 모듈화 및 마스터 볼륨 제어 로직 개발을 통해 사용자 맞춤형 오디오 환경 구축",
            ],
          },
          {
            title: "기획 및 설계 참여",
            content: [
              "실험 콘텐츠의 기획 및 화면 정의서 작성을 통해 개발 초기 단계부터 콘텐츠 설계 참여",
              "스토리텔링 요소 적용으로 학습자의 흥미를 유도하는 UI/UX 구성",
            ],
          },
        ],
        achievements: [
          "Angular와 BabylonJS를 활용한 2D/3D 혼합 콘텐츠 개발 역량 강화할 수 있었습니다.",
          "콘텐츠 개발의 전체 프로세스를 경험하며, 화면 정의서 작성 및 기획 참여를 통해 콘텐츠 개발 과정에 대한 이해도를 높일 수 있었습니다.",
          "플랫폼 API 연동 작업을 하며 데이터를 동적으로 처리하는 방법을 익힐 수 있었고, 이를 통해 사용자 맞춤형 콘텐츠 제공에 필요한 데이터 흐름과 API 활용 방식을 이해할 수 있었습니다.",
          "실험 콘텐츠당 작업 기한이 1개월이라는 촉박한 일정 속에서도 팀원들과 긴밀히 협업하고 효과적으로 작업을 분배하여 높은 품질의 결과물을 제작했습니다. 특히, 클라이언트로부터 긍정적인 피드백을 받아 사용자 경험과 완성도 측면에서 높은 만족도를 이끌어냈습니다.",
        ],
        repositoryUrl: {
          available: false,
          url: "",
          expression:
            "보안 정책에 따라 소스 코드를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        liveDemoUrl: {
          available: true,
          url: "https://vlabon.re.kr/contents/lab/chemistry",
          expression: "",
        },

        thumbnail: "",
        screenshots: [
          "work/work_project_03_01.png",
          "work/work_project_03_02.png",
          "work/work_project_03_03.png",
          "work/work_project_03_04.png",
          "work/work_project_03_05.png",
          "work/work_project_03_06.png",
          "work/work_project_03_07.png",
          "work/work_project_03_08.png",
          "work/work_project_03_09.png",
          "work/work_project_03_10.png",
          "work/work_project_03_11.png",
          "work/work_project_03_12.png",
          "work/work_project_03_13.png",
          "work/work_project_03_14.png",
        ],
      },
      // DIGITAL TWIN (23.02 ~ 23.05)
      {
        id: "work_project_02",
        title: "디지털 트윈 프로젝트",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        // 참여하였습니다. 이를 통해 실시간 데이터 수집 및 분석, 효율적인 설비 관리, 문제 상황에 대한 빠른 대응을 가능하게 했습니다.
        description:
          "자사 솔루션 디지털 트윈 기술을 활용하여 공장 및 설비 모니터링 시스템 구축 프로젝트에 참여하였으며, 실시간 데이터 처리 및 시각화 모듈을 개발하였습니다.",
        technologies: [
          "TypeScript",
          "JavaScript",
          "Angular",
          "BabylonJS",
          "RxJS",
          "NodeJS",
          "MongoDB",
          "GitLab",
          "Google Workspace",
        ],
        icon: MdFactory,
        role: "Frontend Developer",
        duration: {
          start: "2023.02",
          end: "2023.05",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "데이터 시각화",
            content: [
              "실시간 작업자 및 설비에 대한 위험도 데이터를 활용하여 종합현황 차트 개발",
              "실시간 작업자 행동에 따른 동적인 애니메이션 구현",
              "설비 자산 상태에 따른 설비 색상 적용 구현",
            ],
          },
          {
            title: "사용자 인터랙션 기능",
            content: [
              "운영 데이터 패널 on/off 기능 개발",
              "관리자 페이지에서 사용자 관리 및 권한 관리 기능 개발",
              "날짜·작업자ID 등 조건 검색을 통한 알람 이력 조회 구현",
            ],
          },
          {
            title: "데이터 연동 및 처리",
            content: [
              "엑셀 파일 업로드하여 해당 데이터 기반으로 트윈 객체 생성 기능 로직 구현",
            ],
          },
        ],
        achievements: [
          "실시간 위험도 데이터를 활용한 차트 및 애니메이션을 구현하며 데이터 시각화 및 UI 개발 역량을 향상시켰습니다.",
          "엑셀 파일을 활용한 트윈 객체 생성 기능을 구현하며 파일 데이터 처리 및 데이터 구조화 기술을 익혔습니다.",
          "협업 툴 활용을 익히며 팀 개발 환경에 적응할 수 있었고, 작은 업무부터 점진적으로 맡아가며 실무 개발자로서의 역량을 쌓을 수 있었습니다.",
        ],
        repositoryUrl: {
          available: false,
          url: "",
          expression:
            "보안 정책에 따라 소스 코드를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        liveDemoUrl: {
          available: false,
          url: "",
          expression:
            "해당 프로젝트는 사내 보안 정책에 따라 이미지와 Demo를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        thumbnail: "",
        screenshots: [],
      },
      // AWS Serverless (22.12 ~ 23.02)
      {
        id: "work_project_01",
        title: "AWS 서버리스 상품 판매 플랫폼",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        description: `입사 초기 진행한 프로젝트로, AWS 기반 Serverless 아키텍처를 활용한 상품 판매 플랫폼을 개발하였습니다.
          서버 운영 부담을 줄이고 확장성을 극대화하기 위해 AWS Lambda, API Gateway, DynamoDB, S3 등 다양한 클라우드 서비스를 적용하였습니다.`,
        technologies: [
          "TypeScript",
          "JavaScript",
          "Angular",
          "CSS",
          "AWS(IAM)",
          "AWS(API Gateway)",
          "AWS(Lambda)",
          "AWS(DynamoDB)",
          "AWS(Amplify)",
          "AWS(S3)",
          "GitLab",
          "Google Workspace",
        ],
        icon: HiServer,
        role: "Frontend Developer",
        duration: {
          start: "2022.12",
          end: "2023.02",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "서버리스 기반 상품 판매 플랫폼 개발",
            content: [
              "API Gateway, Lambda, DynamoDB를 활용하여 상품 데이터 CRUD 기능 개발",
              "S3 Presigned URL을 이용한 이미지 파일을 업로드 기능 구현",
              "백엔드와의 통신을 위한 REST API 설계 및 연동",
            ],
          },
          {
            title: "AWS IAM 기반 권한 관리",
            content: [
              "AWS IAM을 활용하여 사용자 아이디에 따른 권한을 세분화하여 특정 기능 접근 제어",
              "역할(Role) 및 정책(Policy)을 통해 데이터 보안과 서비스 안정성 작업",
            ],
          },
        ],
        achievements: [
          "API Gateway, Lambda, DynamoDB를 활용하여 서버리스 환경에서 상품 데이터 CRUD 기능을 구현하며, AWS를 처음 활용해보았습니다. 프로젝트를 통해 클라우드 인프라에 대한 이해도를 높일 수 있었습니다.",
        ],
        repositoryUrl: {
          available: false,
          url: "",
          expression:
            "보안 정책에 따라 소스 코드를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        liveDemoUrl: {
          available: false,
          url: "",
          expression:
            "해당 프로젝트는 사내 보안 정책에 따라 이미지와 Demo를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        thumbnail: "",
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
          name: "학원 프로젝트",
          color: "bg-blue-400",
        },
        description:
          "CampingEZ(캠핑 예약 사이트)는 캠핑장 예약과 사용자 간의 양도, 커뮤니티, 중고거래 기능을 포함한 종합 캠핑 플랫폼으로, Spring 학습 교육 과정 중 실무형 개발 경험을 쌓기 위한 목적으로 개발된 팀 프로젝트입니다.",
        technologies: [
          "Java",
          "Spring",
          "OracleDB",
          "MyBatis",
          "JSP",
          "Ajax",
          "HTML/CSS",
          "JavaScript",
          "Bootstrap",
          "GitHub",
        ],
        icon: PiTentDuotone,
        role: "Frontend Developer",
        duration: {
          start: "2022.08",
          end: "2022.09",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "팀장 역할",
            content: ["프로젝트 기획 및 요구사항 정의, 작업 분담, 일정 관리"],
          },
          {
            title: "캠핑자리 양도 기능",
            content: [
              "캠핑장 예약 정보를 Ajax를 활용하여 실시간으로 조회 및 양도 처리",
              "Spring 스케줄러를 통해 주기적으로 쿼리를 반복 실행하여 양도 결제 제한 시간 내 결제가 완료되지 않은 경우, 초기 상태로 되돌리는 로직 구현",
              "제한 시간 내에 결제가 완료시, 예약 상태를 양도예약완료로 업데이트 후 해당 양도글을 양도완료 상태로 전환하여 목록에서 제외 처리하는 로직 구현",
            ],
          },
          {
            title: "1대1 문의 기능",
            content: ["사용자와 관리자 간의 개인화된 문의 및 답변 기능 개발"],
          },
          {
            title: "유저간 채팅 기능",
            content: ["WebSocket을 활용한 실시간 1:1 채팅 기능 구현"],
          },
        ],
        achievements: [
          "Spring 스케줄러를 활용한 자동화된 예약 상태 관리 로직을 구현하며, 백엔드 프로세스의 효율적인 설계 방법을 학습할 수 있었습니다.",
          "팀장으로서 프로젝트 기획부터 개발, 일정 관리까지의 전반적인 프로세스를 주도하며 협업과 리더십의 중요성을 깨달았습니다.",
          "Ajax와 MyBatis를 활용한 비동기 데이터 처리 및 데이터베이스 연동 최적화 경험을 통해 사용자 경험을 고려한 설계 방식을 학습할 수 있었습니다.",
        ],

        repositoryUrl: {
          available: true,
          url: "https://github.com/Ohjanghoon/campingez",
          expression: "",
        },
        liveDemoUrl: {
          available: false,
          url: "",
          expression:
            "해당 프로젝트는 데이터베이스 접근 제한 상태로 인해 Demo를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        thumbnail: "",
        screenshots: [
          "educational/educational_project_03_01.png",
          "educational/educational_project_03_02.png",
          "educational/educational_project_03_03.png",
          "educational/educational_project_03_04.png",
          "educational/educational_project_03_05.png",
          "educational/educational_project_03_06.png",
          "educational/educational_project_03_07.png",
          "educational/educational_project_03_08.png",
          "educational/educational_project_03_09.png",
          "educational/educational_project_03_10.png",
          "educational/educational_project_03_11.png",
          "educational/educational_project_03_12.png",
        ],
      },
      // 주신사 프로젝트 (22.06 ~ 22.07)
      {
        id: "educational_project_02",
        title: "Java 기초 프로젝트",
        type: {
          name: "학원 프로젝트",
          color: "bg-blue-400",
        },
        description:
          "이 프로젝트는 무신사 사이트를 참고하여 Java 학습 교육 과정에서 실무형 개발 경험을 쌓기 위한 목적으로 진행된 팀 프로젝트입니다. MVC 패턴을 적용하여 회원가입, 상품 조회, 장바구니 등 주요 기능을 개발하였고 관계형 DB 설계를 진행하였습니다.",
        technologies: [
          "Java",
          "OracleDB",
          "Servlet/JSP",
          "Ajax",
          "CSS",
          "GitHub",
        ],
        icon: RiShoppingBag3Fill,
        role: "Frontend Developer",
        duration: {
          start: "2022.06",
          end: "2022.07",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "마이페이지 개발",
            content: [
              "상품 추가, 삭제, 수량 수정 및 총 금액 계산 기능 구현",
              "주문 내역 조회 기능 구현",
              "관심상품 즐겨찾기 등록 및 해제 기능 구현",
            ],
          },
          {
            title: "JDBC 기반 SQL 작업",
            content: [
              "SQL CRUD(Create, Read, Update, Delete)를 활용한 데이터베이스 연동 및 최적화 쿼리 작성",
            ],
          },
          {
            title: "유효성 검증",
            content: [
              "입력 데이터의 유효성 검사 및 에러 처리 로직 구현으로 안정성 향상",
            ],
          },
        ],
        achievements: [
          "팀 단위로 진행된 프로젝트를 통해 팀워크 및 프로젝트 관리 역량을 강화할 수 있었습니다.",
          "RDB를 설계하며 데이터베이스 정규화와 테이블 간 관계 설정을 학습할 수 있었습니다.",
        ],

        repositoryUrl: {
          available: true,
          url: "https://github.com/Ohjanghoon/khsinsa",
          expression: "",
        },
        liveDemoUrl: {
          available: false,
          url: "",
          expression:
            "해당 프로젝트는 데이터베이스 접근 제한 상태로 인해 Demo를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        thumbnail: "",
        screenshots: [
          "educational/educational_project_02_01.png",
          "educational/educational_project_02_02.png",
          "educational/educational_project_02_03.png",
          "educational/educational_project_02_04.png",
          "educational/educational_project_02_05.png",
          "educational/educational_project_02_06.png",
          "educational/educational_project_02_07.png",
          "educational/educational_project_02_08.png",
        ],
      },
      // HTML/CSS/JS 기초 프로젝트 (22.06 ~ 22.06)
      {
        id: "educational_project_01",
        title: "HTML/CSS/JS 기초 프로젝트",
        type: {
          name: "학원 프로젝트",
          color: "bg-blue-400",
        },
        description:
          "HTML과 CSS, JavaScript를 활용하여 정적인 웹사이트를 설계 및 구현을 통해 웹 개발 기초 역량과 코딩 감각을 학습하였습니다. ",
        technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
        icon: FaHtml5,
        role: "",
        duration: {
          start: "2022.06",
          end: "2022.06",
        },
        teamSize: 1,
        responsibilities: [
          {
            title: "정적 웹 사이트 제작",
            content: [
              "HTML을 사용하여 웹사이트의 구조를 설계",
              "CSS를 활용하여 레이아웃 구성 및 색상, 타이포그래피 등 스타일 적용",
            ],
          },
          {
            title: "JavaScript를 활용한 동적 기능 추가",
            content: [
              "간단한 클릭 이벤트 및 애니메이션 효과 구현",
              "입력 값 유효성 검증 및 오류 메시지 표시",
            ],
          },
          {
            title: "localstorage 기반 간단한 회원 시스템 구현",
            content: [
              "사용자 정보를 입력받아 localStorage에 저장하여 회원가입 구현",
              "입력받은 정보와 localStorage에 저장된 데이터를 비교하여 인증 기능 구현",
            ],
          },
        ],
        achievements: [
          "매우 기초적인 간단한 프로젝트였지만 해당 프로젝트를 통해 기본적인 웹 개발의 흐름을 익힐 수 있었으며 나아가 웹 사이트를 배포하는 경험을 통해 개발에 대한 흥미와 자신감을 얻을 수 있었습니다.",
        ],

        repositoryUrl: {
          available: true,
          url: "https://github.com/Ohjanghoon/Ohjanghoon.github.io",
          expression: "",
        },
        liveDemoUrl: {
          available: true,
          url: "https://ohjanghoon.github.io/",
          expression: "",
        },
        thumbnail: "",
        screenshots: [
          "educational/educational_project_01_01.png",
          "educational/educational_project_01_02.png",
          "educational/educational_project_01_03.png",
          "educational/educational_project_01_04.png",
        ],
      },
    ],
  },
];

export const studyList = [
  {
    id: "learning_04",
    title: "react/Recoil/Sass 학습",
    reference: "온라인 강의",
    icon: MdPhotoLibrary,
    duration: {
      start: "2024.11",
      end: "2024.12",
    },
    repositoryUrl: "https://github.com/Ohjanghoon/react-album",
  },
  {
    id: "learning_03",
    title: "nextJS/TailwindCSS 학습",
    reference: "온라인 강의",
    icon: PiStairsDuotone,
    duration: {
      start: "2024.10",
      end: "2024.10",
    },
    repositoryUrl: "https://github.com/Ohjanghoon/nextjs-portfolio-clone",
  },
  {
    id: "learning_02",
    title: "nextJS 학습",
    reference: "온라인 강의",
    icon: SiNextdotjs,
    duration: {
      start: "2024.10",
      end: "2024.09",
    },
    repositoryUrl: "https://github.com/Ohjanghoon/learn-nextjs14",
  },
  {
    id: "learning_01",
    title: "react 학습",
    reference: "온라인 강의",
    icon: FaReact,
    duration: {
      start: "2024.09",
      end: "2024.09",
    },
    repositoryUrl: "https://github.com/Ohjanghoon/react-for-beginners-2",
  },
];
