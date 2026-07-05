import { Lang } from "@/i18n/LanguageContext";

export type ImageInfo = { path: string; width: number; height: number };

// Item 컴포넌트에 그대로 전달되는 데이터 형태
export type ItemContent = {
  logo?: ImageInfo;
  topText?: string;
  headFirst: string;
  headSecond?: string;
  headThird?: string;
  subDescription?: string;
  workDescriptions?: string[];
  works?: string[][];
  topImages?: ImageInfo[];
};

// SkillItem 컴포넌트에 그대로 전달되는 데이터 형태
export type SkillContent = {
  logo: ImageInfo;
  headText: string;
  descriptions: string[];
};

// 일반 섹션(제목 + Item 목록)
export type SectionContent = {
  title: string;
  items: ItemContent[];
};

// 기술 스택 섹션(제목 + SkillItem 목록)
export type SkillSectionContent = {
  title: string;
  items: SkillContent[];
};

export type Localized<T> = Record<Lang, T>;
