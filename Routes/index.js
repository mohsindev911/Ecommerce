const express=require('express');
const isLoggedin = require('../Middlewares/isLoggedin');
const router=express.Router();
const ProductModel=require('../Models/product-Model')

router.get('/', function(req, res){
    let error=req.flash('error')
    res.render("index",{error})
})
router.get('/shop', isLoggedin , async function(req, res){
    let createdProduct = await ProductModel.find()
    res.render("shop",{createdProduct});
});

module.exports=router