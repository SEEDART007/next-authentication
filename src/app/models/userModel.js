import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
username:{
    type:String,
    unique:true,
    required:['true','please provide username']
},
email:{
type:String,
unique:true,
required:['true','please provide email']
},
password:{
    type: String,
    required:['true','please provide password']
},
isVerified:{
    type:Boolean,
    default:false
},
isAdmin:{
    type:Boolean,
    default:false
},
forgotPasswordToken : String,
forgotPasswordTokenExpiry: Date,
verifyToken: String,
verifyTokenExpiry:Date,
})
const User = mongoose.models.users || mongoose.model('users',userSchema);
export default User;