import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { DoneAll, Login, Payment, ShoppingBagSharp } from '@mui/icons-material';

const steps = ['log in ', 'Shipping', 'Plase Order', , 'Payment'];

export default function StepperStep({ activ }) {
  return (
    <Box sx={{ width: '100%', mb: '50px' }}>
      <Stepper activeStep={activ} alternativeLabel>
        {steps.map(( x , index) => (
          <Step key={index}>
            <StepLabel>{x} </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
