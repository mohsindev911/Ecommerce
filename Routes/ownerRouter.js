const express=require('express');
const router=express.Router();
const ownerModel = require('../Models/owner-Model');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.get('/', function(req, res){
    res.render('ownerForm')
})

if(process.env.NODE_ENV==='development'){
router.post('/create', async (req, res)=>{
let{Name, email, password }=req.body;
let owner= await ownerModel.find()
if(owner.length > 0)
    return res.status(500).send('you cannot allow to make a owner its already make')
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt,  async (err, hash) =>{
        let createdOwner= await ownerModel.create({
Name,
email,
password:hash
})

res.send(createdOwner)
    });
});

})
}


  
   




module.exports=router