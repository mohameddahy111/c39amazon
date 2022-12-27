import { Box } from '@mui/material';
import React from 'react';
import { UseSingleCategory } from '../../hooks/UseApi';
import SwiperSlider from './SwiperSlider';

export default function CategoryBox({ title }) {
  const { categorie } = UseSingleCategory(title);

  return (
    <>
      <Box my={2}>
        <SwiperSlider data={categorie} title={title} />
      </Box>
    </>
  );
}
