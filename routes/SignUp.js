var express = require('express');
var router = express.Router();
const acc = require('../controllers/account.controller')

/* GET home page. */
router.get('/',acc.signupLayout);
router.post('/',acc.signup);

module.exports = router;