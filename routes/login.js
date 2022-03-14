var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController')

router.get('/', loginController.login)

module.exports = router;
