export default function BannerSmall (props) {
    return (
        <section className="banner-small">
            <div className="banner-small--background"></div>
            <div className="page-container">
            <div className="banner-small--content">
                <h2>{props.subtitle}</h2>
                <h1>{props.title}‎</h1>
                <div className="banner-small--text">
                    <p>{props.para}</p>
                </div>
            </div>
            </div>
        </section>
    )

}


