import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stor } from '../../../context/DataContext';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';

export default function Register() {
  const { userInfo, setUserInfo } = Stor();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const validationSchema = yup.object({
    name: yup
      .string('Enter your Yser Name')
      .min(3, 'min letter of User name is 3')
      .required('  User name is required'),
    lastName: yup
      .string('Enter your Yser last Name')
      .min(3, 'min letter of User last name is 3')
      .required('  User name is required'),
    email: yup
      .string('Enter your Email')
      .email('Email is not match')
      .required('Email is required'),
    password: yup
      .string(' Enter your password')
      .min(6, 'min letter of password is 6')
      .required('Password is required'),
    confiermPassword: yup
      .string(' Enter your password')
      .min(6, 'min letter of password is 6')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confiermPassword: '',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      if (values.confiermPassword === values.password) {
        loginFun(values);
      } else {
        enqueueSnackbar(`password not match `, { variant: 'error' });
      }
    },
  });
  const loginFun = async values => {
    const { data } = await axios
      .post('/api/users/signup', values)
      .catch(err => {
        enqueueSnackbar(`${err.response.data.message}`, { variant: 'error' });
      });
    if (data.token) {
      localStorage.setItem('userInfo', JSON.stringify(data.token));
      navigate('/login');
    } else {
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/login');
    }
  }, [userInfo]);
  return (
    <>
      <Box className=' w-[60%] m-auto '>
        <Typography align='center' m={3} variant='h3' className=' capitalize  '>
          Register
        </Typography>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <List>
              <ListItem className=' flex gap-2'>
                <TextField
                  name='name'
                  inputProps={{ type: 'text' }}
                  label='User Name'
                  fullWidth
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  onChange={formik.handleChange}
                />
                <TextField
                  name='lastName'
                  inputProps={{ type: 'text' }}
                  label='Last Name'
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
                  inputProps={{ type: 'email' }}
                  label='E-mail'
                  fullWidth
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  onChange={formik.handleChange}
                />
              </ListItem>
              <ListItem className=' flex gap-2'>
                <TextField
                  name='password'
                  inputProps={{ type: 'password' }}
                  label='Password'
                  fullWidth
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  onChange={formik.handleChange}
                />
                <TextField
                  name='confiermPassword'
                  inputProps={{ type: 'password' }}
                  label='Confierm Password'
                  fullWidth
                  value={formik.values.confiermPassword}
                  error={
                    formik.touched.confiermPassword &&
                    Boolean(formik.errors.confiermPassword)
                  }
                  helperText={
                    formik.touched.confiermPassword &&
                    formik.errors.confiermPassword
                  }
                  onChange={formik.handleChange}
                />
              </ListItem>
              <ListItem>
                <Button variant='contained' size='large' type='submit'>
                  Register
                </Button>
              </ListItem>
              <ListItem>
                <Typography>
                  I'm member ?{' '}
                  <Link to='/login' className=' font-semibold text-blue-400'>
                    Log in
                  </Link>
                </Typography>
              </ListItem>
            </List>
          </form>
        </Box>
      </Box>
    </>
  );
}
