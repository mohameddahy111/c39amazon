import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useComments } from '../../hooks/UseApi';
import CardOfReviwes from './CardOfReviwes';

export default function Reviwes() {
  const {comments}=useComments()

  return (
    <div className=' pb-4 '>
      <Typography component={'h2'} variant='h3' align='center' m={4}>
        Reviwes
      </Typography>
      <Box>
        <Grid container spacing={2}>
        {comments?.slice(0,4).map((x ,index)=>(
          <Grid item md={5} xs={12} key={index}>
            <CardOfReviwes data={x}  />
          </Grid>

        ))}
        </Grid>
      </Box>
    </div>
  );
}
