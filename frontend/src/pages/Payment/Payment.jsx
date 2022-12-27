import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepperStep } from '../../components';
import { Stor } from '../../context/DataContext';
import { cardNpg, cartpay2 } from '../../image';

export default function Payment() {
  const { paymentWay, userInfo } = Stor();
  const navigate = useNavigate();
  useEffect(() => {
    if (paymentWay === 'cash') {
      navigate('/finlPage');
    }
    if (!userInfo) {
      navigate('/');
    }
  }, [userInfo]);
  return (
    <>
      <Box className=' bg-[#010101] text-white mb-2'>
        <Box >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 240' >
            <path
              fill='#ffd700'
              fillOpacity='1'
              d='M0,64L21.8,58.7C43.6,53,87,43,131,58.7C174.5,75,218,117,262,160C305.5,203,349,245,393,224C436.4,203,480,117,524,80C567.3,43,611,53,655,74.7C698.2,96,742,128,785,160C829.1,192,873,224,916,213.3C960,203,1004,149,1047,133.3C1090.9,117,1135,139,1178,122.7C1221.8,107,1265,53,1309,37.3C1352.7,21,1396,43,1418,53.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
            ></path>
          </svg>
          <StepperStep activ={3} dark />
          <Typography component={'h2'} variant='h2' align='center' mb={4}>
            Payment
          </Typography>
        </Box>
        <Grid
          container
          spacing={1}

          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Grid item md={5}>
            <img src={cartpay2} alt='' />
          </Grid>
          <Grid item md={6}>
            <form className=' shadow-sm shadow-[#e3e3e3] p-10 rounded-md '>
              <List>
                <ListItem>
                  <label className=' mr-3 capitalize'>card number</label>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='xxxx-xxxx-xxxx-xxxx'
                    className=' w-full p-3 rounded-md bg-transparent text-white placeholder:text-white border'
                  />
                </ListItem>
                <ListItem>
                  <label className=' mr-3 capitalize'>Holder name</label>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder=''
                    className=' w-full p-3 rounded-md bg-transparent text-white placeholder:text-white border'
                  />
                </ListItem>
                <ListItem sx={{display :'flex' , justifyContent :'center' , gap :'20px'}} >
                <div className=' flex flex-col'>
                    <label className=' mr-3 capitalize pb-2 ml-10'>exp date</label>
                    <input
                      type='text'
                      name=''
                      id=''
                      placeholder='MM / YY'
                      className=' w-full p-3 rounded-md bg-transparent text-white placeholder:text-white border ml-6'
                    />
                  </div>
                  <div className=' flex flex-col'>
                    <label className=' mr-3 capitalize pl-10 pb-2'>cvv</label>
                    <input
                      type='text'
                      name=''
                      id=''
                      placeholder='XXX'
                      className=' w-full p-3 rounded-md bg-transparent text-white placeholder:text-white border ml-6'
                    />
                  </div>
                </ListItem>
                <ListItem sx={{display :'flex ' , justifyContent :'center'}}>
                  <img src={cardNpg} alt="" width={200} />
                </ListItem>
                <ListItem sx={{display :'flex' , justifyContent :'center' , mt :'20px'}}>
                  <Button variant='contained'  size='large' sx={{width :'220px' , backgroundColor :'#f0c000' , color :'#000'}} >
                    pay now
                  </Button>
                </ListItem>
              </List>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
