import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Rating,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UseSingleCategory, UseSinglProducts } from '../../hooks/UseApi';
import ShowWhithCard from '../../components/ShowWhithCard';
import { Reviwes } from '../../components';
import { Stor } from '../../context/DataContext';
import { useSnackbar } from 'notistack';

export default function Detiles() {
  const navigate = useNavigate();
  const [heroImage, setHeroImage] = useState('');
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const { data } = UseSinglProducts(params.id);
  const { categorie } = UseSingleCategory(data.category);
  const { quantityvalue, setQuantityvalue, cartItems, setCartItems } = Stor();
  const chageHeroImg = img => {
    setHeroImage(img);
  };
  useEffect(() => {
    if (params.id) {
      setHeroImage('');
      setQuantityvalue(1)
    }
  }, [params.id]);
  const newcategory = categorie.filter(x => x.id !== data.id);
  const quantityNum = op => {
    op === 'negatve'
      ? setQuantityvalue(quantityvalue - 1)
      : setQuantityvalue(quantityvalue + 1);
  };
  const addToCard = item => {
    const newItem = { ...item };
    const existItem = cartItems.find(x => x.id === newItem.id);
    if (existItem) {
      closeSnackbar();
      existItem.quantity =
        quantityvalue === 1 ? existItem.quantity + 1 : quantityvalue;
      localStorage.setItem('amazonec39', JSON.stringify(cartItems));
      enqueueSnackbar(`${existItem.title} is update`, { variant: 'warning' });
    } else {
      closeSnackbar();
      newItem.quantity = quantityvalue;
      cartItems.push(newItem);
      localStorage.setItem('amazonec39', JSON.stringify(cartItems));
      setCartItems([...cartItems]);
      enqueueSnackbar(`${newItem.title} is add to cart`, {
        variant: 'success',
      });
    }
  };
  return (
    <Box>
      <Grid container spacing={1} p={2} pt={5}>
        <Button
          variant='contained'
          onClick={() => {
            navigate(-1);
          }}
        >
          back
        </Button>
        <Grid item md={4} xs={12}>
          <Box>
            <img
              src={heroImage ? heroImage : data.thumbnail}
              alt=''
              width={640}
              height={400}
              className='w-full h-80'
            />
          </Box>
          <Box className=' flex gap-2 mt-3  '>
            {data.images?.map((x, index) => (
              <Box
                key={index}
                className='w-28 border-4 p-1  hover:border-blue-300 flex justify-center items-center '
              >
                <img
                  src={x}
                  alt=''
                  className='w-full'
                  onClick={() => {
                    chageHeroImg(x);
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <List>
            <ListItem>
              <Typography component={'h3'} variant='h3'>
                {data.title}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component={'h6'}
                variant='h6'
                sx={{ fontWeight: '700' }}
                className=' capitalize'
              >
                brand : <span className=' font-medium'>{data.brand}</span>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component={'h6'}
                variant='h6'
                sx={{ fontWeight: '700' }}
              >
                category : <span className=' font-medium'>{data.category}</span>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component={'h6'}
                variant='h6'
                sx={{ fontWeight: '700' }}
              >
                description :{' '}
                <span className=' font-medium text-base'>
                  {data.description}
                </span>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component={'h6'}
                variant='h6'
                sx={{ fontWeight: '700' }}
              >
                Quantity :
              </Typography>
              <Box>
                <Button
                  onClick={() => {
                    quantityNum('negatve');
                  }}
                  disabled={quantityvalue === 1 ? true : false}
                >
                  {' '}
                  -{' '}
                </Button>
                <TextField
                  value={quantityvalue}
                  size={'small'}
                  className='w-20'
                />
                <Button
                  onClick={() => {
                    quantityNum('postive');
                  }}
                  disabled={data.stock >= quantityvalue ? false : true}
                >
                  {' '}
                  +
                </Button>
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid item md={4}>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ fontWeight: '700' }}
                  >
                    price{' '}
                  </Typography>
                </Grid>
                <Grid item md={8} className='flex gap-4 '>
                  <Typography
                    className={`${
                      data.discountPercentage
                        ? ' line-through text-red-400 '
                        : ' font-semibold'
                    }`}
                  >
                    {data.price} ${' '}
                  </Typography>
                  {data.discountPercentage && (
                    <Typography sx={{ fontWeight: 700 }}>
                      {' '}
                      -{' '}
                      {parseInt(
                        data.price -
                          (data.discountPercentage * data.price) / 100
                      )}{' '}
                      $
                    </Typography>
                  )}
                </Grid>
              </ListItem>
              <ListItem>
                <Grid item md={6}>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ fontWeight: '700' }}
                  >
                    rating{' '}
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography>
                    {' '}
                    <Rating
                      readOnly
                      precision={0.5}
                      value={data.rating ? data.rating : 0}
                    />{' '}
                  </Typography>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid item md={6}>
                  <Typography
                    component={'h6'}
                    variant='h6'
                    sx={{ fontWeight: '700' }}
                  >
                    state{' '}
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography>
                    {data.stock > 0 ? 'in Stock ' : ' out of stock'}{' '}
                  </Typography>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  onClick={() => {
                    addToCard(data);
                  }}
                  variant='contained'
                  fullWidth
                  disabled={data.stock > 0 ? false : true}
                >
                  add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>

        <Box className='mt-3 '>
          <Divider textAlign='center'>
            <Chip label='more item' className=' capitalize'></Chip>
          </Divider>
          <Container>
            <ShowWhithCard
              title={`more ${data.category}`}
              start={0}
              end={newcategory.length}
              data={newcategory}
            />
          </Container>
        </Box>
        <Container>
          <Box>
            <Reviwes />
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}
