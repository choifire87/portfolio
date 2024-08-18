export default function ItemDescription(props: {
    workDescription: string,
    works?: string[],
}){
    return (
        <div className="pt-5">
            <p className="text-lg pb-3" dangerouslySetInnerHTML={{__html: props.workDescription}} />
            {
                props.works ?
                <ul className="text-lg list-disc list-inside ml-10 -indent-6">
                    {
                        props.works.map((work, index) => (
                            <li key={index} dangerouslySetInnerHTML={{__html: work}} />
                        ))
                    }
                </ul>
                : null
            }
        </div>
    )
}