import { Localized, SectionContent } from "@/i18n/types";

const masterLink =
  "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE01906600";
const scadaLink =
  "https://www.semanticscholar.org/paper/%ED%8A%B8%EB%9E%98%ED%94%BD-%EC%9E%90%EA%B8%B0-%EC%9C%A0%EC%82%AC%EC%84%B1(Self-similarity)%EC%97%90-%EA%B8%B0%EB%B0%98%ED%95%9C-SCADA-%EC%8B%9C%EC%8A%A4%ED%85%9C-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%EC%9D%98-%EA%B3%A0%ED%8F%B4%EB%A6%B0-%EC%B5%9C%ED%99%94%EC%9E%AC/46090bf82028baf3b8ec419ef500abe0fde0e972";
const gameLink =
  "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07437672";

export const thesisContent: Localized<SectionContent> = {
  ko: {
    title: "논문",
    items: [
      {
        topText: "고려대학교 석사 학위 논문",
        headFirst: "24Bit BMP 이미지를 이용한 쉘코드 은닉 기법",
        subDescription: "2013년 2월",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${masterLink}' target='_blank'>관련 링크</a>`,
        ],
      },
      {
        topText: "한국정보보호학회",
        headFirst:
          "트래픽 자기 유사성(Self-similarity)에 기반한 SCADA 시스템 환경에서의 침입탐지방법론",
        subDescription: "2012년 4월",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${scadaLink}' target='_blank'>관련 링크</a>`,
        ],
      },
      {
        topText: "한국게임학회논문지",
        headFirst: "온라인게임 계정도용 탐지모델에 관한 연구",
        subDescription: "2011년 11월",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${gameLink}' target='_blank'>관련 링크</a>`,
        ],
      },
    ],
  },
  en: {
    title: "Papers",
    items: [
      {
        topText: "Korea University, M.S. Thesis",
        headFirst:
          "A Shellcode Hiding Technique Using 24-bit BMP Images",
        subDescription: "Feb 2013",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${masterLink}' target='_blank'>Link</a>`,
        ],
      },
      {
        topText: "Korea Institute of Information Security & Cryptology",
        headFirst:
          "An Intrusion Detection Methodology for SCADA System Environments Based on Traffic Self-similarity",
        subDescription: "Apr 2012",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${scadaLink}' target='_blank'>Link</a>`,
        ],
      },
      {
        topText: "Journal of Korea Game Society",
        headFirst:
          "A Study on a Detection Model for Online Game Account Theft",
        subDescription: "Nov 2011",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${gameLink}' target='_blank'>Link</a>`,
        ],
      },
    ],
  },
};
