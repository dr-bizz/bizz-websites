import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import BannerSmall from '../components/BannerSmall'
import IntroSmall from '../components/IntroSmall'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function ErrorPage() {
  return (
    <>
        <Head>
            <title>404 Error Page | Bizz Websites - Creative Web Solutions</title>
        </Head>

        <Header />
        <BannerSmall
            title="Oh no! Page not found"
            subtitle=""
            para=""
        />
        <IntroSmall
            text = {<div style={{textAlign: "center"}}>
                <p>We can't seem to find the page you're looking for.</p>
                <Link href="/">
                    <a className="button">Return to homepage</a>
                </Link>
            </div>}
        />


        <ReviewsLarge />

        <FooterCta />

        <Footer />

    </>
  )
}
