import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    name:String,
    email:String,
    dob:Date,
    gender:String,
    mobile:Number,
    address:String,
    adharNo:Number,
    panNo:String,
    accountstatus:{
        type:Boolean,
        default:true
    },
    password:String
}, { timestamps: true })

export default mongoose.model('account',accountSchema);
