const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        max:32
    },
    desc:{
        type:String,
        required:true,
        max:100
    },
    img:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    userID:{
        type:String,
        required:true
    },
    userMail:{
        type:String,
        required:true
      },
    address:{
        type:String,
        required:false
    },  
    userName:{
        type:String,
        required:true
    }  
},{timestamps:true})

module.exports = mongoose.model('Product',ProductSchema);