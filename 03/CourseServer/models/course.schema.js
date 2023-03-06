import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    coursename:String,
    startAt:Date,
    lessoncomplited:String,
    duration:String
},{ timestamps: true })

export default mongoose.model('course',courseSchema);
