const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const Product = require("../models/Product")

router.post('/addP',auth, async (req,res)=>{
    console.log(req.body) 
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

router.put('/editP/:id',auth,async (req,res)=>{
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

router.get('/',auth,async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const userID = req.query.user_id;
    try {
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(5)
        } else if(qCategory){
            products = await Product.find({
                categories :{
                    $in: [qCategory],
                },
            });
        }else if(userID){
            products = await Product.find({
                 userID:userID,
            });
        } 
        else{
            products = await Product.find();
        }
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json(err);
    }
})

router.get('/:id',auth,async (req,res)=>{
    try {
        let product;
        product = await Product.find({
            _id:req.params.id,
       });
       return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(err);
    }
})

module.exports = router;