import { Localized, SectionContent } from "@/i18n/types";

export const languageContent: Localized<SectionContent> = {
  ko: {
    title: "외국어",
    items: [
      {
        headFirst: "영어",
        headSecond: "기본 일상회화 및 논문 수준 독해 가능",
      },
    ],
  },
  en: {
    title: "Languages",
    items: [
      {
        headFirst: "English",
        headSecond: "Everyday conversation and paper-level reading comprehension",
      },
    ],
  },
};
