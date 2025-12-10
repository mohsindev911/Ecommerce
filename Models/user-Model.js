const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    UserName:String,
    email:String,
    password:String,
    img:String,
    contact:Number,
    cart:{
        type:Array,
        default:[]
    },
    orders:{
type:Array,
default:[]
    },
    IsAdmin:Boolean,
});
module.exports=mongoose.model('user',UserSchema)