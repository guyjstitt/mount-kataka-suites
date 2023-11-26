import React, { ForwardedRef, useState, } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths } from 'date-fns';
import Box from '@mui/material/Box';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';



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
    InputProps={{ readOnly: true }} 
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
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10,}$/;

  const isValidEmail = emailRegex.test(email);
  const isValidPhone = phoneRegex.test(phone);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setStartDate(null);
    setEndDate(null);
    setComments('');
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setLoading(true);
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
  .then(response => {
    if (response.ok) {
      setSubmitStatus('We received your request and will get back to you as soon as possible!');
      resetForm(); // Reset the form
      setStartedInput(false);
      setSubmitted(false);
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    setSubmitStatus('We are experiencing technical difficulties. Please send an email directly to support@mtkatakavillas.com');
  })
  .finally(() => {
    setOpenSnackbar(true);
    setLoading(false);
  });
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
    <Card style={{ width: '100%' }}>
      <CardContent>
        {loading && (
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="rgba(0, 0, 0, 0.5)"
              zIndex={2}
            >
              <CircularProgress />
            </Box>
          )}
        <Typography gutterBottom variant="h5" component="div">
          Reserve your stay
        </Typography>
        <Typography variant="body2">
          Let us know your contact info and preferred dates. We'll get back to you as soon as possible!
        </Typography>
        <Box mt={2}>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameInputChange(setName)}
            required
            helperText={ !name && (submitted || startedInput) ? 'Name is required' : ''}
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
            minDate={new Date()} 
            customInput={<CustomInput label="Check in" value={null} onClick={() => {}} />}
          />
        </Box>
        <Box mt={2}>
          <Box style={{ marginBottom: '3px'}}>
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
              customInput={<CustomInput label="Check out" value={null} onClick={() => {}}  />}
            />
          </Box>
          <Typography variant="caption" color="textSecondary" style={{ fontSize: '0.75rem', marginLeft: '14px', lineHeight: '1.66' }}>
            Must be at least 30 days after check in
          </Typography>
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={30000}
        onClose={() => setOpenSnackbar(false)}
        message={submitStatus}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenSnackbar(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        aria-live="polite" // ARIA attribute for accessibility
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Change the position of the Snackbar
      />
    </Card>
  );
}