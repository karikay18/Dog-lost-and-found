const mongoose=require('mongoose');
const custSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const custModel=mongoose.model("customers",custSchema)
module.exports=custModel