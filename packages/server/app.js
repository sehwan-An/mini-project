import express from 'express'
const app = express()
import connect from './schemas/index.js'

import indexRouter from './routes/index.js'
import userRouter from './routes/user.route.js'
connect(process.env.DB_URI)

app.use('/',indexRouter)
app.use('/users', userRouter); 
// connect('mongodb://admin:0000@localhost:27017')



export default app;