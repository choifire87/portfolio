import { Localized, ImageInfo, SectionContent } from "@/i18n/types";

const fairytechImages: ImageInfo[] = [
  { path: "/project/fairytech/screenshot1.jpg", width: 150, height: 200 },
  { path: "/project/fairytech/screenshot2.jpg", width: 150, height: 200 },
  { path: "/project/fairytech/screenshot3.jpg", width: 150, height: 200 },
  { path: "/project/fairytech/screenshot4.jpg", width: 150, height: 200 },
  { path: "/project/fairytech/screenshot5.jpg", width: 150, height: 200 },
];

const portfolioImages: ImageInfo[] = [
  { path: "/project/portfolio/screenshot1.png", width: 700, height: 500 },
];

const allusImages: ImageInfo[] = Array.from({ length: 10 }, (_, i) => ({
  path: `/project/allus/screenshot${i + 1}.png`,
  width: 150,
  height: 200,
}));

const asleepImages: ImageInfo[] = [
  { path: "/project/asleep/adot1.png", width: 600, height: 300 },
  { path: "/project/asleep/adot2.png", width: 200, height: 500 },
  { path: "/project/asleep/adot3.png", width: 200, height: 500 },
  { path: "/project/asleep/sleeproutine1.png", width: 200, height: 500 },
  { path: "/project/asleep/sleeproutine2.png", width: 200, height: 500 },
  { path: "/project/asleep/sleeproutine3.png", width: 200, height: 500 },
  { path: "/project/asleep/alora1.png", width: 200, height: 500 },
  { path: "/project/asleep/alora2.png", width: 200, height: 500 },
  { path: "/project/asleep/alora3.png", width: 200, height: 500 },
  { path: "/project/asleep/kb1.png", width: 200, height: 500 },
  { path: "/project/asleep/kb2.png", width: 200, height: 500 },
  { path: "/project/asleep/kb3.png", width: 200, height: 500 },
];

const criminalIpImages: ImageInfo[] = [
  { path: "/project/criminalip/screenshot.png", width: 800, height: 400 },
];

const portfolioWebLink = "https://hwajae-portfolio.vercel.app/";
const allusGooglePlayLink =
  "https://play.google.com/store/apps/details?id=com.fire.allus&hl=ko";
const allusAppStoreLink =
  "https://apps.apple.com/kr/app/allus-%EC%98%AC%EC%96%B4%EC%8A%A4/id6504215116";
const asleepDocsLink = "https://docs.asleep.ai/docs/overview";
const asleepDashboardLink = "https://dashboard.asleep.ai/";
const gamedayLink = "https://it.donga.com/103782/";
const reinventLink =
  "https://aws.amazon.com/ko/blogs/korea/aws-reinvent-2023-korean-sessions/";
const awsInterviewLink = "https://www.youtube.com/watch?v=ZKWwMvpdFZ0";
const criminalIpChromeLink =
  "https://chromewebstore.google.com/detail/criminal-ip-ai-based-phis/dhkbjdnlhahnffncheehbnoaecncdpdk";
const rewolfLink = "https://github.com/rwfpl/rewolf-x86-virtualizer";

