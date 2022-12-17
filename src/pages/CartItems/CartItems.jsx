import { Add, Delete } from '@mui/icons-material';
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
import { useSnackbar } from 'notistack';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stor } from '../../context/DataContext';

export default function CartItems() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { cartItems, setCartItems } = Stor();
  const deleteItem = item => {
    closeSnackbar();
    const cartItem = cartItems.filter(x => x.id !== item.id);
    localStorage.setItem('amazonec39', JSON.stringify(cartItem));
    setCartItems([...cartItem]);
    enqueueSnackbar(`${item.title} is delete from cart `, { variant: 'error' });
  };
  return (
    <>
      <Box className='pt-10 p-5 '>
        <Typography component={'h2'} variant='h2' align='center' mb={4}>
          CartItems
        </Typography>
        {cartItems.length === 0 ? (
          <Box>
            <Typography
              component={'h1'}
              align='center'
              variant='h1'
              className=' capitalize'
            >
              your cart is emty please go to{' '}
              <Link to='/category' className=' text-blue-400 hover:underline'>
                shop{' '}
              </Link>{' '}
            </Typography>{' '}
          </Box>
        ) : (
          <Box>
            <Grid container spacing={1}>
              <Grid item md={9} xs={12} sx={{ position: 'relative' }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow className=' capitalize '>
                        <TableCell>id </TableCell>
                        <TableCell>Image </TableCell>
                        <TableCell>name </TableCell>
                        <TableCell align='center'>quantity </TableCell>
                        <TableCell>total price </TableCell>
                        <TableCell>Action </TableCell>
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
                              parseInt(x.discountPercentage * x.price) / 100) *
                              x.quantity}{' '}
                            {''}$
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() => {
                                deleteItem(x);
                              }}
                            >
                              <Delete color='error' />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box
                  className=' absolute right-9 bottom-4 w-[40px] h-[40px] rounded-full flex justify-center items-center '
                  sx={{ boxShadow: '1px 1px 10px gray' }}
                >
                  {/* <IconButton className=' '> */}
                  <Link to='/category'>
                    <Add className='  text-[#f0c000]' />
                  </Link>
                  {/* </IconButton> */}
                </Box>
              </Grid>
              <Grid item md={3}>
                <Card>
                  <Typography
                    component={'h5'}
                    variant='h5'
                    align='center'
                    className=' capitalize p-3'
                  >
                    cart Items total
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
                        {cartItems.reduce(
                          (a, c) => a + c.quantity * c.price,
                          0
                        )}{' '}
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
                                  100
                            ),
                          0
                        )}{' '}
                        $
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Button fullWidth variant='contained' onClick={()=>navigate('/shipping')}>
                        chek out
                      </Button>
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}
