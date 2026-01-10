const express=require('express');
const router=express.Router();
const UserModel=require('../Models/user-Model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.get('/', function(req, res){
    res.send('its user working')
})
router.post('/register', function(req, res){
    try{
         let {UserName,email,password}=req.body
              bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
        let CreatedUser= await UserModel.create({
UserName,
email,
password:hash
    });
let token = jwt.sign({ email, id:CreatedUser._id }, 'shhhhh');
res.cookie('token',token)
res.send("successfuly created user")
    });
});  
         }
       
    catch(err){
    if(err) return res.send(err.message)
    }

})





module.exports=router