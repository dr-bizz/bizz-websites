import Link from 'next/link'

export default function IntroLarge(props){
    return (
        <section className="intro">
            <div className="page-container cf">
                <div className="intro--left">
                    <div className="intro--left--header">
                        <h2 className="cf"><img src={props.icon} alt="icon" /> <span className="intro--left--title" >{props.title}</span></h2>
                        <div className="icon"></div>
                    </div>
                    {props.bullets &&
                        <div className="intro--left--bullets">
                            <span>{props.bulletonetext}</span>
                            <span>{props.bullettwotext}</span>
                            <span>{props.bulletthreetext}</span>
                            <span>{props.bulletfourtext}</span>
                            <span>{props.bulletfivetext}</span>
                        </div>
                    }
                    {props.showPara &&
                        <div className="intro--left--paragraph">
                            <p>{props.para}</p>
                        </div>
                    }

                    {props.showLeftLinks &&
                        <div className="intro--left--links">
                            <Link href={props.leftlinkonelink}>
                                <a className="quick-link">{props.leftlinkone}</a>
                            </Link>
                            <Link href={props.leftlinktwolink}>
                                <a className="quick-link">{props.leftlinktwo}</a>
                            </Link>
                            <Link href={props.leftlinkthreelink}>
                                <a className="quick-link">{props.leftlinkthree}</a>
                            </Link>
                            <Link href={props.leftlinkfourlink}>
                                <a className="quick-link">{props.leftlinkfour}</a>
                            </Link>
                        </div>
                    }
                    <Link href={props.link}>
                        <a className="link-text">{props.linktext}</a>
                    </Link>
                </div>
                <div className="intro--right">
                    <div className="banner-overlap">
                        {props.showImageOne &&
                            <div className="tablet" style={{opacity: '0', position: 'relative', top: '100px'}} data-delay-show="true">
                                <img src={props.imagefloat} alt="" className={props.showImageTwo ? "" : "single"} />
                            </div>
                        }
                        {props.showImageTwo &&
                            <div className={props.showImageOne ? "phone" : "phone single"} style={{opacity: '0', position: 'relative', top: '150px'}} data-delay-show="true">
                                <img src={props.imagefloattwo} alt="" />
                            </div>
                        }
                    </div>
                    {props.showQuickLinks &&
                        <div className="intro--right--inner">
                            <Link href={props.quicklinkonelink}>
                                <a className="quick-link">{props.quicklinkone}</a>
                            </Link>
                            <Link href={props.quicklinktwolink}>
                                <a className="quick-link">{props.quicklinktwo}</a>
                            </Link>
                            <Link href={props.quicklinkthreelink}>
                                <a className="quick-link">{props.quicklinkthree}</a>
                            </Link>
                            <Link href={props.quicklinkfourlink}>
                                <a className="quick-link">{props.quicklinkfour}</a>
                            </Link>
                            <Link href={props.quicklinkfivelink}>
                                <a className="quick-link">{props.quicklinkfive}</a>
                            </Link>
                            <Link href={props.quicklinksixlink}>
                                <a className="quick-link">{props.quicklinksix}</a>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}