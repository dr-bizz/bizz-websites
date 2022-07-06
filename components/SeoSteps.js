export default function SeoSteps(props) {
    return (
        <section className={"seo-steps " + props.class}>
            <div className="page-container">
                <h2 className="section--head">
                    <span>{props.title}</span>
                </h2>
                <p className="section--body--text">{props.para}</p>

                <div className="seo-steps--inner">
                    <a className="seo-steps--step" href="#Analytics">
                        <span>1</span>
                        <h4>Google Analytics</h4>
                    </a>
                    <a className="seo-steps--step" href="#searchConsole">
                        <span>2</span>
                        <h4>Google Search Console</h4>
                    </a>
                    <a className="seo-steps--step" href="#keywordResearch">
                        <span>3</span>
                        <h4>Keyword Research</h4>
                    </a>
                    <a className="seo-steps--step" href="#pagetitle">
                        <span>4</span>
                        <h4>Page Titles</h4>
                    </a>
                    <a className="seo-steps--step" href="#pageContent">
                        <span>5</span>
                        <h4>Page Content</h4>
                    </a>
                    <a className="seo-steps--step" href="#siteStructure">
                        <span>6</span>
                        <h4>Site Structure</h4>
                    </a>
                    <a className="seo-steps--step" href="#backlinks">
                        <span>7</span>
                        <h4>Backlinks</h4>
                    </a>
                    <a className="seo-steps--step" href="#blog">
                        <span>8</span>
                        <h4>Blog</h4>
                    </a>
                    <a className="seo-steps--step" href="#goals">
                        <span>9</span>
                        <h4>Google Analytics Goals</h4>
                    </a>
                    <a className="seo-steps--step" href="#events">
                        <span>10</span>
                        <h4>Google Analytics Events</h4>
                    </a>
                </div>
                
                <div className="button-container">
                <a className="button" href={props.link}>{props.linkText}</a>
                </div>
            </div>
        </section>
    )
}