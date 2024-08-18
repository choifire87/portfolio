export default function SkillDescription(props: {
    descriptions: string[],
}){
    return (
        <div className="w-full ml-5">
            <div className="text-md pb-3">
            {
                props.descriptions.map((description, index) => (
                    <p key={index}>{description}</p>
                ))
            }
            </div>
        </div>
    )
}