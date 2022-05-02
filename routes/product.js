const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const auth = require('../middleware/auth')
const Product = require("../models/Product")
const Wishlist = require("../models/Wishlist")

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

router.delete('/delP/',auth,async (req,res)=>{
    try {
        const id = req.query.id;
        await Product.findByIdAndDelete(id);
        return res.status(200).json("Product has been deleted")
    } catch (error) {
        return res.status(500).json(err)
    }
})

router.put('/editP/',auth,async (req,res)=>{
    try {
        const id = req.query.id;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
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

router.get('/idby',auth,async (req,res)=>{
    try {
        let product;
        product = await Product.find({
            _id:req.query.id,
       });
       return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(err);
    }
})

//Wishlist-part
       
                

router.post('/addW',auth, async (req,res)=>{

    const userID = req.body.userID;
 
     Wishlist.findOne({userID:userID}).exec((err,user)=>{
         if(err){
             return res.status(400).json({
                 error:"Something went wrong..."
             })
         } else{
             if(user){
                 return res.json({
                     success: false,
                     message: "Item already in Wishlist",
                 });
             } else{
                 const newWish = new Wishlist(req.body)
                 try {
                      const savedWish = newWish.save();
                      res.status(200).json({
                        success: true,
                        message: "Added to Wishlist",
                    });
                  } catch (err) {
                      res.status(500).json(err);
                  }

                     }
                } 
            });
    
});

router.delete('/delW',auth,async (req,res)=>{
    console.log(req.query.id)
    try {
        const id = req.query.id;
        await Wishlist.findByIdAndDelete(id);
        return res.status(200).json("Product has been deleted")
    } catch (error) {
        return res.status(500).json(err)
    }
})

router.get('/Widby',auth,async (req,res)=>{
    try {
        let product;
        product = await Wishlist.find({
            userMail:req.query.userMail,
       });
       return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(err);
    }
})
module.exports = router;