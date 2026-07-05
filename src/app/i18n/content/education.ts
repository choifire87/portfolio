import { Localized, SectionContent } from "@/i18n/types";

const kuLogo = { path: "/education/kuLogo.png", width: 40, height: 40 };

export const educationContent: Localized<SectionContent> = {
  ko: {
    title: "학력",
    items: [
      {
        logo: kuLogo,
        headFirst: "고려대학교",
        headSecond: "정보보호대학원 정보보호학 석사",
        headThird: "졸업",
        subDescription: "2011년 3월 ~ 2013년 2월 (2년, 4.0/4.3)",
      },
      {
        logo: kuLogo,
        headFirst: "고려대학교",
        headSecond: "컴퓨터통신공학부 학사",
        headThird: "졸업",
        subDescription: "2007년 3월 ~ 2011년 2월 (4년, 3.8/4.5)",
      },
    ],
  },
  en: {
    title: "Education",
    items: [
      {
        logo: kuLogo,
        headFirst: "Korea University",
        headSecond: "M.S. in Information Security, Graduate School of Information Security",
        headThird: "Graduated",
        subDescription: "Mar 2011 ~ Feb 2013 (2 years, GPA 4.0/4.3)",
      },
      {
        logo: kuLogo,
        headFirst: "Korea University",
        headSecond: "B.S. in Computer and Communications Engineering",
        headThird: "Graduated",
        subDescription: "Mar 2007 ~ Feb 2011 (4 years, GPA 3.8/4.5)",
      },
    ],
  },
};
