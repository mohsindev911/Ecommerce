const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    Name:String,
    img:String,
    price:Number,
    Discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    pannelcolor:String,
    textcolor:String
});
module.exports=mongoose.model('product',ProductSchema)