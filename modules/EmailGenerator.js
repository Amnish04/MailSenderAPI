const nodemailer = require('nodemailer');
const { QueryTypes } = require('./enums');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'amnishsingh04@outlook.com',
        pass: 'Amnish_payne3'
    }
});

// Utility Class
class EmailGenerator {

    constructor(from = 'amnishsingh04@outlook.com', to = 'amnishsingh04@gmail.com') {
        this.from = from;
        this.to = to;

        this.messageOptions = {
            from: this.from,
            to: this.to,
            subject: null,
            text: null
        };
    }

    #generateMessage(options) {
        this.messageOptions.subject = "Reply to your portfolio!";
        this.messageOptions.text = `
            Respondent Name: ${options.name}
            Email: ${options.email}
            Address: ${options.address}
            City: ${options.city}
            Postal: ${options.postal}
            Query Type: ${QueryTypes[options.queryType]}
            ${options.queryType === 3 ? "Payrate " + options.payRate : ''}
            **********************
            Message: ${options.message.trim()}
            **********************
            Feedback: ${options.feedback}
        `;
    }

    sendEmail(options) {
        this.#generateMessage(options);

        transporter.sendMail(
            this.messageOptions,
            (err, info) => {
                if (err) {
                    console.log(err);
                }
                console.log(info.response);
            }
        )
    }
}

module.exports = new EmailGenerator();
