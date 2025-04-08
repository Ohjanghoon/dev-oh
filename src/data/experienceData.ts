// icons
import {
  FaCode,
  FaGraduationCap,
  FaSchool,
  FaBriefcase,
  FaGithub,
} from "react-icons/fa";
import { HiCircleStack } from "react-icons/hi2";
import {
  RiJavascriptFill,
  RiJavaFill,
  RiReactjsFill,
  RiAngularjsFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoPython, BiLogoAws } from "react-icons/bi";
import {
  SiSpring,
  SiOracle,
  SiRedux,
  SiGitlab,
  SiNotion,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

// types
import {
  EducationDTO,
  ExperienceDTO,
  SkillDTO,
  WorkDTO,
} from "../types/experienceTypes";

// components
import Work from "../components/Experiences/Work";
import Education from "../components/Experiences/Education";
import Skill from "../components/Experiences/Skill";

// 경험 데이터
export const experiencesList: ExperienceDTO[] = [
  {
    title: "Career",
    id: "career",
    description: "협업을 통해 성장한 실무 경험입니다.",
    icon: FaBriefcase,
    content: Work,
  },
  {
    title: "Education",
    id: "education",
    description: "배움으로 성장한 경험입니다.",
    icon: FaGraduationCap,
    content: Education,
  },
  {
    title: "Skills",
    id: "skill",
    description: "끊임없이 확장하고 성장한 기술 역량입니다.",
    icon: HiCircleStack,
    content: Skill,
  },
];

// 실무 경험 데이터
export const workList: WorkDTO[] = [
  {
    id: "work_01",
    name: "IGI Korea",
    duration: "2022.12 ~ 2024.09",
    month: "1년 10개월",
    items: [
      {
        category: "Role",
        content: [
          "2D, 3D 프론트엔드 개발",
          "메타버스 콘텐츠 기획 참여",
          "대국민 서비스 북한정보포털 유지관리 참여",
        ],
      },
      {
        category: "Projects",
        content: [
          "AWS를 활용한 서버리스 과제",
          "Digital Twin 솔루션 개발",
          "Metaverse(KISTI 가상실험) 개발",
          "북한정보포털 대국민 서비스 플랫폼 유지관리",
        ],
      },
      {
        category: "Performance",
        content: ["사내 성과발표 2023 베스트 프리젠테이션상 수상"],
      },
      {
        category: "Skills",
        content: [
          "TypeScript, JavaScript, Angular, BabylonJS, Java, 전자정부프레임워크, MongoDB, AWS",
        ],
      },
    ],
  },
];

// 교육 경험 데이터
export const educationList: EducationDTO[] = [
  {
    id: "education_01",
    name: "KH정보교육원(JAVA 과정) 수료",
    duration: "2022.02 ~ 2022.09",
    icon: FaCode,
  },
  {
    id: "education_02",
    name: "제주대학교(컴퓨터공학과) 졸업",
    duration: "2013.03 ~ 2021.08",
    icon: FaGraduationCap,
  },
  {
    id: "education_03",
    name: "대기고등학교 졸업",
    duration: "2010.03 ~ 2013.02",
    icon: FaSchool,
  },
];

// 기술 경험 데이터
export const skillList: SkillDTO[] = [
  {
    id: "skill_category_01",
    category: "Languages",
    list: [
      {
        name: "JavaScript",
        icon: RiJavascriptFill,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: BiLogoTypescript,
        color: "#3178C6",
      },
      { name: "Java", icon: RiJavaFill, color: "#E92D2E" },
      {
        name: "Python",
        icon: BiLogoPython,
        color: "#3776AB",
      },
    ],
  },
  {
    id: "skill_category_02",
    category: "Frontend / Framework / Libraries",
    list: [
      {
        name: "React",
        icon: RiReactjsFill,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: RiNextjsFill,
        color: "#000000",
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
        color: "#06B6D4",
      },
      {
        name: "Redux(toolkit)",
        icon: SiRedux,
        color: "#764ABC",
      },
      {
        name: "Angular",
        icon: RiAngularjsFill,
        color: "#DD0031",
      },
    ],
  },
  {
    id: "skill_category_03",
    category: "Backend / Devops",
    list: [
      {
        name: "Spring",
        icon: SiSpring,
        color: "#6DB33F",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "#3FCF8E",
      },
      {
        name: "Oracle",
        icon: SiOracle,
        color: "#EA1B22",
      },
      {
        name: "AWS",
        icon: BiLogoAws,
        color: "#FF9900",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
    ],
  },
  {
    id: "skill_category_04",
    category: "Tools",
    list: [
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
      },
      {
        name: "GitLab",
        icon: SiGitlab,
        color: "#FC6D26",
      },
      {
        name: "Notion",
        icon: SiNotion,
        color: "#000000",
      },
      {
        name: "Google Workspace",
        icon: FcGoogle,
        color: "",
      },
    ],
  },
];
