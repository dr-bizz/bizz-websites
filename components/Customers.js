import Link from 'next/link'

export default function Customers (props){
    return (
        <section className="customers">
            <Link href={props.buttonLink}>
                <a title="Our Customers">
                    <div className="page-container">
                        <div className="button">{props.button}</div>

                        <ul>
                            <img src="../customer-SBK.svg" alt="" />
                            <img src="../customer-Target.svg" alt="" />
                            <span className="break"></span>
                            <img src="../customer-WWFFB.svg" alt="" />
                            <img src="../customer-Kairos.svg" alt="" />
                            <img src="../customer-Kindred.svg" alt="" />
                        </ul>
                    </div>
                </a>
            </Link>
        </section>
    )
}