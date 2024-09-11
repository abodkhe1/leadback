const express = require('express');
const router = express.Router();
const { saveProduct, upload, getAllProduct } = require('../controller/productCtrl');
const { saveLead, updateLead, findOne,deleteOne, findAll } = require('../controller/leadCtrl');

// Product Router
router.post('/add-product', upload.single('productImage'), saveProduct);
router.get('/getAllProduct', getAllProduct);


// Lead router
router.post('/saveLead', saveLead);
router.put('/updateLead/:id', updateLead);
router.get('/findOne/:id', findOne);
router.delete('/deleteOne/:id', deleteOne);
router.get('/findAll', findAll);


module.exports = router;
