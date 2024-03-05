import sanitize from "sanitize-html"
import userModel from "../Model/userSchema.js"
export const userData=async(req,res)=>{
    const {userId}=req.query;
    const sanitizeUserId=sanitize(userId);
    userModel.findOne({_id:sanitizeUserId}).then((result)=>{
        res.status(200).json({err:false,result})
    }).catch((error)=>{
        res.status(501).json({err:true,error})
    })
    
}
export const updateUser=(req,res)=>{
    const {name,userId}=req.body;
    const sanitizeName=sanitize(name)
    const sanitizeUserId=sanitize(userId)
    userModel.updateOne({_id:sanitizeUserId},{$set:{
        name:sanitizeName,
        image:req.file
    }}).then((result)=>{
        res.status(200).json({err:false})
    }).catch((err)=>{
        res.status(501).json({err:true})
    })
}
export const userDetails=async(req,res)=>{
    const {search,userId} =req.query;
    if(search){
        const query={
            name: new RegExp(search, 'i')
        }
        const result = await userModel.find(
            {
              $and: [query, { _id: { $ne: userId } }]
            },{password:0,email:0}
          );
        if(result){
            res.status(200).json({err:false,result})
        }else{
            res.status(404).json({err:true,message:'No data found'})
        }
    }else{
        let data= await chatModel.find({members:{$all:userId}})
        let chatMembers=[]
        data.forEach((item) => {
            item.members.forEach((member) => {
              if (member !== userId) {
                chatMembers.push(member);
              }
            });
          });
        if(chatMembers.length >0){
            const result = await userModel.find({
                _id: { $in: chatMembers },
              });
              res.status(200).json({err:false,result})   
        }else{
            res.status(404).json({err:true,message:'No data found'})
        }
         }
}