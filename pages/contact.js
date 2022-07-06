import Head from 'next/head'
import {handleChange, validationJS, formErrorsJS} from '../utils/inputs'
import axios from 'axios'

import Header from '../components/Header'
import BannerSmall from '../components/BannerSmall'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'


class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            message: "",
            showForm: true,
            thankYouMessage: "Thank you for getting in touch with us, we will respond as soon as we can."
        }

        this.handleChange = handleChange.bind(this)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {fname, lname, email, phone, message, formSubmitted} = this.state

        // Set all validations to true
        validationJS("fname", "fnameError", "", 0)
        validationJS("lname", "lnameError", "", 0)
        validationJS("email", "emailError", "", 0)
        validationJS("phone", "phoneError", "", 0)
        validationJS("message", "messageError", "", 0)
        let validation = true

        //If First name IS NOT inputted
        if(fname === "") {
            validationJS("fname", "fnameError", "Please enter a first name.", 1)
            validation = false
        }
        //If Last name IS NOT inputted
        if(lname === "") {
            validationJS("lname", "lnameError", "Please enter a last name.", 1)
            validation = false
        }
        // If email is a valid email address
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            // text@moretext.com format only
            validationJS("email", "emailError", "Please enter a valid email address", 1)
            validation = false
        }
        // If Phone is Not A Number, error!!
        if(isNaN(phone)) {
            validationJS("phone", "phoneError", "Please enter a valid phone number", 1)
            validation = false
        }
        //If Message IS NOT inputted
        if(message === "") {
            validationJS("message", "messageError", "Please enter a message", 1)
            validation = false
        }


        // Return false if any errors
        if (!validation) {
            // if validation equals false. STOP and return.
            return false
        }

        const data = {
            fname,
            lname,
            email,
            phone,
            message
        }

        const contactRes = await axios({
            method: 'POST',
            url: 'api/contact',
            data: data
        }).then(res => {
            if (res.data == "failed") {
                return false
            }

            this.setState({
                showForm: false,
                thankYouMessage: `${res.data.fname}, thank you for getting in touch with us, we will respond as soon as we can via your email address: ${res.data.email}.`
            })
        })
    }
    
    render(){
        const {fname, lname, email, phone, message, showForm, thankYouMessage} = this.state
        return (
            <>
                <Head>
                    <title>Contact Bizz Websites | Creative Web Solutions</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Header />
                <BannerSmall
                    title="Contact Us"
                    subtitle="Creative Web Solutions"
                    para="WWe have over 10 years of experience developing websites and web applications."
                />

                <section className="contact">
                    <div className="page-container">
                        <div className="contact--info">
                            <h3>Get In Touch</h3>
                            <p>
                                <a href="mailto:daniel@bizz-websites.com">daniel@bizz-websites.com</a><br/>
                                <a href="tel:7703358805">7703358805</a><br/>
                                4560 Elmwood Trail<br/>
                                Cumming<br/>
                                Georgia<br/>
                                30028 USA
                            </p>

                        </div>

                        <form onSubmit={this.handleSubmit} className="contact--form">
                            {showForm &&
                            <>
                                <div className="fname col-half form-group">
                                    <input 
                                        name="fname"
                                        type="text"
                                        id="fname"
                                        value={fname}
                                        onChange={this.handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span className="floating-label">First Name*</span>
                                    <span className="error" id="fnameError"></span>
                                </div>
                                <div className="lname col-half form-group">
                                    <input 
                                        name="lname"
                                        type="text"
                                        id="lname"
                                        value={lname}
                                        onChange={this.handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span className="floating-label">Last Name*</span>
                                    <span className="error" id="lnameError"></span>
                                </div>
                                <div className="email col-half form-group">
                                    <input 
                                        name="email"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span className="floating-label">Email Address*</span>
                                    <span className="error" id="emailError"></span>
                                </div>
                                <div className="phone col-half form-group">
                                    <input 
                                        name="phone"
                                        type="phone"
                                        id="phone"
                                        value={phone}
                                        onChange={this.handleChange}
                                        placeholder=" "
                                    />
                                    <span className="floating-label">Phone Number</span>
                                    <span className="error" id="phoneError"></span>
                                </div>
                                <div className="message col-full form-group">
                                    <textarea 
                                        name="message"
                                        type="text"
                                        id="message"
                                        value={message}
                                        onChange={this.handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span className="floating-label">Message</span>
                                    <span className="error" id="messageError"></span>
                                </div>

                                <div className="col-full button-holder">
                                    <button type="submit">Send Message</button>
                                </div>
                            </>
                            }
                            {!showForm &&
                                <>
                                    <div cass="contact--form--submitted">
                                        <p>{thankYouMessage}</p>
                                    </div>
                                </>
                            }
                        </form>
                        
                    </div>
                </section>


                <ReviewsLarge />

                <FooterCta />

                <Footer />
            </>
        )
    }
} 

export default Contact