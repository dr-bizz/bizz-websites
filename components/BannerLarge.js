import Link from 'next/link'
export default function BannerLarge (props) {
    return (
        <section className="banner large">
            <div className="banner--background"></div>
            <div className="page-container">
            <div className="banner--content">
                <h2>{props.subtitle}</h2>
                <h1>{props.title}‎</h1>
                <div className="banner--text">
                    <p>{props.para}</p>
                </div>
                <Link href={props.link}>
                    <a className="button--white">{props.linktext}</a>
                </Link>
            </div>
            </div>
        </section>
    )

}


