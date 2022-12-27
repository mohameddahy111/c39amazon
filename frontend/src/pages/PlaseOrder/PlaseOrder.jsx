import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PaymentRadio, StepperStep } from '../../components';
import { Stor } from '../../context/DataContext';

export default function PlaseOrder() {
  const navigate = useNavigate();
  const { cartItems, userShipping, userInfo } = Stor();
  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    }
    if (!userShipping && !cartItems) {
      navigate('/shipping');
    }
  }, [userInfo]);

  const taxt =
    (cartItems.reduce((a, c) => a + c.quantity * c.price, 0) * 14) / 100;
  const shippingCost =
    (cartItems.reduce((a, c) => a + c.quantity * c.price, 0) * 5) / 100;

  return (
    <>
      <Box mb={2}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 240'>
          <path
            fill='#ffd700'
            fillOpacity='1'
            d='M0,64L21.8,58.7C43.6,53,87,43,131,58.7C174.5,75,218,117,262,160C305.5,203,349,245,393,224C436.4,203,480,117,524,80C567.3,43,611,53,655,74.7C698.2,96,742,128,785,160C829.1,192,873,224,916,213.3C960,203,1004,149,1047,133.3C1090.9,117,1135,139,1178,122.7C1221.8,107,1265,53,1309,37.3C1352.7,21,1396,43,1418,53.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
          ></path>
        </svg>
        <StepperStep activ={2} />
        <Typography component={'h2'} variant='h2' align='center'>
          Plase Order
        </Typography>
        <Box>
          <Grid container spacing={1}>
            <Grid item md={9} xs={12} component={Paper}>
              <List>
                <ListItem>
                  <p className=' font-semibold text-2xl capitalize '>
                    Shipping informtion :{' '}
                  </p>
                </ListItem>
                <ListItem className=' '>
                  <Grid item md={12} xs={12}>
                    <Card>
                      <List>
                        <ListItem className=' flex flex-col text-start items-start gap-2 md:flex-row md:gap-0 '>
                          <Grid item md={4} xs={12} className='w-full' >
                            <Typography className=' capitalize'>
                             <span className=' font-semibold'> Full Name </span>: {userShipping.name}{' '}
                              {userShipping.lastName}
                            </Typography>
                          </Grid>
                          <Grid item md={4} xs={12} className='w-full' >
                            <Typography>
                             <span className=' font-semibold'>E-mail</span>  : {userShipping.email}
                            </Typography>
                          </Grid>
                          <Grid item md={4} xs={12} className='w-full'>
                            <Typography>
                            <span className=' font-semibold'> Phone</span> : {userShipping.phone}
                            </Typography>
                          </Grid>
                        </ListItem>
                        <ListItem>
                          <Typography sx={{fontWeight :700 , }} >Address :</Typography>
                        </ListItem>
                        <ListItem>
                          <Grid item md={4} xs={12}>
                            <Typography>
                            <span className=' font-semibold'>Country</span> : {userShipping.country}
                            </Typography>
                          </Grid>
                          <Grid item md={4} xs={12}>
                            <Typography> <span className=' font-semibold'>City</span>  : {userShipping.city}</Typography>
                          </Grid>
                          <Grid item md={4} xs={12}>
                            <Typography>
                            <span className=' font-semibold'>Street</span> : {userShipping.street}
                            </Typography>
                          </Grid>
                        </ListItem>
                        <ListItem>
                          <Grid item md={6} xs={12}>
                            <Typography>
                            <span className=' font-semibold'>Building</span> : {userShipping.building}
                            </Typography>{' '}
                          </Grid>
                          <Grid item md={6} xs={12}>
                            {' '}
                            <Typography>
                            <span className=' font-semibold'>Floor</span> :{userShipping.floor}
                            </Typography>{' '}
                          </Grid>
                        </ListItem>
                      </List>
                    </Card>
                  </Grid>
                </ListItem>
                <ListItem>
                  <p className=' font-semibold text-2xl '>Cart Items : </p>
                </ListItem>
                <ListItem>
                  <Grid item md={12} xs={12}>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow className=' capitalize '>
                            <TableCell>id </TableCell>
                            <TableCell>Image </TableCell>
                            <TableCell>name </TableCell>
                            <TableCell align='center'>quantity </TableCell>
                            <TableCell>total price </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {cartItems.map((x, index) => (
                            <TableRow key={index}>
                              <TableCell>{x.id} </TableCell>
                              <TableCell>
                                <Link to={`/detiles/${x.id}`}>
                                  <img
                                    src={x.thumbnail}
                                    alt=''
                                    width={'60px'}
                                    height={'60px'}
                                  />
                                </Link>{' '}
                              </TableCell>
                              <TableCell>
                                <Link to={`/detiles/${x.id}`}>
                                  <p>{x.title} </p>
                                </Link>{' '}
                              </TableCell>
                              <TableCell align='center'>{x.quantity}</TableCell>
                              <TableCell>
                                {(x.price -
                                  parseInt(
                                    (x.discountPercentage * x.price) / 100
                                  )) *
                                  x.quantity}{' '}
                                {''}$
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} xs={12}>
              <Card>
                <Typography
                  component={'h5'}
                  variant='h5'
                  align='center'
                  className=' capitalize p-3'
                >
                  total payment
                </Typography>
                <Divider textAlign='center'>
                  <Chip label='items ' />
                </Divider>
                <List mt={2}>
                  <ListItem>
                    <Grid item md={6}>
                      <span className=' capitalize font-semibold text-xl'>
                        items :{' '}
                      </span>
                    </Grid>
                    <Grid item md={6}>
                      ( {cartItems.reduce((a, c) => a + c.quantity, 0)} ){''}{' '}
                      items
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid item md={6}>
                      <span className=' capitalize font-semibold text-xl'>
                        price :{' '}
                      </span>
                    </Grid>
                    <Grid item md={6}>
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{' '}
                      {''} $
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid item md={6}>
                      <span className=' capitalize font-semibold'>
                        total discount :{' '}
                      </span>
                    </Grid>
                    <Grid item md={6}>
                      <span className='text-red-400'>
                        {' '}
                        -
                        {cartItems.reduce(
                          (a, c) =>
                            a +
                            parseInt(
                              c.quantity * c.price * c.discountPercentage
                            ) /
                              100,
                          0
                        )}{' '}
                        $
                      </span>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid item md={6}>
                      <Typography>
                        <span className=' capitalize font-semibold'>
                          taxt :
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography>
                        <span className=' capitalize font-semibold'>
                          {taxt}
                        </span>
                      </Typography>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid item md={6}>
                      <Typography>
                        <span className=' capitalize font-semibold'>
                          shipping :
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography>
                        <span className=' capitalize font-semibold'>
                          {shippingCost}
                        </span>
                      </Typography>
                    </Grid>
                  </ListItem>
                  <Divider textAlign='center'>
                    <Chip label='total' />
                  </Divider>
                  <ListItem>
                    <Grid item md={6}>
                      <span className=' capitalize font-semibold text-xl'>
                        total :{' '}
                      </span>
                    </Grid>
                    <Grid item md={6}>
                      {cartItems.reduce(
                        (a, c) =>
                          a +
                          parseInt(
                            c.quantity * c.price -
                              (c.quantity * c.price * c.discountPercentage) /
                                100 +
                              shippingCost +
                              taxt
                          ),
                        0
                      )}{' '}
                      $
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <PaymentRadio />
                  </ListItem>
                  <ListItem>
                    <Button
                      fullWidth
                      variant='contained'
                      onClick={() => navigate('/payment')}
                    >
                      payment
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
