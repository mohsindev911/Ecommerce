const express=require('express');
const router=express.Router();
const {registerUser}=require('../Controllers/authController')

router.get('/', function(req, res){
    res.send('its user working')
})
router.post('/register',registerUser )





module.exports=router