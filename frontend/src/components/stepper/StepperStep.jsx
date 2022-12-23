import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['log in ', 'Shipping', 'Plase Order',  'Payment'];

export default function StepperStep({ activ  , dark }) {
  return (
    <Box sx={{ width: '100%', mb: '50px' }}>
      <Stepper activeStep={activ} alternativeLabel>
        {steps.map((x, index) => (
          <Step key={index}>
            <StepLabel>
              {' '}
              <p className= {`${dark ? " text-white":'' }`} >{x}</p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
