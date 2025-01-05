// icons
import { FaCode, FaGraduationCap, FaSchool, FaBriefcase } from "react-icons/fa";
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
import { SiSpring, SiOracle, SiMongodb } from "react-icons/si";

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
    title: "Work",
    id: "work",
    description:
      "도전과 협업을 통해 끊임없이 성장하며 쌓아온 실무 경험들입니다.",
    icon: FaBriefcase,
    content: Work,
  },
  {
    title: "Education",
    id: "education",
    description: "배움으로 나아가 성장을 이끌어낸 경험들입니다.",
    icon: FaGraduationCap,
    content: Education,
  },
  {
    title: "Skills",
    id: "skill",
    description:
      "끊임없이 확장하고 성장한 기술 역량입니다. 이러한 기술들을 사용해 봤어요.",
    icon: HiCircleStack,
    content: Skill,
  },
];

// 실무 경험 데이터
export const workList: WorkDTO[] = [
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

// 교육 경험 데이터
export const educationList: EducationDTO[] = [
  {
    name: "KH정보교육원(JAVA 과정) 수료",
    duration: "2022.02 ~ 2022.09",
    icon: FaCode,
  },
  {
    name: "제주대학교(컴퓨터공학과) 졸업",
    duration: "2013.03 ~ 2021.08",
    icon: FaGraduationCap,
  },
  {
    name: "대기고등학교 졸업",
    duration: "2010.03 ~ 2013.02",
    icon: FaSchool,
  },
];

// 기술 경험 데이터
export const skillList: SkillDTO[] = [
  {
    id: "category_01",
    category: "Languages",
    list: [
      {
        name: "JavaScript",
        icon: RiJavascriptFill,
      },
      {
        name: "TypeScript",
        icon: BiLogoTypescript,
      },
      { name: "Java", icon: RiJavaFill },
      {
        name: "Python",
        icon: BiLogoPython,
      },
    ],
  },
  {
    id: "category_02",
    category: "Frontend",
    list: [
      {
        name: "React",
        icon: RiReactjsFill,
      },
      {
        name: "Angular",
        icon: RiAngularjsFill,
      },
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
    ],
  },
  {
    id: "category_03",
    category: "ETC",
    list: [
      {
        name: "Spring",
        icon: SiSpring,
      },
      {
        name: "Oracle",
        icon: SiOracle,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "AWS",
        icon: BiLogoAws,
      },
    ],
  },
];
