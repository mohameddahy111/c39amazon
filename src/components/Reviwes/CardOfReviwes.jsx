import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import {  useSingleUser } from '../../hooks/UseApi';

export default function CardOfReviwes({ data }) {
  const {oneUser}=useSingleUser(data.user.id)
  return (
    <>
      <Box className=' flex items-start gap-1'>
        <Avatar src={oneUser.image} />
        <Box component={Paper} className=' w-full'>
          <Card sx={{backgroundColor :'#f0c000'}}>
            <Typography component={'h6'} variant='h6' p={1}>
              {oneUser.username}
            </Typography>
            <Typography component={'p'} p={1}>
              {data.body}
            </Typography>
          </Card>
        </Box>
      </Box>
    </>
  );
}
