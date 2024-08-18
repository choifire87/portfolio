export default function SkillHead(props: {
    name: string,
}){
    return (
        <div className="flex min-w-28 w-1/4 text-lg font-semibold justify-start items-start ml-5">
            {
                props.name
            }
        </div>
    )
}