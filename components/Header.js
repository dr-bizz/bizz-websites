import {handleScroll2} from '../utils/scroll'
import Link from 'next/link'

class Header extends React.Component {
    state = {
        active: false,
        scrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {
        // var doc = document.documentElement;
        // var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        // var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        var scrolled = handleScroll2("top","","")

        if (scrolled[0] > 50) {
            this.setState({
                scrolled: true
            });
        } else {
            this.setState({
                scrolled: false
            });
        }
    }

    render () {
        const {active, scrolled} = this.state
        return (
            <header className={scrolled ? "cf scrolled" : "cf"}>
                <div className={active ? "main-header cf page-container open-navigation" : "main-header cf page-container"}>
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="../logo.svg" alt="Bizz Websites | Creative Web Solutions" />
                            </a>
                        </Link>
                    </div>

                    <div className="navigation-tablet">
                        <div className="nav-icon" id="navToogleJS" onClick={() => this.setState({active: !this.state.active})}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className="navigation">
                    <ul>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className="parent">
                            <Link href="/services">
                                <a>Services</a>
                            </Link>
                            <ul>
                                <li>
                                    <Link href="/services">
                                        <a>All Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/web-development">
                                        <a>Web Development</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/seo">
                                        <a>SEO</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/google-adwords">
                                        <a>Google Ad Words</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hosting">
                                        <a>Hosting</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/consulting">
                                        <a>Consulting</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="parent">
                            <Link href="/past-projects">
                                <a>Case Studies</a>
                            </Link>
                            <ul>
                                <li>
                                    <Link href="/past-projects">
                                        <a>Past Projects</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/current-projects">
                                        <a>Current Projects</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/reviews">
                                <a>Reviews</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/hire-bizz-websites">
                                <a>Hire Us</a>
                            </Link>
                        </li>
                    </ul>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header

