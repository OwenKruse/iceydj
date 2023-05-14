// pages/api/sendEmail.js

const nodemailer = require('nodemailer');

// @ts-ignore
export default async function handler(req, res) {


    if (req.method === 'POST') {
        let { to, dateString } = req.body;

        const transporter = nodemailer.createTransport({
            host: "mail.privateemail.com",
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'booking@iceydj.com',
                pass: '4Frozen9%'
            }
        });
        // Remove the part after the comma in dateString
        dateString = dateString.split(',')[0];
        const mailOptions = {
            from: 'noreply@iceydj.com',
            to: to,
            subject: 'Confirm booking for: ' + dateString,
            text: 'This email is an automated confirmation of your booking for ' + dateString +
                '. Please wait for out team to reach out to you to confirm the booking, verify details, and discuss payment.' +
                'If you have any questions, please contact us at booking@iceydj.com.' + '\n\n' +
                to
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent: ' + info.response });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email: ' + error });
        }
    } else {
        res.status(405).json({ error: 'We only accept POST' });
    }
}
