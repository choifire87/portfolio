import { Localized, ImageInfo, SkillSectionContent } from "@/i18n/types";

const logo = (name: string): ImageInfo => ({
  path: `/skill/${name}`,
  width: 40,
  height: 40,
});

export const skillContent: Localized<SkillSectionContent> = {
  ko: {
    title: "기술 스택",
    items: [
      {
        logo: logo("amazon-api-gateway.svg"),
        headText: "Amazon API Gateway",
        descriptions: [
          "- Amazon API Gateway의 REST API를 통해, 에이슬립 SaaS 서비스의 API Gateway를 구축하였습니다. 모든 트래픽의 진입점인 게이트웨이에서 통합 인증 및 권한 제어를 하기 위해 Lambda Authorizer 라는 기능을 추가적으로 사용하였는데요. Lambda는 보통 zip 파일로 코드를 압축해서 올리기 때문에, 올라가는 코드의 배포 및 롤백, 그리고 모듈 의존성 관리 등이 어려웠는데, 컨테이너 방식의 배포가 가능하게 되어, github actions를 연동해 CI/CD 환경을 구축함으로써, 컨테이너 빌드 과정에서 모듈을 설치하고 TC를 돌린다던가 하는 작업을 편리하게 수행할 수 있었습니다.",
          "- 초기에 HTTP API가 REST API에 비해 훨씬 비용이 저렴하여 활용하려고 하였으나, response 커스터마이징이 안되는 이슈가 있어, REST API를 택하였고, 팀의 백엔드 개발자가 매우 적은 상황이었기에 게이트웨이를 직접 개발하고 운영할 여력은 안되었기에, Amazon API Gateway를 선택한 게 여러모로 좋은 선택이었다고 생각합니다.",
          "- Usage Plan, API Key 등 기본적인 API Gateway가 지원해주는 기능들도 사용해보았고, regional과 edge-optimized 모두 사용해보았습니다.",
        ],
      },
      {
        logo: logo("aws-lambda.svg"),
        headText: "AWS Lambda",
        descriptions: [
          "- 에이슬립에서 Amazon API Gateway를 사용하면서 lambda authorizer 라는 기능을 통해, gateway를 통과하는 모든 http request에 대해 lambda를 띄워 요청에 대한 검증을 수행하였습니다. nodejs를 런타임으로 사용하여 async - await 방식으로 개발하였고, elasticache와 Aurora MySQL을 활용해 cache-aside 방식으로 고객의 권한을 가져와 호출 가능한 사용량, 계약 기간, 고객이 사용 가능한 API 등을 검증할 수 있게 구성하였고, elasticache가 down된 상태에서도 정상 동작하게 하기 위해 fallback 기능을 구현하였습니다. 또한, elasticache를 통해 RPS(Request Per Second) 키를 지정하고, 이를 통해 쓰로틀링 기능을 구현해서 서비스의 가용성을 확보했습니다.",
          "- AI 분석 이후 콜백 기능을 구현할 때, SQS에 메시지가 들어오면 lambda를 트리깅하여 http request를 수행할 수 있도록 했습니다. 이렇게 구성할 경우, 트래픽에 유연하게 대응할 수 있고 운영 리소스가 줄어드는 장점이 있었습니다.",
        ],
      },
      {
        logo: logo("amazon-kinesis.svg"),
        headText: "Amazon Kinesis",
        descriptions: [
          "- Amazon API Gateway 사용시 남게 되는 access log는 기본적으로 cloudwatch logs에 남게 되는데, 이 destination을 kinesis data firehose 로 설정하는 것이 가능합니다. 또한 firehose의 destination으로 S3를 설정하는 것이 가능한데, 이렇게 파이프라인을 구축하여 시스템의 모든 access log를 S3 적재할 수 있습니다. firehose에서 S3에 적재할 때 약간 설정을 하면 각 로그들이 특정 prefix(e.g. year=2023/month=11/day=01/hour=04/access_log.json)로 분류가 되어 저장하는 것이 가능하며, 이렇게 적재된 로그 파일은 athena를 통해 주기적으로 통계 분석을 하는 것이 가능합니다. 에이슬립에서 해당 파이프라인을 구축하였습니다.",
          "- 또한, 에이슬립에서 실시간 사용량 집계 기능 구축을 위해 kinesis data stream을 사용해 본 적이 있습니다. 위의 파이프 라인은 실시간 집계는 적합하지 못한 구조였고, 스트림 분석에 적합한 Kinesis SQL application이나 Studio의 Input으로 firehose를 지원하지 않고 data stream을 지원하였기 때문에 해당 파이프라인을 구축하고, sliding window를 통해 실시간 집계를 할 수 있도록 작업을 진행하였습니다. 그러나 회사 서비스 과금 정책상 실시간 집계가 필요치 않게 되었고, 도메인 특성상 access log를 통해서는 실시간 수면 분석 사용량을 집계하기가 애매한 점 등으로 중단하였습니다.",
        ],
      },
      {
        logo: logo("aws-waf.svg"),
        headText: "AWS WAF",
        descriptions: [
          "- 에이슬립에서 기업과의 계약 시에 보안 요구사항이 발생해, API Gateway 앞단에 WAF를 배치하였습니다. AWS에서 제공 및 관리해주는 기본적인 WAF 룰이 있었기 때문에 해당 룰들을 검토하였는데, 코어 룰셋과 매니지드 SQL 인젝션 룰셋을 사용하였는데요. 테스트 환경에서 연동시 API들에 대부분 문제가 없음을 확인하였으나, POST Body 크기 제한으로 파일 업로드시 WAF에 잡히는 문제가 있었고 이 부분은 우선순위가 더 높은 예외룰을 만들어 allow 처리 하였습니다.",
        ],
      },
      {
        logo: logo("aws-ga.svg"),
        headText: "AWS Global Accelerator",
        descriptions: [
          "- 에이슬립에서 글로벌 서비스에 대한 요구사항이 생겨나면서, 글로벌 인프라 구축에 대한 리서치를 진행했습니다. 회사 매출 상황도 그렇고, 가용 인원도 여의치 않았기 때문에, 해외 리전에 서비스를 새로 구성하는 쪽은 전혀 고려하지 않았고, 해외에서 API를 호출할 때 네트워크 레이턴시를 최소화 시키는 데 집중하였습니다.",
          "- Edge-optimized API Gateway, Cloudfront & Regional API Gateway, Global Accelerator 이렇게 3가지를 테스트하였고, 해외 호스팅에 서버를 만들어 레이턴시 테스트를 하였는데요. 3가지 모두 클라이언트가 가까운 지역 PoP 서버를 진입점으로 하여 AWS의 백본 네트워크로 라우팅되어 네트워크 레이턴시를 최적화 할 수 있는 것이 원리로 아는데, 테스트 결과 edge-optimized API Gateway가 가장 성능도 좋았고, 네트워크 구조의 변경이 크게 필요하지 않아 해당 방법을 적용하였습니다. 다만 간헐적으로 파일 업로드 시 알 수 없는 에러가 발생해 VPC Flowlog 등도 살펴보았지만 원인을 찾지 못해 결국 롤백하게 되었습니다.",
        ],
      },
      {
        logo: logo("amazon-route-53.svg"),
        headText: "Amazon Route53",
        descriptions: [
          "- AWS를 사용하는 회사들에서 Route 53을 통해 도메인을 관리하여 보았습니다. 에이아이스페라, 에이슬립 모두 해당 서비스를 활용하였고, 에이아이스페라에서 NHN 클라우드를 사용하게 되었을 때, Route 53에 대응되는 도메인 관리 서비스에서 내부 DNS를 지원하지 않아서 bind53을 사용하여 내부 DNS를 구성하기도 하였습니다.",
          "- A, CNAME, NS, TXT 레코드 등 설정해보았고, 도메인 구매 및 SSL 인증서 갱신을 위한 작업도 수행해보았으며, TTL과 외부 도메인과 내부 도메인에 대한 개념을 이해하고 있습니다.",
          "- 에이아이스페라에서 도메인 시스템에 대한 지식이 부족하던 시절 NS 레코드의 네임서버 설정을 잘못 바꾸어서 전사 장애를 경험해본 적이 있으며, 다행히 서비스가 정식 런칭하여 고객들이 사용하기 전이었어서 도메인 설정이 매우 중요하고 위험한 작업임을 알게 되었습니다.",
        ],
      },
      {
        logo: logo("amazon-cloudfront.svg"),
        headText: "Amazon Cloudfront",
        descriptions: [
          "- 에이아이스페라에서 웹 크롤러로 수집한 웹사이트 스크린 샷을 클라이언트에 빠르게 전달하기 위해 Cloudfront를 설정해서 사용해보았습니다.",
        ],
      },
      {
        logo: logo("amazon-vpc.svg"),
        headText: "Amazon VPC",
        descriptions: [
          "- 네트워크 아키텍처를 구성하기 위해 VPC를 적극 사용하였고, Subnet(Public & Private), Routing table, VPC peering, IGW, NAT Gateway, EIP, Security group 등 다양하게 사용해보았습니다.",
          "- Edge-optimized API Gateway 적용 시 알 수 없는 에러를 트러블 슈팅하기 위해, ECS에는 tcpdump 등으로 패킷 레벨의 확인이 안되어서 VPC flow logs 라는 서비스를 활용하여 네트워크 레벨의 모니터링을 수행한 적이 있습니다.",
        ],
      },
      {
        logo: logo("aws-certificate-manager.svg"),
        headText: "AWS Certificate Manager",
        descriptions: [
          "- SSL 인증서를 발급받기 위해 ACM을 사용하였고, 이를 지속적으로 인증받기 위해 CNAME 인증도 진행했습니다. 또한, ALB, API Gateway 등과 같은 AWS에서 ACM 인증서를 허용하는 서비스들에도 적용해보았습니다.",
          "- 실제 Let's encrypt나 SecureSign 등과 같은 곳에서 CA가 발급하는 인증서를 발급받고, pem과 key 파일 등을 사용해 nginx 나 apache tomcat 같은 서버에 SSL 설정을 적용도 해보았는데요. 매년 인증서 갱신을 기억하고 이를 갱신하는 것이 얼마나 불편한 절차인지를 알게 되었고, ACM에서 자동으로 관리해주는 것이 얼마나 편리한 시스템인지 알 수 있었습니다.",
        ],
      },
      {
        logo: logo("iam.svg"),
        headText: "AWS IAM",
        descriptions: [
          "- 근무했던 회사들에서 주로 자연스럽게 admin 권한을 받아서 IAM 관리도 하였기 때문에, User, Group, Role을 많이 사용해 보았고, access key나 OTP 같은 기능도 주로 사용하였는데요. access key를 사용하는 경우에는, 공용 계정을 만들어 해당 계정의 키를 라이브 환경에 사용하게 함으로써 퇴사자의 계정이 삭제된다던가 하는 상황에서 발생하는 이슈를 방지하고자 하였습니다. 또한, Role을 적극 활용하였고. Group 단위로 권한을 부여하거나, inline policy로 필요한 리소스에 필요한 권한만 부 여하는 방식도 적극 활용하였습니다.",
          "- 퇴사자가 발생할 경우 권한을 회수하는 작업도 진행하였었는데, IAM에 있는 마지막 access key 사용 시간이 계정을 삭제했을 때 문제가 없는지 확인하는데 매우 유용하였습니다.",
        ],
      },
      {
        logo: logo("elastic-load-balancing.svg"),
        headText: "AWS ELB",
        descriptions: [
          "- 다양한 환경에서 부하 분산을 위해 Application Load Balancer와 Network Load Balancer를 사용하였는데요. ALB의 경우 L7 레이어 health check가 가능하기 때문에, 프로그램이 뜨지 않는 상태에서 스위칭되는 최소한의 장애는 예방할 수 있었고, 트래픽 핸들링으로 무중단 배포를 진행할 수 있었습니다. 또한, ALB는 Security group을 설정하는 것이 가능하기 때문에, 로드밸런서에 접근 제어가 필요한 경우 활용하였습니다.",
          "- NLB의 경우 Amazon API Gateway에서 private ALB로 라우팅을 지원하지 않기 때문에, 부득이하게 private NLB를 통해 private ALB로 라우팅이 되도록 구성을 하기도 하였습니다.",
        ],
      },
      {
        logo: logo("amazon-ecs.svg"),
        headText: "Amazon ECS",
        descriptions: [
          "- 에이슬립 플랫폼 시스템을 구축할 때는 컨테이너 환경을 활용하였는데, API 서버나 Inference 워커 등 컴퓨팅 리소스가 필요한 곳에 ECS를 사용하여 오케스트레이션을 하였습니다. 직접 EC2에 쿠버네티스를 설치하거나, EKS를 활용하는 방법도 있었으나, 스타트업 특성상 최대한 운영 비용이 낮은 매니지드 서비스인 ECS를 채택하였고, EC2 대신 서버리스인 Fargate를 선택하였습니다.",
          "- Fargate를 사용함으로써 OS 패치나 소프트웨어 업데이트 등 인프라 관리의 효율성은 높아졌으나, 고정된 스펙의 EC2를 할당받는 것과는 다르게, AWS가 관리하는 서버 풀에서 일정 vCPU, RAM을 할당 받는 것이다 보니, 같은 비용으로도 편차가 있는 리소스를 할당 받을 수 있는 것을 경험하였습니다. 그럼에도 현재 에이슬립에서는 그 편리성 때문에 Fargate를 활용하고 있습니다.",
        ],
      },
      {
        logo: logo("amazon-efs.svg"),
        headText: "Amazon EFS",
        descriptions: [
          "- 에이슬립에서 ECS를 사용 시, ECS 자체는 stateless이기 때문에 영속성이 필요한 곳에서는 EFS를 활용하였습니다. 필요한 경우 리눅스에서 네트워크 드라이브 마운트를 해서 관리하였습니다.",
        ],
      },
      {
        logo: logo("amazon-ec2.svg"),
        headText: "Amazon EC2",
        descriptions: [
          "- EC2는 기본적인 컴퓨팅 리소스로, 여러 회사에서 다양한 상황에서 많이 사용해보았습니다. API 서버를 운영하기 위해 nginx, uwsgi, flask를 설치하여 운영하기도 했고, haproxy라는 L7 부하 분산 소프트웨어를 설치하여 로드밸런서를 운영하기도 하였습니다. Private subnet에 있는 데이터베이스나 캐시 서버 등을 내부 개발자들이 접속할 수 있게 하기 위해 nginx proxy를 운영하거나, DNS 프로그램을 설치해서 DNS 서버 운영, 모니터링 프로그램 (zabbix, prometheus, grafana)을 설치하여 모니터링 목적으로도 사용하였었습니다.",
        ],
      },
      {
        logo: logo("amazon-rds.svg"),
        headText: "Amazon RDS",
        descriptions: [
          "- 에이아이스페라와 에이슬립에서 모두 Aurora Mysql을 사용하여 서비스를 운영하였습니다. 에이아이스페라에서는 위협 정보를 수집하기 위해 약 100개가 넘는 크롤러를 운영하였었는데, 그렇다보니 Insert와 Update가 굉장히 많이 일어나서 Writer에 부하가 많이 일어나는 상황이었고, 그에 따라 물리 샤딩을 하였기 때문에 7대가 넘는 Writer가 있었고, 각각 Reader를 1대씩 운영했습니다. 또한, 회사 내 서버실이 있었는데, 서버마다 ESXi를 설치하고 7대의 DB VM을 만들어서 replication을 하여 분석용으로 사용하였습니다. 각 DB endpoint로의 라우팅은 어플리케이션 레벨에서 진행하였고, 이를 중간에서 중개해줄 수 있는 SQL Proxy를 운영해보려 하였으나, 퇴사로 진행하지 못하였습니다. 시스템 특성상 잦은 CRUD로 인해 Aurora는 IOPS 비용이 매우 많이 나왔고, 회사 투자 상황상 NHN 클라우드를 사용해야 했어서 NHN 클라우드의 RDS로 마이그레이션을 하기도 했습니다. 해당 과정에서 도메인 네임 변경과 nginx 모니터링을 통해 몇일 간의 트래픽 전환은 직접 진행하였고, DBA 분이 계셨기 때문에 DB와 관련된 직접적인 구축과 오퍼레이션은 경험해보진 못하였습니다.",
          "- 에이슬립에서는 실제적인 구축과 오퍼레이션도 진행해볼 수 있었는데요. Aurora Mysql 8.0으로 클러스터를 구축하였고, failover 시에 stale DNS 이슈와 reader 인스턴스들의 CPU 사용 불균형 이슈를 해소하기 위해 rds proxy 서비스를 활용하였습니다. 또한 rds proxy는 lambda에서 connection 관리를 하는데도 효과적으로 활용할 수 있었습니다. 보다 상세한 모니터링을 위해 performance schema와 slow query 옵션을 활성화 하였고, binlog 를 켜서 분석용 DB 인프라를 구성하였습니다. 3.01.0 버전에서 binlog 활성화 시 freeable memory가 급격하게 소모되는 AWS에 서 공식 인정한 버그가 존재하여 장애를 경험하였고, 엔진 업그레이드가 필요해 DMS 서비스를 사용하여 마이그레이션 및 각 컴포넌트들의 endpoint 스위칭 작업을 리드하였습니다.",
          "- 테이블 및 인덱스 설계, 정규화 비정규화, 각종 데이터 마이그레이션, Online DDL 등을 수행해보았고, 트랜잭션, transaction isolation level, ACID, 잠금(Lock), binlog replication 등에 대해서도 어느정도 이해하고 있습니다.",
        ],
      },
      {
        logo: logo("amazon-s3.svg"),
        headText: "Amazon S3",
        descriptions: [
          "- 에이슬립 플랫폼에서는 주기적으로 사운드 파일을 클라이언트로부터 받아서 저장해야 하는데, 한 사용자가 하룻밤 수면 측정 할때 발생하는 트래픽은 약 100MB 정도가 됩니다. 때문에 이를 감당해줄 수 있는 비정형 저장소로 S3를 적극 활용하였고, 비용 관리를 위해 초기에는 intelligent tiering을 사용하였으나, AI가 분석한 이후 더 이상 필요없는 데이터이기 때문에, 자동으로 삭제될 수 있도록 lifecycle 기능을 적용하였습니다.",
          "- 아직 검토중으로 시스템에 적용하지는 못하였으나 API 서버로 들어오는 파일 업로드 트래픽을 줄이기 위해, S3의 presigned url 기능을 통해, SDK에서 모든 파일 업로드가 S3로 직접적으로 일어나게 하는 아키텍처도 구상하였습니다.",
          "- 에이아이스페라에서는 크롤러에서 이미지나 스크린샷 등의 수집이 필요할 때 S3를 활용하였고, 서비스에서 필요한 이미지들은 public으로 오픈하여 사용하였습니다.",
        ],
      },
      {
        logo: logo("amazon-sqs.svg"),
        headText: "Amazon SQS",
        descriptions: [
          "- 에이슬립에서 비동기 처리(Event-driven architecture)를 구현하기 위해 SQS를 사용하였는데요. AI API 서버에서 AI 분석이 필요할 경우, SQS에 메세지를 발행하고 이를 폴링하고 있는 Inference 워커가 AI 모델을 돌려 분석 후, 데이터 베이스에 적절히 값을 저장하는 방식입니다. 또한, 분석 이후에도 분석 결과와 여러가지 이벤트를 역으로 고객 서버에 알려주거나(콜백), 내부에 다른 시스템과 커뮤니케이션 해야하는 경우가 있어 해당 부분에도 SQS를 사용하였습니다.",
          "- Standard 큐와 FIFO 큐 중에 Standard 큐를 선택하였는데, 그 이유는 도메인 특성상 메세지 순서가 Best effort 면 충분했고, FIFO는 Throughput이 높지 않아 무제한 Throughput을 지원하는 Standard 큐를 선택하였습니다. 최근에는 FIFO 큐도 파티션을 통해 High Throughput을 지원하는 기능이 출시됨에 따라 FIFO 큐 마이그레이션도 팀 내부적으로 검토한 바 있습니다.",
        ],
      },
      {
        logo: logo("amazon-sns.svg"),
        headText: "Amazon SNS",
        descriptions: [
          "- 보통 오토스케일링을 위해 Topic을 만들고 이를 subscribe 하여 오토스케일링을 일으키고, 이메일 알람이 올 수 있도록 구성하였습니다.",
        ],
      },
      {
        logo: logo("amazon-dynamodb.svg"),
        headText: "Amazon DynamoDB",
        descriptions: [
          "- 에이슬립 플랫폼 초기 개발 당시, 설계 특성상 빠른 응답 속도와 운영 편의성을 가져갈 수 있는 DynamoDB를 채택하여 서비스를 구성하였습니다. Partition Key와 Sort Key를 선택해 LSI를 설계하고, 필요한 경우 GSI도 설정하였습니다. Partition Key는 cardinality가 높고 서비스에 중요한 ID 값을 선택하여 다양한 파티션에 분포되어, 핫 파티션 이슈 등을 줄일 수 있도록 설계하였습니다. 실제로도 직접 DB를 운영하는 것에 비해, 인프라적인 부분이나 DB 파라미터 튜닝 등 신경 쓸 부분이 매우 적었고, 트래픽이 적은 초기에 사용하는 만큼만 비용을 낼 수 있는 점 등 굉장히 효율적이었습니다.",
          "- 서비스가 복잡해짐에 따라 테이블 구조도 복잡해지고, 보다 다양한 쿼리에 대한 니즈가 생겨나면서 RDBMS에 대한 고려를 하기 시작하였습니다. 또한, on demand 방식으로 운영하였는데, 트래픽이 스파이크 칠때 현재 capacity를 넘으면 자동으로 2배의 capacity로 스케일링이 되지만 30분의 쿨타임이 있는 등 다소 운영이 불안한 부분 등도 있었습니다. 이에 따라 결국 Aurora MySQL로 마이그레이션을 하게 되었고, DDB는 여러가지 장점이 있지만, 보다 명확한 워크로드에 활용하는 것이 좋겠다는 레슨을 얻었습니다.",
        ],
      },
      {
        logo: logo("amazon-cognito.svg"),
        headText: "Amazon Cognito",
        descriptions: [
          "- 인증 API 기능 구현 시, 직접적인 인증 구현 시 필요한 다양한 개발 및 관리 포인트를 줄이기 위해 cognito를 활용해보았습니다. 풀 생성 시 생성한 attribute는 고정되며, 향후 custom attribute 는 삭제가 안되거나, 디테일한 검색에 제한이 있는 등 여러가지 제약 조건들이 있었으나, 기 발행된 토큰의 revoking을 포함한 JWT 토큰 관리, 쉬운 2차 인증 구현 등 전반적인 인증 기능을 매우 편하게 구현하고 관리할 수 있는 큰 장점이 있었습니다.",
        ],
      },
      {
        logo: logo("aws-cloudwatch.svg"),
        headText: "AWS CloudWatch",
        descriptions: [
          "- AWS 클라우드를 사용하는 모든 회사에서 로그 확인 및 각 서비스 리소스 모니터링에 cloudwatch를 많이 사용하였습니다. 특히 에이슬립에서 Prometheus와 Grafana를 사용해 모니터링 시스템을 구축하였을때, cloudwatch exporter를 통해 메트릭을 끌어올 수 있었습니다. 또한, 에이슬립에서 모니터링 도구로 datadog을 도입하였는데, 상황에 따라 cloudwatch logs에 subscription filter 를 적용하여 datadog에 포워딩을 시켰습니다.",
          "- ECS Inference 워커에 target tracking을 적용시키기 위해 custom metric을 cloudwatch에 생성해야 하는 작업이 있었는데요. event bridge로 일정 시간마다 lambda를 트리거하고 SQS에 있는 메세지 개수를 얻어와, 1대의 ECS Inference 워커가 처리 가능한 양으로 나누어서 custom metric을 구하였습니다. 이를 통해 해당 메트릭이 1000이면 1000대의 워커가 단번에 확장될 수 있게 되었습니다.",
        ],
      },
      {
        logo: logo("aws-dms.svg"),
        headText: "AWS DMS",
        descriptions: [
          "- 에이슬립에서 Aurora MySQL 3.01.0 버전에서 binlog replication을 위해 binlog를 활성화할 시, 트래픽이 늘어남에 따라 freeable memory가 급격하게 감소하면서 DB가 다운되는 현상이 있었습니다. binlog를 활성화 시켜야, 분석용 DB를 만들던, CDC를 통해 외부 다른 리소스로 동기화하던 할 수 있었기 때문에 꼭 필요한 기능이었고, 3.01.0의 EoL(End-of-Life)이 2024년 1월로 예정됨에 따라 강제 업데이트를 피하기 위해 마이그레이션이 필수적이었습니다.",
          "- RDS의 blue/green 기능을 사용해 스위칭을 해보려 하였으나, rds proxy를 사용할 경우 해당 기능 사용이 불가했고, ZDP(Zero-Downtime Patch)를 통한 엔진 업그레이드를 검토해보았으나, 해당 기능은 업그레이드 수행 중에 특정 조건을 만족할시 best-effort로 수행된다는 점이 매우 리스크가 높았기 때문에 DMS를 통한 마이그레이션을 수행 하였습니다.",
        ],
      },
      {
        logo: logo("aws-cdk.svg"),
        headText: "AWS CDK",
        descriptions: [
          "- 이전 회사에서는 웹 콘솔로만 작업하다가, 에이슬립에서는 IaC(Infra as Code) 방식을 통해 전체 인프라를 구축 및 관리하였는데요. 클라우드 리소스들을 여러 stack으로 나눠서 전체적으로 관리하였고, 외부 환경 변수를 주입받아 개발 환경, 프로덕션 환경, QA 환경 등을 하나의 코드베이스로 관리할 수 있도록 하였습니다. 선언형 방식인 terraform은 사용해보지 못했지만 python과 같은 프로그래밍 언어로 전체 인프라를 파악하고 지속적으로 형상관리 할 수 있어서, 적은 인원이서 큰 인프라를 비교적 효율적으로 관리할 수 있었습니다.",
          "- CDK 작업 중 프로덕션 환경의 특정 리소스를 날려버리는 장애를 경험해보았고, 이후 Cloudformation stack과 중요 리소스들에는 termination protection을 걸어두었습니다.",
        ],
      },
      {
        logo: logo("microsoft-azure.svg"),
        headText: "Microsoft Azure",
        descriptions: [
          "- 에이아이스페라에 근무할 때 AWS를 사용해서 전체 시스템 아키텍처를 구성하였었는데요. 회사 차원의 비용 통제 및 전략적인 이슈로 Azure와 NHN 클라우드로 마이그레이션하여 하이브리드로 운영하고자 하여 작업을 진행했었습니다. 이 때 VPC 구성, Virtual machine, DNS, Load Balancer, Application Gateway 등 기본적인 서비스들을 사용하여 인프라를 재구성한 경험이 있습니다.",
          "- 당시 사용하면서 UI, UX나 IAM 관리가 개인적으로 꽤나 불편했던 기억이 있고, Azure -> NHN 클라우드 사이에 데이터베이스 커넥션을 관리하는데 있어, NAT 테이블에서 idle 한 TCP connection을 날려버리는 이슈가 있었어서, keep-alive 쪽 리눅스 커널 파라미터를 튜닝했었던 경험이 있습니다.",
        ],
      },
      {
        logo: logo("nestjs.svg"),
        headText: "NestJS",
        descriptions: [
          "- 페어리테크에서 API 서버들, 워커, 배치들을 모노레포로 구성한 개발 환경을 경험해보았습니다. DTO를 검증하기 위해 class-validator, class-transformer들을 사용하였고, 프레임워크에서 기본적으로 제공해주는 기능들(데코레이터, 가드, 인터셉터)을 적절히 활용하여 인증, 로깅, 전역 예외처리 등을 진행하였습니다. 기본적으로 async-await로 코드를 짰고, 각 작업이 병렬로 진행되도 괜찮은 경우에는 Promise.all을 사용했습니다. 컨벤션에 따라 type보다는 enum을 많이 활용하였고, 입력 파라미터나 리턴 값에 타입을 구체적으로 명시하려 노력하였습니다. 데이터베이스는 Drizzle ORM을 사용하였고, 스키마 형상 관리를 위해 Drizzle에서 제공하는 마이그레이션 도구를 활용했습니다. 트랜잭션 처리는 서비스 레이어에서 트랜잭션을 시작해 트랜잭션을 각 클래스의 메서드에 넘겨주는 방향으로 구성하였고, 캐싱은 로컬 메모리와 Redis를 활용하였는데, 캐싱 효율이 높아 데이터베이스에 실리는 부하가 매우 낮은 편이었습니다. 테스트 코드 작성에는 jest를 사용하였고, testcontainers를 활용해 테스트 코드 실행 시 데이터베이스를 띄워 통합 테스트, e2e 테스트들을 진행하였습니다. 배포는 github actions를 통해 도커 이미지로 빌드해 배포하였고, 로컬 환경에서는 docker compose를 활용해 redis, postgres, pub/sub emulator를 띄웠습니다.",
          "- Flutter와 마찬가지로 올어스 서비스의 백엔드 프레임워크로 채택하여 사용하였었는데요. Class-validator, Class-transformer, TypeORM, MySQL, SocketIO, Redis 등과 함께 구성하여 프로덕션 수준으로 서비스를 구성하였습니다.",
        ],
      },
      {
        logo: logo("gcp.svg"),
        headText: "GCP",
        descriptions: [
          "- 페어리테크에서 사용했던 클라우드로 Compute Engine, SQL, Memorystore, Pub/Sub, BigQuery, Cloud Scheduler, Cloud Run, Batch, Artifact Registry, Cloud Storage, VPC, Cloud NAT 등을 사용해보았습니다.",
          "- BigQuery의 경우 주로 캐시백 정산, 통계 분석 목적으로 사용하였고, 기본적인 쿼리 작성과 기존 쿼리들 유지보수, 버그 픽스 외에도 데이터베이스처럼 UK에 기반한 중복 데이터 관리가 안되다보니 새 테이블을 먼저 만들고 MERGE INTO를 통해 기존 테이블에 통합시키는 작업이나 스캔 비용을 줄이기 위한 파티션 키 선택, 주기적으로 쿼리를 수행시키기 위한 Scheduled 쿼리 등을 경험해보았습니다.",
          "- Pub/sub은 topic에 subscription을 만들어 각 서버 컴포넌트들에서 publish, consume하고, 메시지 처리가 어려울 시 dead-lettering을 통해 유연하게 장애에 대응할 수 있는 경험을 해보았습니다.",
          "- Cloud NAT의 경우 고객사들에서 인바운드 트래픽 고정 IP를 원해서 추가하였으며, 소스 포트 allocation soft limit 이슈로 장애를 겪고 해소한 경험이 있습니다.",
        ],
      },
      {
        logo: logo("python.svg"),
        headText: "Python",
        descriptions: [
          "- 근무했던 스타트업들에서 모두 파이썬을 사용하였었고, API 서버 개발, 인증 기능 개발, AI Inference 워커 개발, 배치 개발, 기타 컴포넌트 개발 등 다양한 python 어플리케이션을 개발해보았습니다. 기본적으로 GIL에 의한 파이썬의 멀티 쓰레딩 이슈에 대해 알고 있으며, 인터프리터 언어의 특징, 동적 타이핑, 데코레이터, hinting, immutable 등에 대해 이해하고 있습니다. 다양한 파이썬 라이브러리들을 활용해서 개발을 진행해보았고, TC를 작성할 때 unittest를 사용했었는데, 적절히 클래스를 구성해 mocking 처리를 통해 단위 테스트가 이루어질 수 있도록 하였습니다. 실제 데이터베이스가 필요한 테스트는 sqlite를 활용했습니다. AI Inference 워커 개발 시에는 numpy나 pytorch, onnxruntime, mlflow와 같이 머신러닝에 필요한 라이브러리들도 사용해보았습니다.",
          "python 웹 프레임워크로는 Flask, FastAPI를 사용해 보았고, ORM은 SQLAlchemy를 사용했었고, 커넥터는 pymysql을 사용해보았습니다. 원활한 커넥션 관리를 위해 connection pooling도 사용했습니다.",
        ],
      },
      {
        logo: logo("fastapi.svg"),
        headText: "FastAPI",
        descriptions: [
          "- 에이슬립에서 FastAPI를 사용해서 개발을 하였는데요. 해당 프레임워크는 DI를 통한 의존성 관리, pydantic을 통한 파라미터 검증, 자동으로 생성되는 스웨거 문서 등 매우 훌륭한 피처들을 많이 가지고 있었고, 특히나 쓰레드 풀과 uvicorn을 통한 비동기 프로그래밍 지원을 통해 편리하게 현대 웹 어플리케이션을 개발할 수 있도록 하였습니다. nginx 를 리버스 프록시로 두고, uvicorn을 통해 운영했었습니다. 또한 FastAPI는 TechEmpower에서 진행하는 Web Framework Becnhmark에서 Django, flask 등을 포함한 파이썬 웹 프레임워크 중에 현재 가장 높은 벤치마크 성능을 보여주고 있기도 하며, 이슈없이 프로덕션 서비스를 잘 운영할 수 있었습니다.",
        ],
      },
      {
        logo: logo("flask.svg"),
        headText: "Flask",
        descriptions: [
          "- 에이아이스페라에서 API 서버 개발 시 flask를 사용해보았습니다. 지금 돌이켜 보면 가장 가볍지만, 뭐 하나 개발하려고 하면 라이브러리 설치가 필요했었고, 기본적인 패키지 구조나 DI 개념 같은 것도 준비되어 있지 않아 정말 최소한의 기능으로만 이루어져 있는 웹프레임워크 였던 것 같습니다. uwsgi와 nginx를 사용해서 서버를 운영했었고, gevent 라이브러리의 monkey patching 기능을 사용해서 비동기 처리를 진행했었습니다.",
        ],
      },
      {
        logo: logo("flutter.svg"),
        headText: "Flutter",
        descriptions: [
          "- 7월 중순까지 올어스(ALLUS)라는 스트릿댄스 플랫폼 앱을 1인 개발로 만들었는데, 네이티브 개발에 Flutter를 채택하여 사용했습니다. Riverpod, Retrofit, SocketIO, Google Admob, Kakao login, Apple login, build runner, updater 등의 모듈을 활용하였고, 앱 기획, 프로젝트 구조 구성, 기능 개발, 스토어 등록 및 배포, 테스팅 등 서비스 전 사이클에 걸쳐 모든 부분을 진행하였습니다.",
          "- 구글 플레이, 애플 앱스토어에 모두 런칭된 상태이고 현재 지속적으로 운영하고 있습니다.",
        ],
      },
      {
        logo: logo("firebase.svg"),
        headText: "Firebase",
        descriptions: [
          "- 올어스 앱에서 푸시 알람을 구현하기 위해 사용했습니다. 사용자가 앱에 로그인 할 때마다 Firebase 라이브러리를 통해 토큰을 생성하고, 해당 토큰을 서버로 보내 데이터베이스에 저장하여, 한 사용자가 여러 디바이스에서 로그인하여도 푸시 알람을 모두 받을 수 있도록 하였습니다. 또한, 로그아웃 시에 디바이스에서 토큰을 삭제하여 추가적인 알람을 더 받지 않도록 했습니다.",
          "- 삭제된 유효하지 않은 토큰은 서버 데이터베이스에서 없애기 위해 푸시 알람을 보내는 타이밍에 firebase 서버의 응답을 기준으로 삭제하였습니다. 향후 배치를 통해 주기적으로 확인하거나 이벤트 드리븐 방식으로 빼낼 생각을 하고 있습니다.",
        ],
      },
      {
        logo: logo("docker.svg"),
        headText: "Docker",
        descriptions: [
          "- 에이슬립에서 dockerfile을 사용해서 컨테이너를 관리하고 있습니다. 클라우드 환경에서는 AWS ECS를 사용하지만, 로컬에서는 docker compose 를 이용해서 관리하고 있습니다.",
          "- 클라우드 상에서 ECS 등 컨테이너 오케스트레이션 서비스를 이용해 인프라를 구축하고 CI/CD 파이프라인을 구성해서 운영하였습니다.",
          "- 도커 이미지 사이즈를 줄이기 위해 python slim 이미지를 사용해 보거나, 기존 dockerfile에서 불필요한 스텝이나 라이브러리를 제거하는 등의 작업을 진행해보았고, ALLUS 프로젝트 진행 시 alpine 리눅스와 멀티 스테이지 빌드를 적용해 이미지 사이즈를 최소화 하였습니다.",
        ],
      },
      {
        logo: logo("mysql.svg"),
        headText: "MySQL",
        descriptions: [
          "- 테이블 및 인덱스 설계, DB 파라미터 설정, 쿼리 작성 및 실행 계획 분석, 트랜잭션 관리, Online DDL, 마이그레이션, DB 운영 등을 경험해보았습니다.",
          "- 클러스터드 인덱스와 인덱스의 구조에 대해 인지하고 있고, 인덱스와 정규화와 비정규화의 트레이드 오프에 대해서도 인지하고 있습니다. 기본적인 MySQL의 자료형에 대해 알고 있고, 관계형 데이터베이스의 특징에 대해 알고 있으며, SQL 문을 작성하고 해석할 수 있습니다",
        ],
      },
      {
        logo: logo("redis.svg"),
        headText: "Redis",
        descriptions: [
          "- AWS에 elasticache로 프로덕션 레벨에서 사용해보았는데요. 서비스의 권한 제어 기능을 구현하는데 있어 Cache-aside 정책을 활용해 1차적으로 캐시를 탐색하고, 캐시 미스가 나면 데이터베이스에서 가져온 정보를 캐시에 일정 TTL동안 캐싱하였습니다. 결제나 관리자 웹을 통해 권한 변경이 일어나면, 관련된 키를 삭제하거나 변경하는 방향으로 동기화를 진행하였고, RPS 기능을 구현해보았으며, SaaS 서비스에서 비회원이 24시간동안 호출 가능한 무료 사용량을 관리하는데도 redis를 활용하였었습니다. API 서버에서 JWT 토큰을 이용한 인증 기능을 구현하였을때, 기 발급된 토큰들을 revoke 하기 위해 발급된 토큰들을 캐싱하기도 하였었습니다.",
          "- 기본적인 자료구조와 명령어들에 대해 알고 있고, Primary - Replica 방식으로 운영하였었습니다. 프로덕션 레벨에서 구성해보진 못했지만, 클러스터 모드를 통해 메모리의 스케일업 뿐만 아니라 스케일아웃이 가능함을 알고 있습니다. 백업을 위해 RDS와 AOF가 가능함을 알고 있었는데, 휘발성 데이터만 운영하면 되었고 어설프게 사용하면 오히려 동기화 이슈가 발생할 수 있어 사용하지 않았습니다.",
          "- 에이아이스페라 시절에 B2C 서비스 개발 시, 로그인 세션 관리를 위해 redis를 휘발성 저장소로 사용한 경험이 있습니다.",
        ],
      },
      {
        logo: logo("elasticsearch.svg"),
        headText: "Elasticsearch",
        descriptions: [
          "- 에이아이스페라에서 만들던 Criminal IP에서는 텍스트 서치 기능이 있었는데, 전세계 IPv4의 TCP와 UDP의 다양한 포트로부터 수집할 수 있는 텍스트 형태의 배너 정보에서 문자열 검색이 필요했었습니다. 당시 약 10억개 정도의 document를 다루기 위해, Inverted Index를 디자인하고, 토크나이저를 튜닝하고, 10~20대의 노드로 구성된 클러스터를 구성하면서 샤드와 레플리카도 구성하였었습니다. AWS에 elasticsearch가 있던 시절 해당 서비스를 사용하였습니다.",
          "- 에이슬립에서 초기에 API 서버를 포함한 각 컴포넌트들의 로그를 중앙집중화 하기 위해 AWS의 opensearch를 활용했었습니다. 로그는 fluentbit로 포워딩했었고, 데이터 보관 주기 등으로 운영 중에 발생하는 이슈로 인덱스를 정리하거나, 데이터 노드를 늘리는 작업 등도 수행했었습니다.",
        ],
      },
      {
        logo: logo("linux.svg"),
        headText: "Linux",
        descriptions: [
          "- EC2나 ESXi의 VM과 같은 환경에서 리눅스를 운영해보면서, 여러 리눅스에 대한 기본 지식들을 습득하였습니다. 주로 ubuntu 기반 OS에 익숙하고, service 설정(systemd), 권한 관리(chown, chmod), 패키지 관리(apt), 쉘스크립트 작성, 디스크 관리(mount, df, du), 네트워크 관리(netstat, nc, telnet, iptables, ping, traceroute, nslookup) 등에 익숙합니다. 서비스 운영 중에 동시성 이슈로, ulimit, sysctl 등으로 파일 디스크립터, 네트워크 소켓 설정 등을 튜닝해본 적이 있습니다.",
        ],
      },
      {
        logo: logo("jenkins.svg"),
        headText: "Jenkins",
        descriptions: [
          "- 주기적으로 돌아가야 하는 배치 프로그램을 중앙 집중 관리하고 운영하기 위해 Jenkins를 직접 구축하고 사용해보았습니다. 기본적으로는 crontab과 비슷하게 사용하면 되어서 어렵지 않았고, 배치의 실행 히스토리가 기록되기 때문에, 언제 배치가 실행되었고, 실패 시 어떤 로그가 떴는지 확인할 수 있어 매우 편리했습니다.",
        ],
      },
      {
        logo: logo("prometheus.svg"),
        headText: "Prometheus",
        descriptions: [
          "- 에이슬립에서 초기에 클라우드 리소스 모니터링 시스템을 구축하기 위해 Prometheus와 Grafana를 사용해본 적이 있습니다. EC2에 Prometheus 를 설치하고 적절한 exporter 들을 도입해서, cloudwatch로 부터 필요한 메트릭을 스크레이핑 하고, ECS 컨테이너 내부의 디테일한 메트릭들은 태스크 내 exporter container를 붙여 관련된 메트릭을 주기적으로 수집할 수 있게 구성하였었습니다.",
        ],
      },
      {
        logo: logo("grafana.svg"),
        headText: "Grafana",
        descriptions: [
          "- Prometheus에 쌓인 데이터를 시각화 하기 위해 Grafana를 EC2에 설치하고, 여러 설정을 통해 데이터를 가져와 대시보드를 구성하였습니다. 또한, 일정 threshold를 넘으면 slack 알람이 오도록 구성하여 장애에 대비할 수 있도록 하였습니다.",
        ],
      },
      {
        logo: logo("zabbix.svg"),
        headText: "Zabbix",
        descriptions: [
          "- 에이아이스페라에서 전사적으로 사용하던 리소스 모니터링 도구였고, Zabbix Server를 직접 구축하고, private subnet 환경에서 메트릭 수집을 위해 zabbix proxy도 구성해본 적이 있습니다. 주로 EC2와 같은 쉘 접근이 가능한 서버에서 서비스를 운영했었기 때문에, EC2에 직접 zabbix agent를 설치하고 zabbix server로 메트릭을 수집하였습니다. 또한, 대시보드를 구성하고, 일정 threshold를 넘으면 slack으로 알람이 오도록 구성하였습니다.",
          "- Zabbix Server에서 메트릭을 수집해야 하는 호스트 서버들이 늘어남에 따라, 메트릭을 잘 수집하지 못하는 경우가 생겨, 서버 스펙업을 진행하거나, poller 프로세스 개수 설정 하는 등 튜닝을 진행하였습니다.",
        ],
      },
      {
        logo: logo("swagger.svg"),
        headText: "Swagger",
        descriptions: [
          "- FastAPI에서 웹 프레임워크의 틀에 맞춰 작업하면 자동으로 스웨거 문서가 만들어져 다른 개발자들과 스펙을 공유하였습니다. 프로덕션 환경(Live)에서는 스웨거를 Off하도록 구성하였었고, 기본 스웨거 path를 변경하여 guessing attack을 할 수 없도록 하였습니다.",
          "- API Gateway 운영 시 path에 기반한 라우팅을 했었는데, 스웨거에서 직접 API 호출 테스팅을 할때 path가 빠져서 호출되는 문제를 해결하기 위해, 스웨거 옵션을 조정하여 포함되도록 설정하여 운영했었습니다.",
        ],
      },
      {
        logo: logo("nextjs.svg"),
        headText: "NextJS",
        descriptions: [
          "- 복잡한 웹을 만들어보진 않았고, 현재 포트폴리오 웹을 만들면서 NextJS를 사용해 보았습니다. 배포는 Vercel을 활용하였습니다.",
        ],
      },
      {
        logo: logo("selenium.svg"),
        headText: "Selenium",
        descriptions: [
          "- 에이아이스페라의 Criminal IP 프로젝트에서 100대 이상의 크롤러를 운영하던 시절, 동적인 웹 페이지를 실제로 렌더링한 후 정보를 수집해야 했기에, selenium을 사용해서 python 크롤러를 개발했었습니다.",
        ],
      },
      {
        logo: logo("html.svg"),
        headText: "HTML",
        descriptions: ["- 기본적인 HTML의 원리나 태그들에 대해 알고 있습니다."],
      },
      {
        logo: logo("javascript.svg"),
        headText: "Javascript",
        descriptions: [
          "- 간단한 javascript의 동작 원리와 javascript 코드에 대해 알고 있고, CSR, SSR 등과 같은 웹 브라우저 렌더링과 서버 렌더링에 대해 인지하고 있습니다. 세션 스토리지, 로컬 스토리지, 쿠키, CORS 등과 같은 부분도 이해하고 있고, ReactJS와 같은 도구를 사용해 사이드 프로젝트로 SPA 어플리케이션을 만들어 본적이 있습니다. 개발 시 동적 타입에 대한 불편함으로 등장한 Typescript를 NestJS에서 써본 적이 있습니다.",
          "- 웹 해킹을 하던 시절에 javascript를 조작하여 서버에 보내는 request를 조작해본 경험이 있고, javascript에서 발생할 수 있는 XSS, CSRF 등과 같은 보안 취약점에 대해 알고 있습니다.",
        ],
      },
      {
        logo: logo("typescript.svg"),
        headText: "Typescript",
        descriptions: [
          "- NestJS 개발 시 typescript를 이용해 함수 파라미터, 리턴 타입 등의 자료형을 명시하였고, 이를 통해 파악하기 쉬운 클래스나 함수가 되도록 하였고, 코드 가독성도 높일 수 있었습니다.",
        ],
      },
      {
        logo: logo("css.svg"),
        headText: "CSS",
        descriptions: [
          "- 외주나 사이드 프로젝트를 통해 웹 개발 시에, raw CSS를 이용한 스타일링을 해본적이 있습니다. NextJS에서는 tailwind를 사용해보았습니다.",
        ],
      },
      {
        logo: logo("php.svg"),
        headText: "PHP",
        descriptions: [
          "- 과거 외주 시 CodeIgniter와 PHP를 사용해 서버 애플리케이션을 개발 및 유지보수 해본 적이 있습니다",
        ],
      },
      {
        logo: logo("github.svg"),
        headText: "Github",
        descriptions: [
          "- 소스 형상 관리에 svn과 git을 사용해 보았고, git을 사용할 때 remote repo로 github을 사용했습니다. git의 기본적인 기능들을 사용하였고, 코드 리뷰에 참여했습니다. 브랜치 관리를 위해서는 gitflow 전략을 사용했었고, github actions를 활용해 CI/CD 배포 파이프라인을 구축하였습니다. CI시 테스트코드를 돌리진 않았고, 배포 때 테스트코드를 실행시켰습니다. main, dev, release 브랜치 관리를 통해, 배포 및 롤백 프로세스를 진행했습니다.",
        ],
      },
      {
        logo: logo("slack.svg"),
        headText: "Slack",
        descriptions: [
          "- 업무 메신저로 대부분 Slack을 사용하였고, 팀장이나 매니저 레벨에서 일하면서 여러 채널에 관여되고, 많은 멘션을 받았었기에 멀티 태스킹 커뮤니케이션에 익숙한 편입니다.",
          "- 채널에 웹훅이나 앱을 통해 모니터링 채널을 만들거나, 자동화 채널을 만드는 데도 익숙합니다.",
        ],
      },
      {
        logo: logo("jira.svg"),
        headText: "Jira",
        descriptions: [
          "- 회사에서 업무 관리를 위해 Jira 보드를 사용해 티켓으로 팀단위 업무를 관리하였었습니다. 보드에 여러 상태(Backlog, To Do, In Progress 등)를 두고 업무 진척도를 표기하거나, 각 담당자분들이 티켓을 가져가 댓글로 업무를 관리하는 프로세스를 경험해 보았습니다. 또한, 본인에게 할당되어 있는 티켓이 특정 상태에 있을 경우 이를 가져가지 않으면, 업무 시간에 slack으로 알람이 오도록 해 업무를 잊지 않고 체크하게 하는 프로세스도 경험해보았습니다.",
        ],
      },
      {
        logo: logo("confluence.svg"),
        headText: "Confluence",
        descriptions: [
          "- 에이아이스페라에서는 Jira 외에도 전사적으로 Confluence를 사용했었습니다. 직접 온프레미스에 구축해서 운영했었고, 그 구축 및 관리를 담당하였었습니다. 또한 개발을 진행하면서 전반적인 문서화를 Confluence에 진행했었습니다.",
        ],
      },
      {
        logo: logo("notion.svg"),
        headText: "Notion",
        descriptions: ["- 에이슬립에서 Notion을 업무 문서화 도구로 사용했었습니다."],
      },
    ],
  },
  en: {
    title: "Skills",
    items: [
      {
        logo: logo("amazon-api-gateway.svg"),
        headText: "Amazon API Gateway",
        descriptions: [
          "- I built the API Gateway for Asleep's SaaS service using Amazon API Gateway's REST API. To handle unified authentication and access control at the gateway, the entry point for all traffic, I additionally used a feature called Lambda Authorizer. Lambda code is usually uploaded compressed as a zip file, which made deployment, rollback, and module dependency management difficult, but container-based deployment became possible, so by integrating GitHub Actions to build a CI/CD environment, I could conveniently install modules and run TCs during the container build process.",
          "- Initially I tried to use HTTP API since it's much cheaper than REST API, but there was an issue that response customization wasn't possible, so I chose REST API. Since the team had very few backend developers, we didn't have the capacity to develop and operate a gateway ourselves, so I think choosing Amazon API Gateway was a good choice in many respects.",
          "- I also used basic features that API Gateway supports, such as Usage Plans and API Keys, and I've used both regional and edge-optimized types.",
        ],
      },
      {
        logo: logo("aws-lambda.svg"),
        headText: "AWS Lambda",
        descriptions: [
          "- While using Amazon API Gateway at Asleep, I used the Lambda Authorizer feature to spin up a Lambda for every HTTP request passing through the gateway and validate it. I used Node.js as the runtime and developed in an async-await style, and using Elasticache and Aurora MySQL, I fetched the customer's permissions in a cache-aside manner to validate things like allowed usage, contract period, and which APIs the customer could call. I implemented a fallback so it would work correctly even when Elasticache was down. I also designated an RPS (Request Per Second) key via Elasticache and used it to implement throttling, securing the service's availability.",
          "- When implementing the callback feature after AI analysis, I set it up so that when a message arrives in SQS, it triggers a Lambda to make an HTTP request. Configured this way, it could flexibly handle traffic and reduced operational resources.",
        ],
      },
      {
        logo: logo("amazon-kinesis.svg"),
        headText: "Amazon Kinesis",
        descriptions: [
          "- The access logs generated when using Amazon API Gateway are stored in CloudWatch Logs by default, but it's possible to set this destination to Kinesis Data Firehose. It's also possible to set S3 as Firehose's destination, so by building this pipeline you can load all the system's access logs into S3. With a bit of configuration when loading from Firehose to S3, each log can be classified and stored under a specific prefix (e.g. year=2023/month=11/day=01/hour=04/access_log.json), and log files loaded this way can be periodically analyzed statistically via Athena. I built this pipeline at Asleep.",
          "- I've also used Kinesis Data Streams at Asleep to build a real-time usage aggregation feature. The pipeline above wasn't suitable for real-time aggregation, and since the Kinesis SQL application and Studio suitable for stream analysis support Data Streams rather than Firehose as input, I built that pipeline and worked on enabling real-time aggregation via a sliding window. However, real-time aggregation became unnecessary due to the company's service billing policy, and given the domain characteristics it was ambiguous to aggregate real-time sleep analysis usage from access logs, so I stopped.",
        ],
      },
      {
        logo: logo("aws-waf.svg"),
        headText: "AWS WAF",
        descriptions: [
          "- At Asleep, a security requirement arose when contracting with an enterprise, so I placed a WAF in front of the API Gateway. Since AWS provides and manages basic WAF rules, I reviewed them and used the core rule set and the managed SQL injection rule set. I confirmed there were mostly no issues with the APIs when integrating in the test environment, but there was an issue where file uploads got caught by the WAF due to the POST body size limit, so I created a higher-priority exception rule to allow it.",
        ],
      },
      {
        logo: logo("aws-ga.svg"),
        headText: "AWS Global Accelerator",
        descriptions: [
          "- As requirements for a global service arose at Asleep, I researched building global infrastructure. Given the company's revenue situation and limited available headcount, I didn't consider setting up a new service in overseas regions at all, and focused on minimizing network latency when calling the API from abroad.",
          "- I tested three approaches—Edge-optimized API Gateway, CloudFront & Regional API Gateway, and Global Accelerator—and ran latency tests by creating servers on overseas hosting. My understanding is that all three optimize network latency by having the client enter through a nearby regional PoP server and routing over AWS's backbone network, and test results showed the edge-optimized API Gateway performed best and didn't require major network structure changes, so I applied that approach. However, an unknown error occurred intermittently on file uploads, and although I examined VPC Flow Logs and more, I couldn't find the cause and eventually rolled it back.",
        ],
      },
      {
        logo: logo("amazon-route-53.svg"),
        headText: "Amazon Route53",
        descriptions: [
          "- I've managed domains via Route 53 at companies that use AWS. Both AI SPERA and Asleep used this service, and when AI SPERA started using NHN Cloud, the domain management service corresponding to Route 53 didn't support internal DNS, so I configured internal DNS using bind.",
          "- I've configured A, CNAME, NS, TXT records, etc., performed domain purchases and SSL certificate renewals, and I understand TTL and the concepts of external and internal domains.",
          "- Back when I lacked knowledge of the domain system at AI SPERA, I once caused a company-wide outage by incorrectly changing the name server settings on an NS record. Fortunately it was before the service officially launched and customers were using it, so I learned that domain configuration is a very important and dangerous task.",
        ],
      },
      {
        logo: logo("amazon-cloudfront.svg"),
        headText: "Amazon Cloudfront",
        descriptions: [
          "- At AI SPERA, I configured and used CloudFront to quickly deliver website screenshots collected by web crawlers to clients.",
        ],
      },
      {
        logo: logo("amazon-vpc.svg"),
        headText: "Amazon VPC",
        descriptions: [
          "- I actively used VPC to build network architecture, and used a wide range of features such as subnets (public & private), routing tables, VPC peering, IGW, NAT Gateway, EIP, and security groups.",
          "- To troubleshoot an unknown error when applying an edge-optimized API Gateway, since packet-level inspection via tcpdump etc. wasn't possible on ECS, I used the VPC Flow Logs service to perform network-level monitoring.",
        ],
      },
      {
        logo: logo("aws-certificate-manager.svg"),
        headText: "AWS Certificate Manager",
        descriptions: [
          "- I used ACM to issue SSL certificates and performed CNAME validation to keep them continuously validated. I also applied them to AWS services that accept ACM certificates, such as ALB and API Gateway.",
          "- I've also issued CA-signed certificates from places like Let's Encrypt and SecureSign, and applied SSL configuration to servers like nginx or Apache Tomcat using pem and key files. I learned how inconvenient it is to remember and renew certificates every year, and came to appreciate how convenient a system ACM's automatic management is.",
        ],
      },
      {
        logo: logo("iam.svg"),
        headText: "AWS IAM",
        descriptions: [
          "- Since I usually naturally received admin permissions at the companies I worked at and managed IAM, I've used Users, Groups, and Roles a lot, and mainly used features like access keys and OTP. When using access keys, I tried to prevent issues that arise when, say, a departing employee's account is deleted, by creating a shared account and using that account's keys in the live environment. I also actively used Roles, and actively used approaches like granting permissions at the Group level or granting only the necessary permissions to the necessary resources via inline policies.",
          "- When an employee left, I also revoked their permissions, and the last access-key-used time in IAM was very useful for checking whether deleting the account would cause any problems.",
        ],
      },
      {
        logo: logo("elastic-load-balancing.svg"),
        headText: "AWS ELB",
        descriptions: [
          "- I used Application Load Balancers and Network Load Balancers for load balancing in various environments. Since ALBs allow L7-layer health checks, I could prevent at least minimal outages from switching while a program isn't up, and perform zero-downtime deployments via traffic handling. Also, since ALBs allow security groups to be set, I used them when access control was needed on the load balancer.",
          "- Since Amazon API Gateway doesn't support routing to a private ALB, I sometimes had no choice but to configure routing to a private ALB via a private NLB.",
        ],
      },
      {
        logo: logo("amazon-ecs.svg"),
        headText: "Amazon ECS",
        descriptions: [
          "- When building the Asleep Platform system, I used a container environment, orchestrating with ECS where compute resources were needed, such as API servers and inference workers. There were also options like installing Kubernetes on EC2 myself or using EKS, but given the startup context, I adopted ECS, a managed service with the lowest possible operational cost, and chose serverless Fargate instead of EC2.",
          "- Using Fargate improved the efficiency of infrastructure management such as OS patches and software updates, but unlike being allocated an EC2 with a fixed spec, since you're allocated a certain amount of vCPU and RAM from an AWS-managed server pool, I experienced getting resources that varied even for the same cost. Nonetheless, Asleep currently uses Fargate for its convenience.",
        ],
      },
      {
        logo: logo("amazon-efs.svg"),
        headText: "Amazon EFS",
        descriptions: [
          "- When using ECS at Asleep, since ECS itself is stateless, I used EFS where persistence was needed. When necessary, I managed it by mounting it as a network drive on Linux.",
        ],
      },
      {
        logo: logo("amazon-ec2.svg"),
        headText: "Amazon EC2",
        descriptions: [
          "- EC2 is a basic compute resource, and I've used it a lot in various situations at several companies. I installed and ran nginx, uwsgi, and Flask to operate API servers, and installed the L7 load-balancing software haproxy to run a load balancer. I ran an nginx proxy so internal developers could access databases or cache servers in a private subnet, installed DNS programs to run DNS servers, and installed monitoring programs (Zabbix, Prometheus, Grafana) for monitoring purposes.",
        ],
      },
      {
        logo: logo("amazon-rds.svg"),
        headText: "Amazon RDS",
        descriptions: [
          "- Both AI SPERA and Asleep used Aurora MySQL to operate their services. At AI SPERA, we ran over 100 crawlers to collect threat information, so there were extremely many inserts and updates causing heavy load on the writer, and accordingly we did physical sharding, so there were over 7 writers, each operating one reader. Also, we had an in-house server room, and I installed ESXi on each server and created 7 DB VMs for replication, using them for analytics. Routing to each DB endpoint was done at the application level, and I tried to run a SQL Proxy to broker this in the middle, but couldn't proceed due to leaving the company. Due to the frequent CRUD inherent to the system, Aurora incurred very high IOPS costs, and since the company's investment situation required using NHN Cloud, I also migrated to NHN Cloud's RDS. In that process, I personally handled the several-day traffic switchover through domain name changes and nginx monitoring, but since there was a DBA, I didn't get to experience direct DB build-out and operation.",
          "- At Asleep, I got to do actual build-out and operation. I built a cluster with Aurora MySQL 8.0, and used the RDS Proxy service to resolve stale DNS issues on failover and CPU-usage imbalance across reader instances. RDS Proxy could also be used effectively for connection management from Lambda. For more detailed monitoring, I enabled the performance schema and slow query options, and turned on binlog to build analytics DB infrastructure. In version 3.01.0, there was a bug officially acknowledged by AWS where freeable memory was rapidly consumed when binlog was enabled, causing an outage, and since an engine upgrade was needed, I led the migration and endpoint-switching of each component using the DMS service.",
          "- I've done table and index design, normalization/denormalization, various data migrations, Online DDL, and more, and I have a reasonable understanding of transactions, transaction isolation levels, ACID, locks, binlog replication, and so on.",
        ],
      },
      {
        logo: logo("amazon-s3.svg"),
        headText: "Amazon S3",
        descriptions: [
          "- The Asleep Platform periodically receives and stores sound files from clients, and the traffic generated when one user measures a night's sleep is about 100MB. So I actively used S3 as an unstructured store that could handle this, and for cost management I initially used intelligent tiering, but since the data is no longer needed after AI analysis, I applied the lifecycle feature so it would be automatically deleted.",
          "- Although still under review and not yet applied to the system, to reduce file-upload traffic coming into the API server, I also designed an architecture where all file uploads happen directly to S3 from the SDK via S3's presigned URL feature.",
          "- At AI SPERA, I used S3 when crawlers needed to collect images or screenshots, and made images the service needed public.",
        ],
      },
      {
        logo: logo("amazon-sqs.svg"),
        headText: "Amazon SQS",
        descriptions: [
          "- I used SQS to implement asynchronous processing (event-driven architecture) at Asleep. When the AI API server needs AI analysis, it publishes a message to SQS, and the inference worker polling it runs the AI model, analyzes it, and stores the appropriate values in the database. Also, even after analysis, there were cases where we needed to notify the customer server of analysis results and various events in reverse (callbacks) or communicate with other internal systems, so I used SQS there too.",
          "- Between standard and FIFO queues, I chose the standard queue, because given the domain characteristics best-effort message ordering was sufficient, and since FIFO doesn't have high throughput, I chose the standard queue which supports unlimited throughput. Recently, as a feature supporting high throughput for FIFO queues via partitions was released, the team internally considered migrating to FIFO queues.",
        ],
      },
      {
        logo: logo("amazon-sns.svg"),
        headText: "Amazon SNS",
        descriptions: [
          "- I usually created a Topic for autoscaling and subscribed to it to trigger autoscaling and configured it so email alerts could be sent.",
        ],
      },
      {
        logo: logo("amazon-dynamodb.svg"),
        headText: "Amazon DynamoDB",
        descriptions: [
          "- During the early development of the Asleep Platform, given the design, I adopted DynamoDB, which offered fast response times and operational convenience, to build the service. I chose a partition key and sort key to design an LSI, and set up a GSI when needed. I designed the partition key by choosing an ID value with high cardinality that's important to the service, so it would be distributed across various partitions to reduce hot-partition issues. In practice, compared to operating a DB directly, there was very little to worry about in terms of infrastructure or DB parameter tuning, and it was highly efficient in that you could pay only for what you use early on when traffic is low.",
          "- As the service grew more complex, the table structure also became more complex, and as needs for more varied queries arose, I began considering an RDBMS. Also, I operated it in on-demand mode, and there were somewhat unstable aspects, such as automatically scaling to double the capacity when traffic spikes exceed current capacity, but with a 30-minute cooldown. Consequently, I eventually migrated to Aurora MySQL, and I took away the lesson that while DDB has various advantages, it's better used for clearer workloads.",
        ],
      },
      {
        logo: logo("amazon-cognito.svg"),
        headText: "Amazon Cognito",
        descriptions: [
          "- When implementing authentication API features, I used Cognito to reduce the various development and management points required when implementing authentication directly. Attributes created when creating the pool are fixed, and there were various constraints such as custom attributes not being deletable later or limitations on detailed search, but it had the big advantage of letting me implement and manage overall authentication features very conveniently, including JWT token management with revoking of already-issued tokens and easy two-factor authentication implementation.",
        ],
      },
      {
        logo: logo("aws-cloudwatch.svg"),
        headText: "AWS CloudWatch",
        descriptions: [
          "- I've used CloudWatch a lot at every company using the AWS cloud for checking logs and monitoring each service's resources. In particular, when I built a monitoring system using Prometheus and Grafana at Asleep, I could pull metrics via the CloudWatch exporter. Also, when Asleep adopted Datadog as a monitoring tool, I applied subscription filters to CloudWatch Logs as needed to forward them to Datadog.",
          "- There was a task requiring me to create a custom metric in CloudWatch to apply target tracking to the ECS inference worker. I triggered a Lambda at regular intervals via EventBridge, obtained the number of messages in SQS, and divided it by the amount one ECS inference worker can process to compute the custom metric. This way, when the metric was 1000, 1000 workers could scale out at once.",
        ],
      },
      {
        logo: logo("aws-dms.svg"),
        headText: "AWS DMS",
        descriptions: [
          "- At Asleep, when enabling binlog for binlog replication on Aurora MySQL version 3.01.0, there was a phenomenon where freeable memory rapidly decreased as traffic grew, causing the DB to go down. Enabling binlog was a must-have feature since it was needed to build an analytics DB or to sync to other external resources via CDC, and since 3.01.0's EoL (End-of-Life) was scheduled for January 2024, migration was essential to avoid a forced update.",
          "- I tried to switch using RDS's blue/green feature, but that feature can't be used when using RDS Proxy, and I considered an engine upgrade via ZDP (Zero-Downtime Patch), but since that feature is performed best-effort when certain conditions are met during the upgrade, it was very risky, so I performed the migration via DMS.",
        ],
      },
      {
        logo: logo("aws-cdk.svg"),
        headText: "AWS CDK",
        descriptions: [
          "- At my previous company I worked only via the web console, but at Asleep I built and managed the entire infrastructure via IaC (Infra as Code). I managed cloud resources holistically by dividing them into multiple stacks, and by injecting external environment variables, I could manage the dev, production, and QA environments from a single codebase. I hadn't used the declarative approach of Terraform, but being able to grasp the entire infrastructure and continuously manage its configuration using a programming language like Python meant a small team could manage large infrastructure relatively efficiently.",
          "- I once experienced an outage during CDK work where I wiped out a specific resource in the production environment, and afterward I applied termination protection to the CloudFormation stack and important resources.",
        ],
      },
      {
        logo: logo("microsoft-azure.svg"),
        headText: "Microsoft Azure",
        descriptions: [
          "- While working at AI SPERA, I built the entire system architecture using AWS. Due to company-level cost control and strategic issues, we did work to migrate to Azure and NHN Cloud to run a hybrid setup. At that time I reconfigured the infrastructure using basic services such as VPC configuration, virtual machines, DNS, Load Balancer, and Application Gateway.",
          "- I personally recall the UI/UX and IAM management being quite inconvenient at the time, and there was an issue in managing database connections between Azure and NHN Cloud where the NAT table would drop idle TCP connections, so I have experience tuning keep-alive-related Linux kernel parameters.",
        ],
      },
      {
        logo: logo("nestjs.svg"),
        headText: "NestJS",
        descriptions: [
          "- At FairyTech I experienced a dev environment where API servers, workers, and batches were organized as a monorepo. I used class-validator and class-transformer to validate DTOs, and appropriately leveraged the framework's built-in features (decorators, guards, interceptors) for authentication, logging, global exception handling, etc. I basically wrote code with async-await, and used Promise.all where tasks could safely run in parallel. Per convention, I used enums more than types, and tried to specify concrete types on input parameters and return values. For the database I used Drizzle ORM, and used Drizzle's migration tool for schema configuration management. For transaction handling, I structured it so the service layer starts a transaction and passes it to each class's methods, and for caching I used local memory and Redis; caching efficiency was high, so the load on the database was very low. I used Jest to write test code, and used testcontainers to spin up a database when running tests to perform integration and e2e tests. I deployed by building Docker images via GitHub Actions, and in the local environment I used docker compose to spin up Redis, Postgres, and a Pub/Sub emulator.",
          "- As with Flutter, I adopted it as the backend framework for the ALLUS service. I configured it along with class-validator, class-transformer, TypeORM, MySQL, SocketIO, Redis, etc. to build the service at a production level.",
        ],
      },
      {
        logo: logo("gcp.svg"),
        headText: "GCP",
        descriptions: [
          "- This was the cloud I used at FairyTech, where I used Compute Engine, SQL, Memorystore, Pub/Sub, BigQuery, Cloud Scheduler, Cloud Run, Batch, Artifact Registry, Cloud Storage, VPC, Cloud NAT, and more.",
          "- I mainly used BigQuery for cashback settlement and statistical analysis, and beyond basic query writing, maintaining existing queries, and bug fixes, since it can't manage duplicate data based on unique keys like a database, I experienced tasks such as creating a new table first and integrating it into an existing table via MERGE INTO, choosing partition keys to reduce scan costs, and scheduled queries to run queries periodically.",
          "- For Pub/Sub, I created subscriptions on topics and had each server component publish and consume, and experienced flexibly handling failures via dead-lettering when message processing was difficult.",
          "- For Cloud NAT, I added it because clients wanted a static IP for inbound traffic, and I have experience suffering and resolving an outage due to the source-port allocation soft-limit issue.",
        ],
      },
      {
        logo: logo("python.svg"),
        headText: "Python",
        descriptions: [
          "- All the startups I worked at used Python, and I've developed various Python applications including API servers, authentication features, AI inference workers, batches, and other components. I basically understand Python's multithreading issues due to the GIL, and understand the characteristics of interpreted languages, dynamic typing, decorators, hinting, immutability, and so on. I've developed using various Python libraries, and used unittest to write TCs, appropriately structuring classes and using mocking so unit tests could be performed. For tests requiring an actual database, I used sqlite. When developing AI inference workers, I also used machine-learning libraries such as numpy, pytorch, onnxruntime, and mlflow.",
          "For Python web frameworks I've used Flask and FastAPI, for ORM I used SQLAlchemy, and for the connector I used pymysql. I also used connection pooling for smooth connection management.",
        ],
      },
      {
        logo: logo("fastapi.svg"),
        headText: "FastAPI",
        descriptions: [
          "- I developed using FastAPI at Asleep. The framework had many excellent features such as dependency management via DI, parameter validation via pydantic, and automatically generated Swagger docs, and in particular, its support for asynchronous programming via thread pools and uvicorn made it convenient to develop modern web applications. I ran it with nginx as a reverse proxy and uvicorn. FastAPI also currently shows the highest benchmark performance among Python web frameworks including Django and Flask in TechEmpower's Web Framework Benchmark, and I was able to operate the production service well without issues.",
        ],
      },
      {
        logo: logo("flask.svg"),
        headText: "Flask",
        descriptions: [
          "- I used Flask when developing API servers at AI SPERA. Looking back now, it was the lightest, but you needed to install a library whenever you wanted to develop something, and it didn't come with a basic package structure or DI concepts, so it really seemed like a web framework made up of only the bare minimum features. I ran the server using uwsgi and nginx, and did asynchronous processing using the gevent library's monkey patching feature.",
        ],
      },
      {
        logo: logo("flutter.svg"),
        headText: "Flutter",
        descriptions: [
          "- Until mid-July I single-handedly developed a street dance platform app called ALLUS, adopting Flutter for native development. I used modules such as Riverpod, Retrofit, SocketIO, Google AdMob, Kakao login, Apple login, build_runner, and updater, and handled every part across the full service cycle including app planning, project structure, feature development, store registration and deployment, and testing.",
          "- It's launched on both Google Play and the Apple App Store and I currently operate it continuously.",
        ],
      },
      {
        logo: logo("firebase.svg"),
        headText: "Firebase",
        descriptions: [
          "- I used it to implement push notifications in the ALLUS app. Each time a user logged into the app, I generated a token via the Firebase library and sent it to the server to store in the database, so that even if one user logged in on multiple devices, they'd receive push notifications on all of them. I also deleted the token from the device on logout so they'd no longer receive additional notifications.",
          "- To remove deleted, invalid tokens from the server database, I deleted them based on the Firebase server's response at the time of sending push notifications. I'm thinking of periodically checking via a batch or extracting them in an event-driven manner in the future.",
        ],
      },
      {
        logo: logo("docker.svg"),
        headText: "Docker",
        descriptions: [
          "- At Asleep I manage containers using Dockerfiles. In the cloud environment I use AWS ECS, but locally I manage them using docker compose.",
          "- I built infrastructure using container orchestration services like ECS in the cloud and set up and operated CI/CD pipelines.",
          "- To reduce Docker image size, I've used Python slim images and removed unnecessary steps or libraries from existing Dockerfiles, and in the ALLUS project I minimized image size by applying Alpine Linux and multi-stage builds.",
        ],
      },
      {
        logo: logo("mysql.svg"),
        headText: "MySQL",
        descriptions: [
          "- I've experienced table and index design, DB parameter configuration, query writing and execution-plan analysis, transaction management, Online DDL, migration, DB operation, and more.",
          "- I'm aware of clustered indexes and index structures, and aware of the trade-offs between indexes and normalization/denormalization. I know basic MySQL data types, know the characteristics of relational databases, and can write and interpret SQL statements.",
        ],
      },
      {
        logo: logo("redis.svg"),
        headText: "Redis",
        descriptions: [
          "- I've used it at a production level as Elasticache on AWS. In implementing the service's access control feature, I used a cache-aside policy to first look up the cache, and on a cache miss, cache the information fetched from the database for a certain TTL. When permission changes occurred via payments or the admin web, I synced by deleting or changing the related keys, I implemented an RPS feature, and I also used Redis to manage the free usage that non-members could call within 24 hours in the SaaS service. When I implemented JWT-token-based authentication in the API server, I also cached issued tokens to revoke already-issued ones.",
          "- I know basic data structures and commands, and operated it in a primary-replica setup. I haven't configured it at a production level, but I know that cluster mode enables not just scale-up but scale-out of memory. I knew that RDB and AOF are possible for backups, but since I only needed to handle volatile data and clumsy use could actually cause sync issues, I didn't use them.",
          "- Back at AI SPERA, when developing the B2C service, I have experience using Redis as a volatile store for login session management.",
        ],
      },
      {
        logo: logo("elasticsearch.svg"),
        headText: "Elasticsearch",
        descriptions: [
          "- Criminal IP, which I was building at AI SPERA, had a text-search feature, and I needed string search over text-form banner information collected from various TCP and UDP ports of IPv4 worldwide. To handle about 1 billion documents at the time, I designed an inverted index, tuned the tokenizer, and set up a cluster of 10-20 nodes along with shards and replicas. I used the service back when Elasticsearch was on AWS.",
          "- At Asleep, I initially used AWS's OpenSearch to centralize logs from each component including the API server. Logs were forwarded via fluentbit, and due to issues arising during operation such as data retention periods, I also cleaned up indices and added data nodes.",
        ],
      },
      {
        logo: logo("linux.svg"),
        headText: "Linux",
        descriptions: [
          "- By operating Linux in environments like EC2 and ESXi VMs, I acquired various basic Linux knowledge. I'm mainly familiar with Ubuntu-based OSes, and comfortable with service configuration (systemd), permission management (chown, chmod), package management (apt), writing shell scripts, disk management (mount, df, du), and network management (netstat, nc, telnet, iptables, ping, traceroute, nslookup). Due to concurrency issues during service operation, I've tuned file descriptor and network socket settings via ulimit, sysctl, and the like.",
        ],
      },
      {
        logo: logo("jenkins.svg"),
        headText: "Jenkins",
        descriptions: [
          "- I built and used Jenkins myself to centrally manage and operate batch programs that need to run periodically. It was basically easy since you use it similarly to crontab, and since batch execution history is recorded, it was very convenient to check when a batch ran and what logs appeared on failure.",
        ],
      },
      {
        logo: logo("prometheus.svg"),
        headText: "Prometheus",
        descriptions: [
          "- I've used Prometheus and Grafana to initially build a cloud-resource monitoring system at Asleep. I installed Prometheus on EC2 and introduced appropriate exporters to scrape the needed metrics from CloudWatch, and for detailed metrics inside ECS containers, I attached an exporter container within the task so related metrics could be collected periodically.",
        ],
      },
      {
        logo: logo("grafana.svg"),
        headText: "Grafana",
        descriptions: [
          "- To visualize the data accumulated in Prometheus, I installed Grafana on EC2 and configured dashboards by pulling data through various settings. I also configured Slack alerts when a certain threshold was exceeded so we could prepare for outages.",
        ],
      },
      {
        logo: logo("zabbix.svg"),
        headText: "Zabbix",
        descriptions: [
          "- This was the resource monitoring tool used company-wide at AI SPERA, and I built the Zabbix Server myself and also configured a Zabbix proxy to collect metrics in a private subnet environment. Since we mainly operated services on shell-accessible servers like EC2, I installed the Zabbix agent directly on EC2 and collected metrics to the Zabbix server. I also configured dashboards and set up Slack alerts when a certain threshold was exceeded.",
          "- As the number of host servers the Zabbix Server needed to collect metrics from grew, there were cases where metrics weren't collected well, so I tuned it by upgrading the server spec and configuring the number of poller processes.",
        ],
      },
      {
        logo: logo("swagger.svg"),
        headText: "Swagger",
        descriptions: [
          "- In FastAPI, working within the web framework's structure automatically generates Swagger docs, which I used to share specs with other developers. I configured Swagger to be off in the production (live) environment, and changed the default Swagger path so guessing attacks couldn't be done.",
          "- When operating the API Gateway I did path-based routing, and to fix a problem where the path was dropped when testing API calls directly from Swagger, I adjusted the Swagger options so the path would be included.",
        ],
      },
      {
        logo: logo("nextjs.svg"),
        headText: "NextJS",
        descriptions: [
          "- I haven't built a complex web app, but I've used NextJS while building my current portfolio website. I deployed it using Vercel.",
        ],
      },
      {
        logo: logo("selenium.svg"),
        headText: "Selenium",
        descriptions: [
          "- Back when I operated over 100 crawlers in AI SPERA's Criminal IP project, I needed to actually render dynamic web pages before collecting information, so I developed Python crawlers using Selenium.",
        ],
      },
      {
        logo: logo("html.svg"),
        headText: "HTML",
        descriptions: ["- I know the basic principles of HTML and its tags."],
      },
      {
        logo: logo("javascript.svg"),
        headText: "Javascript",
        descriptions: [
          "- I know the basic principles of JavaScript and JavaScript code, and I'm aware of web browser rendering and server rendering such as CSR and SSR. I also understand things like session storage, local storage, cookies, and CORS, and I've built an SPA application as a side project using tools like ReactJS. I've used TypeScript—which emerged due to the inconvenience of dynamic types during development—in NestJS.",
          "- Back when I did web hacking, I have experience manipulating JavaScript to tamper with requests sent to the server, and I'm aware of security vulnerabilities that can occur in JavaScript such as XSS and CSRF.",
        ],
      },
      {
        logo: logo("typescript.svg"),
        headText: "Typescript",
        descriptions: [
          "- When developing with NestJS, I used TypeScript to specify data types such as function parameters and return types, which made classes and functions easier to understand and also improved code readability.",
        ],
      },
      {
        logo: logo("css.svg"),
        headText: "CSS",
        descriptions: [
          "- When doing web development through freelance work or side projects, I've styled using raw CSS. In NextJS I've used Tailwind.",
        ],
      },
      {
        logo: logo("php.svg"),
        headText: "PHP",
        descriptions: [
          "- In past freelance work, I have experience developing and maintaining server applications using CodeIgniter and PHP.",
        ],
      },
      {
        logo: logo("github.svg"),
        headText: "Github",
        descriptions: [
          "- I've used SVN and Git for source configuration management, and used GitHub as the remote repo when using Git. I used Git's basic features and participated in code reviews. For branch management I used a Gitflow strategy, and I built CI/CD deployment pipelines using GitHub Actions. I didn't run test code during CI but ran it at deploy time. Through main, dev, and release branch management, I ran the deployment and rollback processes.",
        ],
      },
      {
        logo: logo("slack.svg"),
        headText: "Slack",
        descriptions: [
          "- I've mostly used Slack as a work messenger, and since I was involved in many channels and received many mentions while working at the team lead or manager level, I'm fairly used to multitasking communication.",
          "- I'm also comfortable creating monitoring channels or automation channels via webhooks or apps.",
        ],
      },
      {
        logo: logo("jira.svg"),
        headText: "Jira",
        descriptions: [
          "- At work I used Jira boards to manage team-level work as tickets. I've experienced processes where the board has various statuses (Backlog, To Do, In Progress, etc.) to indicate work progress, or where each assignee picks up a ticket and manages the work via comments. I've also experienced a process where, if a ticket assigned to you is in a certain status and you don't pick it up, a Slack alert is sent during work hours so you don't forget to check the work.",
        ],
      },
      {
        logo: logo("confluence.svg"),
        headText: "Confluence",
        descriptions: [
          "- At AI SPERA, besides Jira, we used Confluence company-wide. I built and operated it on-premises myself and was responsible for its setup and management. I also did overall documentation in Confluence as I developed.",
        ],
      },
      {
        logo: logo("notion.svg"),
        headText: "Notion",
        descriptions: ["- At Asleep, I used Notion as a work documentation tool."],
      },
    ],
  },
};
