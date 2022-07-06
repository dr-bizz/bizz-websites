import Link from 'next/link'

export default function ButtonContainer(props) {
    return (
        <div className="button-container">
            <Link href={props.link}>
                <a className="button">{props.linkText}</a>
            </Link>
        </div>
    )
}