import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type:String,
        rquierd:true
    },
    pwd: {
        type:String,
        requierd: true,
        length:12

    },
    email: {
        type:String,
        requierd:true,
        unique: true
    },
    phone:{
        type:String,
    },
    sns: String
})

const User = mongoose.model('User', userSchema);

export default User;