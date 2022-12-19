import express from 'express';
import data from './data.js';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.MANGODB_URL).then(()=>{
  console.log('connect to db')
}).catch((err)=>{
  console.log(err.message);
})
const app = express();
app.get('/api/useData', (req, res) => {
  res.send(data.userData);
});
const port = process.env.PROT || 5000;
app.listen(port, () => {
  console.log(`serves at http://localhost:${port}`);
});
