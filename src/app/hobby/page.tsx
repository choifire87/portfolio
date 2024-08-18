import Item from "@/component/item/item";

export default function HobbyPage(){
    return (
        <section id="hobby" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">취미</h1>
            <div className="border-y-2">
                <Item
                    headFirst="비보잉"
                    workDescriptions={
                        [
                            "2007년에 대학교에 입학한 뒤 동아리에서 시작해서, 현재까지 약 16년 정도 비보잉을 하고 있습니다. 옛날에는 일주일에 5일 이상 하루 3시간씩 연습할 정도로 몰두했었고, 공연이나 대회에도 많이 나갔었는데요. 요즘은 3일 하루 1시간 정도로만 운동 삼아 하는 정도입니다. 춤을 오래 추면서 무언가 하나에 애정을 갖고 시간을 쏟는 의미를 알게 되었습니다. 예전만큼 시간을 많이 쓰기 어렵고 열정을 불태우진 않지만, 여전히 가장 행복하고 좋아하는 취미 생활입니다. 라이프 로깅용 <a class='text-blue-500 underline' href='https://www.youtube.com/user/ChoiFire' target='_blank'>유튜브 채널</a>을 가지고 있습니다."
                        ]
                    }
                />
                <Item
                    headFirst="노래"
                    workDescriptions={
                        [
                            "노래 부르는 것을 좋아라 해서, 종종 혼자 노래방을 자주 갑니다."
                        ]
                    }
                />
                <Item
                    headFirst="개발 아티클 읽기"
                    workDescriptions={
                        [
                            "평소 업무를 하거나, 개발자분들과 대화를 한다던가 하던 중 잘 모르는 것이나 궁금한 것이 생기면 자주 찾아보고, 출퇴근 시간이나 여가 시간에 틈틈히 확인하고 공부하는 편입니다. 이를 통해 다양한 도전 문제들을 해결해왔습니다."
                        ]
                    }
                />
            </div>
        </section>
    )
}