import Head from 'next/head'
import Header from '../components/Header'
import BannerSmall from '../components/BannerSmall'
import IntroSmall from '../components/IntroSmall'
import InDepth from '../components/InDepth'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function PastProjects() {
  return (
    <>
        <Head>
            <title>Past Projects by Bizz Websites | Creative Web Solutions</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <BannerSmall
            title="Past Projects‎"
            subtitle="Companies whose ideas have been brought to life"
            para="View our recent projects and how we designed, developed and successfully marketed their website."
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites"
        />

        <IntroSmall
            text={
                <>
                <p>Bizz Websites has made lots of websites and web applications, from Real Estate websites to Sports web applications to successful Google Ad Words campaigns.</p>
                <p>Our past projects page has a list of selected projects with a description of how we built the websites or implemented the Marketing Strategies.</p>
                </>
            }
        />


        <InDepth
            class="light-blue-bg"
            icon="none"
            title="Southbrook Technologies"
            intro=""
            firstText={
                <>
                <p>Southbrook Technologies is a company which specializes in Composite Manufacturing Tooling And Materials Specialist. Southbrook Technologies needed a new website which appealed to their younger audience.</p>
                <p>We got straight to work redesigning their website and brand. We came up with a beautify simplistic website design which makes for excellent user experience and a logo which makes them stand out.</p>
                <p>The technologies we used to create the website were PHP, WordPress, JS, SASS and Jquery.</p>
                <p>We handcrafted the theme and made it optimized for speed and SEO. We used WordPress as Southbrook Technologies need to be able to edit text, upload images and create new pages.</p>
                <p>We also added the plugin Advanced Custom Fields (ACF), this allows Southbrook Technologies to easily add pre-built templates, change the template settings and update the text. ACF eliminates the need for code and enables the client to focus on the content.</p>
                <p>We hosted the website on our Virtual private server (VPS) and managed the server and upkeep of the website.</p>
                </>
            }
            sideImage="../sbk.png"
            sideTitle="Southbrook Technologies"
            sidePara={<p>Southbrook Technologies needed a new website which appealed to their younger audience. We built their new website in PHP, WordPress, JS, SASS and Jquery.</p>}
            sideLink="https://southbrook-tech.com"
            sideLinkName="View Website"
            sideLinkTarget="_blank"
        />

        <InDepth
            class="white-bg tilt--above reverse"
            icon="none"
            title="Kairos 7"
            intro=""
            firstText={
                <>
                <p>Kairos 7 is a real estate development company that specializes in designing and building luxury homes in Spain. Kairos 7 needed a website which showcased their homes and allowed viewers to see all the details about each home.</p>
                <p>We built the website using the following technologies: PHP, WordPress, JS, jQuery and SASS. These technologies allowed us to make the site optimized for speed and SEO.</p>
                <p>We developed a plugin which allowed Kairos 7 to create and update homes on their website. We coded the frontend to have the same feel as an e-commerce site, with all the homes listed and a filter to filter down the results.</p>
                <p>We also added the plugin Advanced Custom Fields (ACF), this allows Kairos 7 to easily add pre-built templates, change the template settings and update the text. ACF eliminates the need for code and enables the client to focus on the content.</p>
                <p>The website is hosted on our Virtual private server (VPS) and managed the server and upkeep of the website.</p>
                <p>After we launched the website, we created a successful Google ad campaign to increase traffic flow and interactions with the website.</p>
                </>
            }
            sideImage="../karios-7.png"
            sideTitle="Kairos 7"
            sidePara={<p>Kairos 7 is a real estate development company that specializes in designing and building luxury homes in Spain. We developed the website using the following technologies: PHP, WordPress, JS, jQuery and SASS.</p>}
            sideLink="https://kairos-7.com/"
            sideLinkName="View Website"
            sideLinkTarget="_blank"
        />

        <InDepth
            class="light-blue-bg tilt--above"
            icon="none"
            title="Target Estates"
            intro=""
            firstText={
                <>
                <p>Target Estates is a real estate company based out of Mijas, Spain. Target Estates has been in business for several years, with an existing website. However, they needed more traffic to their site to increase sales.</p>
                <p>We got to work. After studying Target Estates's Google Analytics, Google Search console and talking to their team to better understand their customers, I found that Target Estates has two kinds of customers.1. Aboard Customers 2. In-country Customers.</p>
                <ol>
                    <li>Aboard Customers use Google and other online platforms to find Target Estates website. After a lot of keyword research and ad words research, I came up with a Google Ad Campaign aimed towards this type of customer, which has been successful in turning clicks to conversions.</li>
                    <li>In-country Customers use Google to find Target Estates, but they are also willing to come by the office and speak in person. After some more keyword research and research into Target Estates customers, we came up with a Google Ad Campaign aimed towards this type of customer, which has been successful in turning clicks to conversions.</li>
                </ol>
                <p>One thing businesses have struggled in the past is tracking Google Ads. To make sure we track users actions and know if they convert into a customer, we added tracking on all the forms, thank you pages and interactions on the website. By adding tracking, we can see which Google Ads advert is converting clicks to customers and which adverts are not performing.</p>
                <p>If you want to understand more about Search Engine Optimization or Google Ads, view these pages.</p>
                </>
            }
            sideImage="../target.png"
            sideTitle="Target Estates"
            sidePara={<p>Target Estates is a real estate company based out of Mijas, Spain. We created a successful Google Ad Words Campaign, which has been turning clicks to conversions.</p>}
            sideLink="https://target-estates.com/"
            sideLinkName="View Website"
            sideLinkTarget="_blank"
        />


        <ReviewsLarge 
            class="white-bg"    
        />

        <FooterCta
            class="light-blue-bg"    
        />

        <Footer />

    </>
  )
}
