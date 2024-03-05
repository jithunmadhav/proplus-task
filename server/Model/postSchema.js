import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    },
    userId:{
        type:String,
        required:true 
    },
    image:{
        type:Object
    }
})

const postModel=mongoose.model('post',postSchema)
export default postModel;