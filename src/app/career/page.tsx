import Item from "@/component/item/item";

export default function CareerPage() {
  return (
    <section id="career" className="flex flex-col w-full mt-20 scroll-m-14">
      <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">경력</h1>
      <div className="border-y-2">
        <Item
          logo={{
            path: "/career/fairyTechLogo.png",
            width: 40,
            height: 40,
          }}
          headFirst="페어리테크"
          headSecond="서버 리드"
          subDescription="2025년 3월 ~ 2025년 8월 (5개월)"
          workDescriptions={[
            "고객사의 앱 서비스에 캐시백 서비스를 간단하게 연동할 수 있게 해주는 Moment 서비스의 백엔드 개발을 리드하였습니다. Moment는 캐시백 웹을 웹뷰 형태로 제공하여 쉽게 고객사 앱에 연동될 수 있으며, SDK를 연동할 경우 고객사 앱을 설치한 사용자가 11번가, 테무 같은 타겟 서비스에 접속 시 이를 인식하여 푸시 알림을 전송할 수 있습니다. 이를 통해 사용자가 캐시백 웹으로 접속해 구매하도록 유도하여 커미션 수익을 창출하고, 고객 서비스의 리텐션을 향상 시킬 수 있습니다. 기존 서비스 운영 및 유지보수와 함께 사업 확장을 위해 필요한 기능들을 설계 개발하며 제품을 개선하였고, 기존 기술 부채들을 조금씩 해소해나가려 노력하였습니다.<br/>- 기술 스택: NestJS, DrizzleORM, Postgres, Redis, GraphQL, Protobuf, GCP(SQL, Memorystore, Pub/Sub, BigQuery 등), Datadog, Pagerduty",
          ]}
          works={[
            [
              "사용자에게 단순히 적립 내역을 보여주는 걸 넘어, 캐시백 웹 내부에서 기프티콘이나 뽑기, 구독권 전환 등으로 사용할 수 있게 서비스가 기획됨에 따라 사용자별 캐시 적립 구조를 설계 및 개발<br/>- 기존에는 고객사가 실적 내역을 매달 가져가 고객사 서비스 재화로 지급해주는 구조였어서 해당 정책을 새 요구사항과 맞추기 위해 조직별 캐시 정책을 설계<br/>- 중복 적립 및 취소를 막기 위해 unique constraint를 활용해 적립 히스토리 테이블을 설계<br/>- 적립 예정, 적립 확정, 적립 취소 등의 구매 내역의 상태변화와 누적 캐시, 사용 가능한 캐시 등의 캐시 타입에 따라 구조를 설계<br/>- 사용자 캐시 변경 시 transaction과 exclusive lock을 통해 데이터 정합성 확보<br/>- 기존 구매 내역을 마이그레이션 하기 위해 마이그레이션 스크립트를 개발하고 마이그레이션 수행",
              "캐시백 쇼핑몰에 쿠팡을 새롭게 연동<br/>- Dispatcher-handler 패턴을 쇼핑몰의 콜백을 받는 API 서버와 이를 처리하는 워커에 적용. 이를 통해 향후 유연하게 쇼핑몰들을 늘려갈 수 있도록 하여 확장성, 유연성, 유지보수성을 개선<br/>- 1회 최대 2천원 적립, 사용자 구매 물품 이름 저장 등 정책 구현",
              "매월 고객사별 실적 정산 작업 진행 (배치, 실적 전송 등)",
              "Pub/Sub에서 메시지 처리 성공 실패 유무에 상관없이 ack 처리를 하고 있어, 처리가 성공한 경우에만 ack 처리 하도록 개선",
              "Pub/Sub dead-lettering과 redriver를 만들어 장애에 대응할 수 있도록 개선",
              "Postgres 데이터를 BigQuery 쪽으로 주기적으로 동기화하기 위한 Scheduled query들 중 일부가 쿼리 오류 이슈로 계속 실패하고 있었어서 이를 픽스하여 데이터 정합성 향상",
              "Canary 환경에서 BigQuery 테이블 쓰레기 데이터 이슈로 정합성이 깨져서 정산 배치 등이 돌고 있지 못한 이슈 해결",
              "고객사에서 콜백 수신으로 고정 IP를 필요로 해서 Cloud NAT 구성<br/>- VM 인스턴스별 NAT 소스 포트 개수 soft limit으로 트래픽이 몰릴 때 워커에서 ETIMEDOUT 장애 발생. 다이나믹 포트 설정으로 최대한으로 사용할 수 있게 변경하여 해소 (NAT에 IP 추가, 워커에서 axios 등을 사용할 때 TCP 커넥션 재활용하도록 설정하는 방법 등이 있는 걸 확인하였으나 다이나믹 포트로 우선 해결)",
              "사용자 동의 API 개발 및 배포",
              "캐시백 사용자 인터뷰를 위한 서베이 기능 개발 및 배포 (Typeform)",
              "배포 파이프라인에 배포 시 모든 서버 컴포넌트들이 다 배포되도록 되어 있어, 컴포넌트 별로 배포할 수 있도록 변경",
              "Production 환경에 배포시 수행되게 되어 있던 Drizzle 자동 마이그레이션을 삭제하고 수동 작업으로 변경<br/>- DDL은 서비스 장애로 이어질 수 있는 리스크가 있고, 마이그레이션이 꼬일 경우 복구가 어려울 수 있어 Local과 Canary 환경까지만 유지. Production은 배포자가 쿼리 점검 및 플랜 세워 배포하는 프로세스로 변경",
              "서버 컴포넌트들 버저닝을 도입하여 배포 시 또는 평소에 코드 형상을 빠르게 파악할 수 있도록 변경",
              "GCP 비용 관리 (메가존에서 내부 오류로 일부 이용 비용이 더 과금되는 상황이 발생했으나 빠르게 발견하여 조치하여 비용 절약)",
              "Datadog 비용 관리 (log retention period 조정, 전혀 사용하지 않는데 계약되어 있던 기능 해지 등으로 비용 절약)",
              "개발자 채용 직무 인터뷰, 설계 인터뷰 진행",
              "데이터 보정, 버그 픽스, 장애대응, 테스트코드 작성, 문서작업, 보안관리 약정서 검토 등",
            ],
          ]}
        />
        <Item
          logo={{
            path: "/career/latticeHoldingsLogo2.jpg",
            width: 40,
            height: 40,
          }}
          headFirst="래티스"
          headSecond="테크 리드"
          subDescription="2024년 8월 ~ 2024년 11월 (3개월)"
          workDescriptions={[
            "회사의 현 테크 상황을 파악하고, 개선점과 방안을 도출, 테크 로드맵을 수립하여 회사의 기술적 방향성에 기여하는 역할을 담당하였습니다. 계약관리 솔루션 <a class='text-blue-500 underline' href='https://prix.im/' target='_blank'>프릭스(Prix)</a>의 서버 개발을 주력으로 맡았고, 신규 기능 개발, 기존 기능 개선, 장애 대응과 더불어 제품이 엔터프라이즈 레벨에서 갖추어야 할 서비스의 안정성 향상, 지속 가능한 개발 환경 구축, 속도 병목 포인트 식별 및 개선, 시스템 및 서비스 지표 수집과 측정을 통한 가시성 확보 등을 위해 노력하였습니다.<br/>- 기술 스택: NodeJS, Express, TypeORM, Postgres, AWS(ECS, S3, SES, CodeBuild 등), Prometheus, Grafana, Terraform, Jenkins",
          ]}
          works={[
            [
              "테크 로드맵 수립(회사 내 기술 현황 파악, 개선점 식별 및 개선방안 도출 업무, 우선순위 정리)",
              "서비스 가시성 확보를 위한 모니터링 시스템 구축 및 운영(Prometheus, Grafana), 핵심 시스템 지표 선정 및 Slack 알람 연동",
              "데이터베이스 가시성 확보(slow query 활성화 및 모니터링 시스템 연동)",
              "필요한 인덱스가 없는 경우 생성하거나, ORM을 통해 비효율적으로 생성되고 있던 쿼리를 확인하고 튜닝",
              "텍스트 형태로 남던 백엔드 로깅 포맷을 JSON 형태로 정비하고 request id, logging level, response time, status code, message 등을 남겨 가독성을 향상시키고 검색이 쉽도록 개선해 디버깅, 장애대응이 편하도록 개선",
              "API response time, status code 지표 수집을 통해 서비스 가용성을 쉽게 확인할 수 있게 하고 전사 OKR에 기여",
              "모니터링 시스템을 통해 유휴 인프라 자원을 파악하고 이를 정리하여, 전체 인프라 비용의 20% 세이브",
              "프릭스 백엔드 신규 기능 개발, 기존 기능 개선, 장애 대응, 코드 리뷰(NodeJS, Express, PostgreSQL, TypeORM)",
              "리팩토링(파라미터 검증, 타입 힌팅, 가독성 높은 이름 선택, 중복 코드를 줄이기 위한 함수화 및 클래스화, 상세 에러로깅 추가 등)을 통해 코드 응집성과 가독성을 향상시키고, 개발 지속성을 확보하려 노력",
              "테스트 코드 환경 구성(Jest, Supertest, Docker를 통한 로컬 데이터베이스 구성), e2e 테스트 케이스 작성, CI 연동(Github Actions)",
              "개발자 개발경험 개선, 온보딩 및 협력 코스트 효율화 (복잡하게 얽힌 도메인들을 도식화하여 온보딩 프로세스 개선, docker를 활용해 로컬 개발환경 셋팅 간편화, Swagger 도입 논의, NestJS 도입 논의 등)",
              "배치성 작업의 효율적인 처리를 위한 배치 시스템 도입(Jenkins)",
              "서버에서 시간이 오래걸리는 작업을 배치나 큐를 이용해 비동기적으로 처리하는 구조 제안",
              "Terraform 도입을 통해 전사 인프라 형상 관리 체계 구축",
              "<a class='text-blue-500 underline' href='https://api-kit.prix.im/' target='_blank'>프릭스 API Kit 문서</a> 관리 및 개선",
              "서류 검토, 면접 등 신규 개발자 채용 및 개발팀 인력 매니징",
            ],
          ]}
        />
        <Item
          logo={{
            path: "/career/asleepLogo.png",
            width: 40,
            height: 40,
          }}
          headFirst="에이슬립"
          headSecond="테크니컬 디렉터"
          subDescription="2023년 5월 ~ 2024년 2월 (10개월)"
          workDescriptions={[
            "에이슬립의 SaaS(Sleep-as-a-Service) 서비스인 에이슬립 플랫폼을 만드는 Sleeptrack Platform 스쿼드의 테크니컬 디텍터 역할을 수행하였습니다. 에이슬립 플랫폼은 마이크가 탑재된 디바이스 기기들에서 클라우드로 전송되는 사용자의 호흡음 사운드를 AI로 분석하여, 사용자에게 다양한 수면 분석 결과를 제공하는 서비스로, 서비스 기획, 주요 정책 논의 및 기능 개발, 서비스 운영 및 관리, 팀 운영까지 다양한 부분에 관여하였고, PM, 웹 개발자, 백엔드 개발자, 프로덕트 디자이너, QA 분까지 약 10명정도의 구성원과 함께 제품을 발전시켜 나갔습니다. SKT 에이닷, KB 헬스케어, 삼성생명, Calm, 슬립루틴 등에 연동되는 성과를 내었고, AWS 게임데이에 동료들과 참가해 1등을 하기도 하였으며, 라스베가스에서 열리는 2023 AWS re:invent lightning talk에서 스피커로 발표도 할 수 있었습니다.<br/>- 기술 스택: FastAPI, SQLAlchemy, Nginx, Pytorch, AWS (ECS, Aurora MySQL, SQS, S3, API Gateway, Lambda, DynamoDB, Elasticache, Firehose, Athena, DMS, SES 등), AWS CDK, Datadog, Jenkins",
          ]}
          works={[
            [
              "팀 빌딩(채용), 개발 인력 매니징, 업무 식별 및 일정 관리, 티켓 관리, 회의 매니징, 팀원 모티베이션 체크 및 업무 환경 관리, 팀 내외부 커뮤니케이션 담당",
              "회사 서비스 정책 논의 및 결정 참여 (비용 분석, 과금 정책, 데이터 보관 규칙, 보안 규칙 등)",
              "<a class='text-blue-500 underline' href='https://dashboard.asleep.ai/' target='_blank'>제품 웹 대시보드</a> 초기 기획(피그마), 지속적인 개선 및 운영에 참여",
              "<a class='text-blue-500 underline' href='https://docs.asleep.ai/docs/overview' target='_blank'>공식 개발자 문서</a> 작성 및 관리 참여",
              "전체 백엔드 시스템 아키텍팅 / 지속적인 안정화, 기능 개발 및 개선, 고도화에 참여(성능 향상을 위한 Elasticache 도입, S3 Presigned URL, SQS FIFO 큐 전환 제안 등)",
              "사용량 집계(배치 시스템 구축), 권한 제어, 쓰로틀링, 폴백 기능 등과 같은 코어 기능 개선 및 운영",
              "배포 오퍼레이션, DB 관리(테이블 모델링, failover, binlog replication, db migration, 분석용 DB 구축 등), 서비스 모니터링 및 장애 대응 (slow query, cpu & memory 등)",
              "QA 자동화 시스템 구축 서포트 (시스템 설명 및 도메인 지식 공유, 질의 응답, Browerstack 구매 등)",
              "<a class='text-blue-500 underline' href='https://it.donga.com/103782/' target='_blank'>2023 AWS Gameday 1위</a>",
              "<a class='text-blue-500 underline' href='https://aws.amazon.com/ko/blogs/korea/aws-reinvent-2023-korean-sessions/' target='_blank'>2023 AWS re:invent lightning talk 스피커 참가</a> (GBL211-KO Buliding sleep apps on AWS with AI as a service)",
              "<a class='text-blue-500 underline' href='https://www.youtube.com/watch?v=ZKWwMvpdFZ0' target='_blank'>AWS 고객사례 인터뷰 참가</a>",
            ],
          ]}
          topImages={[
            {
              path: "/project/asleep/architecture.png",
              width: 800,
              height: 500,
            },
          ]}
        />
        <Item
          logo={{
            path: "/career/asleepLogo.png",
            width: 40,
            height: 40,
          }}
          headFirst="에이슬립"
          headSecond="백엔드 챕터 리드"
          subDescription="2022년 8월 ~ 2023년 5월 (10개월)"
          workDescriptions={[
            "개발해오던 AI 백엔드를 Sleeptrack API라 명명하고, 조금 더 제품 레벨에서 리딩을 하게 되었습니다. 그러기 위해 필요한 구조와 기능들, 컴포넌트들을 식별하고, 기존 시스템들도 더 고도화시키고 안정화 시키는데 주력하였습니다. MSA 환경 하에서 시니어 백엔드 개발자 두분과 함께 서로 영역을 나눠 책임을 분리하여 일했고, 제가 제가 전체 시스템을 챙겼습니다. 또한, 매트릭스 구조의 조직 체계에 따라 백엔드 챕터의 리드를 맡게 되어, 6명으로 구성된 백엔드 팀을 챙기는 역할도 함께 수행하였습니다.",
          ]}
          works={[
            [
              "Jira와 Slack을 통한 업무 식별, 할당 및 관리",
              "데일리 스탠드업, 위클리 미팅, 스터디, 1 on 1 진행",
              "팀, 스쿼드 간 커뮤니케이션 진행",
              "제품 레벨의 인증 및 권한 제어, 미터링 등과 같은 코어 기능 개발 및 고도화 (API Gateway, Lambda)",
              "API Key 시스템 디자인 (계정별 API Key 관리, 프로덕션 및 테스트 환경 분리 등)",
              "새 API 서버 개발 및 기존 API 서버 고도화 (FastAPI, SQLAlchemy, Layered Architecture, Unittest TC 작성)",
              "AI Inference 서버 기능 고도화 (MLflow, Pytorch, onnxruntime)",
              "Github과 Gitflow 전략 운영을 통한 코드 형상 관리",
              "RDS Aurora 클러스터와 RDS Proxy 구축 및 운영",
              "글로벌 인프라 리서치 및 구축 시도(Global Accelerator, API Gateway Edge-optimized, Cloudfront)",
              "대규모 트래픽 대응을 위한 ECS Autoscaling 고도화 (Target tracking, Time-based 스케줄링)",
              "부하 테스트 진행 (Locust)",
              "기존 모니터링 시스템을 Datadog으로 마이그레이션 및 대시보드 구축",
              "CI/CD에 테스트 코드 검증 절차 연동",
              "시스템 운영 및 장애 대응",
              "백엔드 장애 시 포스트모템 진행",
              "회사 내부 VPN 구축 및 운영 (Fortigate)",
            ],
          ]}
        />
        <Item
          logo={{
            path: "/career/asleepLogo.png",
            width: 40,
            height: 40,
          }}
          headFirst="에이슬립"
          headSecond="AI 백엔드 엔지니어"
          subDescription="2021년 10월 ~ 2022년 8월 (11개월)"
          workDescriptions={[
            "클라우드 상에서 사용자의 호흡음을 AI로 분석하는 AI 백엔드와 전체 에이슬립 백엔드의 아키텍팅 구축 및 개발을 담당하였습니다.",
          ]}
          works={[
            [
              "VPC 설계",
              "AI Serving 시스템 구축 및 운영 (ECS Fargate, Autoscaling, SQS, S3, DDB, Cognito, ELB, Route53)",
              "CDK를 통한 인프라 관리",
              "FastAPI를 통한 REST API 개발",
              "AI Inference 서버 개발 (Pytorch)",
              "DynamoDB 테이블 디자인",
              "MSA 구조 및 권한 제어 구현 (API Gateway, Lambda Authorizer, Backend Routing)",
              "서비스 미터링 구현 (Firehose, S3, Athena, Jenkins, RDS, Elasticache)",
              "사용량 및 권한 테이블 디자인 (RDS)",
              "RDS 클러스터 구축 (Primary - Secondary)",
              "Prometheus, Grafana, Slack을 이용한 모니터링 시스템 구축",
              "로깅 시스템 구축(Opensearch)",
              "CI/CD 파이프라인 구축 (Github Actions)",
            ],
          ]}
        />
        <Item
          logo={{
            path: "/career/aisLogo.jpg",
            width: 40,
            height: 40,
          }}
          headFirst="에이아이스페라"
          headSecond="개발팀장"
          subDescription="2018년 2월 ~ 2021년 10월 (3년 9개월)"
          workDescriptions={[
            "빅데이터 기반 CTI (Cyber Threat Intelligence) 검색엔진 <a class='text-blue-500 underline' href='https://criminalip.io/' target='_blank'>Criminal IP</a> 개발을 총괄하였습니다.<br/>- 기술 스택: Flask, MySQL, zmap, nmap, selenium, AWS (EC2, ELB, Route 53, Lambda, API Gateway 등), Nginx, Elasticsearch, ELK, Zabbix, Rundeck, Azure, NHN Cloud",
            "Criminal IP B2C 전체 서비스 시스템 초기 개발을 리딩하였습니다.",
            "회사 운영 참여 및 전체 개발팀 총괄하였습니다.",
            "코드 가상화 엔진 1인 개발하였습니다.",
          ]}
          works={[
            [
              "Criminal IP 시스템 개발 리딩 (크롤러, 백엔드, 컴포넌트 설계와 구현 및 운영 / 리눅스 커널 파라미터, SSL 인증서, uwsgi 비동기 등 서버 설정 및 관리)",
              "AWS 클라우드를 통한 서비스 아키텍팅 (VPC, EC2, API Gateway, Lambda, S3, ACM, IAM, Route 53, ELB, Elasticsearch Service, Cloudwatch)",
              "전문검색을 위한 Elasticsearch 구축 및 운영",
              "프로덕션 배포 오퍼레이션 리딩 (ELB, haproxy를 통한 무중단 패치)",
              "서비스 모니터링 및 장애 대응(Zabbix, Zabbix Proxy, Rundeck, Syslog-ng, ELK)",
              "서비스용 DNS 서버 운영 (bind9 M-S 구조)",
              "클라우드 간 마이그레이션 진행 리드 (AWS -> Azure & NHN 클라우드)",
              "제품 테스팅 참여, 기능 기획, 기술 리딩",
            ],
            [
              "시스템 구조 아키텍팅, 인프라 구축 및 런칭 전 초기 기능의 모든 개발에 참여",
              "여러가지 다양한 소스를 통해 수많은 위협 정보를 수집하는 약 100대가 넘는 크롤러 개발 및 운영 리딩",
              "서비스 기획 참여",
              "회원 가입, 로그인, 이메일 인증 코드 전송 등 인증 기능 개발 참여",
              "Search 메뉴에 Asset Search, Domain Search, Image Search, Exploit Search 기능 개발 참여",
              "Intelligence 메뉴에 Banner Explorer, Vulnerability, Statistics, Maps 기능 개발 참여",
              "Pricing 플랜 정책 결정 참여, 결제 모듈 연동(Stripe), 결제 정보에 따른 권한 제어 및 사용량 측정 제어 기능 초기 개발",
              "Chrome Extension 초기 개발",
              "시스템 로깅, 모니터링 시스템 구축 및 전반적인 서비스 운영에 관여",
            ],
            [
              "회사 첫 멤버로 조인해 약 40명 규모까지 근무(개발팀 전체 인원에 70% 정도 / 웹, 백엔드, DBA, 인프라, 디자인 조직으로 구성)",
              "AWS, Toast, GCP, HQ 서버, 기타 호스팅 서버 등 전사 시스템 및 네트워크 인프라 관리",
              "오피스 업무 인프라 구축(서버실 공사 및 셋팅, ESXi 설치 및 운영, 방화벽 운영, Slack 연동, Jira와 Confluence 구축 및 운영 등)",
              "방화벽 및 보안 인프라 운영 (UTM, PFSense, 안랩 Trustguard 등)",
              "보안 과제 진행 (코드 가상화 엔진 구현 등)",
              "정부 과제 제안서 작성 및 발표",
              "인증 취득 절차 참여(ISO 9001 등)",
              "채용 인터뷰 및 팀빌딩 참여",
              "팀 구성원 매니징 (업무 관리, 1 on 1 등)",
              "영업 기술 미팅 서포트",
            ],
            [
              "x86 환경에서 Windows 32 바이너리를 타겟",
              "C++(코드 가상화 프로그램)과 어셈블리 코드(VM 엔진)를 사용해 개발",
              "프로젝트 기간은 1년 정도였고, 개발 기간은 약 3개월 정도로 기억",
            ],
          ]}
        />
        <Item
          logo={{
            path: "/career/addLogo.png",
            width: 40,
            height: 40,
          }}
          headFirst="국방과학연구소"
          headSecond="연구원"
          subDescription="2013년 4월 ~ 2018년 1월 (4년 10개월)"
          workDescriptions={["사이버 공격 및 방어기술을 연구개발하였습니다."]}
          works={[["악성코드, 익스플로잇 연구"]]}
        />
      </div>
    </section>
  );
}
