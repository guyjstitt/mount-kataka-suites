import { Grid, Typography, Box } from '@mui/material';
import CoffeeMakerRoundedIcon from '@mui/icons-material/CoffeeMakerRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';

export default function Amenities() {
  const amenities = [
    { icon: <WifiRoundedIcon />, label: 'Wi-Fi' },
    { icon: <CoffeeMakerRoundedIcon />, label: 'Coffee Maker' },
    { icon: <WifiRoundedIcon />, label: 'Wi-Fi' },
    { icon: <CoffeeMakerRoundedIcon />, label: 'Coffee Maker' },
    // Add more amenities as needed
  ];

  return (
    <Grid container spacing={2}>
      {amenities.map((amenity, index) => (
        <Grid item xs={6} key={index}>
          <Box display="flex" alignItems="center">
            {amenity.icon}
            <Typography variant="body1" style={{ marginLeft: '8px' }}>{amenity.label}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}