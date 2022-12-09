
export default function ExperienceCard ({props}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="basis-80"><img className="" src={props.logo} width='100%' height='100%'/></div>
                <div className='pl-10 flex-1'>
                    <div>Company Name : {props.name}</div><br />
                    <div>Location : {props.location}</div>
                </div>
            </div>
        </div>
    )
}