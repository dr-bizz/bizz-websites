export default function GridItems(props) {
    return (
        <div className="grid--item">
            <img src={props.icon} alt={props.title} />
            <h4>{props.title}</h4>
            <p>{props.para}</p>
        </div>
    )
}