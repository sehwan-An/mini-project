import User from "../models/User.js";

const regist = async (req, res) => {
    const {username, pwd, email, phone, sns} = req.body 
    console.log(req.body);
    try {
      const existUser = await User.findOne({
        $or: [{email},{username},{phone}]
      })
      if(existUser){
        return res.status(400).json({
          message: '해당 정보로 등록된 사용자가 이미 존재합니다.'
        })
      }
      const user = new User(req.body);
      await user.save()
      // await newUser.save();
      // res.status(200).json({
      //   message: 'new user is created!'
      // })
    }catch(err){
      console.log("resit is failed:", err)
    }
  }

  export default regist