import { Localized, SectionContent } from "@/i18n/types";

export const certificateContent: Localized<SectionContent> = {
  ko: {
    title: "자격증",
    items: [
      {
        topText: "한국산업인력공단(HRD Korea)",
        headFirst: "정보처리기사",
        subDescription: "2018년 8월",
      },
    ],
  },
  en: {
    title: "Certifications",
    items: [
      {
        topText: "Human Resources Development Service of Korea (HRD Korea)",
        headFirst: "Engineer Information Processing",
        subDescription: "Aug 2018",
      },
    ],
  },
};
