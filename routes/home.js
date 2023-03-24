var express = require('express');
var router = express.Router();
const listProduct= require('../controllers/listProduct.controller')
const user = require('../controllers/user.controller')

/* GET home page. */
router.get('/', listProduct.getListProduct);
router.get('/', user.countUser);
router.post('/',listProduct.addProduct);
module.exports = router;