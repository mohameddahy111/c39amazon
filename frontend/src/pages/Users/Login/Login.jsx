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
import axios, { Axios } from 'axios';
import jwtDecode from 'jwt-decode';
import { useSnackbar } from 'notistack';
import { jsx } from '@emotion/react';

export default function Login() {
  const { userInfo, setUserInfo } = Stor();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const validationSchema = yup.object({
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
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      loginFun(values);
    },
  });
  const loginFun = async values => {
    const { data } = await axios.post(`/api/users/signin`, values);
    if (data.token) {
      localStorage.setItem('userInfo', JSON.stringify(data.token));
      setUserInfo(jwtDecode(JSON.parse(localStorage.userInfo)));
    } else {
      enqueueSnackbar(`Email or password not match`, { variant: 'error' });
    }
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
                  name='email'
                  inputProps={{ type: 'text' }}
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
                  Log in
                </Button>
              </ListItem>
              <ListItem>
                <Typography>
                  I'm Not member ?{' '}
                  <Link to='/register' className=' font-semibold text-blue-400'>
                    Register
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
