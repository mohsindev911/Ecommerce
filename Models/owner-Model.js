const mongoose=require('mongoose');


const OwnerSchema=mongoose.Schema({
    Name:String,
img:String,
email:String,
password:String,
products:{
    type:Array,
    default:[]
}
});
module.exports=mongoose.model('owner',OwnerSchema)