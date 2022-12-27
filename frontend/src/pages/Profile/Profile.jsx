import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { Stor } from '../../context/DataContext';
import style from './profile.module.scss';
import { profileImg } from '../../image';
import { Add, AddCard, Favorite,  Grading } from '@mui/icons-material';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { userInfo } = Stor();
  const [changeImage, setChangeImage] = useState('');
  const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .min(3, 'must by more than 3 ')
      .required('Name is require'),
    lastName: yup
      .string('Enter your Last Name')
      .min(3, 'must by more than 3 ')
      .required('Last Name is require'),
    email: yup
      .string('Enter your email')
      .email('email not vild')
      .required('email is require'),
    country: yup
      .string('Enter your Country')
      .min(3, 'must by more than 3 ')
      .required('Country is require'),
    city: yup
      .string('Enter your city')
      .min(3, 'must by more than 3 ')
      .required('city is require'),
    street: yup
      .string('Enter your street')
      .min(3, 'must by more than 3 ')
      .required('street is require'),
    building: yup
      .string('Enter your building')
      .min(3, 'must by more than 3 ')
      .required('building is require'),
    floor: yup.string('Enter your floor').required('floor is require'),
    phone: yup.number('Enter your floor').required('floor is require'),
  });
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      name: userInfo ? userInfo.name : '',
      lastName: userInfo ? userInfo.lastName : '',
      email: userInfo ? userInfo.email : '',
      country: userInfo ? userInfo.country : '',
      city: userInfo ? userInfo.city : '',
      street: userInfo ? userInfo.street : '',
      building: userInfo ? userInfo.building : '',
      floor: userInfo ? userInfo.floor : '',
      phone: userInfo ? userInfo.phone : '',
    },
    onSubmit: values => {},
  });
  return (
    <Box className={style.herobacground}>
      <Box
        sx={{
          margin: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '280px',
          height: '150px',
        }}
        className={`shadow-lg p-4 rounded-md ${style.nameBox} `}
      >
        <h2 className='text-2xl capitalize font-bold  '>
          wellcome {userInfo.name}
        </h2>
        <Avatar
          sx={{
            position: 'absolute',
            bottom: '0px',
            width: '50px',
            height: '50px',
          }}
          className='translate-y-1/2'
        />
      </Box>
      <Grid container spacing={1} mt={5} p={2} className={''}>
        <Grid item md={3} xs={12}>
          <Box className=' relative'>
            <img
              src={changeImage ? URL.createObjectURL(changeImage) : profileImg}
              alt=''
              width={'100%'}
              className='rounded-md shadow-md'
            />
            <Box className=' absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex justify-center items-center shadow-lg'>
              <label htmlFor='profileImg'>
                <Add />
              </label>
              <input
                type='file'
                name='profileImg'
                id='profileImg'
                hidden
                onChange={e => {
                  setChangeImage(e.target.files[0]);
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={7} xs={12}>
          <form action='' onSubmit={formik.handleSubmit}>
            <List>
              <ListItem className=' flex flex-col gap-3 lg:flex lg:flex-row justify-center items-center lg:gap-1'>
                <TextField
                  name='name'
                  label='Name'
                  inputProps={{ type: 'text' }}
                  fullWidth
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  onChange={formik.handleChange}
                />
                <TextField
                  name='lastName'
                  label='Last Name'
                  inputProps={{ type: 'text' }}
                  fullWidth
                  value={formik.values.lastName}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  onChange={formik.handleChange}
                />
              </ListItem>
              <ListItem>
                <TextField
                  name='email'
                  label='E-mail'
                  inputProps={{ type: 'email' }}
                  fullWidth
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  onChange={formik.handleChange}
                />
              </ListItem>
              <ListItem className=' flex flex-col gap-3 lg:flex lg:flex-row justify-center items-center lg:gap-1'>
                <TextField
                  name='country'
                  label='Country'
                  inputProps={{ type: 'text' }}
                  value={formik.values.country ? formik.values.country : ''}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                  onChange={formik.handleChange}
                  fullWidth
                />
                <TextField
                  name='city'
                  label='City'
                  inputProps={{ type: 'text' }}
                  value={formik.values.city ? formik.values.city : ''}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                  onChange={formik.handleChange}
                  fullWidth
                />
                <TextField
                  name='street'
                  label='Street'
                  inputProps={{ type: 'text' }}
                  value={formik.values.street ? formik.values.street : ''}
                  error={formik.touched.street && Boolean(formik.errors.street)}
                  helperText={formik.touched.street && formik.errors.street}
                  onChange={formik.handleChange}
                  fullWidth
                />
              </ListItem>
              <ListItem className=' flex flex-col gap-3 lg:flex lg:flex-row justify-center items-center lg:gap-1'>
                <TextField
                  name='building'
                  label='Building'
                  inputProps={{ type: 'text' }}
                  value={formik.values.building ? formik.values.building : ''}
                  error={
                    formik.touched.building && Boolean(formik.errors.building)
                  }
                  helperText={formik.touched.building && formik.errors.building}
                  onChange={formik.handleChange}
                  fullWidth
                />
                <TextField
                  name='floor'
                  label='Floor'
                  inputProps={{ type: 'text' }}
                  value={formik.values.floor ? formik.values.floor : ''}
                  error={formik.touched.floor && Boolean(formik.errors.floor)}
                  helperText={formik.touched.floor && formik.errors.floor}
                  onChange={formik.handleChange}
                  fullWidth
                />
                <TextField
                  name='phone'
                  label='phone'
                  inputProps={{ type: 'text' }}
                  value={formik.values.phone ? formik.values.phone : ''}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  onChange={formik.handleChange}
                  fullWidth
                />
              </ListItem>
              <ListItem mb={3} p={3}>
                <button
                className={style.addbtn}
                  type='submit'
                >
                  update
                </button>
              </ListItem>
            </List>
          </form>
        </Grid>
        <Grid item md={2} xs={12} mt={3}>
          {/* <Paper elevation={4}> */}
            <List>
              <ListItem>
                <Link to='' >
                  <Box className=' flex justify-center items-center gap-2 text-[#208080] capitalize hover:underline '>
                    <Favorite sx={{ color: 'tomato' }} />
                    <Typography>my Favorite list</Typography>
                  </Box>
                </Link>
              </ListItem>
              <ListItem>
                <Link to='' >
                  <Box className=' flex justify-center items-center gap-2 text-[#208080] capitalize hover:underline'>
                    <Grading  />
                    <Typography>my orders list</Typography>
                  </Box>
                </Link>
              </ListItem>
              <ListItem>
                <Link to='' >
                  <Box className=' flex justify-center items-center gap-1 text-[#208080] capitalize hover:underline'>
                    <AddCard  />
                    <Typography> add payment card</Typography>
                  </Box>
                </Link>
              </ListItem>
            </List>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Box>
  );
}
