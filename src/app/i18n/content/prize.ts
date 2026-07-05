import { Localized, SectionContent } from "@/i18n/types";

const interviewLink = "https://www.youtube.com/watch?v=ZKWwMvpdFZ0";
const reinventLink =
  "https://aws.amazon.com/ko/blogs/korea/aws-reinvent-2023-korean-sessions/";
const gamedayLink = "https://it.donga.com/103782/";
const kshieldLink = "https://n.news.naver.com/article/277/0003177430";

const interviewImages = [{ path: "/prize/interview.png", width: 500, height: 400 }];
const gamedayImages = [
  { path: "/prize/gameday1.jpg", width: 500, height: 400 },
  { path: "/prize/gameday2.jpg", width: 500, height: 400 },
];

export const prizeContent: Localized<SectionContent> = {
  ko: {
    title: "수상",
    items: [
      {
        headFirst: "AWS 우수 고객사례로 선정되어 인터뷰에 참여",
        headSecond: "AWS 고객사례 인터뷰",
        subDescription: "2023년 12월",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${interviewLink}' target='_blank'>인터뷰 링크</a>`,
        ],
        topImages: interviewImages,
      },
      {
        headFirst:
          "GBL211-KO | Building sleep apps on AWS with AI as a service [Korean]",
        headSecond: "AWS re:invent lightning talk 발표",
        subDescription: "2023년 12월",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${reinventLink}' target='_blank'>발표 공지 링크</a>`,
        ],
      },
      {
        headFirst:
          "AWS Korea에서 주최하는 2023 GameDay 에서 14개 팀 중에 1등으로 우승",
        headSecond: "AWS GameDay 우승",
        subDescription: "2023년 4월",
        topImages: gamedayImages,
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${gamedayLink}' target='_blank'>관련 기사</a>`,
        ],
      },
      {
        headFirst:
          "제2기술연구본부 사이버센터에서 인하우스 연구개발한 프로젝트로 국방과학상 동상 수상",
        headSecond: "국방과학상 동상",
        subDescription: "2017년 8월",
      },
      {
        headFirst:
          "한국인터넷진흥원과 미래창조과학부에서 주관한 K-Shield 최종 1기로 선발",
        headSecond: "사이버보안전문가 K-Shield 1기",
        subDescription: "2014년 1월",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${kshieldLink}' target='_blank'>관련 기사</a>`,
        ],
      },
    ],
  },
  en: {
    title: "Awards",
    items: [
      {
        headFirst: "Selected as an AWS featured customer case and participated in an interview",
        headSecond: "AWS Customer Case Interview",
        subDescription: "Dec 2023",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${interviewLink}' target='_blank'>Interview link</a>`,
        ],
        topImages: interviewImages,
      },
      {
        headFirst:
          "GBL211-KO | Building sleep apps on AWS with AI as a service [Korean]",
        headSecond: "AWS re:invent Lightning Talk speaker",
        subDescription: "Dec 2023",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${reinventLink}' target='_blank'>Announcement link</a>`,
        ],
      },
      {
        headFirst:
          "Won 1st place out of 14 teams at 2023 GameDay hosted by AWS Korea",
        headSecond: "AWS GameDay Winner",
        subDescription: "Apr 2023",
        topImages: gamedayImages,
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${gamedayLink}' target='_blank'>Related article</a>`,
        ],
      },
      {
        headFirst:
          "Bronze Prize at the Defense Science Awards for an in-house R&D project at the Cyber Center, 2nd R&D Institute",
        headSecond: "Defense Science Award, Bronze",
        subDescription: "Aug 2017",
      },
      {
        headFirst:
          "Selected for the inaugural class of K-Shield, hosted by KISA and the Ministry of Science, ICT and Future Planning",
        headSecond: "Cybersecurity Expert, K-Shield 1st Class",
        subDescription: "Jan 2014",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${kshieldLink}' target='_blank'>Related article</a>`,
        ],
      },
    ],
  },
};
