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

export default function Register() {
  const { userInfo, setUserInfo } = Stor();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    username: yup
      .string('Enter your Yser Name')
      .min(3, 'min letter of User name is 3')
      .required('  User name is required'),
    email: yup
      .string('Enter your Email')
      .email('Email is not match')
      .required('Email is required'),
    password: yup
      .string(' Enter your password')
      .min(6, 'min letter of password is 6')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
        username: '',
        email: '',
        password: '',
      },
  
    validationSchema: validationSchema,
    onSubmit: valuse => {
      loginFun(valuse);
    },
  });
  const loginFun = async values => {
    const { data } = await axios.post(
      'https://reqres.in/api/register'
      ,
      values
    );
    console.log(data);
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);
  return (
    <>
      <Box className=' w-[60%] m-auto '>
        <Typography align='center' m={3} variant='h3' className=' capitalize  '>
          log in
        </Typography>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <List>
              <ListItem>
                <TextField
                  name='username'
                  inputProps={{ type: 'text' }}
                  label='User Name'
                  fullWidth
                  value={formik.values.username}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
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
              <ListItem>
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
