import Head from 'next/head'
import Header from '../components/Header'
import BannerSmall from '../components/BannerSmall'
import Reviews from '../components/Reviews'
import ButtonContainer from '../components/ButtonContainer'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
        <Head>
            <title>Who Are Bizz Websites - Creative Web Solutions</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <BannerSmall
            title="Bizz Websites Reviews"
            subtitle="Creative Web Solutions"
            para=""
        />


        <section className="reviews">
            <div className="page-container">
                <Reviews
                    image="../review-mary.jpg"
                    name="Mary Korch"
                    company="Global U Student"
                    review={<p>Working with Daniel has been a huge blessing to me and my coding journey! This is my first year learning to code and he has been incredibly patient and helpful. He’s very knowledgeable on the subject and also walks through solving problems in a way that is easy to understand and later be replicated. In addition to answering questions I have, he’s been able to show me a number of tips which have made programming easier. Daniel has a great heart and cares about those he works with!</p>}

                />
                <Reviews
                    image="../review-hailey.jpg"
                    name="Hailey Hite"
                    company="Global U Student"
                    review={<p>Daniel was amazing to learn from. As a programming teacher, he is patient, thorough, committed, and truly cares. Also, if he doesn't initially understand something, he takes the initiative to figure it out and follow up. As a coder, he understands UX/UI design well. And as a person, he hold strong character - honest, hardworking, and kind.</p>}

                />
            </div>
            <ButtonContainer
                    link="/hire-bizz-websites"
                    linkText="Hire Bizz Websites"
            />
        </section>



        

        




        <FooterCta
            class="light-blue-bg"
        />

        <Footer />

    </>
  )
}
