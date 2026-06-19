import React, { useState, useEffect } from "react";
import { 
  Plane, 
  Cpu, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Sliders, 
  Compass, 
  Activity, 
  AlertTriangle,
  Lightbulb, 
  Award,
  ChevronRight,
  Info,
  Smartphone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  Anchor,
  Coins
} from "lucide-react";
import { initialFacts, crewMembers, projectLogs } from "./data";
import { FactCard, CrewMember, ProjectLog } from "./types";
import { motion, AnimatePresence } from "motion/react";

// Inline helper for avatar styling and rendering
const CabinCrewCard = ({ crew, key }: { crew: CrewMember, key?: React.Key }) => {
  const isMale = crew.gender === "male";
  const isStyleA = crew.id === "crew-2"; // Female style A

  // Setup styles exactly extracted from Natural Tones theme instructions
  const cardBgClass = isMale 
    ? "bg-[#F5F2EE] border-[#E5E0D8]" 
    : isStyleA
      ? "bg-[#F9F7F2] border-[#D4AF37]/30 shadow-sm"
      : "bg-[#F2F4F7] border-[#C0C9D1]";

  const labelColorClass = isMale
    ? "opacity-60"
    : isStyleA
      ? "text-[#B4964B] font-bold"
      : "text-[#5C6D7E] opacity-70";

  const bannerTitle = isMale
    ? "Flight Director"
    : isStyleA
      ? "Sky Ambassador"
      : "Service Specialist";

  const silhouetteGradient = isMale
    ? "from-[#D9D1C7]"
    : isStyleA
      ? "from-[#E8DCC4]"
      : "from-[#CBD5E0]";

  return (
    <div className={`relative h-[410px] ${cardBgClass} rounded-t-full border flex flex-col items-center justify-between p-6 overflow-hidden transition-all duration-300 group hover:shadow-md`}>
      {/* Top absolute header element from theme */}
      <div className={`absolute top-8 text-[10px] uppercase tracking-widest text-[#2D2D2D] text-center ${labelColorClass}`}>
        {bannerTitle}
      </div>

      {/* Styled Silhouette Representation with user's role */}
      <div className="absolute inset-x-0 top-24 bottom-22 flex justify-center items-end pointer-events-none">
        <div className={`w-24 h-44 bg-gradient-to-t ${silhouetteGradient} to-transparent rounded-full opacity-35 flex items-center justify-center`}>
          <div className="p-2.5 rounded-full bg-white/80 shadow-xs border border-stone-200/20">
            <Users className="w-4 h-4 text-stone-500" />
          </div>
        </div>
      </div>

      {/* Info Card containing name, bio description, and style details */}
      <div className="w-full text-center mt-auto z-10 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-[#E5E0D8]/60 shadow-xs flex flex-col gap-1.5">
        <div className="space-y-0.5">
          <p className="text-xs uppercase tracking-widest font-bold text-stone-400">
            {crew.gender === "male" ? "MALE CREW SERVICE LEAD" : "FEMALE CREW AMBASSADOR"}
          </p>
          <h4 className="font-serif italic text-base font-extrabold text-[#2D2D2D]">{crew.name}</h4>
          <p className="text-[10px] uppercase tracking-wider font-semibold text-[#8A7E6A]">{crew.role}</p>
        </div>
        
        <div className="h-px bg-[#E5E0D8]/60 my-1"></div>

        <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed font-light">
          {crew.bio}
        </p>
        
        <span className="text-[9px] mt-1 font-mono text-[#2D2D2D]/60 tracking-wider">
          {crew.uniformStyle}
        </span>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedFact, setSelectedFact] = useState<FactCard | null>(initialFacts[0]);
  const [facts, setFacts] = useState<FactCard[]>(initialFacts);
  const [simulationSpeed, setSimulationSpeed] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [semiStatus, setSemiStatus] = useState<string>("Optimal");
  const [simulatorStatus, setSimulatorStatus] = useState<string>("Ready");
  const [logs, setLogs] = useState<ProjectLog[]>(projectLogs);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  
  // Custom simulator animation metrics
  const [metrics, setMetrics] = useState({
    pitch: 0.2,
    roll: -0.5,
    yaw: 1.1,
    hydraulics: 98,
    frequency: 60,
    temperature: 34.5
  });

  useEffect(() => {
    let interval: any;
    if (isSimulating) {
      interval = setInterval(() => {
        setMetrics(prev => ({
          pitch: +(prev.pitch + (Math.random() - 0.5) * 0.1 * simulationSpeed).toFixed(2),
          roll: +(prev.roll + (Math.random() - 0.5) * 0.08 * simulationSpeed).toFixed(2),
          yaw: +(prev.yaw + (Math.random() - 0.5) * 0.05 * simulationSpeed).toFixed(2),
          hydraulics: Math.min(100, Math.max(90, +(prev.hydraulics + (Math.random() - 0.5) * 0.2).toFixed(1))),
          frequency: Math.min(62, Math.max(58, +(prev.frequency + (Math.random() - 0.5) * 0.3 * simulationSpeed).toFixed(1))),
          temperature: +(34.0 + Math.sin(Date.now() / 10000) * 1.5 + Math.random() * 0.2).toFixed(1)
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSimulating, simulationSpeed]);

  useEffect(() => {
    document.title = "Gold 809 Global Aviaion Aliilance";
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D2D2D] font-sans antialiased selection:bg-[#E5E0D8] selection:text-stone-900 pb-20">
      
      {/* Refined Natural Tones Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#E5E0D8] transition-all">
        <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#F5F2EE] border border-[#E5E0D8] flex items-center justify-center">
              <Award className="w-5 h-5 text-[#8A7E6A]" />
            </div>
            <div>
              <div className="text-xs tracking-[0.1em] font-bold uppercase text-[#2D2D2D]">
                Gold 809 Global Aviaion Aliilance
              </div>
              <p className="text-[9px] text-amber-600 uppercase tracking-widest font-mono font-bold">809Tons of Gold  Aviaion Project</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`pb-1 transition-all duration-200 cursor-pointer ${
                activeTab === "overview" 
                  ? "border-b border-[#2D2D2D] text-[#2D2D2D]" 
                  : "opacity-40 hover:opacity-100 text-[#2D2D2D]"
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab("crew")}
              className={`pb-1 transition-all duration-200 cursor-pointer ${
                activeTab === "crew" 
                  ? "border-b border-[#2D2D2D] text-[#2D2D2D]" 
                  : "opacity-40 hover:opacity-100 text-[#2D2D2D]"
              }`}
            >
              Crew Fleet
            </button>
            <button 
              onClick={() => setActiveTab("simulator")}
              className={`pb-1 transition-all duration-200 cursor-pointer ${
                activeTab === "simulator" 
                  ? "border-b border-[#2D2D2D] text-[#2D2D2D]" 
                  : "opacity-40 hover:opacity-100 text-[#2D2D2D]"
              }`}
            >
              Flight & Semiconductor Tech
            </button>
            <button 
              onClick={() => setActiveTab("history")}
              className={`pb-1 transition-all duration-200 cursor-pointer ${
                activeTab === "history" 
                  ? "border-b border-[#2D2D2D] text-[#2D2D2D]" 
                  : "opacity-40 hover:opacity-100 text-[#2D2D2D]"
              }`}
            >
              Project Logs
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-50 border border-[#E5E0D8] text-[9px] tracking-wider uppercase font-semibold text-[#2D2D2D]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Core System
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-8 space-y-12">
        
        {/* Core Hero Branding Board (Natural Tones - Elegant, spacious, soft-colored luxury) */}
        <section className="bg-[#FDFCFB] rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-xs relative">
          <div className="absolute top-0 right-0 p-8 z-10 pointer-events-none">
            <div className="px-4 py-2 bg-[#FDFCFB]/95 backdrop-blur-md border border-[#E5E0D8] rounded-full text-[10px] tracking-widest font-bold text-stone-700 flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B4964B]" />
              <span>NATURAL PREMIUM THEME</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Frame - Compact and Understated */}
            <div className="lg:col-span-4 bg-[#F5F2EE] flex items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#E5E0D8]">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white shadow-md bg-stone-100 flex items-center justify-center">
                <img 
                  src="/src/assets/images/premium_hero_banner_1781763478890.jpg" 
                  alt="809 Tons Gold Project Premium Hero" 
                  className="w-full h-full object-cover grayscale-15 opacity-85 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/10 to-transparent"></div>
              </div>
            </div>

            {/* Content Details (Extremely light-toned and sophisticated) */}
            <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-between bg-[#FDFCFB]">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-1.5 bg-[#F5F2EE] border border-[#E5E0D8] py-1 px-3 rounded-full text-[10px] tracking-wider uppercase font-semibold text-[#8A7E6A]">
                  <Award className="w-3.5 h-3.5" /> High-Asset Innovation Protocol
                </div>

                {/* Majestic Georgia Typography from Natural Tones style guide */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-2">
                    <h1 className="text-[64px] lg:text-[76px] leading-none font-light tracking-tighter italic text-[#2D2D2D]" style={{ fontFamily: 'Georgia, serif' }}>
                      129<span className="text-xl lg:text-2xl not-italic ml-2 font-sans opacity-70">조원</span>
                    </h1>
                    <div className="h-px flex-1 bg-[#E5E0D8] mb-4"></div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-bold">Valuation Target</div>
                    <h2 className="text-2xl lg:text-3.5xl leading-none font-light tracking-tight text-[#8A7E6A]" style={{ fontFamily: 'Georgia, serif' }}>
                      850억 달러 <span className="text-xs uppercase tracking-normal opacity-70 ml-2 font-sans text-stone-500">(85 Billion USD)</span>
                    </h2>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed font-light pt-2">
                    독보적이고 웅장한 글로벌 핵심 본위 가치를 담아낸 최신 항공 인프라 및 청주공항 화물터미널 물류 시스템 전개 이니셔티브입니다.
                  </p>
                </div>

                {/* Sub Facts inside card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F9F7F2] border border-[#E5E0D8] transition-all hover:bg-stone-50">
                    <div className="text-[10px] uppercase tracking-widest text-[#B4964B] font-bold mb-1">GLOBAL RESERVE TIER</div>
                    <p className="text-xs text-stone-500">글로벌 항공 협회 파이널 연계 자산 및 고품격 안전 펀드 조성</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F2F4F7] border border-[#C0C9D1]/60 transition-all hover:bg-stone-50">
                    <div className="text-[10px] uppercase tracking-widest text-[#5C6D7E] font-bold mb-1">NATIVE SILICON VALUE</div>
                    <p className="text-xs text-stone-500">독자 모션 시뮬레이션 및 초고지능 지능형 정밀 반도체 연동</p>
                  </div>
                </div>

              </div>

              <div className="border-t border-[#E5E0D8] mt-8 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1.5">
                    <div className="w-7 h-7 rounded-full bg-slate-700 border border-white text-white text-[9px] font-bold flex items-center justify-center shadow-xs">M1</div>
                    <div className="w-7 h-7 rounded-full bg-[#E8DCC4] border border-white text-stone-800 text-[9px] font-bold flex items-center justify-center shadow-xs">F2</div>
                    <div className="w-7 h-7 rounded-full bg-[#CBD5E0] border border-white text-stone-800 text-[9px] font-bold flex items-center justify-center shadow-xs">F3</div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#2D2D2D] block">정예 경력 승무원 파견 배치</span>
                    <span className="text-[10px] text-stone-400 font-light">남자 수석사무장 1명 + 완연히 다른 고유 스타일 유니폼을 착용한 여성 승무원 2명</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveTab("crew")}
                    className="px-4 py-2 rounded-xl bg-[#2D2D2D] hover:bg-black text-white font-medium text-[11px] uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    Explore Crew Fleet <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Navigation View Container */}
        <div>
          {activeTab === "overview" && (
            <div className="space-y-8">
              
              {/* Fact Card Detailer Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Fact Selector on Left */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-1">
                    <h3 className="font-serif text-lg font-bold text-stone-800 mb-1">핵심 자산 & 항공 반도체 노드</h3>
                    <p className="text-xs text-stone-500">원하시는 자산을 상세히 돋보기로 확인하고 미래 가치 기여 항목을 자세히 검측해 보세요.</p>
                  </div>

                  <div className="space-y-3">
                    {facts.map((fact) => (
                      <button
                        key={fact.id}
                        onClick={() => setSelectedFact(fact)}
                        className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 ${
                          selectedFact?.id === fact.id 
                            ? "bg-white border-[#b8860b] shadow-md scale-[1.02]" 
                            : "bg-white/40 border-[#eae2cf]/60 hover:bg-white hover:border-[#ebdcb3]/80"
                        }`}
                      >
                        <div className={`p-3 rounded-xl shrink-0 ${
                          selectedFact?.id === fact.id 
                            ? "bg-[#fff9eb] text-[#b8860b]" 
                            : "bg-stone-100 text-stone-500"
                        }`}>
                          {fact.category === "wealth" && <DollarSign className="w-5 h-5" />}
                          {fact.category === "aviation" && <Plane className="w-5 h-5" />}
                          {fact.category === "technology" && <Cpu className="w-5 h-5" />}
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#b59963]">
                            {fact.category} segment
                          </span>
                          <h4 className="font-semibold text-stone-900 text-base">{fact.title}</h4>
                          <p className="text-xs text-stone-500 line-clamp-1">{fact.subValue}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selector Detail Display */}
                <div className="lg:col-span-7">
                  <AnimatePresence mode="wait">
                    {selectedFact && (
                      <motion.div
                        key={selectedFact.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white border border-[#eae2cf] rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <span className="px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider">
                              {selectedFact.category} Focus Area
                            </span>
                            <div className="w-10 h-10 rounded-full bg-[#faeed8] flex items-center justify-center text-[#b8860b]">
                              <Award className="w-5 h-5" />
                            </div>
                          </div>

                          <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                            보위 자산 / 기술 등급
                          </span>
                          <h3 className="font-serif text-2xl lg:text-3xl font-extrabold text-stone-900 mb-2">
                            {selectedFact.title}
                          </h3>
                          <p className="text-sm text-[#b59963] font-semibold mb-6">{selectedFact.subValue}</p>

                          <div className="h-px bg-stone-100 mb-6"></div>

                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest">프로젝트 주요 기여 및 이행 계획</h4>
                            <p className="text-stone-600 text-sm leading-relaxed">{selectedFact.description}</p>
                            
                            <ul className="space-y-3 pt-2">
                              {selectedFact.detailPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-2.5 text-stone-700 text-sm">
                                  <span className="w-5 h-5 rounded-full bg-[#fbf5e8] border border-[#ebdcb3] text-[#b8860b] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="border-t border-stone-100 mt-8 pt-6 flex items-center justify-between">
                          <div className="text-xs text-stone-400 flex items-center gap-1">
                            <Info className="w-3.5 h-3.5 text-stone-400" />
                            <span>실시간 변동률 기준 통제권 연계 완료</span>
                          </div>
                          
                          <div className="text-xs font-mono font-semibold text-stone-600">
                            ID: {selectedFact.id}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

              {/* Informative Grid - Four Columns reflecting lightness, elegance, and new operations */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="bg-white border border-[#eae2cf] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#8A7E6A] flex items-center justify-center mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-stone-800 mb-2 font-serif italic text-base">850억 달러</h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-light">
                      글로벌 금융 투명성을 담보하며, 흔들리지 않는 가치를 보장하기 위한 최고 등급의 오피니언 보증 준비 자산입니다.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 text-[10px] text-stone-400 font-semibold tracking-wide uppercase">
                    85 Billion USD Secured
                  </div>
                </div>

                <div className="bg-white border border-[#eae2cf] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-stone-50 text-[#8A7E6A] flex items-center justify-center mb-4">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-stone-800 mb-2 font-serif italic text-base">청주공항 화물터미널 가동</h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-light">
                      중부권 첨단 교통 허브인 청주공항 화물터미널 활성화 가동을 직접 매칭하며, 129조원 물류망 투자 역량을 입체적으로 배치합니다.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 text-[10px] text-stone-400 font-semibold tracking-wide uppercase">
                    ₩129 Trillion Linkage
                  </div>
                </div>

                <div className="bg-white border border-[#eae2cf] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-stone-50 text-[#8A7E6A] flex items-center justify-center mb-4">
                      <Plane className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-stone-800 mb-2 font-serif italic text-base">Global Express 8000</h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-light">
                      Global Express 8000 비즈니스 제트기 함대 운용 및 터보팬 항공기로 최고 기량의 1,000시간 타임빌딩 정예 훈련 과정을 수행합니다.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 text-[10px] text-stone-400 font-semibold tracking-wide uppercase">
                    1000 Hours Turbofan
                  </div>
                </div>

                <div className="bg-white border border-[#eae2cf] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-red-50/50 text-[#8A7E6A] flex items-center justify-center mb-4">
                      <Activity className="w-5 h-5 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-stone-800 mb-2 font-serif italic text-base">응급환자 제트 에어앰뷸런스</h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-light">
                      중환자의 안전하고 품위 있는 골든타임 이송을 위해 인텐시브 ICU 장비 및 전문 의료진을 상시 동승 운용하는 환자 비행 시스템입니다.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 text-[10px] text-stone-400 font-semibold tracking-wide uppercase">
                    Emergency Lifeline Active
                  </div>
                </div>

              </div>

              {/* Premium Project Poster Displays */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* 1. Official Theme Poster */}
                <div className="bg-white border border-[#eae2cf] rounded-3xl overflow-hidden p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-[#b8860b] uppercase tracking-widest font-bold">Concept Poster A</span>
                      <h3 className="font-serif text-lg font-bold text-stone-900 mt-0.5">통합 이니셔티브 캐릭터 포스터</h3>
                      <p className="text-[11px] text-stone-500 font-light">Global Express 8000, 에어 앰뷸런스, 정예 객실 크루가 직관적인 레이아웃으로 융합된 전경.</p>
                    </div>
                  </div>
                  
                  <div className="relative aspect-[16/offset] aspect-video w-full rounded-xl overflow-hidden border border-stone-200 shadow-xs group">
                    <img 
                      src="/src/assets/images/project_poster_banner_1781765275051.jpg" 
                      alt="Premium Project Travel Poster Art" 
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-3 left-4 right-4 text-white text-[9px] tracking-wider uppercase font-semibold flex items-center justify-between pointer-events-none opacity-90">
                      <span>Airlines Crew & Logistics Hub</span>
                      <span>© Aero Prestige Artworks</span>
                    </div>
                  </div>
                </div>

                {/* 2. Advanced Technology & Wealth Fusion Poster */}
                <div className="bg-white border border-[#eae2cf] rounded-3xl overflow-hidden p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-[#b8860b] uppercase tracking-widest font-bold">Concept Poster B</span>
                      <h3 className="font-serif text-lg font-bold text-stone-900 mt-0.5">초정밀 반도체 및 골드 웰스 아트</h3>
                      <p className="text-[11px] text-stone-500 font-light">비즈니스 제트기 비행, 골드바의 든든한 가치, 그리고 지능형 마이크로칩 밴드가 결합된 에디션.</p>
                    </div>
                  </div>
                  
                  <div className="relative aspect-[16/offset] aspect-video w-full rounded-xl overflow-hidden border border-stone-200 shadow-xs group">
                    <img 
                      src="/src/assets/images/premium_conceptual_poster_1781765406982.jpg" 
                      alt="Advanced Technology & Wealth Fusion Poster" 
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-3 left-4 right-4 text-white text-[9px] tracking-wider uppercase font-semibold flex items-center justify-between pointer-events-none opacity-90">
                      <span>Gold & Semiconductor Core Synergy</span>
                      <span>© Aero Prestige Artworks</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* 3. Mega 9:16 Synergy Poster Showcase */}
              <div className="bg-[#FAF9F5] border border-[#E9E4D9] rounded-3xl p-6 lg:p-10 space-y-6 mt-4.5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-[#E9E4D9]/80 pb-2">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#b8860b] uppercase tracking-widest font-bold">
                      <Sparkles className="w-3 h-3" /> Mega Synergy Grand Poster (9:16)
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                      809TONs Gold Project 통합 비주얼 포스터 에디션
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  
                  {/* Outer Framed 9:16 Poster Card */}
                  <div className="w-full max-w-[440px] flex flex-col items-center justify-center bg-white border border-[#E5E0D8] rounded-3xl p-6 md:p-8 shadow-md">
                    <span className="text-[10px] text-stone-400 font-mono mb-4 uppercase tracking-widest">Premium Collection Artboard</span>
                    
                    {/* Museum Frame Container */}
                    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border-4 border-stone-100 shadow-2xl group bg-stone-50">
                      <img 
                        src="/src/assets/images/skyking_synergy_poster_1781858950329.jpg" 
                        alt="809 Tons Gold Project Premium 9:16 Poster" 
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Interactive Visual Anchors Overlay */}
                      <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none bg-stone-900/5 hover:bg-transparent transition-all duration-500">
                        <div className="flex justify-between items-start">
                          <span className="bg-[#B4964B]/90 backdrop-blur-xs text-white text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
                            AERO PRESTIGE CODE
                          </span>
                        </div>
                        
                        <div className="text-white">
                          <h4 className="font-serif text-base font-bold tracking-tight opacity-95">809 Tons Gold Project</h4>
                          <p className="text-[9px] tracking-wider text-stone-300 font-light mt-0.5">Skyking Global Aviation Alliance</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}

          {activeTab === "crew" && (
            <div className="space-y-8">
              
              {/* Introduction to the flight crew */}
              <div className="bg-white rounded-3xl p-8 border border-[#eae2cf]">
                <div className="max-w-2xl space-y-3">
                  <span className="text-xs font-bold text-[#b8860b] uppercase tracking-wider">Aviation Elegance Crew</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">최상위 승객 안위 기여를 위한 객실 승무원 크루</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    본 프로젝트의 고품격 비행 경험을 극대화하기 위해 특별히 매칭된 정예 객실 크루입니다. 
                    <strong> 남자 사무장 1인과 여자 승무원 2인</strong>으로 구성되어 있으며, 
                    두 명의 여성 승무원은 각자 <strong>서로 완전히 다른 세련된 항공사 스타일 유니폼</strong>을 품격 있게 매칭하여 우아함과 깊이를 더하였습니다.
                  </p>
                </div>
              </div>

              {/* Crew Cards Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {crewMembers.map((crew) => (
                  <CabinCrewCard key={crew.id} crew={crew} />
                ))}
              </div>

              {/* Special design highlight explaining uniforms details */}
              <div className="bg-[#fbfcfa] border border-[#d4cfc1]/80 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#b8860b]">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-semibold text-sm">유니폼 특별 대조 디자인 분석</span>
                  </div>
                  <p className="text-xs text-stone-600 max-w-3xl leading-relaxed">
                    <strong>퍼스트 클래스 전문 크루 (F2)</strong>는 황실의 기품을 닮은 따뜻한 ‘연 아이보리 & 골드 벨벳 악센트’의 고전 기풍 유니폼을 입어 품격을 대변합니다. <br />
                    반면 <strong>스타일 브랜드 앰배서더 크루 (F3)</strong>는 맑게 갠 구름 위 풍경을 연상케 하는 산뜻한 ‘연 블루 테일러드 랩 수트’를 입고 비행에 나서 다채로운 스펙트럼의 매력을 보여줍니다.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 px-4 py-2 bg-stone-100 rounded-xl border border-stone-200 text-xs font-mono font-bold text-stone-700">
                  <span>M1 + F2 Scheme Synchronized</span>
                </div>
              </div>

            </div>
          )}

          {activeTab === "simulator" && (
            <div className="space-y-8">
              
              {/* Sim and Semiconductor Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* 6-Axis Simulator Visualizer */}
                <div className="bg-white border border-[#eae2cf] rounded-3xl p-6 lg:p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-amber-50 text-[#b8860b]">
                        <Plane className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-800">6자유도 가동 Full Flight Simulator</h4>
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Aviation Core Segment</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      simulatorStatus === "Ready" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-amber-50 text-amber-800 border border-amber-200"
                    }`}>
                      {simulatorStatus}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    B737-800 파일럿 기량을 완벽하게 조종하고 검증하는 전문 모션 6축 가동 하드웨어 트래킹입니다. 현재 가상 풍력 및 랜딩 데이터를 시뮬레이터 실시간 수치에 투영하여 작동 중입니다.
                  </p>

                  {/* Reactive Live Monitor Mock */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between text-xs text-stone-600">
                      <span className="font-semibold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#b8860b] animate-pulse" />
                        실시간 자이로 & 피치 모니터
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-stone-400">속도 제어</span>
                        <select 
                          value={simulationSpeed} 
                          onChange={(e) => setSimulationSpeed(Number(e.target.value))}
                          className="px-1.5 py-0.5 rounded border border-stone-300 bg-white text-[10px] font-bold"
                        >
                          <option value={0.5}>0.5x(안정)</option>
                          <option value={1}>1.0x(표준)</option>
                          <option value={2}>2.0x(가속)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-white rounded-xl border border-stone-150">
                        <span className="text-[9px] uppercase font-bold text-stone-400 block">pitch</span>
                        <div className="font-mono text-sm font-bold text-stone-700">{metrics.pitch}°</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-150">
                        <span className="text-[9px] uppercase font-bold text-stone-400 block">roll</span>
                        <div className="font-mono text-sm font-bold text-stone-700">{metrics.roll}°</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-150">
                        <span className="text-[9px] uppercase font-bold text-stone-400 block">yaw</span>
                        <div className="font-mono text-sm font-bold text-stone-700">{metrics.yaw}°</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] text-stone-600">
                        <span>유압 전자기 서보 시스템 압력</span>
                        <span className="font-mono font-bold text-stone-700">{metrics.hydraulics}%</span>
                      </div>
                      <div className="w-full bg-stone-200 rounded-full h-1.5">
                        <div 
                          className="bg-[#b8860b] h-1.5 rounded-full transition-all duration-500" 
                          style={{ width: `${metrics.hydraulics}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">기상조건 동기화 속도</span>
                    <button 
                      onClick={() => setIsSimulating(!isSimulating)}
                      className="px-3 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 hover:text-stone-900 font-medium font-mono"
                    >
                      {isSimulating ? "상태 일시정지" : "데이터 수집 시작"}
                    </button>
                  </div>
                </div>

                {/* AI Semiconductor Monitor */}
                <div className="bg-white border border-[#eae2cf] rounded-3xl p-6 lg:p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-800">초정밀 AI 항공 연산 반도체 소자</h4>
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Core Silicon Platform</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-100">
                      State: {semiStatus}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    항공 관제 및 실시간 고속 AI 연산을 담당하기 위해 <strong>129조원</strong> 자산 파이프라인의 연계기술로 극미세 공정 설계된 항공 장비 칩입니다.
                  </p>

                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <h5 className="text-xs font-bold text-stone-500 uppercase tracking-widest">칩셋 기후 및 실시간 방열 모니터</h5>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-xl border border-stone-150 text-center">
                        <span className="text-[10px] text-stone-400 block uppercase font-bold mb-1">소자 한계 온도</span>
                        <div className="text-xl font-mono font-bold text-stone-800">{metrics.temperature}°C</div>
                        <span className="text-[9px] text-emerald-600 font-semibold">적정 가동 보장</span>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-stone-150 text-center">
                        <span className="text-[10px] text-stone-400 block uppercase font-bold mb-1">가동 전력 주파수</span>
                        <div className="text-xl font-mono font-bold text-stone-800">{metrics.frequency} GHz</div>
                        <span className="text-[9px] text-indigo-700 font-semibold">초고속 연산 주파수</span>
                      </div>
                    </div>

                    <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100/50 text-xs text-indigo-950 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                      <span>본 반도체의 설계 특허와 나노 웨이퍼 공정은 객실 승무원 편대가 탑승할 최첨단 항공 관제 시스템의 핵심 인공지능 보드로 활용됩니다.</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSemiStatus(prev => prev === "Optimal" ? "Enhanced Performance" : "Optimal")}
                      className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-xs transition-all shadow-xs"
                    >
                      반도체 부스트 스트레스 테스트 구동
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {activeTab === "history" && (
            <div className="space-y-6">
              
              {/* Detailed Explanation on cleanup of duplicates and adjustments */}
              <div className="bg-white rounded-3xl p-8 border border-[#eae2cf] space-y-6">
                <div>
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Historical Clean-up Record</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">완벽주의 기반 숫자 중복 제거 및 이미지 신규 설계 가치</h3>
                  <p className="text-sm text-stone-600 leading-relaxed mt-2">
                    대시보드 상에서 무분별하고 복잡하게 나열되었던 대형 재정 수치와 불규칙한 데이터 중복을 완전히 소거하였습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="p-5 rounded-2xl bg-[#fffefc] border border-[#ebdcb3]/60">
                    <div className="flex items-center gap-2 text-[#b8860b] mb-2 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" /> 129조원 단 1식 유지 설계
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      기존에 대시보드 곳곳에 중구난방 투영되던 글로벌 자원 자산 총체 "129조원" 표기를 전면 검수 후 **단 1개만 지향되도록 통합 설계**하여 관람 가치를 단순하고 강력하게 고정했습니다.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#fffefc] border border-[#ebdcb3]/60">
                    <div className="flex items-center gap-2 text-[#b8860b] mb-2 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" /> 850억 달러 (85 Billion USD) 중복 제거
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      글로벌 투자 안전 자산 척도인 85 Billion USD의 경우도 동일하게 **단 1개의 고품격 섹션으로 고정**하여, 사용자 시선을 완벽히 흡수시킵니다.
                    </p>
                  </div>

                </div>
              </div>

              {/* Incremental Logs list */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-[#eae2cf]">
                <h4 className="font-serif text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-stone-500" />
                  프로젝트 로그 북 & 시스템 마일스톤
                </h4>
                
                <div className="space-y-4">
                  {logs.map((log) => (
                    <div key={log.id} className="p-4 rounded-xl hover:bg-stone-50/80 border border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-stone-400 font-bold">{log.timestamp}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            log.status === "Completed" ? "bg-emerald-50 text-emerald-800 border border-emerald-100" : "bg-amber-100 text-stone-800"
                          }`}>
                            {log.status}
                          </span>
                        </div>
                        <h5 className="font-semibold text-stone-800 text-sm">{log.title}</h5>
                        <p className="text-xs text-stone-500 leading-relaxed font-light">{log.detail}</p>
                      </div>
                      
                      <button 
                        onClick={() => alert(`마일스톤 세부 정보:\n${log.detail}`)}
                        className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-semibold shrink-0 transition-all border border-stone-250"
                      >
                        상세 관람
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Dynamic bottom branding with Natural Tones */}
        <footer className="mt-16 border-t border-[#E5E0D8] pt-12 pb-8 bg-[#FDFCFB]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="text-xs tracking-[0.3em] font-semibold uppercase opacity-60 text-[#2D2D2D]">
                Aero Prestige Global
              </div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-[#2D2D2D] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                위대한 자본과 한계가 없는 기술의 만남
              </h2>
              <p className="text-[#2D2D2D]/70 text-xs sm:text-sm leading-relaxed font-light max-w-lg">
                우리는 809톤의 시너지를 단순함과 고도성의 균형 안에서 다듬어 갑니다. 
                정예 객실 승무원 크루들의 완벽한 격식은 물론, 중복을 제거한 정밀 금융 숫자 본위제가 글로벌 최고성 혁신 반도체 역량을 환히 전진시킵니다.
              </p>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end gap-6 md:gap-0">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Market Cap Indicator</span>
                  <span className="text-sm font-medium font-serif italic text-stone-700">₩129 Trillion Secured</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Experience Tier</span>
                  <span className="text-sm font-medium font-serif italic text-stone-700">Ultra-Luxe Hybrid</span>
                </div>
              </div>

              <div className="text-[10px] tracking-widest uppercase opacity-40 text-stone-500 font-mono">
                &copy; 2026 Gold 809 Tons Project Executive Council. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

      </main>

    </div>
  );
}
