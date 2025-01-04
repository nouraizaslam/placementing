const router = require("express").Router();
const { requestValidator } = require("../../../middlewares");

const { authV, sendV } = require("./validations");

const {
  authenticate,
  sendMail
} = require("../../../controllers/mailer.controller");

router.post('/authenticate', requestValidator(authV), authenticate)
router.post('/send-mail', requestValidator(sendV), sendMail)

module.exports = router;
