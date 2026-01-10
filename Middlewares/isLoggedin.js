const jwt=require('jsonwebtoken')
const UserModel=require('../Models/user-Model')

module.exports=async function (req, res, next){
    if(!req.cookies.token){
       req.flash('error','please Login')
       return res.redirect('/')
    }
    try{
        let decoded= jwt.verify(req.cookies.token,process.env.JWT_KEY)
        let user= await UserModel.findOne({emai:decoded.email}).select('-password')
        req.user=user
        next()
    }
    catch(err){
        if(err){
            req.flash('error','something went wrong please Login again')
            return res.redirect('/')
        }
    }
}