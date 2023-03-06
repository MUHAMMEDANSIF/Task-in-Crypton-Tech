import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    userid:String,
    transactionType:String,
    amount:Number,
    fromId:String,
    toId:String,
}, { timestamps: true })

export default mongoose.model('transaction',transactionSchema);
