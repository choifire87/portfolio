export default function ItemHead(props: {
    topText?: string,
    headFirst: string,
    headSecond?: string,
    headThird?: string,
    subDescription?: string,
}){
    return (
        <div>
            {
                props.topText ?
                <div className="pb-1">
                    {props.topText}
                </div>
                : null
            }
            <div className="text-2xl md:text-2xl lg:text-2xl font-semibold pb-1">
                <span className="mr-10">
                    {props.headFirst}
                </span>
                {
                    props.headSecond ?
                    <span className="mr-10">
                        {props.headSecond}
                    </span>
                    : null
                }
                {
                    props.headThird ?
                    <span>
                        {props.headThird}
                    </span>
                    : null
                }
            </div>
            <div>
                {
                    props.subDescription ?
                    <span className="mr-10">
                        {props.subDescription}
                    </span>
                    : null
                }
            </div>
        </div>
    )
}