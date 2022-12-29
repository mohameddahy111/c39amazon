import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    name: { required: true, type: String },
    lastName: { required: false, type: String },
    email: { required: true, unique: true, type: String },
    phone: {   type: Number },
    age: {   type: Number },
    password: { require: true, type: String },
    isAdmin: { type: Boolean, default: false, required: true },
    address: { type: Object },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;
