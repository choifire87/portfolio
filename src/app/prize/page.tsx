import Item from "@/component/item/item";

export default function PrizePage(){
    return (
        <section id="prize" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">수상</h1>
            <div className="border-y-2">
                <Item
                    headFirst="AWS 우수 고객사례로 선정되어 인터뷰에 참여"
                    headSecond="AWS 고객사례 인터뷰"
                    subDescription="2023년 12월"
                    workDescriptions={
                        [
                            "<a class='text-blue-500 underline' href='https://www.youtube.com/watch?v=ZKWwMvpdFZ0' target='_blank'>인터뷰 링크</a>"
                        ]
                    }
                    topImages={
                        [
                            {
                                path: "/prize/interview.png",
                                width: 500,
                                height: 400,
                            },
                        ]
                    }
                />
                <Item
                    headFirst="GBL211-KO | Building sleep apps on AWS with AI as a service [Korean]"
                    headSecond="AWS re:invent lightning talk 발표"
                    subDescription="2023년 12월"
                    workDescriptions={
                        [
                            "<a class='text-blue-500 underline' href='https://aws.amazon.com/ko/blogs/korea/aws-reinvent-2023-korean-sessions/' target='_blank'>발표 공지 링크</a>"
                        ]
                    }
                />
                <Item
                    headFirst="AWS Korea에서 주최하는 2023 GameDay 에서 14개 팀 중에 1등으로 우승"
                    headSecond="AWS GameDay 우승"
                    subDescription="2023년 4월"
                    topImages={
                        [
                            {
                                path: "/prize/gameday1.jpg",
                                width: 500,
                                height: 400,
                            },
                            {
                                path: "/prize/gameday2.jpg",
                                width: 500,
                                height: 400,
                            }
                        ]
                    }
                    workDescriptions={
                        [
                            "<a class='text-blue-500 underline' href='https://it.donga.com/103782/' target='_blank'>관련 기사</a>"
                        ]
                    }
                />
                <Item
                    headFirst="제2기술연구본부 사이버센터에서 인하우스 연구개발한 프로젝트로 국방과학상 동상 수상"
                    headSecond="국방과학상 동상"
                    subDescription="2017년 8월"
                />
                <Item
                    headFirst="한국인터넷진흥원과 미래창조과학부에서 주관한 K-Shield 최종 1기로 선발"
                    headSecond="사이버보안전문가 K-Shield 1기"
                    subDescription="2014년 1월"
                    workDescriptions={
                        [
                            "<a class='text-blue-500 underline' href='https://n.news.naver.com/article/277/0003177430' target='_blank'>관련 기사</a>"
                        ]
                    }
                />
            </div>
        </section>
    )
}