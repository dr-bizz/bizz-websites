import Head from 'next/head'
import Header from '../components/Header'
import BannerLarge from '../components/BannerLarge'
import IntroLarge from '../components/IntroLarge'
import Options from '../components/Options'
import GridItems from '../components/GridItems'
import TextImage from '../components/TextImage'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function Hosting() {
  return (
    <>
        <Head>
            <title>High Performance Website Hosting | Bizz Websites</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <BannerLarge
            title="Website Hosting‎"
            subtitle="High-Performance Website Hosting"
            para="Need fast and reliable hosting? Bizz Websites helps your website stay secure and supported."
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites"
        />
        <IntroLarge
            title="Need an expert to help you with web hosting?"
            icon="../icon-server.svg"
            bullets={false}
            showPara={true}
            para="Have a website, but the current hosting provider isn't fulfilling your requirements? You deserve a hosting provider who cares for your site as much as you do."
            showLeftLinks={false}
            linktext="Hire Bizz Websites"
            link="/hire-bizz-websites"
            showImageOne={true}
            imagefloat="tablet-hosting.svg"
            showImageTwo={false}
            showQuickLinks={false}
        />

        <Options
            class="light-blue-bg"
            title="Which hosting platform is right for you"
            para="Depending on what kind of website you have will determine which hosting platform we will host you on."
        />

        
        <section className="grid dark-bg" id="phpserver">
            <div className="page-container">
                <h2 className="section--head">
                    <img src="../icon-php.svg" alt="PHP Virtual Private Server" className="icon-large" />
                    <span>PHP Virtual Private Server</span>
                </h2>
                <p className="section--body--text"></p>

                <div className="grid--inner">
                    <GridItems
                        icon="../icon-DNS-white.svg"
                        iconalt="icon"
                        title="DNS"
                        para="DNS stands for Domain Name Settings. Upon setting up your website on our server, we will configure your Domain Name Settings and any other DNS records you require."
                    />
                    <GridItems
                        icon="../icon-email-white.svg"
                        iconalt="icon"
                        title="Email"
                        para="If you request, we will set you up to receive emails through our server, or we can send all the emails to a client, such as Gmail."
                    />
                    <GridItems
                        icon="../icon-database-white.svg"
                        iconalt="icon"
                        title="Databases"
                        para="We can either import or set up a new database for your website."
                    />
                    <GridItems
                        icon="../icon-security-white.svg"
                        iconalt="icon"
                        title="Security"
                        para="If you use a CMS like WordPress, we will install a security plugin which will protect your website from spam or viruses. If you have a custom PHP application, typically they are secure, but we will take a look at your code to see if we can improve security."
                    />
                    <GridItems
                        icon="../icon-backup-white.svg"
                        iconalt="icon"
                        title="Backups"
                        para="All of our servers will have backups of your website, so if something goes wrong, we can always revert to a previous version."
                    />
                    <GridItems
                        icon="../icon-support-white.svg"
                        iconalt="icon"
                        title="Support"
                        para="If you need help or have a question about your website, Bizz Websites is available during the day to provide support and answer any questions."
                    />
                </div>
                
                <div className="button-container">
                <a className="button" href="/contact">Hire Bizz Websites</a>
                </div>
            </div>
        </section>

        <section className="grid" id="nodeserver">
            <div className="page-container">
                <h2 className="section--head">
                    <img src="../icon-nodejs.svg" alt="Node JS Servers" className="icon-large" />
                    <span>Node JS Servers</span>
                </h2>
                <p className="section--body--text">Node JS is an up and coming coding language and is taking over the internet by storm. A reporter asked a group of developers which coding language they prefer and 80% said Node JS; this means that when we build your web applications, other developers will find it easy to edit or update the code.</p>

                <div className="grid--inner">
                    <GridItems
                        icon="../icon-DNS.svg"
                        iconalt="icon"
                        title="DNS"
                        para="Upon setting up your website on AWS or Heroku, we will configure your Domain Name Settings and any other DNS records you require."
                    />
                    <GridItems
                        icon="../icon-email.svg"
                        iconalt="icon"
                        title="Email"
                        para="If you request, we will set you up to receive emails; typically, emails are sent straight to the customer’s email client, such as Gmail."
                    />
                    <GridItems
                        icon="../icon-database.svg"
                        iconalt="icon"
                        title="Databases"
                        para="We can either import or set up a new database for your website. With NodeJS, there are lots of different ways you can host your database. We can cater to your needs."
                    />
                    <GridItems
                        icon="../icon-security.svg"
                        iconalt="icon"
                        title="Security"
                        para="We will look through your code to see if there can be any improvements to the security of your website and it’s users. AWS and Heroku both have built-in security to prevent viruses and other attacks."
                    />
                    <GridItems
                        icon="../icon-backup.svg"
                        iconalt="icon"
                        title="Backups"
                        para="We make sure that your website and databases are backup. With Heroku and AWS, we can schedule backups to happen, daily, weekly, bi-weekly or monthly."
                    />
                    <GridItems
                        icon="../icon-support.svg"
                        iconalt="icon"
                        title="Support"
                        para="If you need help or have a question about your website, Bizz Websites is available during the day to provide support and answer any questions."
                    />
                </div>
                
                <div className="button-container">
                <a className="button" href="/contact">Hire Bizz Websites</a>
                </div>
            </div>
        </section>

        <section className="text-image-container">
            <div className="page-container">
                <TextImage
                    id="nodedifference"
                    class=""
                    icon="../image-Heroku-vz-aws.png"
                    iconAlt="Web Development"
                    title="Difference between AWS and Heroku:"
                    para="On an AWS server, you start from scratch, so you need to set up NodeJS and configure the server, and this can take a long time. On a Heroku server, it is all pre-configured, so you don’t have to set anything up. Heroku costs a little more each month, but is worthwhile if you don’t have a dedicated team that can manage an AWS server."
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
