const express=require('express');
const router=express.Router();

router.get('/', function(req, res){
    res. send('its user working')
})

module.exports=router