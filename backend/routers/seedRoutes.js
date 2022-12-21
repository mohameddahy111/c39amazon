import express from 'express';
import User from '../models/userModels.js';
import data from '../data.js';

const seedRouter = express.Router();
seedRouter.get('/', async (req, res) => {
  await User.remove({});
  const createUser = await User.insertMany(data.userData);
  res.send({ createUser });
});
export default seedRouter;
