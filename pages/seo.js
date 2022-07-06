import Head from 'next/head'
import Header from '../components/Header'
import BannerLarge from '../components/BannerLarge'
import IntroLarge from '../components/IntroLarge'
import TextImage from '../components/TextImage'
import SeoSteps from '../components/SeoSteps'
import ButtonContainer from '../components/ButtonContainer'

import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Head>
            <title>Search Engine Optimization - Optimize Your Website For SEO | Bizz Websites</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Search Engine Optimization - Optimize Your Website For SEO | Bizz Websites" />
            <meta property="og:description" content="Bizz websites can help you optimize your website for SEO so your website will rank higher on Google. We have created a 10 step plan to help your website rank higher on Google and improve your SEO ranking." />
            <meta property="og:url" content="https://www.bizz-websites.com/seo" />
        </Head>

        <Header />
        <BannerLarge
            title="Search Engine Optimization‎"
            subtitle="Optimize Your Website For SEO"
            para="Bizz websites can help you optimize your website for SEO so your website will rank higher on Google."
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites/"
        />
        <IntroLarge
            title="Need help improving your SEO ranking?"
            icon="../icon-seo.svg"
            bullets={false}
            showPara={true}
            para = "Already have a website, but it isn't getting as many visitors as you wanted? We have created a 10 step plan to help your website rank higher on Google and improve your SEO ranking."
            showLeftLinks={false}
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites"
            showImageOne={true}
            imagefloat="tablet-google-analytics.svg"
            showImageTwo={false}
            imagefloattwo="phone.svg"
            showQuickLinks={false}
        />

        <SeoSteps
            class="light-blue-bg"
            title="10 Steps to improve your SEO"
            para="The plan consists of 10 things you can do to improve your SEO ranking. If you require an expert's help, hire Bizz Websites."
            linkText="Need an expert"
            link="/hire-bizz-websites"
        />

        <section className="text-image-container">
            <div className="page-container">
                <TextImage
                    id="Analytics"
                    class=""
                    icon="../image-google-analytics.png"
                    title="Google Analytics"
                    para="Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Set up a Google Analytics account and connect it to your website. After set up, it can take up to 24 hours before you start seeing data."
                    linktext="Need help setting up Google Analytics"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="searchConsole"
                    class="reverse"
                    icon="../image-search-console.png"
                    title="Google Search Console"
                    para="Google Search Console is a web service by Google, which allows webmasters to check indexing status and optimize visibility of their websites. Set up Google Search Console with your domain and connect it to your website. Once you have connected Google Search Console to your website, connect Google Analytics to Google Search Console, as it will allow you to do advanced Keyword research on your website."
                    linktext="Improve your website's SEO"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="keywordResearch"
                    class=""
                    icon="../image-keyword-research.png"
                    title="Keyword Research"
                    para="Keyword research is the practice of researching alternative search terms that people enter into search engines while looking for a similar subject. In Google Search Console start looking for keywords which have a high impression rate (How often your website is shown on Google), but only have a few clicks, these are the keywords you want to start targeting as you can gain the most from them. If you have set up Google Analytics Goals, track what users typed into Google to get to your website and triggered a goal, they could help you find your target audience."
                    linktext="Need help with your Keyword Research"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="pagetitle"
                    class="reverse"
                    icon="../image-page-title.png"
                    title="Page Titles"
                    para={<p>Knowing what keywords people type in to find your website, edit your page titles to include those keywords. An example of this would be "Bizz Websites Home Page" to "Web Development and Online Services | Bizz Websites". I have included some keywords as well as inform the user about the information on this page. When re-writing your titles, tell the user what is on the page and add keywords, but not too many as Google will know when you are trying to keyword stuff. Try to make each page have a different page title and one which isn't too long. Google will sometimes mark you down for having lousy page titles.</p>}
                    linktext="Need a website developer"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="pageContent"
                    class=""
                    icon="../image-content.png"
                    title="Page Content"
                    para={<p>Re-write your content on your website to include the keywords you have selected. Re-writing content starts by changing any internal language to what other people say, especial if they are keywords. An example of this would be with a company called "The World Race" they used the word "journey" when talking about a mission trip. We changed it to "Mission Trip" and saw an increase in traffic as we started to write content about keywords which users type in search engines. But be careful not to keyword stuff, Google will know and mark you down.</p>}
                    linktext="Need help implementing this"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="siteStructure"
                    class="reverse"
                    icon="../image-structure.png"
                    title="Site Structure"
                    para={<p>The way you structure your website is essential to Google, Pages closer to the homepage will hold more weight "domain.com/page" instead of "domain.com/somthing/page". Stay away from URL queries like this one: "domain.com?i2&t=4&c=p". Google crawls your website by going onto each page and crawling all the pages which are linked to that page. When using URL queries, it means Google has to crawl each variation of each query which sometimes can be thousands.</p>}
                    linktext="Improve your website's SEO"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="backlinks"
                    class=""
                    icon="../image-backlinks.png"
                    title="Backlinks"
                    para="A Backlink is a link from some other website to your website. Google likes it when you have Backlinks and will rate your website higher for having them. To get more Backlinks, come up with a marketing strategy. One strategy is to guest blog on a news website. Even though more Backlinks are essential, quality matters. Google will either rank you higher or lower based on your Backlink quality; you only want good quality websites to link to your website.  A good quality Backlink would be from Washington Post. You can find which searches have a good backlink score by using an application such as SEM Rush."
                    linktext="Need help setting up Backlinks"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="blog"
                    class="reverse"
                    icon="../image-blog.png"
                    title="Blog"
                    para="Creating a blog is an excellent way to get more traffic,  It promotes your website, establishes authority with your users, plus it's more content for Google to crawl (which is good in this case). When writing an article or a podcast, make sure it is high-quality content, as in well-written and highly valuable to the user. Make sure to include keywords in your article title and content."
                    linktext="Need a website developer"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="goals"
                    class=""
                    icon="../image-GA-goals.png"
                    title="Google Analytics Goals"
                    para="A Google Analytics Goal is a way to measure how often users complete a specific action. In a nutshell, Goals measure how well your site or app fulfils your target objectives. Work out what your Goals will be on your website and set them up on Google Analytics. An example Goal would be users signing up. Once you have your goals set up, using Google Analytics, begin to track what kind of user triggers the goal. Do users with a particular source/medium have a higher Goal completion rate? Do users with a specific device have a higher rate of Goal completion? Find out what users typed into Google when they triggered a goal. The aim here is to look for patterns so that you can understand your target audience and market towards them."
                    linktext="Need help implementing Google Analytics Goals"
                    link="/hire-bizz-websites"
                />
                <TextImage
                    id="events"
                    class="reverse"
                    icon="../image-GA-events.png"
                    title="Google Analytics Events"
                    para="Google Analytics Event measures users interactions with content. Events are different to goals as goals are tired to actions that affect your website revenue, while events track website behaviour. An example event could be when a user plays a video or scrolls past a certain point or clicks a button. Once you set up the events, begin to track what kind of user triggers the event. Do users who have a high bounce rate trigger an event? Do users who stay on the page for longer than others or have a particular source/medium trigger more events? Again look for patterns in what kind of users triggers events. After a while, you will start to understand what your audience likes and dislikes. Meaning you can better market towards your audience."
                    linktext="Need help with your Google Analytics Events"
                    link="/hire-bizz-websites"
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
