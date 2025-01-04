const router = require("express").Router();
const mailer = require('./mailer');

router.use("/mailer", mailer);

module.exports = router;
