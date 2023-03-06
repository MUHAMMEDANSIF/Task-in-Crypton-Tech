import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    dob:Date,
    gender:String,
    city:String,
    state:String,
    mobile:Number,
    password:String
},{ timestamps: true })

export default mongoose.model('user',UserSchema);
