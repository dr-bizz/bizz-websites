import Head from 'next/head'
import Header from '../components/Header'
import BannerLarge from '../components/BannerLarge'
import IntroLarge from '../components/IntroLarge'
import Steps from '../components/Steps'
import TextImage from '../components/TextImage'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Head>
            <title>Google Ad Words - Increase your leads and e-commerce sales. | Bizz Websites</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Google Ad Words - Increase your leads and e-commerce sales. | Bizz Websites" />
            <meta property="og:description" content="Need to increase your leads or e-commerce sales? Bizz websites can help you create ads which target the right audience." />
            <meta property="og:url" content="https://www.bizz-websites.com/google-adwords" />
        </Head>

        <Header />
        <BannerLarge
            title="Google Ad Words‎"
            subtitle="Increase your leads and e-commerce sales."
            para="Need to increase your leads or e-commerce sales? Bizz websites can help you create ads which target the right audience."
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites/"
        />
        <IntroLarge
            title="Need an expert to help you with Google Adwords?"
            icon="../icon-google-ads.svg"
            bullets={false}
            showPara={true}
            para="Don’t waste money on advertising to the wrong audiences or using the wrong Keyword. Bizz Websites researches your audience and the right keywords to use to save you money and increase leads to your website."
            showLeftLinks={false}
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites"
            showImageOne={false}
            imagefloat="tablet.svg"
            showImageTwo={true}
            imagefloattwo="phone-google-ad.svg"
            showQuickLinks={false}
        />

        <Steps
            class="light-blue-bg"
            icon="../icon-process.svg"
            title="Creating a successful Google Ad Words campaign"
            para="Research and setting up Google Ads are the two most important things which go into creating a successful Google Ad Words Campaign."
            stepOneImage="../step-research-track.svg"
            stepOneTitle="Research & Tracking"
            stepOnePara="Using tools like Google Analytics and Google Search Console, we find the best keywords to use to beat your competitors. We then implement tracking on your website and Google AdWords, so we can see how well certain ads are converting into leads."
            stepTwoImage="../step-trial-optimise.svg"
            stepTwoTitle="Trial & Optimize"
            stepTwoPara="We have a trial period where we put a limited amount of money on ads spending to see how well certain ads, keywords, ad groups and campaigns perform and optimise where needed. If we find one ad is performing better, we will make more like it."
            stepThreeImage="../step-increase-leads.svg"
            stepThreeTitle="Increase Leads"
            stepThreePara="After the trial period, we remove the limited ad spending and set the amount you request. As time goes on, we continue to track ad performance and optimise ads to increase leads and sales on your website."
            linkText="Need an expert"
            link="/hire-bizz-websites"
        />

        <section className="text-image-container">
            <div className="page-container">
                <TextImage
                    id="customTracking"
                    class=""
                    icon="../image-custom-lead-tracking.png"
                    iconAlt="Web Development"
                    title="Custom Lead Tracking"
                    para="As well as tracking Google Ads on Google Ad Words and Google Analytics, we can implement lead tracking into your custom systems and create reports where you can track how leads perform once they are in your system. Having custom lead tracking allows us to better understand which ads are bringing users to your site who are converting into customers, so we can allocate more money for those ads."
                    linktext="Hire Bizz Websites"
                    link="/hire-bizz-websites"
                />
            </div>
        </section>


        <ReviewsLarge />

        <FooterCta />

        <Footer />

    </>
  )
}
