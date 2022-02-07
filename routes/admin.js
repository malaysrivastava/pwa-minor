const express = require('express')
const router = express.Router();
const authAdmin = require('../middleware/auth')

const {allUsers,allProducts,delProducts} = require('../controllers/admin')

router.get('/users',authAdmin,allUsers);

router.get('/products',authAdmin,allProducts);

router.delete('/delPro',authAdmin,delProducts);

module.exports = router;