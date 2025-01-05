const axios = require('axios');
const { APIResponse } = require("../utils/helperFunctions");
const Nodemailer = require('nodemailer');

module.exports = {
    authenticate: async (req, res, next) => {
        const {
            server,
            port,
            email,
            password
        } = req.body;

        try {

            const payload = {
                host: server,
                port,
                // tls: false,
                secureConnection: true,
                auth: {
                    user: email,
                    pass: password,
                },

                tls: {
                    rejectUnauthorized: true,
                    // ciphers: 'SSLv3'
                },
            };

            const transporter = Nodemailer.createTransport(payload);


            transporter.verify((error, success) => {
                if (error) {
                    console.log('Error while verifying outGoing Server: ', error);
                    return APIResponse({
                        res,
                        message: "Authentication failed",
                        code: 500,
                        data: {
                            error
                        },
                    });
                } else {
                    return APIResponse({
                        res,
                        message: "Authentication successful",
                        data: {
                        },
                    });
                }
            });

        } catch (e) {

            return APIResponse({
                res,
                message: "Server side error",
                code: 500,
                data: {
                    error: e
                },
            });
        }
    },
    sendMail: async (req, res, next) => {
        const {
            server,
            port,
            password,
            from,
            to,
            subject,
            body,
            name
        } = req.body;

        try {

            const payload = {
                host: server,
                port,
                // tls: false,
                secureConnection: true,
                auth: {
                    user: from,
                    pass: password,
                },

                tls: {
                    rejectUnauthorized: true,
                    // ciphers: 'SSLv3'
                },
            };

            const transporter = Nodemailer.createTransport(payload);

            const mailOptions = {
                from: {
                    name,
                    address: from,
                },
                to,
                subject,
                html: body || '',
                replyTo: from,
                attachments: []
            };

            await transporter.sendMail(mailOptions).then(info => {

                console.log('infoooooo ::: ', { info })
                console.log(`Email sent to ${to}: ${info.messageId}`);
                return APIResponse({
                    res,
                    message: "Authentication successful",
                    data: {
                    },
                });
            }).catch(e => {
                console.log('Error while sending mail: ', e)
                return APIResponse({
                    res,
                    message: "Server side error",
                    code: 500,
                    data: {
                        error: e
                    },
                });
            })
        } catch (e) {
            console.log({ e })
            return APIResponse({
                res,
                message: "Server side error",
                code: 500,
                data: {
                    error: e
                },
            });
        }
    }
};

