import express from 'express'
const app = express()
import  mongoose from 'mongoose'

// const port = 3000
import indexRouter from './routes/index.js'
import userRouter from './routes/user.route.js'

app.use('/',indexRouter)
app.use('/users', userRouter); 




export default app;