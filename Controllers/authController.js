const UserModel=require('../Models/user-Model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {generateToken}=require('../Utils/generateToken')



module.exports.registerUser= async function(req, res){
    try{
         let {UserName,email,password}=req.body
         let user= await UserModel.findOne({email:email})
            if(user) return res.status(400).send("user already exists please Login")
            bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
        let CreatedUser= await UserModel.create({
UserName,
email,
password:hash
    });
let token = generateToken(CreatedUser)
res.cookie('token',token)
res.send("successfuly created user")
    });
});  
         }
       
    catch(err){
    if(err) return res.send(err.message)
    }

}

module.exports.loginUser= async function(req, res){
    try{
     let {email,password}=req.body;
     let user= await UserModel.findOne({email:email})
        if(!user) return res.status(400).send("user not found please register")
        bcrypt.compare(password, user.password, function(err, result) {
if(result){
    let token = generateToken(user)
    res.cookie('token',token)
    res.send("login successful")
}
else{
    res.status(400).send("Email or Password is incorrect")
}
});    
    }
    catch(err){
    if(err) return res.send(err.message)
    }
}