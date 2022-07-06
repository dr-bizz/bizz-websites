const express = require('express')
const next = require('next')
const bodyParser = require('body-parser') // For Passing data through the request
require("dotenv").config();
    
// Grab server keys
const port = process.env.PORT || 3000
const API_URL = process.env.API_URL || 'http://localhost:1337'
const bizz_websites_email = process.env.BIZZ_WEBSITES_EMAIL

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Email senter
const mailer = require('./server-side/mailer')
    
app.prepare()
.then(() => {
    const server = express()

    // MIDDLEWARE
    server.use(bodyParser.json())
        
    server.get('*', (req, res) => {
        return handle(req, res)
    })

    // Contact Submit
    server.post('/api/contact/', async (req, res) => {
        console.log("Contact Submited: ", req.body)
        const {fname, lname, email, phone} = req.body
        const name = fname + " " + lname
        const to = bizz_websites_email
        const subject = `Contact Submission on Bizz Websites | From ${name}`
        const message = "Hey Daniel,<br/>I hope you are well.<br/> We have had another contact form submission, please read the below:<br/><br/><b>Name:</b>" + name + "<br/><br/><b>Message</b><br/>" +  req.body.message + "<br/><br/><b>Phone:</b>" + phone + "<br/><br/><b>Email:</b>" + email
        mailer({ to, email, subject, name, html: message }).then(() => {
            console.log('successfully sent message')
            res.status(200).send(req.body)
        }).catch((error) => {
            console.log('failed to send', error)
            res.status(201).send("failed")
        })
    })

    // Hire US Submit
    server.post('/api/hireus/', async (req, res) => {
        console.log("Hire Bizz Websites Submited: ", req.body)
        const {fname, lname, email, phone, company, website, howheard, services} = req.body
        const name = fname + " " + lname
        const to = bizz_websites_email
        const subject = `Hire Bizz Websites Submission | From ${name}`
        let message = "Hey Daniel,<br/>I hope you are well.<br/> Someone has requested to work with you, please read the below:"
        message = message + "<br/><br/><b>Name: </b>" + name
        message = message + "<br/><br/><b>Email: </b>" + email
        message = message + "<br/><br/><b>Phone: </b>" + phone
        message = message + "<br/><br/><b>Company: </b>" + company
        message = message + "<br/><br/><b>Website: </b>" + website
        message = message + "<br/><br/><b>How Heard: </b>" + howheard
        message = message + "<br/><br/><b>Services: </b><br/>" + services
        message = message + "<br/><br/><b>Message:</b><br/>" +  req.body.message
        mailer({ to, email, subject, name, html: message }).then(() => {
            console.log('successfully sent message')
            res.status(200).send(req.body)
        }).catch((error) => {
            console.log('failed to send', error)
            res.status(201).send("failed")
        })
    })
        
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on ${port}`)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})