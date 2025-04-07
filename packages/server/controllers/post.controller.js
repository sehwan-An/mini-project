import 'dotenv/config'
import jwt from 'jsonwebtoken'
import Post from '../models/Post.js';
export const createPosts = async (req, res) => {
  const { title, content } = req.body
  console.log(req);
  const token = req.headers.authorization.split(' ')[1] /*Bearer */ 
  if(!token) {
    return res.status(401).json({
        message:'인증정보가 존재하지 않습니다.'
    })
  }
//   console.log("요청헤더에 포함된 토큰값:", token)
// const author = req.header
try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decoded)
    const newPost = new Post({
      title,
      content,
      author:decoded.id
    });
    await newPost.save()
    res.status(201).json({
        status:'success',
        message:'글 저장하기 성공'
    })
  } catch (err) {
    console.error(err.message);
  }
};
export const readPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    console.log(posts)
    // if (posts.length) {
    //   res.status(500).json({
    //     status: 'fail',
    //     message: '데이터가 존재하지 않습니다.',
    //   });
    // }
    res.status(201).json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 'fail',
      message: '데이터베이스 저장할수 없습니다.',
    });
  }
};
// export const updatePosts = () => {

// }
// export const deletePosts = () => {

// }
