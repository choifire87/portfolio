import SkillHead from "@/component/skillItem/skillHead"
import SkillDescription from "@/component/skillItem/skillDescription"
import Image from "next/image"

export default function SkillItem(props: {
    logo: {path: string, width: number, height: number},
    headText: string,
    descriptions: string[],
}
){
    return (
        <div className="flex flex-row border-b py-8">
            <div className="flex min-w-14 justify-center items-start">
            {
                props.logo ? <Image src={props.logo.path} alt="로고" width={props.logo.width} height={props.logo.height} objectFit="cover"/> : null
            }
            </div>
            <div className="w-full flex flex-row">
                <SkillHead name={props.headText}/>
                <SkillDescription descriptions={props.descriptions}/>
            </div>
        </div>
    )
}