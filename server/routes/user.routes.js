const express = require('express');
const router = express.Router();

const user = require('../controller/usercontroller');
const validate = require('../auth/token.validate');


router.route("/user").get(user.getuser);
router.route("/userlogin").post(user.postuser);
router.route("/userbyemail").get(user.getuserbyemail);
router.route('/login').post(user.login);


 module.exports = router;