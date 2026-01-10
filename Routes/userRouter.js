const express=require('express');
const router=express.Router();
const {registerUser}=require('../Controllers/authController')
const {loginUser}=require('../Controllers/authController')

router.get('/', function(req, res){
    res.send('its user working')
});
// register route
router.post('/register',registerUser );

// Login route
router.post('/login', loginUser);





module.exports=router