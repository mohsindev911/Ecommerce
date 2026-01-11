const express=require('express');
const router=express.Router();
const ProductModel=require('../Models/product-Model')
const upload=require('../Config/multer-config')

router.get('/', function(req, res){
    res. send('its product working')
})

router.post('/create',upload.single('img'), async function(req, res){
   try{
     let {Name,price,Discount,bgcolor,textcolor,pannelcolor}=req.body
  let createdProduct= await  ProductModel.create({
        Name,
        price,
        Discount,
        bgcolor,
        textcolor,
        pannelcolor,
        img:req.file.buffer
    })
req.flash("sucess","Product Added Successfully")
res.redirect('/shop')
}catch(err){
    res.send(err.message)
   }
})



module.exports=router