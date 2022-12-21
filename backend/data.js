import bcrypt from 'bcryptjs'

const data = {
  userData: [
    {
      name: 'mohamed',
      LastName: 'dahy',
      email: 'mohameddahy@gmail.com',
      password: bcrypt.hashSync('11223344') ,
      img :'',
      address: '',
      city: '',
      country: '',
      isAdmin: true,
      age:'',
      
    },
    {
      name: 'ali',
      LastName: 'dahy',
      email: 'mohamedali@gmail.com',
      password: bcrypt.hashSync('11223344') ,
      address: '',
      img :'',
      city: '',
      country: '',
      isAdmin: false,
      age:'',

    },
  ],
};

export default data