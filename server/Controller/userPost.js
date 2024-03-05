import postModel from "../Model/postSchema.js";

export const userpost=async(req,res)=>{
   try {
    const {caption,description,userId}=req.body
    await postModel.create({caption:caption,
        description:description,
        userId:userId,
        image:req.file
    })
    res.json({err:false})
   } catch (error) {
    console.log(error);
    res.json({err:true,error})
   }
}

export const getAllPosts=async(req,res)=>{
try {
    const {userId}=req.query
const result= await postModel.find({userId:userId}).lean()
if(result){
    res.json({err:false,result})
}else{
    res.json({err:true})
}
} catch (error) {
    console.log(error)
}
}
export const updatePost=async(req,res)=>{
    try {
        const {caption,description,userId,id}=req.body
        await postModel.updateOne({_id:id},{$set:{
                caption:caption,
                description:description,
                userId:userId,
                image:req.file
            }})
        res.json({err:false})
       } catch (error) {
        console.log(error);
        res.json({err:true,error})
       }
}
export const deletePost=async(req,res)=>{
    try {
        const {id}=req.query
        await postModel.deleteOne({_id:id})
        res.json({err:false})
       } catch (error) {
        console.log(error);
        res.json({err:true,error})
       }
}