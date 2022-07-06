import Head from 'next/head'
import Header from '../components/Header'
import BannerLarge from '../components/BannerLarge'
import IntroLarge from '../components/IntroLarge'
import Customers from '../components/Customers'
import Steps from '../components/Steps'
import WebServices from '../components/WebServices'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bizz Websites - Website Development & Digital Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <BannerLarge
        title="Creative Web Solutions‎"
        subtitle="Website Development & Digital Marketing"
        para="Bizz Websites can bring your creative website or application ideas to life."
        linktext="Hire Bizz Websites"
        link="/hire-bizz-websites"
      />
      <IntroLarge
        title="High-performance websites"
        icon="../icon-high-performance.svg"
        bullets={true}
        bulletonetext="Have an idea but don’t know how to code it?"
        bullettwotext="Need a website which is mobile-friendly?"
        bulletthreetext="Want a website which is optimized for speed?"
        bulletfourtext="Need a website which is SEO optimized?"
        bulletfivetext="Need a creative design for your website?"
        showPara={false}
        showLeftLinks={false}
        linktext="Hire Bizz Websites"
        link="/hire-bizz-websites"
        showImageOne={true}
        imagefloat="tablet.svg"
        showImageTwo={true}
        imagefloattwo="phone.svg"
        showQuickLinks={true}
        quicklinkone="Our Services"
        quicklinkonelink="/services"
        quicklinktwo="Web development"
        quicklinktwolink="/web-development"
        quicklinkthree="Digital Marketing"
        quicklinkthreelink="#WebServices"
        quicklinkfour="Reviews"
        quicklinkfourlink="/reviews"
        quicklinkfive="Past Projects"
        quicklinkfivelink="/past-projects"
        quicklinksix="Contact"
        quicklinksixlink="/contact"
      />

      <Customers
        button="See our customers"
        buttonLink="/past-projects/"
      />

      <Steps
        class="light-blue-bg"
        icon="../icon-process.svg"
        title="Our process of building a website"
        para="Bizz websites split up the process of building a website or web application into three sections. Archistructure, Design & Building."
        stepOneImage = "../step-blueprint.svg"
        stepOneTitle="Blueprints"
        stepOnePara="First, we create a blueprint of how your website should perform, the functionality, pages needed, and so much more. The blueprint helps us to build your website on the platform which best suits your needs."
        stepTwoImage = "../step-design.svg"
        stepTwoTitle="Design"
        stepTwoPara="Using the blueprint, we design a beautiful website which captivates your customers and built with Search Engine Optimization (SEO) and User Experience (UX) in mind."
        stepThreeImage = "../step-build-deploy.svg"
        stepThreeTitle="Build & Deploy"
        stepThreePara="We build your website with high-performance code for fast page speed and usability. Making it Mobile Responsive and easy to use. We test all our code before deploying it onto the internet."
        linkText="Web Development"
        link="/web-development"
      />

      <WebServices
        class="tilt--above"
        icon="../icon-website.svg"
        title="Have an existing website?"
        serviceOneIcon="../icon-seo.svg"
        serviceOneTitle="SEO"
        serviceOnePara="Bizz websites can help you optimize your website for SEO so your website will rank higher on google."
        serviceOneLink="/seo"
        serviceTwoIcon="../icon-google-ads.svg"
        serviceTwoTitle="Google Ad Words"
        serviceTwoPara="Bizz websites builds successful Google AdWords campaigns which can get your business in front of potential customers."
        serviceTwoLink="/google-adwords"
        serviceThreeIcon="../icon-consulting.svg"
        serviceThreeTitle="Web Development Consultaning"
        serviceThreePara="Need advice on how to build new applications, features or digital marketing? We have over 10 years of experience building websites."
        serviceThreeLink="/consulting"
        serviceFourIcon="../icon-web-development.svg"
        serviceFourTitle="Re-creating a website"
        serviceFourPara="Have a website but it needs a make-over? Bizz websites can develop a new website for you using the latest technologies."
        serviceFourLink="/web-development"
        linkText="View all Services"
        link="/services"
      />

      <ReviewsLarge />

      <FooterCta />

      <Footer />

    </>
  )
}
