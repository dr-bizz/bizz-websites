import Link from 'next/link'

export default function Steps(props) {
    return (
        <section className={"steps " + props.class}>
            <div className="page-container">
                <h2 className="section--head">
                    <img src={props.icon} alt={props.title} />
                    <span>{props.title}</span>
                </h2>
                <p className="section--body--text">{props.para}</p>


                <div className="steps--boxes">
                    <div className="steps--step">
                        
                        <div className="steps--step--img">
                            <span>1</span>
                            <img src={props.stepOneImage} alt={props.stepOneTitle} />
                        </div>
                        <h3 class="h4">{props.stepOneTitle}</h3>
                        <p>{props.stepOnePara}</p>
                    </div>
                    <div className="steps--step">
                        
                        <div className="steps--step--img">
                            <span>2</span>
                            <img src={props.stepTwoImage} alt={props.stepTwoTitle} />
                        </div>
                        <h3 class="h4">{props.stepTwoTitle}</h3>
                        <p>{props.stepTwoPara}</p>
                    </div>
                    <div className="steps--step">
                        
                        <div className="steps--step--img">
                            <span>3</span>
                            <img src={props.stepThreeImage} alt={props.stepThreeTitle} />
                        </div>
                        <h3 class="h4">{props.stepThreeTitle}</h3>
                        <p>{props.stepThreePara}</p>
                    </div>
                </div>
                <div className="button-container">
                    <Link href={props.link}>
                        <a className="button">{props.linkText}</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}