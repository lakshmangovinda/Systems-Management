const express = require('express');
const router = express.Router();

const user = require('../controller/usercontroller');
const validate = require('../auth/token.validate');


router.route("/user", validate).get(user.getuser);//fetch all user data
router.route("/userlogin").post(user.postuser);//user registration
router.route("/userbyemail", validate).get(user.getuserbyemail);//fetch user by email
router.route('/login').post(user.login);//user login
router.route('/postsystem').post(user.postsystem);
router.route('/getsystem/:name').get(user.getsystem);//get system by lab
router.route('/getbyid/:id').get(user.getbyid);//get system by id
router.route('/editsystem/:id').put(user.editsystem);//edit system


 module.exports = router;