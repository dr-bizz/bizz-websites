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
            <title>Current Projects by Bizz Websites | Creative Web Solutions</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <BannerSmall
            title="Current Projects‎"
            subtitle="Companies whose ideas we are bringing to life"
            para="See what we are currently working on and how we're designing and building web applications."
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites/"
        />


        <InDepth
            class=""
            icon="none"
            title="WWFFB"
            intro="World Wide Flat Football is a company based out of New Mexico who wants to connect individuals within communities by playing sport."
            firstText={
                <>
                <p>WWFFB came to us with an idea to build an online platform where people can sign up or create a team, set up matches between teams, enter their scores after the game and see their performance stats</p>
                <p>The Web Application has two sides: the Manager and the Player side.</p>
                <p>The player side allows them to sign up to an existing team, play matches and see your teams performance, and see other teams.</p>
                <p>The Manger side allows them to do everything in the player mode plus create or take over an existing team, allow new players to join their team and set up matches with other teams.</p>
                <p>We're building the web application with the following technologies: NODE JS, Strapi CMS, SASS and with these JS libraries; React Js, Next JS, Express. We chose to build this web application on NODE JS as we needed this web application to be extremely fast.</p>
                <p>We built the frontend in Next JS. Next JS uses React but has some additional features which improve the web experience and SEO.</p>
                <p>React is a single page application, so it's not designed for SEO. We needed lots of different pages with titles, metadata, different URLs all the while having the same fast load speed. Next JS allows us to build in React JS and have the SEO optimizations we need. Netflix, Uber and Hulu, all use Next JS for their web applications.</p>
                <p>We added Express JS as we needed a backend which could handle API calls and manage to send and receive data from Strapi.</p>
                <p>Strapi is the leading open-source headless CMS. It is built on JS, which means it's incredibly fast and powerful. Strapi allows you to create custom post types and build a complex API structure through the code or the GUI. It's easy for the client to use and yet complex enough to build large scale web applications. These are a few companies that use it: IBM, Walmart and NASA.</p>
                <p>The website is hosted on Heroku. The Heroku hosting platform is built by Salesforce and uses AWS to host its website and web applications.</p>
                </>
            }
            sideImage="../WWFFB.png"
            sideTitle="WWFFB"
            sidePara={<p>World Wide Flat Football wants to connect individuals within communities by playing sport. We are building the Application on Node JS, Strapi CMS, React, Next JS, Express and SASS.</p>}
        />



        <ReviewsLarge   
        />

        <FooterCta  
        />

        <Footer />

    </>
  )
}
