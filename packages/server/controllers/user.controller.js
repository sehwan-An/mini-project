import User from '../models/User.js';
import bcrypt from 'bcrypt'

const regist = async (req, res) => {
  const { username, password, email, phone, sns } = req.body;
  console.log(req.body);
  try {
    const existUser = await User.findOne({
      $or: [{ email }, { username }, { phone }],
    });
    if (existUser) {
      return res.status(400).json({
        message: '해당 정보로 등록된 사용자가 이미 존재합니다.',
      });
    }
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      message: '신규 사용자가 등록되었습니다.',
    });
  } catch (err) {
    console.log('resit is failed:', err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email,
    });
    
    console.log(user)
    if (!user) {
      return res.status(400).json({
        message: '이메일을 확인해주세요',
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password)
    if (!isMatch) {
      return res.status(400).json({
        message: '비밀번호가 틀렸습니다',
      });
    }
    const userInfo = {
      name: user.username,
      id: user._id,
    };

    res.cookie('nexcent', userInfo, { httpOnly: false, secure: false, maxAge: 60 * 60 * 1000, path: '/' });
    console.log(res.getHeaders()['set-cookie']);
    res.status(200).json({
      message: '로그인 성공!',
      data: userInfo,
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: '회원정보가 존재하지 않습니다.',
    });
  }
};

export default { regist, login };
