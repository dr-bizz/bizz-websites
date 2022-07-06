import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="page-container cf">
                <div className="footer--left">
                <img src="../logo.svg" alt="Bizz Websites" />
                <form>
                    <div className="form-group">
                        <input type="text" placeholder=" " className="input" name="email" />
                        <span for="email" className="floating-label">Email Address</span>
                        <span className="error-text" id="emailError">Please enter a valid email address</span>
                    </div>
                    <input type="submit" value="Subscribe" />
                </form>
                </div>
                <div className="footer--right">
                    <ul>
                        <li><h4>Products</h4></li>
                        <li>
                            <Link href="/hire-bizz-websites">
                                <a>Hire Bizz Websites</a>
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
                    <ul>
                        <li><h4>Company</h4></li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/blog">
                                <a>Bizz Websites Blog</a>
                            </Link>
                        </li> */}
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
                        <li>
                            <Link href="/reviews">
                                <a>Reviews</a>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li><h4>Resources</h4></li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sitemap.xml">
                                <a>Sitemap</a>  
                            </Link>
                        </li>      
                    </ul>
                </div>
            </div>
        </footer>
    )
}