import { Localized, ImageInfo, SectionContent } from "@/i18n/types";

const portfolioImages: ImageInfo[] = [
  { path: "/project/portfolio/screenshot1.png", width: 700, height: 500 },
];

const allusImages: ImageInfo[] = Array.from({ length: 10 }, (_, i) => ({
  path: `/project/allus/screenshot${i + 1}.png`,
  width: 150,
  height: 200,
}));

const portfolioWebLink = "https://hwajae-portfolio.vercel.app/";

export const projectContent: Localized<SectionContent> = {
  ko: {
    title: "사이드 프로젝트",
    items: [
      {
        topText: "개인 프로젝트",
        headFirst: "ALLUS (올어스)",
        subDescription: "2024년 4월 ~ 2024년 7월 (3개월)",
        workDescriptions: [
          `ALLUS(All aboUt Streetdance) 라는 스트릿댄스 앱을 1인 개발하였습니다. 앱 기획부터 네이티브 앱 개발, 인프라 구성, 백엔드 개발까지 모든 영역을 혼자 진행하였고, 구글 플레이와 애플 앱스토어에 정식 출시하여 운영하였습니다. 기능적으로는 완성도 있게 만들었다고 생각하지만, 스트릿댄스라는 니치 도메인에서 유저를 모으는 것이 쉽지 않아 현재는 서비스를 종료하였습니다.`,
          "네이티브 앱 개발",
          "백엔드 개발",
        ],
        works: [
          [
            "해당 서비스는 스트릿댄스 씬에서 열리는 행사를 홍보하기 위해 등록하고 관리하는 기능, 외부 동영상(유튜브)을 공유하고 볼 수 있는 기능, 다양한 주제로 글을 남길 수 있는 게시판 기능, 앱을 활용해 관중들이 스트릿댄스 배틀 심판에 참여할 수 있는 저징 시스템으로 이루어져 있고, 댓글 기능, 좋아요 기능, 알림 기능, 푸시 메시지, 공지 기능, 신고 및 차단 기능, 강제 업데이트 기능 등도 가지고 있습니다.",
          ],
          [
            "Flutter를 사용하였고, riverpod을 통해 전역 상태 관리, retrofit과 dio을 사용해 네트워크 통신을, build runner, json serialization 등을 사용해 반복적인 템플릿 코드들을 관리하였습니다. 화면과 필요한 커스텀 위젯을 만들고 네비게이션을 구성하였고, 화면의 각 라이프사이클에 맞춰 코드를 작성했습니다. 수익 창출을 위해 구글 애드몹을 붙였고, 카카오 로그인 및 Apple 로그인과 JWT Token을 통해 인증 관리를 하였습니다. 로그인을 지속시키기 위해 secure storage에 토큰을 저장하였고, 저징 시스템에는 웹소켓 기술이 필요해 SocketIO를 활용하였습니다. 게시물 및 사용자 신고하기/차단하기 기능, Firebase를 통한 개인 푸시 알람 기능도 구현하였습니다.",
            "앱 내 이미지 업로드가 필요한 기능의 경우, 백엔드에서 전달받은 Presigned URL을 활용해 바로 Cloudflare R2 서버로 올려 트래픽 관리 부담을 최대한 줄이는 방향을 선택했습니다.",
            "Appcast를 통해 앱의 버전을 관리하고 강제 업데이트가 가능하도록 구성하였고, 주요 서비스 기능 외에도 공지 기능, 회원 탈퇴 기능 등 전반적인 서비스 관리에 필요하다 생각되는 기능도 모두 개발하였습니다.",
            "Firebase를 이용해 앱에 사용자가 회원가입 또는 로그인 시마다 토큰을 생성하고, 이를 서버로 보내 사용자별로 m:n 관계로 토큰을 저장하였습니다. 따라서 여러 디바이스에서 로그인을 하여도, 알람 발생시 모두 푸시 알람을 받을 수 있도록 설계하였고, 사용자가 로그아웃시 토큰을 삭제해 더 이상 알람을 받지 않도록 구성하였습니다.",
            "이용약관, 개인정보처리 방침 등을 정비하였고, 스토어에 출시하는 과정에서 필요한 설정이나 스토어 측에서 추가적으로 요구하는 내용을 새로 개발하는 등 모두 처리하였습니다.",
          ],
          [
            "NestJS를 사용하였고, TypeORM, Class-validator & transformer, jwt, SocketIO 등을 활용하였습니다. 백엔드는 API 서버, MySQL 데이터베이스, Redis 등 각각 도커 컨테이너로 만들고, docker compose 오케스트레이션을 사용해서 EC2에 구성하였는데요. HTTP API 서버와 웹소켓 서버는 성질이 다르고 나중을 위해 분리하기 쉽도록 분리해서 프로젝트와 코드를 만들고 컨테이너를 구성했습니다. 쿠버네티스나 ECS, EKS 같은 기술을 이용해 구축 및 운영해보고 싶었으나, 리소스가 부족한 1인 개발이다 보니 해당 작업은 향후 서비스가 더 잘될 경우로 미뤄두고 현실적인 수준에서 구성하였습니다.",
            "데이터베이스는 전형적이고 가장 잘알고 익숙한 MySQL을 사용하였습니다. RDS 같은 관리형 데이터베이스 서비스는 활용하지 못했고, 하나의 EC2에 컨테이너로 띄우고 백업은 crontab을 통해 설정하였습니다. 저징시스템의 경우에는 웹소켓을 사용했는데, 웹소켓 서버는 향후 트래픽이 늘어날 경우 대응할 수 있도록 Redis를 활용했습니다.",
            "코드 아키텍처는 기본적으로 NestJS 기본 구조에 맞춰, Controller, Repository, Service layer로 구성하였고 각각 레이어에서의 책임에 맞게 구성할 수 있도록 노력하였고, 도메인 객체를 상황에 맞게 만들어 가능한 컨텍스트에 맞는 데이터나 메소드만 가질 수 있도록 하였습니다.",
            "데이터베이스 테이블 설계를 할때는, PK를 선택하거나 인덱스를 구성할때 TypeORM querybuilder가 만들어내는 쿼리의 실행 계획이 이를 잘 활용할 수 있도록 하려고 노력하였습니다. 초기에 테이블을 분리해서 조인으로 처리했던 쿼리가 있었는데, 관련 컬럼의 값이 향후 바뀔 일이 낮다고 판단해 비정규화를 통해 select 비용을 낮추는 선택을 하기도 했습니다. 또, 커서 기반 페이징을 구현할 때는 사용하고자 하는 커서가 유니크하지 못한 상황이 있어 필요한 컬럼 몇개를 합쳐서 가상 컬럼을 활용하였습니다.",
            "행사 기능, 커뮤니티 기능, 프로필 기능 등에서는 이미지 업로드가 가능한데, 해당 트래픽을 운영 및 비용 이슈로 가능한 백엔드에 부담시키고 싶지 않아 Presigned URL을 적용하여 앱에서 직접 업로드할 수 있도록 하였습니다. 저장소로는 AWS S3보다 저렴한 Cloudflare R2를 활용했습니다.",
          ],
        ],
        topImages: allusImages,
      },
      {
        topText: "개인 프로젝트",
        headFirst: "포트폴리오 웹",
        subDescription: "2024년 8월 ~ 2024년 8월 (약 1주일)",
        workDescriptions: [
          `NextJS, tailwind, vercel을 사용해 <a class='text-blue-500 underline' href='${portfolioWebLink}' target='_blank'>개인 이력서 웹</a>을 구축하였습니다. 간단하게 typescript와 app routing을 활용하였고, 단순한 수준의 개발이었지만, 해당 프로젝트의 목적은 다음과 같이 크게 3가지였습니다.`,
        ],
        works: [
          [
            "첫번째로 매니저 레벨에서 일하다보니 웹 개발자분들과 함께 일하고 고민해야 되는 경우가 많았었는데요, 기본적인 웹의 동작원리나 개념들을 어느정도 이해하고는 있지만, 직접 실제 웹 개발을 해봄으로써 최신 웹 개발 트렌드와 기술을 이해하고 테크적으로 더 나은 협업과 커뮤니케이션을 하고 싶었습니다.",
            "두번째로 개발자로서 시장에 무언가 가치있는 것을 개발하고 딜리버리하기 위해서는, 그리고 특히나 초기 스타트업에서는 백엔드 기술만으로는 한계가 있고 프론트엔드 기술은 너무나 필수적이었기 때문입니다. 때문에 스트릿댄스 앱 개발 이후에 해당 프로젝트를 진행해보게 되었습니다.",
            "마지막으로 개발자로서 개인 PR을 위한 이력서를 외부 서비스에 의지하지 않고 스스로 만들어 가지고 있고 싶었습니다.",
          ],
        ],
        topImages: portfolioImages,
      },
    ],
  },
  en: {
    title: "Side Projects",
    items: [
      {
        topText: "Personal Project",
        headFirst: "ALLUS",
        subDescription: "Apr 2024 ~ Jul 2024 (3 months)",
        workDescriptions: [
          `I single-handedly developed a street dance app called ALLUS (All aboUt Streetdance). I did everything alone, from app planning to native app development, infrastructure setup, and backend development, and released and operated it on Google Play and the Apple App Store. While I believe the product itself was well built, attracting users in the niche street dance domain proved difficult, so I've since discontinued the service.`,
          "Native app development",
          "Backend development",
        ],
        works: [
          [
            "The service consists of a feature to register and manage events held in the street dance scene for promotion, a feature to share and watch external videos (YouTube), a board feature for posting on various topics, and a judging system that lets the audience participate in judging street dance battles using the app. It also has commenting, likes, notifications, push messages, announcements, report & block, and force-update features.",
          ],
          [
            "I used Flutter, managing global state with Riverpod, network communication with Retrofit and Dio, and repetitive boilerplate code with build_runner and json serialization. I built the screens and custom widgets I needed, set up navigation, and wrote code according to each screen's lifecycle. I integrated Google AdMob for monetization, and managed authentication with Kakao login, Apple login, and JWT tokens. I stored tokens in secure storage to keep the user logged in, and used SocketIO for the judging system since it needed WebSocket technology. I also implemented post/user report & block features and personal push notifications via Firebase.",
            "For features requiring in-app image uploads, I chose to upload directly to the Cloudflare R2 server using a presigned URL received from the backend, minimizing the traffic-management burden.",
            "I managed app versions and enabled force-updates via Appcast, and beyond the main service features, I developed everything I considered necessary for overall service management, such as announcements and account deletion.",
            "Using Firebase, I generated a token each time a user signed up or logged in and sent it to the server, storing tokens in an m:n relationship per user. This way, even if a user logged in on multiple devices, they'd receive push notifications on all of them when an alert occurred, and I removed tokens on logout so they'd no longer receive alerts.",
            "I organized the terms of service, privacy policy, etc., and handled everything needed for store release, including required settings and newly developing whatever the stores additionally required.",
          ],
          [
            "I used NestJS along with TypeORM, class-validator & transformer, JWT, SocketIO, etc. For the backend, I made the API server, MySQL database, Redis, etc. into separate Docker containers and set them up on EC2 using docker compose orchestration. Since the HTTP API server and the WebSocket server have different characteristics, I separated them into distinct projects, code, and containers so they'd be easy to split apart later. I wanted to build and operate this using technologies like Kubernetes, ECS, or EKS, but as a resource-strapped solo developer I deferred that to when the service does better, and set things up at a realistic level.",
            "For the database, I used MySQL, which is typical and the one I know best. I couldn't use a managed database service like RDS, so I ran it as a container on a single EC2 and set up backups via crontab. For the judging system I used WebSockets, and I used Redis for the WebSocket server so it could scale if traffic grows in the future.",
            "For the code architecture, I basically followed NestJS's default structure with controller, repository, and service layers, striving to organize each layer according to its responsibility, and I created domain objects to fit each situation so they'd hold only the data and methods appropriate to the context where possible.",
            "When designing database tables, I tried to choose PKs and build indexes so that the execution plans of the queries generated by the TypeORM query builder could make good use of them. Early on there was a query I handled by splitting tables and joining, but judging that the related columns' values were unlikely to change in the future, I chose to denormalize to lower select costs. Also, when implementing cursor-based paging, there was a situation where the cursor I wanted to use wasn't unique, so I combined a few needed columns into a virtual column.",
            "The event, community, and profile features allow image uploads, and since I didn't want to burden the backend with that traffic due to operational and cost concerns, I applied presigned URLs so the app could upload directly. For storage I used Cloudflare R2, which is cheaper than AWS S3.",
          ],
        ],
        topImages: allusImages,
      },
      {
        topText: "Personal Project",
        headFirst: "Portfolio Web",
        subDescription: "Aug 2024 ~ Aug 2024 (about 1 week)",
        workDescriptions: [
          `I built a <a class='text-blue-500 underline' href='${portfolioWebLink}' target='_blank'>personal resume website</a> using NextJS, Tailwind, and Vercel. I used TypeScript and app routing in a simple way, and although it was straightforward development, this project had three main goals.`,
        ],
        works: [
          [
            "First, since I've been working at the manager level, I often had to work and think alongside web developers. While I understood the basic principles and concepts of the web to some degree, I wanted to understand the latest web development trends and technologies by actually doing web development myself, and to collaborate and communicate better technically.",
            "Second, because as a developer, to build and deliver something valuable to the market—and especially at an early-stage startup—backend skills alone have limits, and frontend skills were absolutely essential. So I took on this project after developing my street dance app.",
            "Lastly, as a developer, I wanted to build and own my personal-PR resume myself without relying on external services.",
          ],
        ],
        topImages: portfolioImages,
      },
    ],
  },
};
