import Item from "@/component/item/item";

export default function LanguagePage(){
    return (
        <section id="language" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">외국어</h1>
            <div className="border-y-2">
                <Item
                    headFirst="영어"
                    headSecond="기본 일상회화 및 논문 수준 독해 가능"
                />
            </div>
        </section>
    )
}