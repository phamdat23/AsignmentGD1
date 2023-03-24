var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/',userController.listUser);
router.post('/', userController.add);
router.post('/',userController.put);
router.post('/', userController.delete);

module.exports = router;
