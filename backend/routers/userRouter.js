import express from 'express';
import User from '../models/userModels.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utiles.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          lastName: user.lastName,
          token: generateToken(user),
        });
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);
userRouter.put(
  '/profile',

  expressAsyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id );
    if (user) {
      (user.name = req.body.name || user.name),
        (user.lastName = req.body.lastName || user.lastName),
        (user.email = req.body.email || user.email),
        (user.address.country = req.body.country || user.country),
        (user.address.city = req.body.city || user.city),
        (user.address.street = req.body.street || user.street),
        (user.address.building = req.body.building || user.building),
        (user.address.floor = req.body.floor || user.floor),
        (user.address.phone = req.body.phone || user.phone);
      const updateUser = await User.save();
      res.send({
        _id: updateUser._id,
        name: updateUser.name,
        lastName: updateUser.lastName,
        email: updateUser.email,
        country: updateUser.country,
        city: updateUser.city,
        street: updateUser.street,
        building: updateUser.building,
        floor: updateUser.floor,
        phone: updateUser.phone,
        isAdmin: updateUser.isAdmin,
        token: generateToken(updateUser),
      });
    }
    res.status(401).send({ message: 'Error in Updata' });
  })
);
userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      res.status(404).send({ message: 'This E-mail is Exist' });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        lastName: req.body.lastName,
      });
      const user = await newUser.save();
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        lastName: user.lastName,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    }
  })
);
export default userRouter;
