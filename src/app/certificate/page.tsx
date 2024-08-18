import Item from "@/component/item/item";

export default function CertificatePage(){
    return (
        <section id="certificate" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">자격증</h1>
            <div className="border-y-2">
                <Item
                    topText="한국산업인력공단(HRD Korea)"
                    headFirst="정보처리기사"
                    subDescription="2018년 8월"
                />
            </div>
        </section>
    )
}