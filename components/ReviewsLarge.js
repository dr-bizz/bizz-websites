import Link from 'next/link'

class ReviewsLarge extends React.Component {
    handleClick = (e) => {
        // Get all options and remove the active class
        var options = document.getElementsByClassName("reviews--toggle--option")
        for(var i = 0; i < options.length; i++) {
            options[i].classList.remove("active");
        }
        // Set active class on the clicked option
        e.target.classList.add("active")

        // Add this option data-review tag to be set as the graphic's ID
        var graphics = document.getElementsByClassName("reviews--section--review");
        for(var i = 0; i < graphics.length; i++) {
            graphics[i].classList.remove("active");
        }
        var graphic = document.getElementsByClassName(e.target.dataset.review + "-review");
        graphic[0].classList.add("active")
    }

    handleChange = (e) => {
        console.log("Selectbox Change", e.target.value)

        // Add this option data-review tag to be set as the graphic's ID
        var graphics = document.getElementsByClassName("reviews--section--review");
        for(var i = 0; i < graphics.length; i++) {
            graphics[i].classList.remove("active");
        }
        var graphic = document.getElementsByClassName(e.target.value + "-review");
        graphic[0].classList.add("active")
    }

    render() {
        
        return (
            <section className={"changed-my-business " + this.props.class}>
                <div className="page-container">
                    <h2 className="section--head">
                        <img src="../icon-stats.svg" alt="How Bizz Websites changed my website" />
                        <span>How Bizz Websites changed my website</span>
                    </h2>
                    <p className="section--body--text">Below are reviews of how Bizz websites have improved their client’s websites.</p>

                    <div className="reviews cf">
                        <div className="reviews--toggle--mobile">
                        <select className="white-bg" onChange={((e) => this.handleChange(e))}>
                            <option value="sbk">Southbrook Tech INC</option>
                            <option value="kairos">Kairos 7</option>
                            <option value="target">Target Estates</option>
                            <option value="worldrace">World Race</option>
                        </select>

                        <Link href="/past-projects">
                            <a className="reviews--toggle--link link-text">View All Clients</a>
                        </Link>

                        </div>
                        <div className="reviews--section">
                            <div className="reviews--section--graphic">
                                <div className="sbt-review reviews--section--review active">
                                    <div className="reviews--section--images">
                                        <img src="../icon-SBK-large.svg" className="logo" alt="Southbrook Technologies INC" />
                                        <img src="../icon-5-stars.svg" alt="5 stars review" className="review" />
                                    </div>
                                    <p>My site was almost 15 years old and badly in need of updating. It looked “old fashioned”. Bizz Websites were very responsive. They listened and worked with us to create a new site.</p>
                                    <p>Since the launch of the website, we are getting lots of compliments, especially from the younger generation of customer engineers I work with.</p>
                                    <p>There were a few typos, but these were all corrected quickly. We can’t wait to add more content to the new site!</p>
                                </div>
                                <div className="kairos-review reviews--section--review">
                                    <div className="reviews--section--images">
                                        <img src="../customer-Kairos-color.svg" className="logo" alt="Kairos 7" />
                                        <img src="../icon-5-stars.svg" alt="5 stars review" className="review" />
                                    </div>
                                    <p>Bizz Websites created a new site for us and a new brand. Since the launch of the website, we have been receiving great feedback from clients, and we have been more productive.</p>
                                    <p>There were a few hiccups along the way, but Bizz Websites handled them very well.</p>
                                    <p>Overall, great customer service and transparency.</p>
                                </div>
                                <div className="target-review reviews--section--review">
                                    <div className="reviews--section--images">
                                        <img src="../customer-Target-color.svg" className="logo" alt="Target Estates" />
                                        <img src="../icon-5-stars.svg" alt="5 stars review" className="review" />
                                    </div>
                                    <p>Bizz Websites are very good at communicating and quickly responding to issues. Overall I would rate the experience of working with Bizz Websites as very good.</p>
                                </div>
                                <div className="worldrace-review reviews--section--review">
                                    <div className="reviews--section--images">
                                        <img src="../customer-Bournemouthosteopathic-color.png" className="logo" alt="Bournemouth Osteopathic & Cranial Centre" />
                                        <img src="../icon-5-stars.svg" alt="5 stars review" className="review" />
                                    </div>
                                    <p>Our old website was out of date. Bizz Websites are fantastic at communicating and have extremely quick response times.</p>
                                    <p>Since the launch of the website, we get very positive feedback all around which has improved business.</p>
                                    <p>I would highly recommend Bizz Websites.</p>
                                </div>
                            </div>
                        </div>

                        <div className="reviews--toggle">
                            <div data-review="sbt" className="active reviews--toggle--option" onClick={((e) => this.handleClick(e))}><img src="../tick.svg" alt="icon" />Southbrook Tech INC</div>
                            <div data-review="kairos" className="reviews--toggle--option" onClick={((e) => this.handleClick(e))}><img src="../tick.svg" alt="icon" />Kairos 7</div>
                            <div data-review="target" className="reviews--toggle--option" onClick={((e) => this.handleClick(e))}><img src="../tick.svg" alt="icon" />Target Estates</div>
                            <div data-review="worldrace" className="reviews--toggle--option" onClick={((e) => this.handleClick(e))}><img src="../tick.svg" alt="icon" />BOCC</div>
                            <Link href="/past-projects">
                                <a className="reviews--toggle--link link-text">View All Clients</a>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default ReviewsLarge