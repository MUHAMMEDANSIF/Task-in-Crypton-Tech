import userSchema from "../model/user.schema.js";
import bcrypt from 'bcrypt'

const registernewuser = async (req,res) => {
    try{
        
      validateregisternewuser(req.body);

      req.body.password = await bcrypt.hash(req.body.password,10)

      const newdata = new userSchema(req.body);
      const result = await newdata.save();

      res.status(200).json({data:result});
        
    }catch(err){
        res.status(200).json({error:err.message || err})
    }
}

const alluserslist = async (req,res) => {
    try{

      const result = await userSchema.find({}).sort({createdAt:-1})

      res.status(200).json({data:result});
        
    }catch(err){
        res.status(200).json({error:err.message || err})
    }
}
const updateUser = async (req,res) => {
    try{

       validateupdateUser(req.body);

       const result = await userSchema.findOneAndUpdate({email:req.body.email},{
        $set:{
            mobile:req.body.mobile,
            name:req.body.name,
            dob:req.body.dob,
            gender:req.body.gender,
        }
       })

      res.status(200).json({data:result})

    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const deleteUser = async (req,res) => {
    try{

        if(!req.body.email){
            throw 'email not found'
        }

        const result = await userSchema.deleteOne({email:req.body.email})

        res.status(200).json({data:result})
    }catch(err){
        res.status(500).json({error:err.message || err})
    }
}

const validateupdateUser = (payload) => {
    if(!payload?.name){
        throw 'name is not found'
    }

    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.mobile){
        throw 'mobile is not found'
    }

    if(!payload?.dob){
        throw 'data of birth is not found'
    }

    if(!payload?.gender){
        throw 'gender is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }
}

const validateregisternewuser = (payload) => {
    if(!payload?.name){
        throw 'name is not found'
    }

    if(!payload?.email){
        throw 'email is not found'
    }

    if(!payload?.mobile){
        throw 'mobile is not found'
    }

    if(!payload?.dob){
        throw 'data of birth is not found'
    }

    if(!payload?.gender){
        throw 'gender is not found'
    }

    if(!payload?.password){
        throw 'password is not found'
    }
}

export {
    registernewuser,
    alluserslist,
    updateUser,
    deleteUser
}
