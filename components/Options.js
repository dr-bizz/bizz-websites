export default function Options(props) {
    return (
        <section className={"options " + props.class}>
            <div className="page-container">
                <h2 className="section--head">
                    <span>{props.title}</span>
                </h2>
                <p className="section--body--text">{props.para}</p>


                <div className="options--inner">
                    <div className="options--item">
                        <img src="../icon-php.svg" alt="PHP Virtual Private Server" />
                        <h2>PHP Virtual Private Server</h2>
                        <p>If you have a website built in PHP, which includes websites built on WordPress, Magento, Joomla and custom PHP web applications, we can host you. We host PHP websites on our Virtual Private Server (VPS), or if you prefer, we can host you on a high performance shared server.</p>
                        <a className="button  button--white" href="#phpserver">PHP Hosting</a>
                    </div>
                    <div className="options--item">
                        <img src="../icon-nodejs.svg" alt="Node JS Servers" />
                        <h2>Node JS Servers</h2>
                        <p>If your web application is built in NodeJS, we will host your website on either Heroku or Amazon Web Services (AWS). AWS is very high-performance and can easily be scalable to fit your needs. The Heroku hosting platform was created by Salesforce and uses AWS to host its website and web applications.</p>
                        <a className="button" href="#nodeserver">Node JS Hosting</a>
                    </div>
                </div>
            </div>
        </section>
    )
}