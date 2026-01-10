const express=require('express');
const router=express.Router();
const OwnerModel=require('../Models/owner-Model')
const bcrypt=require('bcrypt')

router.get('/', function(req, res){
    res. send('its owner working')
})
if(process.env.NODE_ENV==='development'){
    router.post("/create", async function(req, res){
       let Owner= await  OwnerModel.find()
       if(Owner.length>0) return res.send("you cannot create another owner because already one exists")
       let {Name,email,password} =req.body
       bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
        let createdOwner= await OwnerModel.create({
                    Name,
                    email,
                    password:hash
    });
      res.send(createdOwner)
    });
});
    })
}






module.exports=router