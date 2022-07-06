import Link from 'next/link'

export default function InDepth(props) {
    return (
        <section className={"indepth " + props.class} >
            <div className="page-container">
                <h2 className="section--head">
                    <span>{props.title}</span>
                </h2>
                {props.intro &&
                    <p className="section--body--text">{props.intro}</p>
                }

                <div className="indepth--inner">
                    <div className="indepth--description">
                        {props.firstHeader &&
                            <h3>{props.firstHeader}</h3>
                        }
                        {props.firstText}

                        {props.secondText &&
                            <>
                            <h3>{props.secondHeader}</h3>
                            {props.secondText}
                            </>
                        }

                        {props.thirdText &&
                            <>
                            <h3>{props.thirdHeader}</h3>
                            {props.thirdText}
                            </>
                        }
                    </div>
                    <div className="indepth--graph">
                        <div className="indepth--graph--inner">
                            <img src={props.sideImage} alt={props.title} />
                            <div className="indepth--graph--text">
                                <h3>{props.sideTitle}</h3>
                                <p>{props.sidePara}</p>
                                {props.sideLink &&
                                    <Link href={props.sideLink}>
                                        <a className="button" target={props.sideLinkTarget}>{props.sideLinkName}</a>    
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}