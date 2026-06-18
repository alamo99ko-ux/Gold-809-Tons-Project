import { FactCard, CrewMember, ProjectLog } from "./types";

export const initialFacts: FactCard[] = [
  {
    id: "wealth-usd",
    title: "850억 달러 (85 Billion USD)",
    value: "$85,000,000,000",
    subValue: "글로벌 재정 핵심 자산의 정수",
    category: "wealth",
    iconName: "DollarSign",
    description: "글로벌 항공 하이테크 인프라 및 핵심 자산 가치를 상징하는 한계 없는 핵심 자본 가치입니다.",
    detailPoints: [
      "국제 항공 및 우주 산업 육성 펀드의 마중물 역할 수행",
      "초격차 테크 스타트업 벨트 및 글로벌 연구 개발(R&D) 허브 조성에 전격 투입",
      "글로벌 금융 시장에서의 강력한 지급 보증 및 프로젝트 투자 안정성 입증"
    ]
  },
  {
    id: "wealth-krw",
    title: "129조원",
    value: "₩129,000,000,000,000",
    subValue: "미래 지향적 유동성 자산 가치 설계",
    category: "wealth",
    iconName: "TrendingUp",
    description: "미래 유망 성장 동력의 투자 역량을 뒷받침하기 위해 설계된 최대 규모의 자금 유동 자산 구조입니다.",
    detailPoints: [
      "차세대 지능형 반도체 설계 및 파운드리 대규모 패키지 생산을 주도하는 성장 펀드 연동",
      "글로벌 방위 핵심 기술 및 자체 우주 발사체 고도화를 포함하는 인프라 연합 자금",
      "청주공항 화물터미널 가동 연계 지원 및 중부권 첨단 물류 허브 활성화 투자"
    ]
  },
  {
    id: "aviation-primary",
    title: "Global Express 8000 및 응급 에어 앰뷸런스",
    value: "Global Express 8000 & Ambulance",
    subValue: "초장거리 기동 및 응급 생명 수호 펀드",
    category: "aviation",
    iconName: "Plane",
    description: "하이테크 비즈니스 비행 및 국경 없는 환자 이송을 통합 전개하는 최고 신뢰도의 제트 항공 라인업입니다.",
    detailPoints: [
      "Global Express 8000 비즈니스 제트기를 운용하여 전 세계 무정차 취항 실현",
      "터보팬 항공기로 최고 기량의 1,000시간 타임빌딩 정예 훈련 과정 연속 이수",
      "중환자의 골든타임을 확보하는 최첨단 ICU 기내 시설 및 전문 의료진 동승 응급 비행"
    ]
  },
  {
    id: "tech-semiconductor",
    title: "초미세 정밀 AI 반도체 솔루션",
    value: "AI Semiconductor",
    subValue: "세계 최고 수준의 차세대 실리콘 웨이퍼 및 다이 공정",
    category: "technology",
    iconName: "Cpu",
    description: "나노급 정밀 수공정 웨이퍼 설계 기법을 반영하여, AI 비행 통제에 필수적인 연산 코어를 구축합니다.",
    detailPoints: [
      "초 저전력 환경에서 구동하는 높은 하드웨어 기상 분석 효율성",
      "자체 암호화 솔루션 탑재로 외부 해킹이 원천 봉쇄된 차세대 항공 네트워크",
      "기내 환경과 청주공항 화물터미널 물류 터미널에 능동형 상황 대응 AI 탑재"
    ]
  }
];

export const crewMembers: CrewMember[] = [
  {
    id: "crew-1",
    name: "수석 객실 사무장 (Chief Purser)",
    role: "M1 객실 서비스 총괄",
    gender: "male",
    uniformStyle: "Modern Midnight-Blue Royal Airline Suit",
    avatarSeed: "purser",
    bio: "신뢰감 있는 미소와 정확한 대처로 언제나 안전한 항로를 이끄는 10년 차 베테랑 서비스 총괄자입니다. 세련된 더블 브레스트 패턴의 클래식 수트를 완벽하게 소화합니다."
  },
  {
    id: "crew-2",
    name: "퍼스트 클래스 전문 크루 (First Class Specialist)",
    role: "F2 서비스 앰배서더",
    gender: "female",
    uniformStyle: "Light Ivory & Soft Gold Velvet Accent Uniform with Silk Scarf",
    avatarSeed: "jisoo",
    bio: "전통 고유 미와 현대적 감각을 결합한 연한 아이보리 톤의 최고급 자수 유니폼을 착용함으로써 승객에게 고귀한 자부심을 선사합니다."
  },
  {
    id: "crew-3",
    name: "스타일 브랜드 앰배서더 (Style Ambassador)",
    role: "F3 홍보 앰배서더",
    gender: "female",
    uniformStyle: "Light Sky-Blue Tailored Wrap Suit with Patterned Silk Scarf",
    avatarSeed: "hayoon",
    bio: "가볍고 경쾌한 하늘 향기를 담아낸 연한 하늘색의 세련된 랩 수트를 착용하여, 최상의 전문성과 밝고 고급스러운 첫인상을 약속합니다."
  }
];

export const projectLogs: ProjectLog[] = [
  {
    id: "log-1",
    timestamp: "2026-06-18 07:00",
    title: "승무원 개인 식별자 배제 및 제트기 중복 요소 전격 제거",
    detail: "승무원의 개인 이름을 삭제하고 직무/코드명 중심 표현으로 정비. Global Express 8000, 터보팬 타임빌딩, 응급 에어 앰뷸런스를 하나로 융합하고, 사진을 원형 베일의 컴팩트한 레이아웃으로 변경.",
    status: "Completed"
  },
  {
    id: "log-2",
    timestamp: "2026-06-17 17:00",
    title: "청주공항 화물터미널 가동 소식 연계",
    detail: "청주공항 화물터미널 가동 소식 연계 및 129조원 물류망 투자 역량 직접 매칭.",
    status: "Completed"
  },
  {
    id: "log-3",
    timestamp: "2026-06-17 16:30",
    title: "글로벌 중립 Aero Prestige 테마 정착",
    detail: "글로벌 중립 및 가치 강화를 위해 로컬 지명 및 어휘 배제.",
    status: "Completed"
  }
];
