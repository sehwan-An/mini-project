import express from 'express'
const router = express.Router()
import regist from '../controllers/regist.controller.js'


  router.get('/', (req, res) => {
    res.send('users list is returned!')
  })
  router.post('/regist', regist)

  router.put('/:id', (req, res) => {
    res.send('some user is updated')
  })
  router.delete('/:id', (req, res) => {
    res.send('some user is removed')
  })

  export default router;