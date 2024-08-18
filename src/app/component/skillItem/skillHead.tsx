export default function SkillHead(props: {
    name: string,
}){
    return (
        <div className="flex w-1/4 text-lg font-semibold justify-start items-start ml-5">
            {
                props.name
            }
        </div>
    )
}