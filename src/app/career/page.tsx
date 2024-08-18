import Item from "@/component/item/item";

export default function CareerPage(){
    return (
        <section id="career" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">경력</h1>
            <div className="border-y-2">
                <Item
                    logo={
                        {
                            path: "/career/asleepLogo.png",
                            width: 40,
                            height: 40,
                        }
                    }
                    headFirst="에이슬립"
                    headSecond="테크니컬 디렉터"
                    subDescription="2023년 5월 ~ 2024년 2월 (10개월)"
                    workDescriptions={
                        [
                            "에이슬립의 SaaS(Sleep-as-a-Service) 서비스인 에이슬립 플랫폼을 만드는 Sleeptrack Platform 스쿼드의 테크니컬 디텍터 역할을 수행하였습니다. 에이슬립 플랫폼은 마이크가 탑재된 디바이스 기기들에서 클라우드로 전송되는 사용자의 호흡음 사운드를 AI로 분석하여, 사용자에게 다양한 수면 분석 결과를 제공하는 서비스로, 서비스 기획, 주요 정책 논의 및 기능 개발, 서비스 운영 및 관리, 팀 운영까지 다양한 부분에 관여하였고, PM, 웹 개발자, 백엔드 개발자, 프로덕트 디자이너, QA 분까지 약 10명정도의 구성원과 함께 제품을 발전시켜 나갔습니다. SKT 에이닷, KB 헬스케어, 삼성생명, Calm, 슬립루틴 등에 연동되는 성과를 내었고, AWS 게임데이에 동료들과 참가해 1등을 하기도 하였으며, 라스베가스에서 열리는 2023 AWS re:invent lightning talk에서 스피커로 발표도 할 수 있었습니다.",
                        ]
                    }
                    works={
                        [
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
                                "<a class='text-blue-500 underline' href='https://www.youtube.com/watch?v=ZKWwMvpdFZ0' target='_blank'>AWS 고객사례 인터뷰 참가</a>"
                            ],
                        ]
                    }
                    topImages={
                        [
                            {
                                path: "/project/asleep/architecture.png",
                                width: 800,
                                height: 500,
                            },
                        ]
                    }
                />
                <Item
                    logo={
                        {
                            path: "/career/asleepLogo.png",
                            width: 40,
                            height: 40,
                        }
                    }
                    headFirst="에이슬립"
                    headSecond="백엔드 챕터 리드"
                    subDescription="2022년 8월 ~ 2023년 5월 (10개월)"
                    workDescriptions={
                        [
                            "개발해오던 AI 백엔드를 Sleeptrack API라 명명하고, 조금 더 제품 레벨에서 리딩을 하게 되었습니다. 그러기 위해 필요한 구조와 기능들, 컴포넌트들을 식별하고, 기존 시스템들도 더 고도화시키고 안정화 시키는데 주력하였습니다. MSA 환경 하에서 시니어 백엔드 개발자 두분과 함께 서로 영역을 나눠 책임을 분리하여 일했고, 제가 제가 전체 시스템을 챙겼습니다. 또한, 매트릭스 구조의 조직 체계에 따라 백엔드 챕터의 리드를 맡게 되어, 6명으로 구성된 백엔드 팀을 챙기는 역할도 함께 수행하였습니다.",
                        ]
                    }
                    works={
                        [
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
                        ]
                    }
                />
                <Item
                    logo={
                        {
                            path: "/career/asleepLogo.png",
                            width: 40,
                            height: 40,
                        }
                    }
                    headFirst="에이슬립"
                    headSecond="AI 백엔드 엔지니어"
                    subDescription="2021년 10월 ~ 2022년 8월 (11개월)"
                    workDescriptions={
                        [
                            "클라우드 상에서 사용자의 호흡음을 AI로 분석하는 AI 백엔드와 전체 에이슬립 백엔드의 아키텍팅 구축 및 개발을 담당하였습니다.",
                        ]
                    }
                    works={
                        [
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
                        ]
                    }
                />
                <Item
                    logo={
                        {
                            path: "/career/aisLogo.jpg",
                            width: 40,
                            height: 40,
                        }
                    }
                    headFirst="에이아이스페라"
                    headSecond="개발팀장"
                    subDescription="2018년 2월 ~ 2021년 10월 (3년 9개월)"
                    workDescriptions={
                        [
                            "빅데이터 기반 CTI (Cyber Threat Intelligence) 검색엔진 <a class='text-blue-500 underline' href='https://criminalip.io/' target='_blank'>Criminal IP</a> 개발 총괄",
                            "Criminal IP B2C 전체 서비스 시스템 초기 개발 리딩",
                            "회사 운영 참여 및 전체 개발팀 총괄",
                            "코드 가상화 엔진 1인 개발",
                        ]
                    }
                    works={
                        [
                            [
                                "Criminal IP 시스템 개발 리딩 (크롤러, 백엔드, 컴포넌트 설계와 구현 및 운영 / 리눅스 커널 파라미터, SSL 인증서, uwsgi 비동기 등 서버 설정 및 관리)",
                                "AWS 클라우드를 통한 서비스 아키텍팅 (VPC, EC2, API Gateway, Lambda, S3, ACM, IAM, Route 53, ELB, Elasticsearch Service, Cloudwatch)",
                                "전문검색을 위한 Elasticsearch 구축 및 운영",
                                "프로덕션 배포 오퍼레이션 리딩 (ELB, haproxy를 통한 무중단 패치)",
                                "서비스 모니터링 및 장애 대응(Zabbix, Zabbix Proxy, Rundeck, Syslog-ng, ELK)",
                                "서비스용 DNS 서버 운영 (bind9 M-S 구조)",
                                "클라우드 간 마이그레이션 진행 리드 (AWS -> Azure & NHN 클라우드)",
                                "제품 테스팅 참여, 기능 기획, 기술 리딩"
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
                            ]
                        ]
                    }
                />
                <Item
                    logo={
                        {
                            path: "/career/addLogo.png",
                            width: 40,
                            height: 40,
                        }
                    }
                    headFirst="국방과학연구소"
                    headSecond="연구원"
                    subDescription="2013년 4월 ~ 2018년 1월 (4년 10개월)"
                    workDescriptions={
                        [
                            "사이버 공격 및 방어기술 연구개발",
                        ]
                    }
                    works={
                        [
                            [
                                "악성코드, 익스플로잇 연구",
                            ],
                        ]
                    }
                />
            </div>
        </section>
    )
}