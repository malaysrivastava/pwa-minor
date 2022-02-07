const User = require('../models/user')
const Product = require('../models/Product')



var mailgun = require('mailgun-js')({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});


 exports.allUsers = async (req,res)=>{
       let users;
       try {
           users = await User.find();
           
           return res.status(200).json(users);
       } catch (error) {
           return res.status(500).json(err);
       }
 }


 exports.allProducts = async (req,res)=>{
    let products;
    const qCategory = req.body.category;
    const Mail = req.body.usermail;
    try {
        if(qCategory && Mail){
            products = await Product.find({
                categories :{
                    $in: [qCategory],
                },
                userMail : Mail,
            });
        }else if(qCategory){
            products = await Product.find({
                categories :{
                    $in: [qCategory],
                },
            });
        } else if(Mail){
            products = await Product.find({
                userMail:Mail,
           });
        }else{
            products = await Product.find();
        }
       
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json(err);
    }
}

exports.delProducts = async (req,res)=>{
    try {
        let product;
        product = await Product.find({
            _id:req.body.id,
        })
        
        const email = product[0].userMail;
        await Product.findByIdAndDelete(req.body.id);
        var data = {
            from: 'Team Need-For-Juit <191352@juitsolan.in>',
            to: email,
            subject: 'Product removed',
            text: 'Your product contains abusive contents, it has been deleted.'
          };
          mailgun.messages().send(data, function (error, body) {
            if(error){
                console.log(error);
            }
          console.log(body);
        });
        return res.status(200).json("Product has been deleted")
    } catch (error) {
        return res.status(500).json(err)
    }
}