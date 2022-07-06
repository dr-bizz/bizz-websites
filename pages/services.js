import Head from 'next/head'
import Header from '../components/Header'
import BannerLarge from '../components/BannerLarge'
import IntroLarge from '../components/IntroLarge'
import Customers from '../components/Customers'
import TextImage from '../components/TextImage'
import ButtonContainer from '../components/ButtonContainer'

import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Head>
            <title>Web Services | Bizz Websites - Web Development & Online Marketing</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Web Services | Bizz Websites - Web Development & Online Marketing" />
            <meta property="og:description" content="Already have a website, but it needs help? Our services will provide you with everything you need to get more visitors, leads and faster page speeds. If you don't have a website, we make sure all our websites are optimized for performance and SEO." />
            <meta property="og:url" content="https://www.bizz-websites.com/services" />
        </Head>

        <Header />
        <BannerLarge
            title="Web Services"
            subtitle="Website Development & Digital Marketing"
            para="We don't just develop websites. We know how to market them as well."
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites/"
        />
        <IntroLarge
            title="Need help with your websites?"
            icon="../icon-high-performance.svg"
            bullets={false}
            bulletonetext="Have an idea but don’t know how to code it?"
            bullettwotext="Need a website which is Mobile-Friendly?"
            bulletthreetext="Want a website which is optimized for speed?"
            bulletfourtext="Need a website which is SEO optimised?"
            bulletfivetext="Need a creative design for your website?"
            showPara={true}
            para = "Already have a website, but it needs help? Our services will provide you with everything you need to get more visitors, leads and faster page speeds. If you don't have a website, we make sure all our websites are optimized for performance and SEO."
            showLeftLinks={true}
            leftlinkone="SEO"
            leftlinkonelink="/"
            leftlinktwo="Web development"
            leftlinktwolink="/"
            leftlinkthree="Google AdWords"
            leftlinkthreelink="/"
            leftlinkfour="Consulting"
            leftlinkfourlink="/"
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites/"
            showImageOne={true}
            imagefloat="tablet-code.svg"
            showImageTwo={true}
            imagefloattwo="phone-google-ad.svg"
            showQuickLinks={false}
        />

        <Customers
            button="See our customers"
            buttonLink="/past-projects/"
        />

        <section className="text-image-container">
            <div className="page-container">
                <TextImage
                    class=""
                    icon="../digital-web-dev.png"
                    iconAlt="Web Development"
                    title="Web Development"
                    para="Bizz Websites split up the process of building a website or web application into three sections. Archistructure & Design, Building and Deploying. Visit the website development page to understand our process of building a website or web application."
                    linktext="Need a website developer"
                    link="/web-development"
                />
                <TextImage
                    class="reverse"
                    icon="../digital-SEO.png"
                    iconAlt="Search Engine Optimization"
                    title="Search Engine Optimization"
                    para="Already have a website, but it isn't getting as many visitors as you wanted? We have created a step by step plan to help your website rank higher on Google. View more details on the Understanding Search Engine Optimization page."
                    linktext="Improve your website's SEO"
                    link="/seo"
                />
                <TextImage
                    class=""
                    icon="../digital-hosting.png"
                    iconAlt="Hosting"
                    title="Hosting"
                    para="We host our websites on the very best platforms. Depending on what kind of website you have will determine where we host your site. Visit the website hosting page to understand how we manage our hosting."
                    linktext="Host your website with us"
                    link="/hosting"
                />
                <TextImage
                    class="reverse"
                    icon="../digital-ad-words.png"
                    iconAlt="Google Ad Words"
                    title="Google Ad Words"
                    para="Need to increase your leads or e-commerce sales? Bizz websites can help you create ads which target the right audience. Visit our Google AdWords web page to understand how we can help your business."
                    linktext="Gets more websites leads"
                    link="/google-adwords"
                />
                <TextImage
                    class=""
                    icon="../image-consulting.png"
                    iconAlt="Consulting"
                    title="Consulting"
                    para="Already have a successful website and need someone with experience to give you advice on how to build new applications, features or digital marketing? Visit our Consulting page to understand how we can help you."
                    linktext="Need an expert"
                    link="/consulting"
                />

                <ButtonContainer 
                    link="/hire-bizz-websites"
                    linkText="Hire Bizz Websites"
                />
            </div>
        </section>

        <ReviewsLarge />

        <FooterCta />

        <Footer />

    </>
  )
}
