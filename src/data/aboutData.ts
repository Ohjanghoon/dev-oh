// icons
import { RiAwardFill, RiPuzzle2Fill, RiSeedlingFill } from "react-icons/ri";
import { BsRocketTakeoffFill } from "react-icons/bs";

// types
import { AboutDTO } from "../types/aboutTypes";

export const aboutList: AboutDTO[] = [
  {
    id: "keyword_01",
    keyword: "가치",
    icon: RiAwardFill,
    question: "개발자로서 중요하게 생각하는 가치는 무엇인가요?",
    answer:
      "소통과 성장입니다. 프로젝트를 진행하면서 팀원들과 원활한 소통을 통해 더 나은 결과를 만드는 데 집중합니다. 또한, 새로운 기술과 방법론을 끊임없이 배우고 적용하며 스스로 발전하는 것을 중요하게 여깁니다.",
  },
  {
    id: "keyword_02",
    keyword: "문제해결",
    icon: RiPuzzle2Fill,
    question: "문제를 해결할 때 어떤 접근 방식을 취하시나요?",
    answer:
      "문제를 명확히 정의한 뒤, 단계별로 접근하는 방식을 선호합니다. 먼저 원인을 분석하고, 최적의 해결 방안을 탐색하며, 필요하다면 새로운 기술을 학습하여 문제를 해결합니다.",
  },
  {
    id: "keyword_03",
    keyword: "자기계발",
    icon: RiSeedlingFill,
    question: "자기계발을 위해 어떤 노력을 하고 계신가요?",
    answer:
      "꾸준한 학습을 위해 기술 서적을 읽고, 온라인 강의를 통해 새로운 기술 트렌드를 익히고 있습니다. 또한, 개인 프로젝트를 통해 배운 지식을 실습하고, GitHub를 활용해 결과를 공유하며 성장의 기록을 남기고 있습니다.",
  },
  {
    id: "keyword_04",
    keyword: "동기",
    icon: BsRocketTakeoffFill,
    question: "프론트엔드 개발을 선택한 이유는 무엇인가요?",
    answer:
      "사용자와 가장 가까운 기술로, 실시간으로 변화와 성과를 확인할 수 있다는 점이 매력적이었습니다. 특히 디자인과 기능을 결합해 사용자 경험을 개선하는 과정에서 큰 보람을 느낍니다.",
  },
  // {
  //   id: "about_05",
  //   question: "Who am I?",
  //   answer: "안녕하세요!",
  // },
  // {
  //   id: "about_06",
  //   question: "Who am I?",
  //   answer: "안녕하세요!",
  // },
];
