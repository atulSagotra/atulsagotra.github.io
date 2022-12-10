
export default function ExperienceCard ({props}) {
    return (
        <div className="display-flex flex-col">
            <div className="display-flex flex-row">
                <div className="basis-96 company_logo mb-10"><img className="" src={props.logo} width='360px' height='80px'/></div>
                <div className='pl-10 flex-1'>
                    <div>Company Name : {props.name}</div><br />
                    <div>Location : {props.location}</div>
                </div>
            </div>
        </div>
    )
}