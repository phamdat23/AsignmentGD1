var express = require('express');
var router = express.Router();
const product = require('../controllers/listProduct.controller')

/* GET home page. */
router.get('/', product.getListProduct2)
router.post('/', product.addProduct);
router.get('/',product.put);
router.get('/',product.delete)
module.exports = router;