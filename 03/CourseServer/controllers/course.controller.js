import courseSchema from "../models/course.schema.js";

const addnewcourse = async (req,res) => {
    try{
        validateaddnewcoures(req.body);
        console.log(req.body)
        const newdata = new courseSchema(req.body)
        const reusult = await newdata.save();
        if(reusult){
            res.status(200).json({data:reusult});
        }
    }catch(err){
        res.status(500).json({error:err.message || err})
    }


}

const allcourse = async (req,res) => {
    try{
        
        const result = await courseSchema.find({}).sort({createdAt:-1})
        
        res.status(200).json(result);

    }catch(err){
        res.status(500).json({error:err.message || err})
    }


}


const validateaddnewcoures = (payload) => {
   
    if(!payload?.coursename){
        throw 'course Name is not found'
    }

    if(!payload?.startAt){
        throw 'start date is not found'
    }

    if(!payload?.lessoncomplited){
        throw 'lesson complited is not found'
    }

    if(!payload?.duration){
        throw 'duration is not found'
    }
}

export {
    addnewcourse,
    allcourse
}
