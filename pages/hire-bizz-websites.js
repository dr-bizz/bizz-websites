import Head from 'next/head'
import {handleChange, handleChangeCheckbox, validationJS, formErrorsJS} from '../utils/inputs'
import axios from 'axios'

import Header from '../components/Header'
import BannerSmall from '../components/BannerSmall'
import IntroSmall from '../components/IntroSmall'
import Customers from '../components/Customers'
import ReviewsLarge from '../components/ReviewsLarge'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'


class HireUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            company: "",
            website: "",
            howheard: "",
            webdev: false,
            seo: false,
            adwords: false,
            hosting: false,
            consulting: false,
            message: "",
            showForm: true,
            thankYouMessage: "Thank you for getting in touch with us, we will respond as soon as we can."
        }

        this.handleChange = handleChange.bind(this)
        this.handleChangeCheckbox = handleChangeCheckbox.bind(this)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {fname, lname, email, phone, company, website, howheard, webdev, seo, adwords, hosting, consulting, message, formSubmitted} = this.state

        // Set all validations to true
        validationJS("fname", "fnameError", "", 0)
        validationJS("lname", "lnameError", "", 0)
        validationJS("email", "emailError", "", 0)
        validationJS("howheard", "howheardError", "", 0)
        validationJS("services", "servicesError", "", 0)
        validationJS("message", "messageError", "", 0)
        let validation = true

        // Disable the submit button so can't be clicked again.
        const submit = document.getElementById("hireUsSubmit")
        submit.setAttribute("disabled", "")

        //If First name IS NOT inputted
        if(fname === "") {
            validationJS("fname", "fnameError", "Please enter a first name", 1)
            validation = false
        }
        //If Last name IS NOT inputted
        if(lname === "") {
            validationJS("lname", "lnameError", "Please enter a last name", 1)
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

        //If First name IS NOT inputted
        if(howheard === "") {
            validationJS("howheard", "howheardError", "Please select an option", 1)
            validation = false
        }

        if (webdev == false && seo == false && adwords == false && hosting == false && consulting == false) { 
            validationJS("services", "servicesError", "Please select a option", 1)
            validation = false
        }

        //If First name IS NOT inputted
        if(message === "") {
            validationJS("message", "messageError", "Please enter a comment", 1)
            validation = false
        }

        console.log("HowHeard: ", howheard)

        if (!validation) {
            submit.disabled = false;
            return false
        }

        // Build the services data from the checkboxes.
        let services = ""
        if (webdev) {services = services + "- Web Development<br/>"}
        if (seo) {services = services + "- SEO<br/>"}
        if (adwords) {services = services + "- Google Ad Words<br/>"}
        if (hosting) {services = services + "- Hosting<br/>"}
        if (consulting) {services = services + "- Consulting<br/>"}

        // Build the data to send to the server.
        const data = {
            fname,
            lname,
            email,
            phone,
            company,
            website,
            howheard,
            services,
            message
        }

        const hireUsRes = await axios({
            method: 'POST',
            url: 'api/hireus',
            data: data
        }).then(res => {
            if (res.data == "failed") {
                return false
            }
            this.setState({
                showForm: false,
                thankYouMessage: `${res.data.fname}, thank you for considering us to build your website or web application. We really look forward to understanding your product more and building it. We will respond as soon as we can via email to your email address: ${res.data.email}.`
            })
        })
        console.log("Form Submitted!!")
    }
    
    render(){
        const {fname, lname, email, phone, company, website, howheard, webdev, seo, adwords, hosting, consulting, message, showForm, thankYouMessage} = this.state
        return (
            <>
                <Head>
                    <title>Hire Bizz Websites | Creative Web Solutions</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="Hire Bizz Websites | Creative Web Solutions" />
                    <meta property="og:description" content="Allow us to come alongside your company, and help you build your idea, optimize your website for SEO, build you a successfully Google Ad Words Campaign or to give you some advice. All our new builds will be optimized for speed, mobile-friendly and have a creative design which enlightens the user experience." />
                    <meta property="og:url" content="https://www.bizz-websites.com/hire-bizz-websites" />
                </Head>

                <Header />
                <BannerSmall
                    title="Hire Bizz Websites"
                    subtitle="Creative Web Solutions"
                    para="Bizz Websites can bring your creative website or application ideas to life."
                />

                

                <IntroSmall
                    text = {<div>
                        <p>Allow us to come alongside your company, and help you build your idea, optimize your website for SEO, build you a successfully Google Ad Words Campaign or to give you some advice. All our new builds will be optimized for speed, mobile-friendly and have a creative design which enlightens the user experience.</p>
                        <p>Lets build this thing!</p>
                    </div>}
                />

                <section className="hire-us ">
                    <div className="page-container">
                        
                        <form onSubmit={this.handleSubmit} className="hire-us--form">    
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
                                <div className="company col-half form-group">
                                    <input 
                                        name="company"
                                        type="text"
                                        id="company"
                                        value={company}
                                        onChange={this.handleChange}
                                        placeholder=" "
                                    />
                                    <span className="floating-label">Company</span>
                                    <span className="error" id="companyError"></span>
                                </div>

                                <div className="website col-half form-group">
                                    <input 
                                        name="website"
                                        type="text"
                                        id="website"
                                        value={website}
                                        onChange={this.handleChange}
                                        placeholder=" "
                                    />
                                    <span className="floating-label">Website</span>
                                    <span className="error" id="websiteError"></span>
                                </div>

                                <div className="howheard col-full form-group">
                                    <select
                                        name="howheard"
                                        id="howheard"
                                        value={howheard}
                                        onChange={this.handleChange}
                                        required
                                    >
                                        <option defaultValue value="">How did you heard about us?</option>
                                        <option value="google">Google</option>
                                        <option value="wom">Word of Mouth</option>
                                        <option value="blog">Our Blog</option>
                                        <option value="fb">Facebook</option>
                                        <option value="insta">Instagram</option>
                                    </select>
                                    <span className="error" id="howheardError"></span>
                                </div>

                                <div className="services col-full checkbox form-group" id="services">
                                    <p className="label">Please select the services you are interested in?</p>
                                    <span className="error" id="servicesError"></span>

                                    <label className="checkbox--input">
                                        <input
                                            value="web-development"
                                            name="services"
                                            type="checkbox"
                                            data-name="webdev"
                                            checked={webdev}
                                            multiple="multiple"
                                            onChange={this.handleChangeCheckbox}
                                            
                                        />
                                        <span className="checkmark"></span>
                                        <span className="text">Web Development</span>
                                    </label>
                                    
                                    <label className="checkbox--input">
                                        <input
                                            value="seo"
                                            name="services"
                                            type="checkbox"
                                            data-name="seo"
                                            checked={seo}
                                            multiple="multiple"
                                            onChange={this.handleChangeCheckbox}
                                            
                                        />
                                        <span className="checkmark"></span>
                                        <span className="text">Search Engine Optimization</span>
                                    </label>

                                    <label className="checkbox--input">
                                        <input
                                            value="adwords"
                                            name="services"
                                            type="checkbox"
                                            data-name="adwords"
                                            checked={adwords}
                                            multiple="multiple"
                                            onChange={this.handleChangeCheckbox}
                                            
                                        />
                                        <span className="checkmark"></span>
                                        <span className="text">Google Ad Words</span>
                                    </label>

                                    <label className="checkbox--input">
                                        <input
                                            value="hosting"
                                            name="services"
                                            type="checkbox"
                                            data-name="hosting"
                                            checked={hosting}
                                            multiple="multiple"
                                            onChange={this.handleChangeCheckbox}
                                            
                                        />
                                        <span className="checkmark"></span>
                                        <span className="text">Hosting</span>
                                    </label>

                                    <label className="checkbox--input">
                                        <input
                                            value="consulting"
                                            name="services"
                                            type="checkbox"
                                            data-name="consulting"
                                            checked={consulting}
                                            multiple="multiple"
                                            onChange={this.handleChangeCheckbox}
                                            
                                        />
                                        <span className="checkmark"></span>
                                        <span className="text">Consulting</span>
                                    </label>
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
                                    <span className="floating-label">Additional Comments</span>
                                    <span className="error" id="messageError"></span>
                                </div>

                                <div className="col-full button-holder">
                                    <button type="submit" id="hireUsSubmit">Send Message</button>
                                </div>
                            </>
                            }
                            {!showForm &&
                                <>
                                    <div cass="hire-us--submitted">
                                        <p>{thankYouMessage}</p>
                                    </div>
                                </>
                            }
                        </form>
                        
                    </div>
                </section>


                <Customers
                    button="See our customers"
                    buttonLink="/past-projects/"
                />


                <ReviewsLarge />

                <FooterCta />

                <Footer />
            </>
        )
    }
} 

export default HireUs