export const projectContent: Localized<SectionContent> = {
  ko: {
    title: "프로젝트",
    items: [
      {
        topText: "페어리테크",
        headFirst: "Moment",
        subDescription: "2025년 3월 ~ 2025년 8월 (5개월)",
        workDescriptions: [
          "Moment 캐시백 서비스는 고객사의 서비스에 캐시백 기능을 쉽게 도입할 수 있게 해주는 SaaS 서비스로, Affiliate 중계 플랫폼 역할을 담당합니다. 웹뷰 형태로 관리형 캐시백 웹을 제공하며, Moment SDK를 고객사 앱에 연동하면 해당 앱을 설치한 사용자가 11번가, 트립닷컴, 테무 등에 접속할 경우 이를 인식해 마케팅을 위한 푸시 알림을 보낼 수 있고, 이를 통해 캐시백 웹을 거쳐 구매를 하도록 유도할 수 있습니다. 해당 제품 백엔드 리드를 맡아 제품의 유지보수 및 운영, 개선, 고도화 등을 선제적으로 진행하였습니다.",
        ],
        works: [
          [
            "사용자별 캐시 적립 및 사용 구조 설계, 개발, 테스트, 마이그레이션 및 배포",
            "쿠팡 연동을 위한 설계, 개발, 테스트 및 배포",
            "매월 고객사별 확정 실적 정산 프로세스 진행",
            "인식 서비스, 캐시백 서비스 관련 자잘한 변경사항들 개발",
            "신규 기능 개발, 테스트 코드 작성, QA 및 배포",
            "API 서버, 워커, 배치, Pub/sub, 빅쿼리에 이르는 전체 서비스 아키텍처 관리",
            "기술 부채 개선 (이벤트 드리븐 처리 구조 이슈, 배포 파이프라인 개선, 테스트 환경 데이터 정합성 해소, 캐시키 중앙화 등)",
            "Dispatcher-handler, Factory 등 디자인 패턴과 CQRS, 도메인 기반 개발을 통해 코드 리팩토링 진행",
            "백엔드 인프라 관리, 개선 및 비용 트랙킹 수행",
            "장애 대응, 버그 픽스, 데이터 보정 등 서비스 운영 업무 진행",
          ],
        ],
        topImages: fairytechImages,
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
      {
        topText: "개인 프로젝트",
        headFirst: "ALLUS (올어스)",
        subDescription: "2024년 4월 ~ 2024년 7월 (3개월)",
        workDescriptions: [
          `ALLUS(All aboUt Streetdance) 라는 스트릿댄스 앱을 1인 개발하였습니다. 앱 기획부터 네이티브 앱 개발, 인프라 구성, 백엔드 개발까지 모든 영역을 혼자 진행하였고, 현재 <a class='text-blue-500 underline' href='${allusGooglePlayLink}' target='_blank'>구글 플레이</a>, <a class='text-blue-500 underline' href='${allusAppStoreLink}' target='_blank'>애플 앱스토어</a>에 올라가 있습니다.`,
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
        topText: "에이슬립",
        headFirst: "Asleep Platform",
        subDescription: "2021년 10월 ~ 2024년 2월 (2년 5개월)",
        workDescriptions: [
          "에이슬립 플랫폼은 에이슬립의 가장 핵심 서비스로, 고객의 서비스에 수면 분석 기능을 쉽게 도입할 수 있도록 해주는 서비스입니다. 마이크만 있으면, 사람이 잠을 자는 동안 내는 호흡 소리를 통해 수면 분석을 진행할 수 있기 때문에, 스마트폰, 스피커 등 다양한 디바이스들에 편리하게 적용할 수 있습니다. SDK, API, 웹 대시보드, 개발자 문서로 구성되며, 수면 단계, 호흡 안정도, 코골이, 수면 효율, 수면 점수, 슬립 사이클 등 다양한 수면 분석 결과를 제공합니다. 에이슬립에 입사한 이후 혼자 AI를 최초로 서비스화 하는 시스템을 구축하는 것부터 시작해서, 10명의 팀원들과 함께 보다 제품으로서 모습을 갖추고 상용화까지 전 과정에서 기여하였습니다. SKT 에이닷, KB 헬스케어, 삼성생명, Calm, 슬립루틴 등에 연동되는 성과를 내었고, AWS 게임데이에 동료들과 참가해 1등을 하기도 하였으며, 라스베가스에서 열리는 2023 AWS re:invent lightning talk에서 스피커로 발표도 할 수 있었습니다.",
        ],
        works: [
          [
            "AI Serving 시스템 구축 및 운영 (ECS Fargate, Autoscaling, SQS, S3, DDB, Aurora, Cognito, ELB, Route53)",
            "API 서버 개발(FastAPI), Inference 워커 개발 (Pytorch, onnxruntime), 시스템 설계, 피처 개발, TC 작성(unittest), 배포, 버그픽스, 테이블 및 인덱스 설계, 쿼리 튜닝 등",
            "전체 시스템 인프라 아키텍처 구축 (MSA, Event-driven, 부하분산, 캐시 도입, CI/CD, 인프라 환경 분리 등)",
            "SaaS 코어 기능 구현 (API Key 시스템, 권한 제어, Fallback 기능, 쓰로틀링, 사용량 미터링, API 통계 분석)",
            "배치 시스템 구축 및 운영(Jenkins)",
            "보안 관련된 기능 구축 및 관리 (WAF, ACL 등)",
            "글로벌 인프라 구축 시도 (Global accelerator, Edge-optimized API Gateway, Cloudfront)",
            "오토 스케일링 고도화(Target tracking, time-based 스케줄링)",
            `<a class='text-blue-500 underline' href='${asleepDocsLink}' target='_blank'>공식 개발자 문서</a> 작성 및 관리 참여`,
            `<a class='text-blue-500 underline' href='${asleepDashboardLink}' target='_blank'>웹 대시보드</a> 초기 기획(figma), 업무 관리, 이후 고도화 참여`,
            "데이터베이스 구축 및 운영 (DDB, 클러스터 구축, RDS Proxy, Online DDL, Failover, binlog replication, migration)",
            "로깅 및 서버 자원 모니터링 시스템 구축 (Prometheus, Grafana, Elasticsearch, Datadog)",
            "Slack 알람 모니터 구축 (slow query, CPU 및 메모리 부하, 프로그램 익셉션 등)",
            "배포 파이프라인 구축 (Github actions, parameter store, secrets manager, elb)",
            "QA 자동화 시스템 구축 서포트 (시스템 설명 및 도메인 지식 공유, 질의 응답, Browerstack 구매 등)",
            "팀 매니징 업무 (회의, 의사결정, 태스크 매니징, 일정 관리, Jira 티켓 관리, 팀 빌딩, 팀원관리, 업무 환경 조성, 1 on 1)",
            "시스템 운영 및 장애 대응(장애 시 포스트모템 포함)",
            `<a class='text-blue-500 underline' href='${gamedayLink}' target='_blank'>2023 AWS Gameday 1위</a>`,
            `<a class='text-blue-500 underline' href='${reinventLink}' target='_blank'>2023 AWS re:invent lightning talk 스피커 참가</a> (GBL211-KO Buliding sleep apps on AWS with AI as a service)`,
            `<a class='text-blue-500 underline' href='${awsInterviewLink}' target='_blank'>AWS 고객사례 인터뷰 참가</a>`,
          ],
        ],
        topImages: asleepImages,
      },
      {
        topText: "에이아이스페라",
        headFirst: "Criminal IP",
        subDescription: "2018년 2월 ~ 2021년 10월 (3년 9개월)",
        workDescriptions: [
          "Criminal IP는 빅데이터에 기반한 CTI(Cyber Threat Intelligence) 검색엔진으로 IP, 포트, 도메인, 취약점, 위치, 블랙리스트, 악성코드 등 인터넷 상의 다양한 위협 정보를 찾아주는 검색 엔진입니다.",
        ],
        works: [
          [
            "B2C 전체 서비스 시스템의 구조 아키텍팅, 인프라 구축 및 런칭 전 초기 기능의 모든 개발에 참여",
            "여러가지 다양한 소스를 통해 수많은 위협 정보를 수집하는 약 100대가 넘는 크롤러 개발 및 운영 리딩",
            "서비스 기획 참여",
            "회원 가입, 로그인, 이메일 인증 코드 전송 등 인증 기능 개발 참여",
            "Search 메뉴에 Asset Search, Domain Search, Image Search, Exploit Search 기능 개발 참여",
            "Intelligence 메뉴에 Banner Explorer, Vulnerability, Statistics, Maps 기능 개발 참여",
            "Pricing 플랜 정책 결정 참여, 결제 모듈 연동(Stripe), 결제 정보에 따른 권한 제어 및 사용량 측정 제어 기능 초기 개발",
            `<a class='text-blue-500 underline' href='${criminalIpChromeLink}' target='_blank'>Chrome Extension</a> 초기 개발`,
            "시스템 로깅, 모니터링 시스템 구축 및 전반적인 서비스 운영에 관여",
          ],
        ],
        topImages: criminalIpImages,
      },
      {
        topText: "국방과학연구소",
        headFirst: "코드 가상화 엔진 1인 개발",
        subDescription: "2018년 2월 ~ 2021년 10월 (3년 9개월)",
        workDescriptions: [
          `<a class='text-blue-500 underline' href='${rewolfLink}' target='_blank'>해당 링크</a>를 참고하여, 국가 과제로 바이너리 난독화 엔진 개발을 진행하였습니다. 혼자서 진행하였고, x86 환경에서 가상 인스트럭션을 정의하고, 이를 해석할 수 있는 VM 엔진을 만들어 가상화(Code Virtualization) 기술을 구현하였습니다.`,
        ],
        works: [
          [
            "x86 환경에서 Windows 32 바이너리를 타겟",
            "C++(코드 가상화 프로그램)과 어셈블리 코드(VM 엔진)를 사용해 개발",
            "지난 회사 이메일 소멸로 정확히 알 수는 없지만 프로젝트 기간은 1년 정도였고, 개발 기간은 약 3개월 정도로 기억",
          ],
        ],
      },
    ],
  },
  en: {
    title: "Projects",
    items: [
      {
        topText: "FairyTech",
        headFirst: "Moment",
        subDescription: "Mar 2025 ~ Aug 2025 (5 months)",
        workDescriptions: [
          "Moment, a cashback service, is a SaaS product that lets clients easily add cashback functionality to their own services, serving as an affiliate intermediary platform. It provides a managed cashback web page as a webview, and when the Moment SDK is integrated into a client's app, users who installed that app can be detected when they visit sites like 11st, Trip.com, or Temu, allowing marketing push notifications to be sent to encourage purchases through the cashback web page. As backend lead for the product, I proactively handled its maintenance, operation, improvement, and enhancement.",
        ],
        works: [
          [
            "Designed, developed, tested, migrated, and deployed the per-user cash earning and spending structure",
            "Designed, developed, tested, and deployed the Coupang integration",
            "Ran the monthly per-client confirmed settlement process",
            "Developed various minor changes related to the detection service and cashback service",
            "Developed new features, wrote test code, did QA, and deployed",
            "Managed the entire service architecture from API servers, workers, and batches to Pub/Sub and BigQuery",
            "Improved technical debt (event-driven processing structure issues, deployment pipeline improvements, resolving test-environment data consistency, centralizing cache keys, etc.)",
            "Refactored code using design patterns such as dispatcher-handler and factory, as well as CQRS and domain-driven development",
            "Managed and improved backend infrastructure and tracked costs",
            "Handled service operations such as incident response, bug fixes, and data correction",
          ],
        ],
        topImages: fairytechImages,
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
      {
        topText: "Personal Project",
        headFirst: "ALLUS",
        subDescription: "Apr 2024 ~ Jul 2024 (3 months)",
        workDescriptions: [
          `I single-handedly developed a street dance app called ALLUS (All aboUt Streetdance). I did everything alone, from app planning to native app development, infrastructure setup, and backend development, and it's currently live on <a class='text-blue-500 underline' href='${allusGooglePlayLink}' target='_blank'>Google Play</a> and the <a class='text-blue-500 underline' href='${allusAppStoreLink}' target='_blank'>Apple App Store</a>.`,
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
        topText: "Asleep",
        headFirst: "Asleep Platform",
        subDescription: "Oct 2021 ~ Feb 2024 (2 years 5 months)",
        workDescriptions: [
          "The Asleep Platform is Asleep's most core service, letting customers easily add sleep analysis functionality to their own services. Since sleep analysis can be done using the breathing sounds a person makes while sleeping as long as there's a mic, it can be conveniently applied to various devices such as smartphones and speakers. It consists of an SDK, API, web dashboard, and developer documentation, and provides various sleep analysis results such as sleep stages, breathing stability, snoring, sleep efficiency, sleep score, and sleep cycles. After joining Asleep, I started by building the system to turn AI into a service for the first time by myself, and contributed throughout the whole process together with 10 team members to shape it into a proper product and take it to commercialization. We achieved integrations with SKT A., KB Healthcare, Samsung Life, Calm, Sleep Routine, and more; my colleagues and I won 1st place at AWS GameDay; and I even got to speak at the 2023 AWS re:invent lightning talk in Las Vegas.",
        ],
        works: [
          [
            "Built and operated the AI serving system (ECS Fargate, Autoscaling, SQS, S3, DDB, Aurora, Cognito, ELB, Route53)",
            "API server development (FastAPI), inference worker development (Pytorch, onnxruntime), system design, feature development, writing TCs (unittest), deployment, bug fixes, table and index design, query tuning, etc.",
            "Built the entire system infrastructure architecture (MSA, event-driven, load balancing, caching, CI/CD, environment separation, etc.)",
            "Implemented SaaS core features (API Key system, access control, fallback, throttling, usage metering, API statistics analysis)",
            "Built and operated a batch system (Jenkins)",
            "Built and managed security-related features (WAF, ACL, etc.)",
            "Attempted to build global infrastructure (Global Accelerator, Edge-optimized API Gateway, CloudFront)",
            "Enhanced autoscaling (target tracking, time-based scheduling)",
            `Participated in writing and maintaining the <a class='text-blue-500 underline' href='${asleepDocsLink}' target='_blank'>official developer documentation</a>`,
            `Participated in the initial planning (Figma) and work management of the <a class='text-blue-500 underline' href='${asleepDashboardLink}' target='_blank'>web dashboard</a>, and its later enhancement`,
            "Built and operated the database (DDB, cluster setup, RDS Proxy, Online DDL, failover, binlog replication, migration)",
            "Built logging and server-resource monitoring systems (Prometheus, Grafana, Elasticsearch, Datadog)",
            "Built Slack alert monitors (slow queries, CPU and memory load, program exceptions, etc.)",
            "Built the deployment pipeline (GitHub Actions, Parameter Store, Secrets Manager, ELB)",
            "Supported building the QA automation system (explaining the system and sharing domain knowledge, Q&A, purchasing BrowserStack, etc.)",
            "Team management work (meetings, decision-making, task management, scheduling, Jira ticket management, team building, member management, creating the work environment, 1-on-1s)",
            "System operation and incident response (including postmortems for incidents)",
            `<a class='text-blue-500 underline' href='${gamedayLink}' target='_blank'>1st place at 2023 AWS GameDay</a>`,
            `<a class='text-blue-500 underline' href='${reinventLink}' target='_blank'>Speaker at the 2023 AWS re:invent lightning talk</a> (GBL211-KO Building sleep apps on AWS with AI as a service)`,
            `<a class='text-blue-500 underline' href='${awsInterviewLink}' target='_blank'>Participated in an AWS customer case interview</a>`,
          ],
        ],
        topImages: asleepImages,
      },
      {
        topText: "AI SPERA",
        headFirst: "Criminal IP",
        subDescription: "Feb 2018 ~ Oct 2021 (3 years 9 months)",
        workDescriptions: [
          "Criminal IP is a big-data-based CTI (Cyber Threat Intelligence) search engine that finds various threat information on the internet such as IPs, ports, domains, vulnerabilities, locations, blacklists, and malware.",
        ],
        works: [
          [
            "Participated in all of the architecting of the entire B2C service system, infrastructure build-out, and initial pre-launch feature development",
            "Led development and operation of over 100 crawlers collecting a vast amount of threat information from many diverse sources",
            "Participated in service planning",
            "Participated in developing authentication features such as sign-up, login, and sending email verification codes",
            "Participated in developing Asset Search, Domain Search, Image Search, and Exploit Search features in the Search menu",
            "Participated in developing Banner Explorer, Vulnerability, Statistics, and Maps features in the Intelligence menu",
            "Participated in deciding pricing plan policies, integrated the payment module (Stripe), and did initial development of access control and usage-metering control based on payment info",
            `Initial development of the <a class='text-blue-500 underline' href='${criminalIpChromeLink}' target='_blank'>Chrome Extension</a>`,
            "Involved in system logging, building the monitoring system, and overall service operation",
          ],
        ],
        topImages: criminalIpImages,
      },
      {
        topText: "Agency for Defense Development",
        headFirst: "Solo development of a code virtualization engine",
        subDescription: "Feb 2018 ~ Oct 2021 (3 years 9 months)",
        workDescriptions: [
          `Referring to <a class='text-blue-500 underline' href='${rewolfLink}' target='_blank'>this link</a>, I developed a binary obfuscation engine as a national project. I did it alone, defining virtual instructions on x86 and building a VM engine that could interpret them to implement code virtualization technology.`,
        ],
        works: [
          [
            "Targeted Windows 32-bit binaries on x86",
            "Developed using C++ (the code virtualization program) and assembly code (the VM engine)",
            "I can't tell exactly since my old company email is gone, but the project ran for about a year, and I recall the development took about 3 months",
          ],
        ],
      },
    ],
  },
};
