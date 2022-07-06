import Link from 'next/link'

export default function TextImage(props) {
    return (
        <div className={"text-image " + props.class} id={props.id}>
            <div className="text-image--image">
                <img src={props.icon} alt={props.title} />
            </div>
            <div className="text-image--text">
                <h2>{props.title}</h2>
                <p>{props.para}</p>
                <div className="text-image--link">
                    <Link href={props.link}>
                        <a className="link-text">{props.linktext}</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}