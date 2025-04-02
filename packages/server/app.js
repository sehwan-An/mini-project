import express from 'express'

const app = express()
import logger from 'morgan'
import cors from 'cors'
import connect from './schemas/index.js'
import indexRouter from './routes/index.js'
import userRouter from './routes/user.route.js'

connect()
app.use(logger('dev'))
app.use (cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',indexRouter)
app.use('/users', userRouter); 
// connect('mongodb://admin:0000@localhost:27017')



export default app;