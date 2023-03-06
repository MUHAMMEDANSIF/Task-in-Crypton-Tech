import {
    validateopeAccount,
    validateupdateKYC,
    validatedepositMoney,
    validatewithdrawMoney,
    validatereceiveMoney,
    validateprintStatement,
    validatecloseAccount,
    validatetransferMoney
} from '../validation/req.body.validating.js'
import accountSchema from "../model/account.schema.js";
import transactionSchema from "../model/transaction.schema.js";
import bcrypt from 'bcrypt'

const openAccount = async (req,res) => {
    try{

        validateopeAccount(req.body);

        req.body.password = await bcrypt.hash(req.body.password,10)

        const newdata = new accountSchema(req.body);
        const result = await newdata.save();

        res.status(200).json({data:result});

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const updateKYC = async (req,res) => {
    try{

         validateupdateKYC(req.body);
         const data = req.body;
         const verification_result = await routeverification(data.email,data.password)

         if(!verification_result?.error){
           
            const result = await accountSchema.findOneAndUpdate({email:data.email},{
                $set:{
                    dob:data.dob,
                    adharNo:data.adharNo,
                    panNo:data.panNo,

                }
            })

        res.status(200).json({data:result});

         }else{
            res.status(404).json({error:verification_result});
         }

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const depositMoney = async (req,res) => {
    try{

         validatedepositMoney(req.body);
         const data = req.body;
         const verification_result = await routeverification(data.email,data.password)

         if(!verification_result?.error){
           
            const uploaddata = {
                userid:verification_result._id,
                transactionType:'cash deposit',
                amount:data.amount,
            }

            const newdata = new transactionSchema(uploaddata);
            const result = await newdata.save();

            res.status(200).json({data:result});

         }else{
            res.status(404).json({error:verification_result});
         }

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const withdrawMoney = async (req,res) => {
    try{

         validatewithdrawMoney(req.body);
         const data = req.body;
         const verification_result = await routeverification(data.email,data.password)

         if(!verification_result?.error){

            const uploaddata = {
                userid:verification_result._id,
                transactionType:'cash withdraw',
                amount:data.amount,
            }

            const newdata = new transactionSchema(uploaddata);
            const result = await newdata.save();

            res.status(200).json({data:result});
           
         }else{
            res.status(404).json({error:verification_result});
         }

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const transferMoney = async (req,res) => {
    try{

         validatetransferMoney(req.body);
         const data = req.body;
         const verification_result = await routeverification(data.email,data.password)

         if(!verification_result?.error){

            const uploaddata = {
                userid:verification_result._id,
                transactionType:'cash transfer',
                amount:data.amount,
                toId:data.toId
            }

            const newdata = new transactionSchema(uploaddata);
            const result = await newdata.save();

            res.status(200).json({data:result});
           
         }else{
            res.status(404).json({error:verification_result});
         }

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const receiveMoney = async (req,res) => {
    try{

         validatereceiveMoney(req.body);
         const data = req.body;
         const verification_result = await routeverification(data.email,data.password)

         if(!verification_result?.error){

            const uploaddata = {
                userid:verification_result._id,
                transactionType:'cash receive',
                amount:data.amount,
                fromId:data.fromId
            }

            const newdata = new transactionSchema(uploaddata);
            const result = await newdata.save();

            res.status(200).json({data:result});
           
         }else{
            res.status(404).json({error:verification_result});
         }

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const printStatement = async (req,res) => {
    try{

         validateprintStatement(req.body);
         const data = req.body;
         const verification_result = await routeverification(data.email,data.password)

         if(!verification_result?.error){
            
            const result = await transactionSchema.aggregate([
                {
                    $match:{
                        userid:verification_result._id.toString()
                    }
                },{
                    $group:{
                        _id:'$transactionType',
                        total_balance:{$sum:'$amount'}
                    }
                },{
                    $sort:{
                        _id:-1
                    }
                }
            ])
            const available_balance = result[0].total_balance + result[1].total_balance
            const statement = {
                User:verification_result,
                transaction:result,
                available_balance,
            }
           res.status(200).json(statement);
         }else{
            res.status(404).json({error:verification_result});
         }

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const closeAccount = async (req,res) => {
    try{

         validatecloseAccount(req.body);
         const data = req.body;
         const verification_result = await routeverification(data.email,data.password)
        
         if(!verification_result?.error){
           
            const result = await accountSchema.findOneAndUpdate({email:data.email},{
                $set:{
                    accountstatus:false
                }
            })
           
            if(result){
                res.status(200).json({success:'account close successfully'})
            }
         }else{
            res.status(404).json({error:verification_result});
         }

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const routeverification = async (email,password) => {
  try{

     const User = await accountSchema.findOne({email:email})

     if(!User?.accountstatus){
       return {error:'this account is closed'}
     }else if(User){
        const password_checking = await bcrypt.compare(password,User.password);

        if(password_checking){
          return User;
        }else{
         return {error:'password is not correct'}
        }
     }else{
        return {error:'No account found please create one'}
     }

  }catch(err){
    return err.message || err;
  }
}

export {
    openAccount,
    updateKYC,
    depositMoney,
    withdrawMoney,
    receiveMoney,
    transferMoney,
    printStatement,
    closeAccount
}
