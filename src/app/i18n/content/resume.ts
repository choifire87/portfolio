import { Localized } from "@/i18n/types";

// 배포된 포트폴리오 주소. 이력서 하단 "전체 포트폴리오" 링크에 사용된다.
// 실제 도메인으로 바꿔주세요. 비워두면 링크가 표시되지 않는다.
export const portfolioUrl = "https://hwajae-portfolio.vercel.app/";

export type ResumeJobGroup = {
  heading?: string;
  bullets: string[];
};

export type ResumeJob = {
  company: string;
  role: string;
  period: string;
  intro?: string[];
  techStack?: string;
  groups: ResumeJobGroup[];
};

export type ResumeContent = {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string[];
  sectionTitles: {
    experience: string;
    sideProjects: string;
    skills: string;
    education: string;
    awards: string;
  };
  techStackLabel: string;
  jobs: ResumeJob[];
  sideProjects: { name: string; period: string; description: string }[];
  skills: { group: string; items: string }[];
  education: string[];
  awards: string[];
  portfolioLabel: string;
  printButton: string;
};

export const resumeContent: Localized<ResumeContent> = {
  ko: {
    name: "최화재",
    title: "백엔드 & 인프라 엔지니어 · 엔지니어링 리더",
    location: "대한민국 서울",
    email: "choifire87@gmail.com",
    linkedin: "https://www.linkedin.com/in/hwajae-fire-choi-794b571b0/",
    summary: [
      "13년간 보안 연구에서 출발해 네 곳의 스타트업에서 백엔드와 클라우드 인프라를 설계·구축·운영해왔으며, 현재는 CTO로 개발 조직을 이끌고 있습니다.",
      "AWS·GCP 아키텍처, IaC(Terraform·Terragrunt, AWS CDK), CI/CD와 배포 안전성, 관측성 구축, 성능·비용 최적화에 강점이 있고, 정보보호 석사와 국방 보안연구 백그라운드를 갖고 있습니다.",
      "채용과 목표 관리, 엔지니어링 문화 구축, AI 개발도구의 조직 도입까지 — 만드는 일과 조직을 성장시키는 일을 함께 해왔습니다.",
    ],
    sectionTitles: {
      experience: "경력",
      sideProjects: "사이드 프로젝트",
      skills: "기술",
      education: "학력",
      awards: "수상·발표 및 자격증",
    },
    techStackLabel: "기술 스택",
    jobs: [
      {
        company: "피클플러스",
        role: "CTO",
        period: "2025.09 – 현재",
        intro: [
          "구독 공유 플랫폼 (약 40인 규모). 개발 조직 총괄과 인프라·플랫폼 실무를 병행.",
        ],
        groups: [
          {
            heading: "개발팀 빌딩 및 조직 관리",
            bullets: [
              "채용 프로세스 총괄: 이력서 검토, 후보자 커뮤니케이션, 기술 및 아키텍처 설계 면접 전반을 리딩하여 엔지니어링 조직 빌딩",
              "분기별 개발팀 목표 수립·관리, 애뉴얼 리뷰와 연봉 협상을 통한 평가 및 보상 운영",
              "사내 기술 스터디, 정기 세미나, 1on1 미팅, 포스트모템 프로세스를 안착시켜 지속가능한 엔지니어링 문화 조성",
              "팀이 주도적으로 기술 성과를 외부에 공유하는 테크 블로그 런칭 추진 및 서포트 (테크 브랜딩)",
            ],
          },
          {
            heading: "기술적 비즈니스 서포트",
            bullets: [
              "글로벌 진출 기술 검토 리딩: 기술 리서치, 서비스 현황 진단, 아키텍처 설계, 실무자 커뮤니케이션",
              "한국인터넷진흥원(KISA) 연계정보 안전조치 실태점검 대응: 기술 현황 파악, 문서 작성, 미흡 내역 보완",
              "스케일업 팁스 '분산 인프라 기반 개인형 AI 에이전트' 정부 R&D 과제의 기술 아키텍처 설계 및 연구개발계획서 기술 부문 작성 (선정)",
            ],
          },
          {
            heading: "AI 기술 도입 및 개발생산성 향상",
            bullets: [
              "AI 코드 리뷰 도구(CodeRabbit) 도입으로 PR 퀄리티 향상 및 리뷰 부담 완화",
              "Claude 도입을 위한 공통 하네스 구축과 온보딩 가이드 배포로 팀 전체의 AI 활용역량 평준화",
              "FE/BE 배포 시 QA 테스트가 자동 트리거되도록 테스트 자동화 파이프라인 구축 견인",
              "Claude Tag 도입으로 Slack에서 운영 배포 전 SQL 검토, BigQuery·GitHub 연동 기반 데이터 분석 체계 구축",
            ],
          },
          {
            heading: "테크 리더십 및 아키텍처 전환",
            bullets: [
              "Postgres 13 EoL 대응: Blue/Green 배포 방식으로 Postgres 16 메이저 업그레이드 수행",
              "전사 데이터 분석 인프라 구축: AWS–GCP Site-to-Site VPN → GCP Datastream → BigQuery로 이어지는 ELT 파이프라인 설계·구축",
              "AWS ECS에서 feature 브랜치별 독립 Preview 환경 설계·구축 — 개발·QA 환경 개선, 시간 기반 스케줄링과 orphan 클리너로 비용 최적화",
              "Terraform·Terragrunt 기반 IaC 도입으로 코드 기반 인프라 관리 체계 확립",
              "레거시 시스템 확장성 확보를 위한 일부 코어 기능의 Kotlin Spring MSA 전환 리딩",
              "DB 형상 관리를 위한 플랫폼 독립적 마이그레이션 도구(Flyway) 도입 결정, 실무자가 주도적으로 완수하도록 위임·지원",
              "AWS·GCP·Azure·Datadog·Sentry·Claude 등 개발팀 SaaS 구독 및 인프라 계약·비용 관리 최적화",
            ],
          },
          {
            heading: "기술 부채 해소 및 성능 최적화",
            bullets: [
              "서비스 아키텍처 리빌딩: FE에 하드코딩된 상품 데이터를 서버 레이어로 이관, 상품 API 전면 재설계로 도메인 위계를 잡고 동적 상품 판매 구조로 개선",
              "10초 이상 걸리던 API 성능 95~99% 개선 (N+1 쿼리 제거, 실행 계획 분석 기반 인덱스 생성, 무분별한 테이블 조인 개선)",
              "Claude를 활용해 수백 개의 API Swagger·Postman 컬렉션을 1주일 만에 자동 정비·최신화",
              "CI/CD 배포 인프라 튜닝 (Health check, Connection Draining, Green 대기시간 최적화)으로 배포 속도 20% 이상 향상",
              "미사용 인프라 삭제, ECS 태스크 수 최적화를 통한 클라우드 비용 절감",
              "CloudFront HTTP/3 도입으로 엣지 로케이션 연결 효율 개선 및 레이턴시 약 20% 단축",
              "FE 모노레포(Turborepo) 빌드 메모리 고갈(OOM)을 GitHub Large Runner 도입으로 해결, 고정 IP 기반 개발 환경 접근통제·보안성 확보",
            ],
          },
          {
            heading: "모니터링 및 옵저버빌리티 고도화",
            bullets: [
              "Datadog DBM과 Reader DB 연동으로 실시간 쿼리 성능·DB 부하 가시성 확보",
              "인프라 핵심 지표를 Datadog 모니터로 추가해 장애 감지 성능 향상",
            ],
          },
        ],
      },
      {
        company: "페어리테크",
        role: "서버 리드",
        period: "2025.03 – 2025.08",
        intro: [
          "고객사 앱에 캐시백 서비스를 웹뷰·SDK 형태로 간단히 연동할 수 있게 해주는 Moment 서비스의 백엔드 개발 리드. 기존 서비스 운영·유지보수와 함께 사업 확장에 필요한 기능을 설계·개발하고 기술 부채를 해소.",
        ],
        techStack:
          "NestJS, DrizzleORM, Postgres, Redis, GraphQL, Protobuf, GCP (SQL, Memorystore, Pub/Sub, BigQuery 등), Datadog, PagerDuty",
        groups: [
          {
            bullets: [
              "사용자별 캐시 적립 구조 설계·개발: 조직별 캐시 정책 설계, unique constraint 기반 적립 히스토리 테이블, 적립 상태 전이·캐시 타입별 구조화, 트랜잭션과 배타 잠금으로 정합성 확보, 기존 구매 내역 마이그레이션 스크립트 개발·수행",
              "캐시백 쇼핑몰에 쿠팡 신규 연동: Dispatcher-handler 패턴을 적용해 향후 쇼핑몰 추가에 유연한 구조로 확장성·유지보수성 개선",
              "매월 고객사별 실적 정산 진행 (배치, 실적 전송 등)",
              "Pub/Sub 안정성 개선: 처리 성공 시에만 ack 하도록 수정, dead-lettering과 redriver 구축으로 장애 대응 체계 마련",
              "Postgres→BigQuery 동기화 Scheduled query 오류 픽스로 데이터 정합성 향상, Canary 환경 BigQuery 정합성 이슈 해결",
              "고객사 고정 IP 요구에 따른 Cloud NAT 구성 — NAT 소스 포트 soft limit로 발생한 ETIMEDOUT 장애를 다이나믹 포트 설정으로 해소",
              "배포 파이프라인 개선: 전체 일괄 배포를 컴포넌트별 배포로 분리, 프로덕션 자동 DDL 마이그레이션을 리뷰 기반 수동 프로세스로 전환, 서버 컴포넌트 버저닝 도입",
              "사용자 동의 API, 캐시백 사용자 인터뷰용 서베이 기능(Typeform) 등 신규 기능 개발·배포",
              "디자인 패턴, 도메인 기반 개발, CQRS 패턴을 활용한 의존성 관리와 코드 응집성 개선",
              "모노레포 형태의 API 서버·워커·배치와 Pub/Sub·BigQuery를 포함한 전체 아키텍처 관리",
              "GCP·Datadog 비용 관리 (리셀러 과금 오류 발견·조치, log retention 조정, 미사용 계약 기능 해지)",
              "개발자 채용 직무·설계 인터뷰 진행, 데이터 보정·버그 픽스·장애 대응·테스트 코드·문서화 등 운영 전반",
            ],
          },
        ],
      },
      {
        company: "래티스",
        role: "테크 리드",
        period: "2024.08 – 2024.11",
        intro: [
          "회사 기술 현황을 진단하고 개선점과 방안을 도출해 테크 로드맵을 수립, 계약관리 솔루션 프릭스(Prix)의 서버 개발을 주도. 엔터프라이즈 수준의 서비스 안정성 확보, 지속 가능한 개발 환경 구축, 병목 개선, 지표 기반 가시성 확보에 주력.",
        ],
        techStack:
          "NodeJS, Express, TypeORM, Postgres, AWS (ECS, S3, SES, CodeBuild 등), Prometheus, Grafana, Terraform, Jenkins",
        groups: [
          {
            bullets: [
              "테크 로드맵 수립 (기술 현황 파악, 개선점 식별·방안 도출, 우선순위 정리)",
              "Prometheus·Grafana 모니터링 시스템 구축·운영, 핵심 시스템 지표 선정 및 Slack 알람 연동",
              "DB 가시성 확보 (slow query 활성화·모니터링 연동), 누락 인덱스 생성 및 ORM 비효율 쿼리 튜닝",
              "백엔드 로깅을 JSON으로 구조화 (request id, logging level, response time, status code) — 디버깅·장애대응 효율 개선",
              "API response time·status code 지표 수집으로 서비스 가용성을 가시화하고 전사 OKR에 기여",
              "모니터링 기반으로 유휴 인프라 자원을 파악·정리하여 전체 인프라 비용 20% 절감",
              "프릭스 백엔드 신규 기능 개발, 기존 기능 개선, 장애 대응, 코드 리뷰",
              "리팩토링 (파라미터 검증, 타입 힌팅, 중복 코드 함수화·클래스화, 상세 에러 로깅)으로 코드 응집성·가독성 향상",
              "테스트 환경 구성 (Jest, Supertest, Docker 로컬 DB), e2e 테스트 작성, GitHub Actions CI 연동",
              "개발경험·온보딩 개선 (복잡한 도메인 도식화, Docker 로컬 환경 간편화, Swagger·NestJS 도입 논의)",
              "배치 시스템 도입(Jenkins), 장시간 작업의 배치·큐 기반 비동기 처리 구조 제안",
              "Terraform 도입을 통한 전사 인프라 형상 관리 체계 구축",
              "프릭스 API Kit 문서 관리·개선, 신규 개발자 채용(서류·면접) 및 개발팀 인력 매니징",
            ],
          },
        ],
      },
      {
        company: "에이슬립",
        role: "테크니컬 디렉터 / 백엔드 챕터 리드 / AI 백엔드 엔지니어",
        period: "2021.10 – 2024.02",
        intro: [
          "수면 AI SaaS 플랫폼(Sleeptrack API)에서 AI 백엔드 엔지니어로 시작해 백엔드 챕터 리드, 테크니컬 디렉터로 역할을 확장. 마이크 탑재 디바이스에서 클라우드로 전송되는 사용자의 호흡음을 AI로 분석해 수면 결과를 제공하는 플랫폼으로, SKT 에이닷·KB헬스케어·삼성생명·Calm·슬립루틴 등에 연동.",
        ],
        techStack:
          "FastAPI, SQLAlchemy, PyTorch, Nginx, AWS (ECS, Aurora MySQL, SQS, S3, API Gateway, Lambda, DynamoDB, Elasticache, Firehose, Athena, DMS 등), AWS CDK, Datadog, Jenkins",
        groups: [
          {
            heading: "테크니컬 디렉터 (2023.05 – 2024.02)",
            bullets: [
              "약 10인 스쿼드(PM, 웹·백엔드 개발자, 디자이너, QA) 리딩: 채용, 업무 식별·일정 관리, 티켓 관리, 팀 내외부 커뮤니케이션",
              "회사 서비스 정책 논의·결정 참여 (비용 분석, 과금 정책, 데이터 보관 규칙, 보안 규칙)",
              "제품 웹 대시보드 초기 기획(Figma)과 지속 개선·운영, 공식 개발자 문서 작성·관리 참여",
              "전체 백엔드 시스템 아키텍팅과 지속적 안정화·고도화 (Elasticache 도입, S3 Presigned URL, SQS FIFO 큐 전환 제안 등)",
              "사용량 집계(배치 시스템), 권한 제어, 쓰로틀링, 폴백 등 코어 기능 개선·운영",
              "배포 오퍼레이션, DB 관리 (테이블 모델링, failover, binlog replication, 분석용 DB 구축), 서비스 모니터링·장애 대응",
              "QA 자동화 시스템 구축 서포트 (도메인 지식 공유, 질의응답, BrowserStack 도입)",
              "2023 AWS GameDay 1위, 2023 AWS re:Invent lightning talk 스피커 참가, AWS 고객사례 인터뷰 참가",
            ],
          },
          {
            heading: "백엔드 챕터 리드 (2022.08 – 2023.05)",
            bullets: [
              "6인 백엔드 챕터 리드: 데일리 스탠드업, 위클리 미팅, 스터디, 1on1 운영 및 팀·스쿼드 간 커뮤니케이션",
              "제품 레벨의 인증·권한 제어·미터링 등 코어 기능 개발·고도화 (API Gateway, Lambda)",
              "API Key 시스템 디자인 (계정별 API Key 관리, 프로덕션·테스트 환경 분리)",
              "신규 API 서버 개발 및 기존 서버 고도화 (FastAPI, SQLAlchemy, Layered Architecture, 유닛 테스트 작성)",
              "AI Inference 서버 기능 고도화 (MLflow, PyTorch, onnxruntime)",
              "RDS Aurora 클러스터·RDS Proxy 구축·운영, 글로벌 인프라 리서치·구축 시도 (Global Accelerator, Edge-optimized API Gateway, CloudFront)",
              "대규모 트래픽 대응 ECS Autoscaling 고도화 (target tracking, 시간 기반 스케줄링), Locust 부하 테스트",
              "모니터링 시스템 Datadog 마이그레이션·대시보드 구축, CI/CD에 테스트 검증 절차 연동",
              "시스템 운영·장애 대응 및 백엔드 장애 포스트모템 운영, 사내 VPN 구축·운영 (Fortigate)",
            ],
          },
          {
            heading: "AI 백엔드 엔지니어 (2021.10 – 2022.08)",
            bullets: [
              "VPC 설계 및 AI Serving 시스템 구축·운영 (ECS Fargate, Autoscaling, SQS, S3, DynamoDB, Cognito, ELB, Route53)",
              "AWS CDK를 통한 인프라 코드화, FastAPI REST API 및 AI Inference 서버(PyTorch) 개발",
              "MSA 구조·권한 제어 구현 (API Gateway, Lambda Authorizer, Backend Routing), DynamoDB·RDS 테이블 디자인",
              "서비스 미터링 구현 (Firehose, S3, Athena, Jenkins, RDS, Elasticache)",
              "Prometheus·Grafana·Slack 모니터링 시스템, OpenSearch 로깅 시스템, GitHub Actions CI/CD 파이프라인 구축",
            ],
          },
        ],
      },
      {
        company: "에이아이스페라",
        role: "개발팀장 (첫 멤버)",
        period: "2018.02 – 2021.10",
        intro: [
          "빅데이터 기반 CTI(Cyber Threat Intelligence) 검색엔진 Criminal IP 개발 총괄. 첫 멤버로 조인해 약 40명 규모까지 성장 (개발팀이 전체 인원의 약 70%).",
        ],
        techStack:
          "Flask, MySQL, zmap, nmap, Selenium, AWS (EC2, ELB, Route 53, Lambda, API Gateway 등), Nginx, Elasticsearch, ELK, Zabbix, Rundeck, Azure, NHN Cloud",
        groups: [
          {
            heading: "Criminal IP 시스템 개발 총괄",
            bullets: [
              "크롤러·백엔드·컴포넌트 설계, 구현, 운영 리딩 (리눅스 커널 파라미터, SSL 인증서, uwsgi 비동기 등 서버 설정·관리 포함)",
              "AWS 기반 서비스 아키텍팅 (VPC, EC2, API Gateway, Lambda, S3, ACM, IAM, Route 53, ELB, Elasticsearch Service, CloudWatch)",
              "전문검색용 Elasticsearch 구축·운영 — 약 10억 문서, 10~20 노드 클러스터, 인덱스·토크나이저 설계와 샤드·레플리카 구성",
              "무중단 배포 오퍼레이션 리딩 (ELB, haproxy), 모니터링·장애 대응 (Zabbix, Zabbix Proxy, Rundeck, Syslog-ng, ELK), 서비스 DNS 운영 (bind9 M-S)",
              "클라우드 간 마이그레이션 리드 (AWS → Azure & NHN Cloud)",
            ],
          },
          {
            heading: "B2C 서비스 초기 개발",
            bullets: [
              "시스템 아키텍팅, 인프라 구축 및 런칭 전 초기 기능 전체 개발 참여",
              "다양한 소스로부터 위협 정보를 수집하는 100대 이상의 크롤러 개발·운영 리딩",
              "인증 기능(회원가입·로그인·이메일 인증), Search 메뉴(Asset·Domain·Image·Exploit Search), Intelligence 메뉴(Banner Explorer, Vulnerability, Statistics, Maps) 개발 참여",
              "Pricing 플랜 정책 결정 참여, Stripe 결제 연동, 결제 기반 권한·사용량 제어 초기 개발, Chrome Extension 초기 개발",
            ],
          },
          {
            heading: "회사 운영 및 전사 인프라",
            bullets: [
              "AWS·Toast·GCP·HQ 서버 등 전사 시스템·네트워크 인프라 관리",
              "오피스 업무 인프라 구축 (서버실 공사·셋팅, ESXi 설치·운영, 방화벽 운영, Jira·Confluence 구축·운영)",
              "방화벽·보안 인프라 운영 (UTM, PFSense, 안랩 TrustGuard), ISO 9001 인증 취득 절차 참여",
              "정부 과제 제안서 작성·발표, 채용 인터뷰·팀빌딩, 팀 구성원 매니징, 영업 기술 미팅 서포트",
            ],
          },
          {
            heading: "코드 가상화 엔진 1인 개발",
            bullets: [
              "x86 환경 Windows 32비트 바이너리를 타겟으로 한 소프트웨어 보호 과제 — C++(코드 가상화 프로그램)과 어셈블리(VM 엔진)로 개발",
            ],
          },
        ],
      },
      {
        company: "국방과학연구소",
        role: "연구원",
        period: "2013.04 – 2018.01",
        groups: [
          {
            bullets: ["사이버 공격 및 방어 기술 연구개발 (악성코드, 익스플로잇 연구)"],
          },
        ],
      },
    ],
    sideProjects: [
      {
        name: "ALLUS (올어스)",
        period: "2024.04 – 2024.07",
        description:
          "스트릿댄스 플랫폼 앱 1인 개발 — 기획, 네이티브 앱(Flutter), 백엔드(NestJS, MySQL, Redis), 인프라(Docker, EC2), 스토어 출시·운영까지 전 과정 수행. 구글 플레이·애플 앱스토어에 정식 출시 후 운영 (현재 서비스 종료)",
      },
      {
        name: "포트폴리오 웹",
        period: "2024.08",
        description:
          "개인 이력서·포트폴리오 웹 직접 구축 및 운영 (NextJS, Tailwind, Vercel)",
      },
    ],
    skills: [
      {
        group: "클라우드",
        items:
          "AWS (EC2, ECS/Fargate, Lambda, API Gateway, Aurora RDS, DynamoDB, ElastiCache, SQS, S3, CloudFront, Route 53, VPC, Site-to-Site VPN, IAM, WAF, DMS, Athena 등), GCP (Pub/Sub, BigQuery, Cloud SQL, Datastream), Azure",
      },
      {
        group: "IaC · 컨테이너",
        items: "Terraform, Terragrunt, AWS CDK (Python), Docker, ECS (Kubernetes 학습 중)",
      },
      {
        group: "CI/CD",
        items: "GitHub Actions, Jenkins — Blue/Green·무중단 배포, 배포 파이프라인 설계·튜닝",
      },
      {
        group: "백엔드",
        items:
          "Python (FastAPI, Flask, SQLAlchemy), TypeScript/Node.js (NestJS, Express), MySQL, Postgres, Redis, Elasticsearch",
      },
      {
        group: "관측성",
        items: "Datadog (APM·DBM), Prometheus, Grafana, OpenSearch/ELK, Zabbix, PagerDuty",
      },
      {
        group: "보안",
        items: "정보보호 석사, 국방 보안연구·CTI, WAF·VPN·IAM 설계, KISA 실태점검·ISO 9001 대응",
      },
      {
        group: "AI 엔지니어링",
        items: "Claude 기반 개발 자동화·에이전틱 워크플로우, AI 코드리뷰, LLM 활용 QA·운영 자동화",
      },
    ],
    education: [
      "고려대학교 정보보호대학원 정보보호학 석사 (2011 – 2013)",
      "고려대학교 컴퓨터통신공학부 학사 (2007 – 2011)",
    ],
    awards: [
      "2023 AWS GameDay Korea 1위",
      "AWS re:Invent 2023 lightning talk 스피커 (GBL211-KO)",
      "정보처리기사 (2018)",
    ],
    portfolioLabel: "상세 경력과 기술 경험은 포트폴리오에서 확인하실 수 있습니다",
    printButton: "PDF로 저장",
  },
  en: {
    name: "Hwajae Choi",
    title: "Backend & Infrastructure Engineer · Engineering Leader",
    location: "Seoul, South Korea",
    email: "choifire87@gmail.com",
    linkedin: "https://www.linkedin.com/in/hwajae-fire-choi-794b571b0/",
    summary: [
      "13 years of experience from security research to designing, building, and operating backend systems and cloud infrastructure at four startups — currently leading engineering as CTO.",
      "Strengths in AWS/GCP architecture, IaC (Terraform/Terragrunt, AWS CDK), CI/CD and deploy safety, observability, and performance/cost optimization, backed by an information security background (M.S. and national defense research).",
      "Experienced in both building systems and growing organizations: hiring, goal management, engineering culture, and org-wide adoption of AI developer tooling.",
    ],
    sectionTitles: {
      experience: "Experience",
      sideProjects: "Side Projects",
      skills: "Skills",
      education: "Education",
      awards: "Awards, Talks & Certifications",
    },
    techStackLabel: "Tech stack",
    jobs: [
      {
        company: "Pickle Plus",
        role: "CTO",
        period: "Sep 2025 – Present",
        intro: [
          "Subscription-sharing platform (~40 people). Leading the engineering org while staying hands-on with infrastructure and platform work.",
        ],
        groups: [
          {
            heading: "Building & managing the engineering organization",
            bullets: [
              "Owned the hiring process end-to-end: resume screening, candidate communication, and technical & architecture-design interviews",
              "Set and managed quarterly engineering goals; ran evaluation and compensation through annual reviews and salary negotiations",
              "Established internal tech study groups, regular seminars, 1-on-1s, and postmortem processes to build a sustainable engineering culture",
              "Drove and supported the launch of a tech blog so the team could share engineering achievements externally (tech branding)",
            ],
          },
          {
            heading: "Technical business support",
            bullets: [
              "Led the technical review for global expansion: research, service diagnosis, architecture design, and stakeholder communication",
              "Led the response to KISA's (Korea Internet & Security Agency) security compliance inspection: technical assessment, documentation, remediation",
              "Designed the technical architecture and wrote the technical section of the R&D proposal for the selected government project (Scale-up TIPS, 'Personal AI Agent Based on Distributed Infrastructure')",
            ],
          },
          {
            heading: "AI adoption & developer productivity",
            bullets: [
              "Introduced AI code review (CodeRabbit) to improve PR quality and reduce review burden",
              "Built a shared Claude harness and distributed an onboarding guide to level up AI proficiency across the team",
              "Drove test automation so QA tests trigger automatically on FE/BE deployments",
              "Introduced Claude Tag: SQL review in Slack before production deploys, plus a data-analysis workflow via BigQuery & GitHub integration",
            ],
          },
          {
            heading: "Tech leadership & architecture transformation",
            bullets: [
              "Performed a Postgres 13→16 major upgrade via Blue/Green deployment ahead of EoL",
              "Built company-wide analytics infrastructure: an ELT pipeline running AWS–GCP Site-to-Site VPN → GCP Datastream → BigQuery",
              "Designed and built per-feature-branch preview environments on AWS ECS — improved dev/QA workflows, cost-optimized with time-based scheduling and an orphan cleaner",
              "Introduced IaC with Terraform + Terragrunt, establishing code-based infrastructure management",
              "Led the migration of core legacy features to a Kotlin Spring MSA structure for scalability",
              "Decided on Flyway for platform-independent DB schema versioning and delegated/supported an engineer to lead it to completion",
              "Optimized SaaS subscriptions and infrastructure contracts/costs across AWS, GCP, Azure, Datadog, Sentry, and Claude",
            ],
          },
          {
            heading: "Technical debt & performance optimization",
            bullets: [
              "Rebuilt the service architecture: migrated hardcoded frontend product data to the server layer and fully redesigned product APIs into a dynamic product-selling structure",
              "Improved 10s+ API latencies by 95–99% (N+1 elimination, execution-plan-driven indexing, join fixes)",
              "Used Claude to automatically clean up and update hundreds of API Swagger and Postman collections within a week",
              "Tuned CI/CD deployment infrastructure (health checks, connection draining, Green wait time) — 20%+ faster deploys",
              "Reduced cloud spend by removing unused infrastructure and right-sizing ECS tasks",
              "Adopted CloudFront HTTP/3, improving edge connection efficiency and cutting latency by ~20%",
              "Resolved FE monorepo (Turborepo) build OOM with GitHub Large Runners; secured dev-environment access control with static IPs",
            ],
          },
          {
            heading: "Monitoring & observability",
            bullets: [
              "Integrated Datadog DBM with the reader DB for real-time query performance and load visibility",
              "Added key infrastructure metrics as Datadog monitors to improve incident detection",
            ],
          },
        ],
      },
      {
        company: "FairyTech",
        role: "Server Lead",
        period: "Mar 2025 – Aug 2025",
        intro: [
          "Led backend development of Moment, a service that lets client apps easily integrate cashback via webview and SDK. Operated and maintained the existing service while designing features for business expansion and paying down technical debt.",
        ],
        techStack:
          "NestJS, DrizzleORM, Postgres, Redis, GraphQL, Protobuf, GCP (SQL, Memorystore, Pub/Sub, BigQuery, etc.), Datadog, PagerDuty",
        groups: [
          {
            bullets: [
              "Designed and built the per-user cash-earning structure: per-organization cash policies, an earning-history table with unique constraints, state-transition and cash-type modeling, integrity via transactions and exclusive locks, and a migration of existing purchase records",
              "Integrated Coupang into the cashback mall: applied a dispatcher-handler pattern so new malls can be added flexibly, improving scalability and maintainability",
              "Ran monthly per-client performance settlement (batches, record transmission)",
              "Improved Pub/Sub reliability: ack only on successful processing; built dead-lettering and a redriver for failure recovery",
              "Fixed failing Postgres→BigQuery scheduled queries to restore data consistency; resolved a BigQuery data-integrity issue blocking settlement batches in canary",
              "Configured Cloud NAT for a client's static-IP requirement — resolved ETIMEDOUT incidents caused by the NAT source-port soft limit via dynamic port allocation",
              "Improved the deploy pipeline: split all-at-once deploys into per-component deploys, replaced automatic production DDL migrations with a review-based manual process, introduced component versioning",
              "Developed and shipped new features including a user-consent API and a survey feature (Typeform) for user interviews",
              "Managed dependencies and improved code cohesion using design patterns, domain-driven development, and CQRS",
              "Managed the monorepo of API servers, workers, and batch jobs, plus the overall architecture including Pub/Sub and BigQuery",
              "Managed GCP and Datadog costs (caught and fixed a reseller billing error, tuned log retention, canceled unused contracted features)",
              "Conducted role and design interviews for hiring; handled data corrections, bug fixes, incident response, tests, and documentation",
            ],
          },
        ],
      },
      {
        company: "Lattice",
        role: "Tech Lead",
        period: "Aug 2024 – Nov 2024",
        intro: [
          "Assessed the company's technical state and established the tech roadmap; led server development for the enterprise contract-management SaaS Prix. Focused on enterprise-grade stability, a sustainable dev environment, bottleneck fixes, and metric-driven visibility.",
        ],
        techStack:
          "NodeJS, Express, TypeORM, Postgres, AWS (ECS, S3, SES, CodeBuild, etc.), Prometheus, Grafana, Terraform, Jenkins",
        groups: [
          {
            bullets: [
              "Established the tech roadmap (technical assessment, identifying improvements, prioritization)",
              "Built and operated a monitoring system (Prometheus, Grafana) with key metrics and Slack alerting",
              "Gained DB visibility (slow-query logging wired into monitoring); created missing indexes and tuned inefficient ORM-generated queries",
              "Restructured backend logging into JSON (request ID, level, response time, status code) — faster debugging and incident response",
              "Collected API response-time and status-code metrics to surface availability, contributing to company OKRs",
              "Identified and cleaned up idle infrastructure via monitoring — cut total infrastructure cost by 20%",
              "Developed new Prix backend features, improved existing ones, handled incidents, and did code reviews",
              "Improved code cohesion and readability through refactoring (parameter validation, type hinting, deduplication, detailed error logging)",
              "Set up the test environment (Jest, Supertest, Docker local DB), wrote e2e tests, and integrated GitHub Actions CI",
              "Improved DX and onboarding (domain diagrams, dockerized local setup, Swagger/NestJS adoption discussions)",
              "Introduced a batch system (Jenkins); proposed async processing of long-running tasks via batches and queues",
              "Built company-wide infrastructure configuration management by adopting Terraform",
              "Maintained the Prix API Kit docs; hired new developers (screening, interviews) and managed the engineering team",
            ],
          },
        ],
      },
      {
        company: "Asleep",
        role: "Technical Director / Backend Chapter Lead / AI Backend Engineer",
        period: "Oct 2021 – Feb 2024",
        intro: [
          "Grew from AI Backend Engineer to Backend Chapter Lead to Technical Director on the sleep-AI SaaS platform (Sleeptrack API), which analyzes users' breathing sounds in the cloud to provide sleep analysis. Integrated by SKT A., KB Healthcare, Samsung Life, Calm, and Sleep Routine.",
        ],
        techStack:
          "FastAPI, SQLAlchemy, PyTorch, Nginx, AWS (ECS, Aurora MySQL, SQS, S3, API Gateway, Lambda, DynamoDB, Elasticache, Firehose, Athena, DMS, etc.), AWS CDK, Datadog, Jenkins",
        groups: [
          {
            heading: "Technical Director (May 2023 – Feb 2024)",
            bullets: [
              "Led a ~10-person squad (PM, web/backend engineers, designer, QA): hiring, work identification and scheduling, ticket management, internal/external communication",
              "Participated in service policy decisions (cost analysis, billing policy, data retention, security rules)",
              "Initial planning (Figma) and ongoing operation of the product web dashboard; contributed to official developer documentation",
              "Architected the entire backend and drove continuous stabilization and enhancement (Elasticache adoption, S3 presigned URLs, SQS FIFO migration proposal)",
              "Improved and operated core features: usage aggregation (batch system), access control, throttling, fallback",
              "Deployment operations, DB management (modeling, failover, binlog replication, analytics DB), monitoring, and incident response",
              "Supported building the QA automation system (domain knowledge sharing, Q&A, BrowserStack)",
              "1st place at 2023 AWS GameDay; speaker at the 2023 AWS re:Invent lightning talk; AWS customer case interview",
            ],
          },
          {
            heading: "Backend Chapter Lead (Aug 2022 – May 2023)",
            bullets: [
              "Led a 6-person backend chapter: daily standups, weekly meetings, study groups, 1-on-1s, and cross-team communication",
              "Developed and enhanced product-level core features: authentication, access control, metering (API Gateway, Lambda)",
              "Designed the API Key system (per-account key management, production/test environment separation)",
              "Developed new API servers and enhanced existing ones (FastAPI, SQLAlchemy, layered architecture, unit tests)",
              "Enhanced the AI inference server (MLflow, PyTorch, onnxruntime)",
              "Built and operated the RDS Aurora cluster and RDS Proxy; researched global infrastructure (Global Accelerator, edge-optimized API Gateway, CloudFront)",
              "Enhanced ECS autoscaling for large traffic (target tracking, time-based scheduling); load testing with Locust",
              "Migrated monitoring to Datadog with dashboards; integrated test verification into CI/CD",
              "System operation, incident response, and backend postmortems; built and ran the internal VPN (Fortigate)",
            ],
          },
          {
            heading: "AI Backend Engineer (Oct 2021 – Aug 2022)",
            bullets: [
              "VPC design; built and operated the AI serving system (ECS Fargate, Autoscaling, SQS, S3, DynamoDB, Cognito, ELB, Route53)",
              "Infrastructure as code with AWS CDK; developed REST APIs (FastAPI) and the AI inference server (PyTorch)",
              "Implemented the MSA structure and access control (API Gateway, Lambda Authorizer, backend routing); designed DynamoDB and RDS tables",
              "Implemented service metering (Firehose, S3, Athena, Jenkins, RDS, Elasticache)",
              "Built monitoring (Prometheus, Grafana, Slack), logging (OpenSearch), and the CI/CD pipeline (GitHub Actions)",
            ],
          },
        ],
      },
      {
        company: "AI SPERA",
        role: "Head of Development (First Employee)",
        period: "Feb 2018 – Oct 2021",
        intro: [
          "Led development of Criminal IP, a big-data Cyber Threat Intelligence search engine. Joined as the first member and led development as the company grew to ~40 people (engineering was ~70% of headcount).",
        ],
        techStack:
          "Flask, MySQL, zmap, nmap, Selenium, AWS (EC2, ELB, Route 53, Lambda, API Gateway, etc.), Nginx, Elasticsearch, ELK, Zabbix, Rundeck, Azure, NHN Cloud",
        groups: [
          {
            heading: "Leading Criminal IP system development",
            bullets: [
              "Led design, implementation, and operation of crawlers, backend, and components (including server management: Linux kernel parameters, SSL certificates, uwsgi async)",
              "Architected the service on AWS (VPC, EC2, API Gateway, Lambda, S3, ACM, IAM, Route 53, ELB, Elasticsearch Service, CloudWatch)",
              "Built and operated Elasticsearch for full-text search — ~1B documents on a 10–20 node cluster, with index/tokenizer design and shard/replica strategy",
              "Led zero-downtime deployment operations (ELB, haproxy); monitoring and incident response (Zabbix + proxies, Rundeck, Syslog-ng, ELK); operated service DNS (bind9 master-slave)",
              "Led the cloud-to-cloud migration (AWS → Azure & NHN Cloud)",
            ],
          },
          {
            heading: "Initial B2C service development",
            bullets: [
              "Participated in all system architecting, infrastructure build-out, and pre-launch feature development",
              "Led development and operation of 100+ crawlers collecting threat intelligence from diverse sources",
              "Developed authentication (sign-up, login, email verification), Search features (Asset/Domain/Image/Exploit Search), and Intelligence features (Banner Explorer, Vulnerability, Statistics, Maps)",
              "Participated in pricing policy; integrated payments (Stripe); initial development of payment-based access control and usage metering; initial Chrome Extension development",
            ],
          },
          {
            heading: "Company operations & company-wide infrastructure",
            bullets: [
              "Managed company-wide systems and network infrastructure across AWS, Toast, GCP, HQ servers, and other hosting",
              "Built office infrastructure (server room construction, ESXi, firewalls, Jira/Confluence setup and operation)",
              "Operated firewall and security infrastructure (UTM, PFSense, AhnLab TrustGuard); participated in ISO 9001 certification",
              "Wrote and presented government project proposals; hiring interviews and team building; managed team members; supported technical sales meetings",
            ],
          },
          {
            heading: "Solo-developed a code-virtualization engine",
            bullets: [
              "Software-protection project targeting Windows 32-bit binaries on x86 — developed in C++ (virtualization program) and assembly (VM engine)",
            ],
          },
        ],
      },
      {
        company: "Agency for Defense Development (ADD)",
        role: "Researcher",
        period: "Apr 2013 – Jan 2018",
        groups: [
          {
            bullets: [
              "Researched and developed cyber attack and defense technologies (malware analysis, exploit research) at South Korea's national defense R&D institute",
            ],
          },
        ],
      },
    ],
    sideProjects: [
      {
        name: "ALLUS",
        period: "Apr 2024 – Jul 2024",
        description:
          "Solo-built a street dance platform app — planning, native app (Flutter), backend (NestJS, MySQL, Redis), infrastructure (Docker, EC2), and store release; released and operated on Google Play and the Apple App Store (since discontinued)",
      },
      {
        name: "Portfolio Web",
        period: "Aug 2024",
        description:
          "Built and operate my own resume/portfolio website (NextJS, Tailwind, Vercel)",
      },
    ],
    skills: [
      {
        group: "Cloud",
        items:
          "AWS (EC2, ECS/Fargate, Lambda, API Gateway, Aurora RDS, DynamoDB, ElastiCache, SQS, S3, CloudFront, Route 53, VPC, Site-to-Site VPN, IAM, WAF, DMS, Athena), GCP (Pub/Sub, BigQuery, Cloud SQL, Datastream), Azure",
      },
      {
        group: "IaC · Containers",
        items: "Terraform, Terragrunt, AWS CDK (Python), Docker, ECS (currently studying Kubernetes)",
      },
      {
        group: "CI/CD",
        items: "GitHub Actions, Jenkins — Blue/Green and zero-downtime deploys, pipeline design and tuning",
      },
      {
        group: "Backend",
        items:
          "Python (FastAPI, Flask, SQLAlchemy), TypeScript/Node.js (NestJS, Express), MySQL, Postgres, Redis, Elasticsearch",
      },
      {
        group: "Observability",
        items: "Datadog (APM, DBM), Prometheus, Grafana, OpenSearch/ELK, Zabbix, PagerDuty",
      },
      {
        group: "Security",
        items:
          "M.S. in Information Security, national defense security research, CTI, WAF/VPN/IAM design, compliance audits (KISA, ISO 9001)",
      },
      {
        group: "AI Engineering",
        items:
          "Claude-based development automation and agentic workflows, AI code review, LLM-driven QA and ops automation",
      },
    ],
    education: [
      "Korea University — M.S. in Information Security (2011 – 2013)",
      "Korea University — B.S. in Computer & Communications Engineering (2007 – 2011)",
    ],
    awards: [
      "1st place, AWS GameDay Korea 2023",
      "Speaker, AWS re:Invent 2023 lightning talk (GBL211-KO)",
      "Engineer Information Processing certification (2018)",
    ],
    portfolioLabel: "Full career details and technical write-ups are available on my portfolio",
    printButton: "Save as PDF",
  },
};
