const express = require('express');
const morgan = require('morgan');
const dotEnv = require('dotenv');

const userRouter = require('./user')


dotEnv.config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended : false }))
app.use(morgan('dev'))

app.use('/user', userRouter)

const port = process.env.PORT || 8080

app.listen(port, console.log(`server started... at ${port}`))

