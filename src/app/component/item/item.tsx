"use client"

import ItemHead from "@/component/item/itemHead";
import ItemDescription from "@/component/item/itemDescription";
import Image from "next/image";

export default function Item(props: {
    logo?: {path: string, width: number, height: number},
    topText?: string,
    headFirst: string,
    headSecond?: string,
    headThird?: string,
    subDescription?: string,
    workDescriptions?: string[],
    works?: string[][],
    topImages?: {path: string, width: number, height: number}[],
}
){
    return (
        <div className="flex flex-row border-b py-8">
            <div className="w-14 py-1">
            {
                props.logo ? <Image src={props.logo.path} alt="로고" width={props.logo.width} height={props.logo.height}/> : null
            }
            </div>
            <div className="w-full flex flex-col">
                <ItemHead topText={props.topText} headFirst={props.headFirst} headSecond={props.headSecond} headThird={props.headThird} subDescription={props.subDescription}/>
                {
                    props.topImages ?
                    <div className="flex flex-row flex-wrap mt-5">
                        {
                        props.topImages.map((image) => (
                            <Image src={image.path} className="mr-5 mb-5" alt="스크린샷" width={image.width} height={image.height} />
                        ))
                        }
                    </div>
                    :
                    null
                }
                {
                    props.workDescriptions ?
                        props.workDescriptions.map((workDescription, index) => (
                            <ItemDescription key={index} workDescription={workDescription} works={props.works ? props.works[index] : undefined}/>
                        ))
                        :
                        null
                }
            </div>
        </div>
    )
}