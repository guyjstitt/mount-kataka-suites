import React, { ForwardedRef, useState, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Box from '@mui/material/Box';
import { addMonths } from 'date-fns';

interface CustomInputProps {
  value: string | null;
  onClick: () => void;
}

// Custom input component for react-datepicker
const CustomInput = React.forwardRef(( props: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => (
  <TextField
    variant="outlined"
    onClick={props.onClick}
    value={props.value}
    fullWidth
    placeholder="mm/dd/yyyy"
    ref={ref}
  />
));

export default function ReserveCard() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://storage.cloud.google.com/mount-kataka-suites/arrowhead.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Reserve your stay
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fill out a short application and Guy will get back to you as soon as possible!
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            Check-in
          </Typography>
        </Box>
        <Box mb={2}>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
            if (!endDate || addMonths(date, 1) >= endDate) {
              setEndDate(addMonths(date, 1));
            }
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={<CustomInput value={null} onClick={() => {}} />}
        />
        </Box>
        <Typography variant="body2" color="text.secondary">
          Check-out
        </Typography>
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => {
            if (date) {
              setEndDate(date);
              if (!startDate) {
                setStartDate(addMonths(date, -1));
              } else if (date <= addMonths(startDate, 1)) {
                setStartDate(null);
              }
            }
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate && addMonths(startDate, 1)}
          customInput={<CustomInput value={null} onClick={() => {}} />}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button 
          href="https://form.jotform.com/232625903214147" 
          target="_blank" 
          variant="contained" 
          color="success"
          fullWidth
        >
          Submit
      </Button>
      </CardActions>
    </Card>
  );
}