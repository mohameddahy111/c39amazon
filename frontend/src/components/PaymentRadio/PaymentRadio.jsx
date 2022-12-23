import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Payment } from '@mui/icons-material';
import { Stor } from '../../context/DataContext';

export default function PaymentRadio() {
    const {paymentWay, setPaymentWay} = Stor()
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Payment Way</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="visa"
        name="radio-buttons-group"
        value={paymentWay}
        onChange={(e)=>{setPaymentWay(e.target.value)}}
        row
      >
        <FormControlLabel value="visa" control={<Radio />} label={<><span>visa </span> <Payment/> </>} />
        <FormControlLabel value="cash" control={<Radio />} label="In Dilverye " />
      </RadioGroup>
    </FormControl>
  );
}
