import Item from "@/component/item/item";

export default function PatentPage(){
    return (
        <section id="patent" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">특허</h1>
            <div className="border-y-2">
                <Item
                    headFirst="악성 DNS 서버 탐지 장치 및 그 제어방법"
                    headSecond="등록"
                    subDescription="2020년 10월"
                />
                <Item
                    headFirst="군 사이버 모의침투 훈련을 위한 통합대시보드 장치 및 방법"
                    headSecond="등록"
                    subDescription="2017년 4월"
                />
                <Item
                    headFirst="네트워크 도달 가능성 기반의 자동화된 침투 경로 예측 장치 및 방법"
                    headSecond="등록"
                    subDescription="2016년 7월"
                />
                <Item
                    headFirst="쉘코드 은닉 및 침입 탐지 장치 및 그 방법"
                    headSecond="등록"
                    subDescription="2012년 12월"
                />
                <Item
                    headFirst="온라인 게임의 로그정보를 이용한 계정 도용 탐지 방법"
                    headSecond="등록"
                    subDescription="2011년 9월"
                />
            </div>
        </section>
    )
}