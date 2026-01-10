const express=require('express');
const router=express.Router();
const {
    registerUser,
    loginUser,
    logoutUser
}
=require('../Controllers/authController')


router.get('/', function(req, res){
    res.send('its user working')
});
// register route
router.post('/register',registerUser );

// Login route
router.post('/login', loginUser);

// logout route
router.get('/logout', logoutUser);


module.exports=router