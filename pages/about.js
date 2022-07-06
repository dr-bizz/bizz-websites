import Head from 'next/head'
import Header from '../components/Header'
import BannerSmall from '../components/BannerSmall'
import IntroSmall from '../components/IntroSmall'
import OurTeam from "../components/OurTeam"
import Wysiwyg from '../components/Wysiwyg'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
        <Head>
            <title>About Bizz Websites - Creative Web Solutions</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <BannerSmall
            title="About Bizz Websites"
            subtitle="Creative Web Solutions"
            para="We have over 10 years of experience developing websites and web applications."
        />
        <IntroSmall
            text = {<div>
                <p>Wanting a fast and reliable website, but need help building it?</p>
                <p>We've been where you are. You have an idea for a website or web application but feel out of your depth building it yourself. We founded Bizz websites as we wanted to help businesses like yours see their visions come to life.</p>
            </div>}
        />

        <section className="steps light-blue-bg">
            <div className="page-container">
                <h2 className="section--head">
                Bizz Website's Team
                </h2>
                <div className="steps--boxes">
                    <OurTeam
                        name="Daniel Bisgrove"
                        jobTitle="Lead Developer & Founder"
                        image="image-daniel.jpg"
                    />
                    <OurTeam
                        name="Mary Bisgrove"
                        jobTitle="Finance Manager & Founder"
                        image="image-mary.jpg"
                    />
                </div>
            </div>
        </section>

        <Wysiwyg
            pageWidth = "small"
            code = {<>
                <h2 className="section--head">How Daniel went from Apprentice to Lead Developer</h2>
                <p className="section--body--text">Daniel Bisgrove started at humble beginnings as an Apprentice Developer and eventually became the Head Developer of a large company and teaches weekly at a coding school called Global U.</p>
                <br />
                <br />
                <p>Daniel started coding in 2010 at age 16 when he got his first job working at an e-learning platform as a Helpdesk Administrator. The job mostly involved solving issues users were having, but when there were no issues, He would learn to code and help the development team on projects.</p>
                <p>In 2012 Daniel got accepted for an apprentice position at a digital agency called Star Digital, where he helped build websites and assist other developers. For the next 3 years, he worked for Star Digital and their sibling company Auction Marketer.</p>
                <p>After the first year, Daniel was promoted to Junior Web Developer and soon after to Front-end developer. By this time, Daniel was leading a team of developers on a variety of projects such as e-commerce stores and custom web applications, while teaching new apprentices and junior developers how to code. In the last year working at Star Digital and Auction Marketer, Daniel became a Full-Stack Developer, meaning he was a Front-End and Back-End Developer. He was offered the job as Lead Developer of Auction Marketer, which he turned down and left the company to pursue leadership skills and his faith.</p>
                <p>Soon after Daniel met his lovely wife, Mary Bisgrove, who is an American, and they ended up moving to the United States. It wasn’t long before Daniel started a new job as a Full-Stack developer at Adventures in Missions and World Race Mission Trips, managing their websites and building advanced web applications.</p>
                <p>In 2020 Daniel was promoted to Lead Developer where he leads a team of developers and teaches web development, UI, UX and marketing skills at Global U, a nine-month full-stack web development program for young adults.</p>
                
            </>}
        />



        
       


        <ReviewsLarge />

        <FooterCta />

        <Footer />

    </>
  )
}
