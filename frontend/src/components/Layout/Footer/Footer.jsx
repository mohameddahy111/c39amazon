import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import { Box, Button, Grid, List, ListItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Stor } from '../../../context/DataContext';
import {  logoLight } from '../../../image';
import style from '../layout.module.scss'

export default function Footer() {
  const {drawerPage}=Stor()
  return (
    <div className={drawerPage? style.footer :'w-ful bg-[#203040]'}>
      <Grid container spacing={1}>
      <Grid item md={3} xs={12}>
          <img src={logoLight} alt='' />
        </Grid>

        <Grid item md={2} xs={12} className=' flex justify-center  '>
          <List className=' text-white capitalize  '>
            <ListItem>
              <h6 className=' text-xl text-[#f0c000]'> conact us</h6>
            </ListItem>
            <ListItem>
              <Link to=''>customers service</Link>
            </ListItem>
            <ListItem>
              <Link to=''>send e-mail</Link>
            </ListItem>
            <ListItem>
              <Link to=''>call us </Link>
            </ListItem>
            <ListItem>
              <Link to=''>Address </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={2} xs={12} className='flex justify-center '>
          <List className=' text-white capitalize'>
            <ListItem>
              <h6 className=' text-xl text-[#f0c000]'>Our services </h6>
            </ListItem>
            <ListItem>
              <Link to=''>direct sale </Link>
            </ListItem>
            <ListItem>
              <Link to=''> wholesale</Link>
            </ListItem>
            <ListItem>
              <Link to=''> shipping </Link>
            </ListItem>
            <ListItem>
              <Link to=''>Packaging </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={2} xs={12} className='flex justify-center '>
          <List className=' text-white capitalize'>
            <ListItem className=''>
              <h6 className=' text-xl text-[#f0c000] '>Follow us </h6>
            </ListItem>
            <ListItem className=''>
            <Box
                component={Button}
                startIcon={<Facebook />}
                variant='contained'
                sx={{
                  backgroundColor: 'transparent',
                  ':hover': { backgroundColor: '#f0c000', color: '#000' },
                }}
              >
                <Link to='/'>Facebook</Link>
              </Box>
            </ListItem>
            <ListItem>
            <Box
                component={Button}
                startIcon={<Twitter />}
                variant='contained'
                sx={{
                  backgroundColor: 'transparent',
                  ':hover': { backgroundColor: '#f0c000', color: 'black' },
                }}
              >
                <Link to='/'>Twitter</Link>
              </Box>
            </ListItem>
            <ListItem>
            <Box
                component={Button}
                startIcon={<YouTube />}
                variant='contained'
                sx={{
                  backgroundColor: 'transparent',
                  ':hover': { backgroundColor: '#f0c000', color: 'black' },
                }}
              >
                <Link to='/'>YouTube</Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box
                component={Button}
                startIcon={<Instagram />}
                variant='contained'
                sx={{
                  backgroundColor: 'transparent',
                  ':hover': { backgroundColor: '#f0c000', color: 'black' },
                }}
              >
                <Link to='/'>Instagram</Link>
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <List className=' text-white capitalize'>
            <ListItem>
              <h6 className=' text-xl text-[#f0c000] flex justify-center w-full '>
                {' '}
                subscribe{' '}
              </h6>
            </ListItem>
            <ListItem
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <label>enter our e-mail group </label>
              <input
                type='email'
                name=''
                id=''
                className='p-3 w-full rounded-md  text-black focus:outline-[#f0c000] '
                placeholder='E-mail ...'
              />
            </ListItem>
            <ListItem>
              <Button
                variant='contained'
                fullWidth
                sx={{ backgroundColor: '#f0c000', color: '#000' }}
              >
                Join us
              </Button>
            </ListItem>
          </List>
        </Grid>

      </Grid>
      <div
        className=' w-full bg-[#203040] text-gray-400 text-center py-4 capitalize italic
      '
      >
        <p className=''>Copyright © by mohamed dahy 2022 </p>
      </div>
    </div>
  );
}
