import Item from "@/component/item/item";

export default function WritingPage(){
    return (
        <section id="writing" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">저서</h1>
            <div className="border-y-2">
                <Item
                    topText="위키북스"
                    headFirst="마스터링 리버스 엔지니어링 번역"
                    subDescription="2021년 4월"
                    workDescriptions={
                        [
                            "<a class='text-blue-500 underline' href='https://product.kyobobook.co.kr/detail/S000001766455' target='_blank'>관련 링크</a>"
                        ]
                    }
                />
            </div>
        </section>
    )
}