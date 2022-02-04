const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const Product = require("../models/Product")

router.post('/addP',auth, async (req,res)=>{
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/delP/:id',auth,async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json("Product has been deleted")
    } catch (error) {
        return res.status(500).json(err)
    }
})

router.put('/edP/:id',auth,async (req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set : req.body,
            },
            { new:true }
        );
        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json(err);
    }
})

module.exports = router;