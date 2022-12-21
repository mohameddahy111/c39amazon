import express from 'express';
import data from './data.js';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from './routers/seedRoutes.js';
import userRouter from './routers/userRouter.js';

dotenv.config()
mongoose.connect(process.env.MANGODB_URL).then(()=>{
  console.log('connect to db')
}).catch((err)=>{
  console.log(err.message);
})
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/api/seed' , seedRouter)
app.use('/api/users' , userRouter)
app.use((err , req , res , next)=>{
  res.status(500).send({message :err.message})
})
const port = process.env.PROT || 5000;
app.listen(port, () => {
  console.log(`serves at http://localhost:${port}`);
});
