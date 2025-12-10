const mongoose=require('mongoose');

const AdminSchema=mongoose.Schema({
    Name:String,
img:String,
email:String,
password:String,
products:{
    type:Array,
    default:[]
}
});
module.exports=mongoose.model('admin',AdminSchema)