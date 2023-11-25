import React, { ForwardedRef, useState, } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths } from 'date-fns';
import Box from '@mui/material/Box';

interface CustomInputProps {
  label: string | null
  value: string | null;
  onClick: () => void;
}

// Custom input component for react-datepicker
const CustomInput = React.forwardRef(( props: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => (
  <TextField
    label={props.label}
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [startedInput, setStartedInput] = useState(false);
  const [comments, setComments] = useState('');


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10,}$/;

  const isValidEmail = emailRegex.test(email);
  const isValidPhone = phoneRegex.test(phone);


  const handleSubmit = () => {
    setSubmitted(true);
    if (!name || (!email && !phone)) {

      return;
    }

      // Get only the date part of the dates
    const startDateStripped = startDate && startDate.toISOString().slice(0, 10);
    const endDateStripped = endDate && endDate.toISOString().slice(0, 10);


    const formData = {
      name,
      email,
      phone,
      startDate: startDateStripped,
      endDate: endDateStripped,
      comments
    };
  
  // Make the POST API call
  fetch('https://us-central1-mount-kataka-villas.cloudfunctions.net/mt-kataka-villas-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  };


  const handleNameInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartedInput(true);
    setter(e.target.value);
  };
  
  const handleEmailInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartedInput(true);
    setter(e.target.value);
  };

  const handlePhoneInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, isNumeric: boolean) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNumeric) {
      if (/\D/.test(e.target.value) || e.target.value.length > 10) {
        // Ignore non-numeric input or input that would result in more than 10 digits
        return;
      }
    }

    setStartedInput(true);
    setter(e.target.value);
  };

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
          <TextField
            label="Name"
            value={name}
            onChange={handleNameInputChange(setName)}
            required
            error={!name && (submitted || startedInput)}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailInputChange(setEmail)}
            helperText={ !email && !phone ? 'Either an email or phone number is required' : (!isValidEmail && email != '' ? 'Enter a valid email' : '')}
            error={!email && !phone && (submitted || startedInput) || (email != '' && !isValidEmail)}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Phone Number"
            value={phone}
            onChange={handlePhoneInputChange(setPhone, true)}
            helperText={ !email && !phone ? 'Either an email or phone number is required' : (!isValidPhone && phone != '' ? 'Enter a valid phone number' : '')}
            error={(!email && !phone && (submitted || startedInput)) || (phone != '' && !isValidPhone)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            placeholder="1112223333"
          />
        </Box>
        <Box mt={2}>
          <DatePicker
            selected={startDate}
            onChange={() => {}}
            onSelect={(date: Date) => {
              setStartDate(date);
              if (!endDate || addMonths(date, 1) >= endDate) {
                setEndDate(addMonths(date, 1));
              }
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            customInput={<CustomInput label="Check in" value={null} onClick={() => {}} />}
          />
        </Box>
        <Box mt={2}>
          <DatePicker
            selected={endDate}
            onChange={() => {}}
            onSelect={(date: Date | null) => {
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
            customInput={<CustomInput label="Check out" value={null} onClick={() => {}} />}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Questions or Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
      </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button 
          variant="contained" 
          color="success"
          fullWidth
          onClick={handleSubmit}
        >
          Request Reservation
      </Button>
      </CardActions>
    </Card>
  );
}