import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type:String,
        rquierd:true
    },
    pwd: {
        type:String,
        requierd: true,

    },
    email: {
        type:String,
        requierd:true,
        unique: true
    },
    phone:{
        type:Number,
        length:11
    },
    sns: String
})

const User = mongoose.model('User', userSchema);

export default User;