import jwt from 'jsonwebtoken';

export const generateToken = user => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      isAdmin: user.isAdmin,
      country: user.country,
      city: user.city,
      phone: user.phone,
      street: user.street,
      building: user.building,
      floor: user.floor,
    },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};
