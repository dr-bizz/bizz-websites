import Head from 'next/head'
import Header from '../components/Header'
import BannerLarge from '../components/BannerLarge'
import IntroSmall from '../components/IntroSmall'
import GridItems from '../components/GridItems'
import ButtonContainer from '../components/ButtonContainer'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function Consulting() {
  return (
    <>
        <Head>
            <title>Consulting for Web Development and Marketing | Bizz Websites</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Consulting for Web Development and Marketing | Bizz Websites" />
            <meta property="og:description" content="If you do not want to employ a full-time developer, you can hire Bizz websites consultant services. We will lead you in building your application the best way using the technologies which best suit your application." />
            <meta property="og:url" content="https://www.bizz-websites.com/consulting" />
        </Head>

        <Header />
        <BannerLarge
            title="Website Consulting‎"
            subtitle="Web Development and Marketing Consulting"
            para="Although Bizz Websites is often called upon to build complex websites or applications, we also do web development and marketing consulting work upon request."
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites"
        />
        {/* <IntroLarge
            title="Need an expert to help you with Google Adwords?"
            icon="../icon.svg"
            bullets={false}
            showPara={true}
            para = "Don’t waste money on advertising to the wrong audiences or using the wrong Keyword. Bizz Websites researches your audience and the right keywords to use to save you money and increase leads to your website."
            showLeftLinks={false}
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites/"
            showImageOne={true}
            imagefloat="tablet.svg"
            showImageTwo={true}
            imagefloattwo="phone.svg"
            showQuickLinks={false}
        /> */}

        <IntroSmall 
            text={<div>
                <p>If you do not want to employ a full-time developer, you can hire Bizz websites consultant services. We will lead you in building your application the best way using the technologies which best suit your application.</p>
                <p>Here are the services we can provide::</p>
            </div>}
        />

        
        <section className="grid light-blue-bg">
            <div className="page-container">
                <h2 className="section--head">
                    <span>Web development</span>
                </h2>
                <p className="section--body--text"></p>

                <div className="grid--inner">
                    <GridItems
                        icon="../icon-architecture.svg"
                        title="Website Blueprint"
                        para="We can create a blueprint for your website or web application, which includes a breakdown of the functionality, what software to use, where to host it and more. Having a blueprint of your website before you go to a third-party agency helps them fully understand what you need and removes any miscommunication."
                    />
                    <GridItems
                        icon="../icon-code.svg"
                        title="Coding Languages"
                        para="After understanding your website idea, we can give you a breakdown of which coding language you should use to build your website, including PHP, ASP, Node JS, React, Annular, Next JS, Express, Native, and so on."
                    />
                    <GridItems
                        icon="../icon-cms.svg"
                        title="What CMS should you use?"
                        para="Direct you to what CMS is best to build your website or web application. If using PHP, should you use WordPress or Joomla? If you want an online store, should you use Shopify or Magento? Which platform should you use if you are coding in Node JS or ASP?"
                    />
                    <GridItems
                        icon="../icon-best-practices.svg"
                        title="Best practices for front-end development."
                        para="We can advise you on how to design your website to have a fantastic User Interface (UI), a great User Experience (UX) as well as amazing SEO. We can help you make a tremendous mobile-friendly experience for your users."
                    />
                    <GridItems
                        icon="../icon-speed.svg"
                        title="Website speed"
                        para="Help you optimize your website for page speed or give you advise on how to create a website or web application which is built for page speed. Page speed is the first thing users judge about your website. Page speed can also have a massive effect on your SEO score."
                    />
                    <GridItems
                        icon="../icon-testing.svg"
                        title="Website Testing"
                        para="We can test for your web application, making sure there are no security errors or styling errors, and make sure your website looks great on all devices and browsers."
                    />
                    <GridItems
                        icon="../icon-seo2.svg"
                        title="SEO best practices"
                        para="We can advise you on how to improve your website’s SEO ranking so you can get more visits and appear near the top when users search for the service you provide."
                    />
                    <GridItems
                        icon="../icon-plugin.svg"
                        title="Which plugins to use on your CMS"
                        para="We can advise you on what plugins to use on your website and which ones fit all your needs. Whatever your CMS, we can help you select the correct plugin for the task."
                    />
                    <GridItems
                        icon="../icon-dns-white-2.svg"
                        title="DNS and Email Settings"
                        para="Help you set up the DNS settings and Email settings on your server or website platform. We can also help you change your domain or set up a new domain."
                    />
                </div>

                <ButtonContainer
                    link="/hire-bizz-websites"
                    linkText="Hire Bizz Websites"
                />
                
            </div>
        </section>

        <section className="grid">
            <div className="page-container">
                <h2 className="section--head">
                    <span>Shopify Design and Other Website platforms</span>
                </h2>
                <p className="section--body--text"></p>

                <div className="grid--inner">
                    <GridItems
                        icon="../icon-design.svg"
                        title="Design"
                        para="Need help with design ideas. We can come alongside your company and help you create a stunning design which embodies User Interface (UI) while having an epic User Experience (UX)."
                    />
                    <GridItems
                        icon="../icon-setup.svg"
                        title="Setting websites up"
                        para="We can help you set up your website on WIX, WordPress, Shopify, Squarespace and other platforms. We can help you with design ideas, how you should structure the page, set up user tracking, and teach you tips and tricks to make your life easier."
                    />
                    <GridItems
                        icon="../icon-shopify.svg"
                        title="Shopify store"
                        para="Need help setting a Shopify store up? We have helped many customers set up their Shopify store. We can help you with your design, directing you to the best plugin to use, test your store, teach you how to use Shopify and how to edit pages, products, orders and more."
                    />
                </div>
                
                <ButtonContainer
                    link="/hire-bizz-websites"
                    linkText="Hire Bizz Websites"
                />
            </div>
        </section>

        <section className="grid  light-blue-bg">
            <div className="page-container">
                <h2 className="section--head">
                    <span>Marketing</span>
                </h2>
                <p className="section--body--text"></p>

                <div className="grid--inner">
                    <GridItems
                        icon="../icon-analise.svg"
                        title="Analyze your customers"
                        para="We can advise you on how to analyze your visitors to your website without breaking any privacy laws. How to understand your target audience and know how to market towards them."
                    />
                    <GridItems
                        icon="../icon-success.svg"
                        title="How to run a successful Google Ads campaign"
                        para="We can help you understand how to create and run Google Ads which bring in leads and sales, also how to do keyword research."
                    />
                    <GridItems
                        icon="../icon-google-ads-2.svg"
                        title="How to track Google Ads"
                        para="Show you how to set up and track conversions from Google AdWords onto your website and understand which ads, keywords and campaigns are performing best. We can even show you how to track Google AdWords leads on your custom web application."
                    />
                </div>
                
                <ButtonContainer
                    link="/hire-bizz-websites"
                    linkText="Hire Bizz Websites"
                />
            </div>
        </section>

        <IntroSmall 
            text={<div>
                <p>Cost to our customers for consulting services is $50.00 per hour, plus travel and material. We provide written estimates and detailed billing, along with receipt documentation.</p>
            </div>}
        />


        <ReviewsLarge />

        <FooterCta />

        <Footer />

    </>
  )
}
