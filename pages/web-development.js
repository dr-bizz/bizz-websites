import Head from 'next/head'
import Header from '../components/Header'
import BannerLarge from '../components/BannerLarge'
import IntroLarge from '../components/IntroLarge'
import Steps from '../components/Steps'
import InDepth from '../components/InDepth'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function WebDevelopment() {
  return (
    <>
        <Head>
            <title>Web Development - bringing creative ideas to life | Bizz Websites</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Web Development - bringing creative ideas to life | Bizz Websites" />
            <meta property="og:description" content="We have broken down website development into 3 steps. These steps will make sure that your website is optimized for the functionality you require." />
            <meta property="og:url" content="https://www.bizz-websites.com/web-development" />
        </Head>

        <Header />
        <BannerLarge
            title="Web Development"
            subtitle="Bizz Websites can bring your creative ideas to life."
            para="We have broken down website development into 3 steps. These steps will make sure that your website is optimized for the functionality you require."
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites"
        />
        <IntroLarge
            title="High-performance websites"
            icon="../icon.svg"
            bullets={true}
            bulletonetext="Have an idea but don’t know how to code it?"
            bulletoneicon="../tick.svg"
            bullettwotext="Need a website which is mobile-friendly?"
            bullettwoicon="../tick.svg"
            bulletthreetext="Want a website which is speed optimized?"
            bulletthreeicon="../tick.svg"
            bulletfourtext="Need a website which is SEO optimized?"
            bulletfouricon="../tick.svg"
            bulletfivetext="Need a creative design for your website?"
            bulletfiveicon="../tick.svg"
            showPara={false}
            showLeftLinks={false}
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites"
            showImageOne={true}
            imagefloat="tablet-developing-landscape.svg"
            showImageTwo={false}
            imagefloattwo="phone.svg"
            showQuickLinks={false}
        />

        <Steps
            class="light-blue-bg"
            icon="../icon-process.svg"
            title="Web Development Process"
            para="We have broken down website development into 3 steps. These 3 steps will make sure that your website is optimized for the functionality you require."
            stepOneImage = "../step-blueprint.svg"
            stepOneTitle="Blueprints"
            stepOnePara="First, we create a blueprint of how your website should perform, the functionality, pages needed, and much more. The blueprint helps us build your website on the platform which best suits your needs."
            stepTwoImage = "../step-design.svg"
            stepTwoTitle="Design"
            stepTwoPara="Using the blueprint, we design a beautiful website which captivates your customers, with Search Engine Optimization (SEO) and User Experience (UX) in mind."
            stepThreeImage = "../step-build-deploy.svg"
            stepThreeTitle="Build & Deploy"
            stepThreePara="We build your website with high-performance code for fast page speed and usability. Making it mobile responsive and easy to use. We test all our code before deploying it onto the internet."
            linkText="Need an expert"
            link="/hire-bizz-websites"
        />

        <InDepth
            class="white-bg tilt--above"
            
            title="Step 1: Blueprints"
            intro="This step is all about understanding your concept for the website or application and creating a blueprint."
            firstHeader="Understanding the project"
            firstText={<p>This step is all about understanding what you want the website for and the functionality that is required. After we meet with you, we will create a blueprint which outlines all the functionality needed on each page, the technologies we will use, where we will host the website, go-live date, backend functionality and explain how the site will work.</p>}
            secondHeader="Creating a Wireframe"
            secondText={<p>If requested, we can also design a wireframe of how the website or web application will be laid out. A wireframe is like a sketch before the artist creates before they paint a picture. It isn’t the design, but it shows you what the website could look like before we move into the design phase.</p>}
            thirdHeader="Approval"
            thirdText={<p>We send the blueprint and wireframes to you and walk you through them. If changes to the blueprint are required, we adjust them accordingly and get you to sign off the blueprint before we continue to Step 2: Design.</p>}
            sideImage="../step-blueprint.svg"
            sideTitle="Blueprints"
            sidePara="We create a blueprint which outlines all the functionality needed for each page."
        />

        <InDepth
            class="light-blue-bg tilt--above reverse"
            title="Step 2: Design"
            intro="Using the blueprint, we design a beautiful website which captivates your customers, with Search Engine Optimization (SEO) and User Experience (UX) in mind."
            firstHeader="Understanding Your Design Preference"
            firstText={<p>Before we dive deep into our creative mind-sets, we like to know what kind of websites you prefer the look and style of and specific features you prefer the most. We then take all that data and start designing.</p>}
            secondHeader="Creating the Design"
            secondText={<p>Using the blueprint, we design a beautiful website which captivates your customers, with Search Engine Optimization (SEO) and User Experience (UX) in mind. The designs are created on a design tool called Figma. Figma allows us to share the design with you and has comment functionality, meaning you can leave comments for us throughout the design.</p>}
            thirdHeader="Approval"
            thirdText={<p>Once the design is complete we will share it with you, talking you through each part. If changes to the design are required, we will adjust them accordingly and get you to sign off the designs before we continue to Step 3: Build & Deploy.</p>}
            sideImage="../step-design.svg"
            sideTitle="Design"
            sidePara="We design a website which captivates your customers, with SEO, UI and UX in mind."
        />


        <InDepth
            class="white-bg tilt--above"
            title="Step 3: Build and Deploy"
            intro="With the blueprint and design, we develop your website or web application using high-performance code."
            firstHeader="Developing the website"
            firstText={<p>Now that we have worked out all the fine details on the blueprint and how each page will look on the design, we develop your website or web application using high-performance code which meets all your needs and requirements. <br /> <br /> We always try to make sure that we update you on the process of building your website or web application, sharing with you what we have been working on and what we will be developing next. We build the website or web application on a development server so you will be able to see our process.</p>}
            secondHeader="Testing"
            secondText={<p>While we are building the website, we will be testing all our code to ensure that each piece of functionality works as intended in the blueprint.</p>}
            thirdHeader="Approval and Deploy"
            thirdText={<p>Once we have developed the website or web application, we will take you through the whole website and explain how each piece functionality works. Then we will give you an allotted time to test the website.<br/><br/>If changes are required to the website because the functionality isn’t working as we discussed in the blueprint or if the website has design errors, we will adjust them accordingly before deploying the website.</p>}
            sideImage="../step-build-deploy.svg"
            sideTitle="Build and Deploy"
            sidePara="We develop your website using high-performance code which meets all your needs and requirements."
        />



        <ReviewsLarge />

        <FooterCta />

        <Footer />

    </>
  )
}
