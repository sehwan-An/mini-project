import express from 'express'
import * as postController from '../controllers/post.controller.js'

const router = express.Router()

router.post('/posts', postController.createPosts)

router.get('/posts', postController.readPosts) 


export default router

/*
router.put()
router.delete()
*/