var express = require('express');
var router = express.Router();
const acc = require('../controllers/account.controller')

/* GET home page. */
router.get('/',acc.layoutLogin);
router.post('/',acc.login)
module.exports = router;
