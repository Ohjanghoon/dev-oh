import { IconType } from "react-icons";

export interface ExperienceDTO {
  title: string;
  id: string;
  description: string;
  icon: IconType;
  content: JSX.ElementType;
}

export interface WorkDTO {
  id: string;
  name: string;
  duration: string;
  month: string;
  items: WorkItem[];
}

interface WorkItem {
  category: string;
  content: string[];
}

export interface EducationDTO {
  id: string;
  name: string;
  duration: string;
  icon: IconType;
}

export interface SkillDTO {
  id: string;
  category: string;
  list: SkillItem[];
}

interface SkillItem {
  name: string;
  icon: IconType | string;
  color: string;
}
