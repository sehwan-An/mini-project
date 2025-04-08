import express from 'express'
import * as postController from '../controllers/post.controller.js'

const router = express.Router()

router.post('/posts', postController.createPosts)
router.get('/posts', postController.readPosts) 
router.get('/posts/:id', postController.readPost) 
router.delete('/posts/:id', postController.removePost) 
// router.put('/posts/:id', postController.updatePost)


export default router

/*
router.put()
router.delete()
*/