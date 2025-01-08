export interface ProjectDTO {
  category: string;
  items: ProjectItem[];
}

export interface ProjectItem {
  id: string; // 프로젝트 id
  title: string; // 프로젝트 제목
  type: {
    name: string; // 프로젝트 종류
    color: string;
  };
  description: string; // 프로젝트 설명
  technologies: string[]; // 사용 기술 스택
  role: string; // 프로젝트에서의 역할
  duration: {
    start: string; // 시작 날짜 (YYYY-MM-DD)
    end?: string; // 종료 날짜 (종료하지 않은 경우 undefined)
  };
  teamSize?: number; // 팀 규모 (혼자 진행한 경우 1)
  responsibilities: string[]; // 프로젝트에서 담당한 주요 업무
  achievements?: string[]; // 프로젝트에서 달성한 주요 성과 (선택 사항)
  repositoryUrl?: string; // 코드 저장소 URL (GitHub 등, 선택 사항)
  liveDemoUrl?: string; // 라이브 데모 URL (배포된 경우, 선택 사항)
  thumbnail: string; // 프로젝트 대표 이미지 경로
  screenshots?: string[]; // 프로젝트 스크린샷 경로 (이미지 배열)
}
