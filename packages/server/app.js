import express from 'express'

const app = express()
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connect from './schemas/index.js'
import indexRouter from './routes/index.js'
import userRouter from './routes/user.route.js'

connect()
app.use(logger('dev'))
app.use(cookieParser())
app.use (cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',indexRouter)
app.use('/users', userRouter); 
// app.use('/posts', postRouter)
// connect('mongodb://admin:0000@localhost:27017')



export default app;