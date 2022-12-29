import bcrypt from 'bcryptjs';

const data = {
  userData:[
    {
      name: 'mohamed',
      lastName: 'dahy',
      email: 'mohameddahy@gmail.com',
      password: bcrypt.hashSync('11223344'),
      img: '',
      address: {
        country: 'egypt',
        city: '',
        street: '',
        building: '',
        floor: '',
      },
      isAdmin: true,
      age: '',
      phone :""
    },
    {
      name: 'ali',
      lastName: 'dahy',
      email: 'mohamedali@gmail.com',
      password: bcrypt.hashSync('11223344'),
      address: {
        country: 'egypt',
        city: '',
        street: '',
        building: '',
        floor: '',
      },
      isAdmin: false,
      age: '',
      phone :""

    },
  ],
};

export default data;
