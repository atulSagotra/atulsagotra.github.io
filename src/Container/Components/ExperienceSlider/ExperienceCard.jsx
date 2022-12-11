
export default function ExperienceCard ({props}) {
    return (
        <div className="display-flex flex-col">
            <div className="display-flex flex-row">
                <div className="basis-96 company_logo mb-10"><img className="" src={props.logo} width='360px' height='80px' alt="company_logo"/></div>
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
            <div>
                About : {props.about}
                <h1 className="text-xl font-bold font-mono text-left py-4">Roles and Responsibilities:</h1>
                <p className="py-4">{props.role}</p>
                <ol className="list-disc ml-6 text-left">
                {
                    props.roles_responsibilities.map((data) => (
                        <li><b>{data[0]}: </b>{data[1]}</li>
                    ))
                }
                </ol>

            </div>
        </div>
    )
}