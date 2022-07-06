export default function WebServices(props) {
    return (
        <section className={"existing-website " + props.class} id="WebServices">
            <div className="page-container">
                <h2 className="section--head">
                    <img src={props.icon} alt={props.title} />
                    <span>{props.title}</span>
                </h2>

                <div className="existing-website--cards cf">
                    <a className="existing-website--card" href={props.serviceOneLink} title="">
                        <img src={props.serviceOneIcon} alt={props.serviceOneTitle} />
                        <h2>{props.serviceOneTitle}</h2>
                        <p>{props.serviceOnePara}</p>
                    </a>

                    <a className="existing-website--card" href={props.serviceTwoLink} title="">
                        <img src={props.serviceTwoIcon} alt={props.serviceTwoTitle} />
                        <h2>{props.serviceTwoTitle}</h2>
                        <p>{props.serviceTwoPara}</p>
                    </a>

                    <a className="existing-website--card" href={props.serviceThreeLink} title="">
                        <img src={props.serviceThreeIcon} alt={props.serviceThreeTitle} />
                        <h2>{props.serviceThreeTitle}</h2>
                        <p>{props.serviceThreePara}</p>
                    </a>

                    <a className="existing-website--card" href={props.serviceFourLink} title="">
                        <img src={props.serviceFourIcon} alt={props.serviceFourTitle} />
                        <h2>{props.serviceFourTitle}</h2>
                        <p>{props.serviceFourPara}</p>
                    </a>
                </div>
                <div className="button-container">
                    <a className="button" href={props.link}>{props.linkText}</a>
                </div>
            </div>
        </section>
    )
}