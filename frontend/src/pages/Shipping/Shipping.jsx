import React from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';
import { Stor } from '../../context/DataContext';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import styles from './shipping.module.scss';
import { StepperStep } from '../../components';

export default function Shipping() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { userInfo  ,userShipping ,setUserShipping } = Stor();
  useEffect(() => {
    if (userInfo) {
    } else {
      enqueueSnackbar('you must login in first ', { variant: 'error' });
      navigate('/login');
    }
  }, []);
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
  });
  const formik = useFormik({
    initialValues: {
      name: userShipping ? userShipping.name : userInfo ? userInfo.name : '',
      lastName: userShipping
        ? userShipping.lastName
        : userInfo
        ? userInfo.lastName
        : '',
      email: userShipping ? userShipping.email : userInfo ? userInfo.email : '',
      country: userShipping
        ? userShipping.country
        : userInfo
        ? userInfo.country
        : '',
      city: userShipping ? userShipping.city : userInfo ? userInfo.city : '',
      street: userShipping
        ? userShipping.street
        : userInfo
        ? userInfo.street
        : '',
      building: userShipping
        ? userShipping.building
        : userInfo
        ? userInfo.building
        : '',
      floor: userShipping ? userShipping.floor : userInfo ? userInfo.floor : '',
      DliveryNotes:userShipping?userShipping.DliveryNotes: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      getUserShipping(values);
      navigate('/plaseOrder');
    },
  });
  const getUserShipping = values => {
    const newUser = {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      country: values.country,
      city: values.city,
      street: values.street,
      building: values.building,
      floor: values.floor,
      DliveryNotes: values.DliveryNotes,
    };
    localStorage.setItem('userShippingInof', JSON.stringify(newUser));
    setUserShipping(newUser);
  };
  return (
    <Box className={styles.herobox}>
      <Box>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 240'>
          <path
            fill='#ffd700'
            fillOpacity='1'
            d='M0,64L21.8,58.7C43.6,53,87,43,131,58.7C174.5,75,218,117,262,160C305.5,203,349,245,393,224C436.4,203,480,117,524,80C567.3,43,611,53,655,74.7C698.2,96,742,128,785,160C829.1,192,873,224,916,213.3C960,203,1004,149,1047,133.3C1090.9,117,1135,139,1178,122.7C1221.8,107,1265,53,1309,37.3C1352.7,21,1396,43,1418,53.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
          ></path>
        </svg>
        <StepperStep activ={1} />
        <Typography component={'h2'} variant='h2' align='center' mb={4} >
          Shipping
        </Typography>
      </Box>
      <Box className={`${styles.form} m-auto w-[60%]`}>
        <form action='' onSubmit={formik.handleSubmit}>
          <List>
            <ListItem className=' flex justify-center items-center gap-1'>
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
            <ListItem className='flex justify-between items-center gap-1'>
              <TextField
                name='country'
                label='Country'
                inputProps={{ type: 'text' }}
                value={formik.values.country ? formik.values.country : ''}
                error={formik.touched.country && Boolean(formik.errors.country)}
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
            <ListItem className='flex justify-between items-center gap-1'>
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
            </ListItem>
            <ListItem>
              <TextField
                name='DliveryNotes'
                label='Dlivery Notes'
                inputProps={{ type: 'text' }}
                value={formik.values.DliveryNotes}
                onChange={formik.handleChange}
                fullWidth
                variant='filled'
              />
            </ListItem>{' '}
            <ListItem mb={3} p={3}>
              <Button
                variant='contained'
                sx={{ backgroundColor: '#ffd700', color: '#000' }}
                fullWidth
                type='submit'
              >
                Shipping
              </Button>
            </ListItem>
          </List>
        </form>
      </Box>
    </Box>
  );
}
