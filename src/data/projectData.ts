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

import { ProjectDTO } from "../types/projectTypes";

export const projectList: ProjectDTO[] = [
  {
    category: "Personal",
    items: [
      // dev-oh(24.12 ~ 25.01)
      {
        id: "personal_project_05",
        title: "dev-oh 포트폴리오",
        type: {
          name: "개인 프로젝트",
          color: "bg-emerald-300",
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
        icon: BsPersonBadgeFill,
        role: "Frontend Developer",
        duration: {
          start: "2024.12",
          end: "2025.01",
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
      /*// unsplash clone project(24.11 ~ 24.12)
      {
        id: "personal_project_04",
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
        id: "personal_project_03",
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
        id: "personal_project_02",
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
        id: "personal_project_01",
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
          {
            title: "",
            content: ["신규 기능 개발 및 기존 코드 최적화, 에러사항 수정"],
          },
          {
            title: "",
            content: ["운영 환경 배포"],
          },
          { title: "", content: ["보안 점검 및 패치 적용"] },
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
          "corporate_project_05_01.png",
          "corporate_project_05_02.png",
          "corporate_project_05_03.png",
          "corporate_project_05_04.png",
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
          "한국과학기술정보연구원(KISTI)에서 진행한 메타버스 기반의 가상 실험실 프로젝트로, 게임과 같은 콘텐츠로 단계를 통해 사용자가 체계적으로 학습할 수 있는 교육 서비스입니다. 해당 프로젝트는 다양한 3D 실험 콘텐츠와 2D 학습 자료를 통합하여 학습 효율을 극대화하는 것을 목표로 하여 개발되었습니다.",
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
        responsibilities: [
          {
            title: "체세포 실험",
            content: [
              "이론 학습, 퀴즈, 튜토리얼 데이터와 UI를 바인딩",
              "현미경 관찰 기능(사용자 조작에 따른 2D 좌표 이동) 구현 및 파이 차트 기반 시각화",
            ],
          },
          {
            title: "DNA 실험",
            content: [
              "실험 오브젝트 클릭 이벤트를 통한 순차적인 실험 진행 구현",
              "난이도 선택에 따른 단계별 로직 구현",
            ],
          },
          {
            title: "주기율표실험",
            content: [
              "주기율표 퍼즐 맞추기(클릭시 HTML 요소의 이동을 , 회전, 뒤집기 애니메이션 처리) 구현",
              "BGM, 효과음, TTS 음량 조절 모듈화 및 마스터 볼륨 제어 로직 개발",
              "외계인 학습노트와 이론 데이터를 플랫폼 API로 연동",
            ],
          },
          {
            title: "소방 실험",
            content: [
              "연기 파티클 효과와 BabylonJS에 material과 texture 활용한 불꽃 애니메이션 개발.",
              "소화 도구의 상호작용 애니메이션 구현",
              "사용자의 실험 몰입감을 높이기 위해 단발적인 효과음(소화 도구)과 반복되는 효과음(불 연소, 소화기) 적용",
            ],
          },
          {
            title: "수학 실험",
            content: [
              "기획 및 화면 정의서 작성으로 콘텐츠 설계에 참여",
              "실험 콘텐츠 중 Shift 이동 암호를 CSS와 JS 기술을 활용하여 2D 회전판 구현",
              "학습 이론 모아보기 게시판 데이터 바인딩 및 연동 작업",
            ],
          },
        ],
        achievements: [
          "Angular와 BabylonJS를 활용한 3D/2D 혼합 콘텐츠 개발 역량 강화할 수 있었습니다.",
          "플랫폼 API 연동 작업을 하며 데이터를 동적으로 처리하는 방법을 익힐 수 있었고, 이를 통해 사용자 맞춤형 콘텐츠 제공에 필요한 데이터 흐름과 API 활용 방식을 이해할 수 있었습니다.",
          "콘텐츠 개발 전반의 프로세스를 경험할 수 있었으며, 기획 참여를 통해 클라이언트 측과의 요구사항 소통 및 개발 방향성 조율을 경험할 수 있었습니다.",
          "타 개발자 및 디자이너와의 원활한 커뮤니케이션을 통해 프로젝트를 효율적으로 진행할 수 있었으며, 결과물의 완성도와 품질을 높이는 데 기여할 수 있었습니다.",
          "해당 실험 콘텐츠들의 작업 기간이 1개월로 매우 촉박했음에도 불구하고, 팀원들과의 긴밀한 협업과 효과적인 작업 분배를 통해 품질 높은 결과물을 제작할 수 있었습니다. 특히, 클라이언트로부터 긍정적인 피드백을 받아 사용자 경험과 완성도 측면에서 높은 만족도를 이끌어낼 수 있었습니다.",
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
          "corporate_project_03_01.png",
          "corporate_project_03_02.png",
          "corporate_project_03_03.png",
          "corporate_project_03_04.png",
          "corporate_project_03_05.png",
          "corporate_project_03_06.png",
          "corporate_project_03_07.png",
          "corporate_project_03_08.png",
          "corporate_project_03_09.png",
          "corporate_project_03_10.png",
          "corporate_project_03_11.png",
          "corporate_project_03_12.png",
          "corporate_project_03_13.png",
          "corporate_project_03_14.png",
        ],
      },
      // DIGITAL TWIN (23.02 ~ 23.05)
      {
        id: "corporate_project_02",
        title: "Digitial Twin",
        type: {
          name: "회사 프로젝트",
          color: "bg-orange-300",
        },
        // 참여하였습니다. 이를 통해 실시간 데이터 수집 및 분석, 효율적인 설비 관리, 문제 상황에 대한 빠른 대응을 가능하게 했습니다.
        description:
          "자사 솔루션 디지털 트윈 기술을 활용하여 한국수자원공사와 (주)신성이엔지 공장에 최적화된 관제형 시스템을 구축하는 프로젝트에 실시간 데이터 처리 및 시각화 모듈 개발에 참여하였습니다.",
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
        responsibilities: [],
        achievements: [""],
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
            "해당 프로젝트는 비공개 프로젝트로, 사내 보안 정책에 따라 이미지와 Demo를 제공할 수 없는 점 양해 부탁드립니다.",
        },
        thumbnail: "project_04_01.png",
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
        description:
          "회사 입사 후 수습 기간 중 진행한 실무 관련 프로젝트로, AWS를 활용한 Serverless 아키텍처 기반의 상품 판매 플랫폼입니다. 서버 관리 부담을 줄이고 확장성을 극대화하기 위해 다양한 AWS 서비스를 활용하여 구현되었습니다.",
        technologies: [
          "Angular",
          "TypeScript",
          "CSS",
          "AWS(Amplify)",
          "AWS(IAM)",
          "AWS(Cognito)",
          "AWS(S3)",
          "AWS(APIGateway)",
          "AWS(Lamda)",
          "AWS(DynamoDB)",
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
            title: "상품 관리 기능",
            content: ["DynamoDB를 활용하여 상품 데이터의 CRUD 기능을 개발"],
          },
          {
            title: "이미지 관리 기능",
            content: [
              "AWS S3의 Presigned URL을 활용하여 사용자가 이미지 파일을 안전하게 업로드 및 다운로드할 수 있도록 구현",
            ],
          },
          {
            title: "AWS IAM 기반 권한 관리",
            content: [
              "ASW IAM을 활용하여 사용자 아이디에 따른 권한을 세분화하여 특정 기능 접근 제어",
              "역할(Role) 및 정책(Policy)을 통해 데이터 보안과 서비스 안정성 작업",
            ],
          },
        ],
        achievements: [
          "Serverless 아키텍처의 장점을 활용하여 비용 절감 및 확장성 높은 시스템 구현",
          "상품 이미지 관리 기능 개발로 사용자 경험 향상 및 데이터 보안 강화",
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
            "해당 프로젝트는 비공개 프로젝트로, 사내 보안 정책에 따라 이미지와 Demo를 제공할 수 없는 점 양해 부탁드립니다.",
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
          "educational_project_03_01.png",
          "educational_project_03_02.png",
          "educational_project_03_03.png",
          "educational_project_03_04.png",
          "educational_project_03_05.png",
          "educational_project_03_06.png",
          "educational_project_03_07.png",
          "educational_project_03_08.png",
          "educational_project_03_09.png",
          "educational_project_03_10.png",
          "educational_project_03_11.png",
          "educational_project_03_12.png",
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
          "educational_project_02_01.png",
          "educational_project_02_02.png",
          "educational_project_02_03.png",
          "educational_project_02_04.png",
          "educational_project_02_05.png",
          "educational_project_02_06.png",
          "educational_project_02_07.png",
          "educational_project_02_08.png",
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
          "educational_project_01_01.png",
          "educational_project_01_02.png",
          "educational_project_01_03.png",
          "educational_project_01_04.png",
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
    repositoryUrl: "",
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
    repositoryUrl: "",
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
    repositoryUrl: "",
  },
];
