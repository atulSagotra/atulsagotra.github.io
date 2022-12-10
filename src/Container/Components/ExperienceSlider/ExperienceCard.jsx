
export default function ExperienceCard ({props}) {
    return (
        <div className="display-flex flex-col">
            <div className="display-flex flex-row">
                <div className="basis-96 company_logo mb-10"><img className="" src={props.logo} width='360px' height='80px'/></div>
                <div className='flex-1'>
                    <div>Company Name : {props.name}</div><br />
                    <div>Location : 
                        <a
                            href={props.location_url}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            {props.location}
                        </a>
                    </div><br />
                    <div>Website : 
                        <a
                            href={props.website_url}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            {props.website_text}
                        </a>
                    </div><br />
                </div>
            </div>

            <div>About : {props.about}</div>
        </div>
    )
}