import Link from 'next/link'

export default function FooterCta(props) {
    return (
        <section className={"footer-cta " + props.class}>
            <div className="page-container">
                <div className="footer-cta--content">
                    <h2>Ready for a new Website?</h2>
                    <h2>Get in touch to start the process</h2>
                </div>
                <div className="footer-cta--button">
                    <Link href="/hire-bizz-websites">
                        <a className="button">Hire Bizz Websites</a>
                    </Link>
                    <Link href="/contact">
                        <a className="button">Contact Us</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}