import { ArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function FinlPage() {
const navigate = useNavigate()
  return (
    <div className=' h-96 flex justify-center items-center flex-col '>
      <h2 className=' text-3xl w-[70%] text-center capitalize '>
        Thank you very much for your trust{' '}
        <Link to='/' className=' text-blue-400 hover:underline'>
          {' '}
          Shopping.com
        </Link>{' '}
        and dealing with us. We will process your request as soon as possible We
        are always happy to serve you ....
      </h2>
      <Button
        endIcon={<ArrowRight />}
        sx={{
          mt: '30px',
          backgroundColor: '#f0c000',
          color: '#000',
          ':hover': { backgroundColor: '#208080', color: '#fff' },
        }}
        variant='contained'
        onClick={()=>{navigate('/category')}}
      >
        we have more offer for you{' '}
      </Button>
    </div>
  );
}
