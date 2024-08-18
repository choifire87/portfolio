import Item from "@/component/item/item";

export default function EducationPage(){
    return (
        <section id="education" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">학력</h1>
            <div className="border-y-2">
                <Item
                    logo={
                        {
                            path: "/education/kuLogo.png",
                            width: 40,
                            height: 40,
                        }
                    }
                    headFirst="고려대학교"
                    headSecond="정보보호대학원 정보보호학 석사"
                    headThird="졸업"
                    subDescription="2011년 3월 ~ 2013년 2월 (2년, 4.0/4.3)"
                />
                <Item
                    logo={
                        {
                            path: "/education/kuLogo.png",
                            width: 40,
                            height: 40,
                        }
                    }
                    headFirst="고려대학교"
                    headSecond="컴퓨터통신공학부 학사"
                    headThird="졸업"
                    subDescription="2007년 3월 ~ 2011년 2월 (2년, 3.8/4.5)"
                />
            </div>
        </section>
    )
}