const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anup4khandelwal@gmail.com',
        subject: 'Welcome to my Task App',
        text: `Welcome to the app, ${name}, Let me know how you get along with the app`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anup4khandelwal@gmail.com',
        subject: 'Account Cancelled',
        text: `GoodBye ${name}, Let me know how you get along with the app`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}