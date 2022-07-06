export default function OurTeam(props) {
    return (
        <div className="steps--step">
            <div className="steps--step--img">
                <img src={props.image} alt={props.name} />
            </div>
            <h5>{props.name}</h5>
            <p className="job-title">{props.jobTitle}</p>
        </div>
    )
}