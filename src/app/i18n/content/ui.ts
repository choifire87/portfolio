import { Lang } from "@/i18n/LanguageContext";

// 헤더 네비게이션 메뉴 (id는 언어와 무관하게 고정)
export const menus: { id: string; name: Record<Lang, string> }[] = [
  { id: "education", name: { ko: "학력", en: "Education" } },
  { id: "career", name: { ko: "경력", en: "Experience" } },
  { id: "project", name: { ko: "프로젝트", en: "Projects" } },
  { id: "prize", name: { ko: "수상", en: "Awards" } },
  { id: "language", name: { ko: "외국어", en: "Languages" } },
  { id: "certificate", name: { ko: "자격증", en: "Certifications" } },
  { id: "writing", name: { ko: "저서", en: "Publications" } },
  { id: "thesis", name: { ko: "논문", en: "Papers" } },
  { id: "patent", name: { ko: "특허", en: "Patents" } },
  { id: "hobby", name: { ko: "취미", en: "Hobbies" } },
  { id: "skill", name: { ko: "기술스택", en: "Skills" } },
];

export const jumboTron = {
  name: { ko: "최화재", en: "Hwajae Choi" } as Record<Lang, string>,
  tagline: {
    ko: "휘황찬란한 말이 아니라 만든 것과 경험으로 증명하는 개발자가 되고 싶습니다.",
    en: "I want to be a developer who proves myself through what I build and experience, not through flashy words.",
  } as Record<Lang, string>,
};