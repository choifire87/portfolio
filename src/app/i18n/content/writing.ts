import { Localized, SectionContent } from "@/i18n/types";

const link = "https://product.kyobobook.co.kr/detail/S000001766455";

export const writingContent: Localized<SectionContent> = {
  ko: {
    title: "저서",
    items: [
      {
        topText: "위키북스",
        headFirst: "마스터링 리버스 엔지니어링 번역",
        subDescription: "2021년 4월",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${link}' target='_blank'>관련 링크</a>`,
        ],
      },
    ],
  },
  en: {
    title: "Publications",
    items: [
      {
        topText: "WikiBooks",
        headFirst: "Korean translation of \"Mastering Reverse Engineering\"",
        subDescription: "Apr 2021",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${link}' target='_blank'>Link</a>`,
        ],
      },
    ],
  },
};
