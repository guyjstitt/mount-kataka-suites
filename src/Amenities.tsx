import { Grid, Typography, Box, Button, Dialog, DialogTitle, DialogContent, Divider, IconButton } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WaterIcon from '@mui/icons-material/Water';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import DeleteIcon from '@mui/icons-material/Delete';
import WifiIcon from '@mui/icons-material/Wifi';

import SpeedIcon from '@mui/icons-material/Speed';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

import WeekendIcon from '@mui/icons-material/Weekend';
import CoffeeTableIcon from '@mui/icons-material/TableBar'; // Custom icon, no direct match
import TvIcon from '@mui/icons-material/Tv';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; // Custom icon, no direct match

import CountertopsIcon from '@mui/icons-material/Countertops';
import KitchenIcon from '@mui/icons-material/Kitchen';
import SinkIcon from '@mui/icons-material/Wash'; // Custom icon, no direct match
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InductionIcon from '@mui/icons-material/Whatshot';
import PanToolIcon from '@mui/icons-material/PanTool'; // Custom icon, no direct match
import CuttingIcon from '@mui/icons-material/Kitchen'; // Custom icon, no direct match
import StorageIcon from '@mui/icons-material/Storage';
import MicrowaveIcon from '@mui/icons-material/Microwave';

import ShowerIcon from '@mui/icons-material/Shower';
import SoapIcon from '@mui/icons-material/Soap';
import TowelIcon from '@mui/icons-material/DryCleaning'; // Custom icon, no direct match

import BedIcon from '@mui/icons-material/Bed';
import NightstandIcon from '@mui/icons-material/BedroomParent'; // Custom icon, no direct match
import DeskIcon from '@mui/icons-material/DesktopWindows';
import ChairIcon from '@mui/icons-material/Chair';
import DresserIcon from '@mui/icons-material/BedroomBaby'; // Custom icon, no direct match
import CarpetIcon from '@mui/icons-material/CropSquare'; // Custom icon, no direct match
import CeilingIcon from '@mui/icons-material/Checkroom'; // Custom icon, no direct match

import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import HangerIcon from '@mui/icons-material/Checkroom'; // Custom icon, no direct match

import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';

import DeckIcon from '@mui/icons-material/Deck';
import TableBarIcon from '@mui/icons-material/TableBar'; // For End Table

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

type Amenity = {
  icon: JSX.Element;
  label: string;
  category: string;
};

type Amenities = Amenity[];

export default function Amenities() {
  const amenities = [
    // Utilities
    { category: 'Utilities', icon: <ElectricBoltIcon />, label: 'Electric' },
    { category: 'Utilities', icon: <WaterIcon />, label: 'Water' },
    { category: 'Utilities', icon: <FireplaceIcon />, label: 'Gas Heat' },
    { category: 'Utilities', icon: <DeleteIcon />, label: 'Trash' },
    { category: 'Utilities', icon: <WifiIcon />, label: 'Internet' },
  
    // Tech
    { category: 'Tech', icon: <SpeedIcon />, label: '1 Gigabit Fiber Internet' },
    { category: 'Tech', icon: <WifiIcon />, label: 'Wi-Fi 6E Network' },
    { category: 'Tech', icon: <SettingsEthernetIcon />, label: 'Ethernet Ports' },
    { category: 'Tech', icon: <SmartDisplayIcon />, label: 'Google Smart Home Display' },
  
    // Living Room
    { category: 'Living Room', icon: <WeekendIcon />, label: 'Sofa' },
    { category: 'Living Room', icon: <CoffeeTableIcon />, label: 'Glass Coffee Table' },
    { category: 'Living Room', icon: <TvIcon />, label: 'Smart TV' },
    { category: 'Living Room', icon: <VideogameAssetIcon />, label: 'Nintendo Switch' },
    { category: 'Living Room', icon: <RemoveRedEyeIcon />, label: 'Amazing Views' },
  
    // Kitchen
    { category: 'Kitchen', icon: <CountertopsIcon />, label: 'Kitchen Island' },
    { category: 'Kitchen', icon: <KitchenIcon />, label: 'Refrigerator' },
    { category: 'Kitchen', icon: <MicrowaveIcon />, label: 'Microwave and Convection Oven' },
    { category: 'Kitchen', icon: <SinkIcon />, label: 'Sink' },
    { category: 'Kitchen', icon: <StorageIcon />, label: 'Spacious Cabinets' },
    { category: 'Kitchen', icon: <CoffeeMakerIcon />, label: 'Nespresso Machine' },
    { category: 'Kitchen', icon: <RestaurantIcon />, label: 'Utensils' },
    { category: 'Kitchen', icon: <InductionIcon />, label: 'Induction Cooktop' },
    { category: 'Kitchen', icon: <PanToolIcon />, label: 'Cookware' },
    { category: 'Kitchen', icon: <CuttingIcon />, label: 'Cutting Board' },
    { category: 'Kitchen', icon: <StorageIcon />, label: 'Food Storage' },
  
    // Bathroom
    { category: 'Bathroom', icon: <ShowerIcon />, label: 'Large Shower' },
    { category: 'Bathroom', icon: <SoapIcon />, label: 'Toothbrush Holder' },
    { category: 'Bathroom', icon: <TowelIcon />, label: 'Towels' },
  
    // Bedroom
    { category: 'Bedroom', icon: <BedIcon />, label: 'Queen Bed' },
    { category: 'Bedroom', icon: <NightstandIcon />, label: 'Nightstands' },
    { category: 'Bedroom', icon: <DeskIcon />, label: 'Desk' },
    { category: 'Bedroom', icon: <ChairIcon />, label: 'Desk Chair' },
    { category: 'Bedroom', icon: <DresserIcon />, label: 'Dresser' },
    { category: 'Bedroom', icon: <CarpetIcon />, label: 'Carpet' },
    { category: 'Bedroom', icon: <CeilingIcon />, label: 'High Ceilings' },
  
    // Laundry
    { category: 'Laundry', icon: <LocalLaundryServiceIcon />, label: 'Washer and Dryer' },
    { category: 'Laundry', icon: <HangerIcon />, label: 'Closet Racks' },
    { category: 'Laundry', icon: <HangerIcon />, label: 'Hangers' },
  
    // Heating and Cooling
    { category: 'Heating and Cooling', icon: <ThermostatIcon />, label: 'Thermostat' },
    { category: 'Heating and Cooling', icon: <AcUnitIcon />, label: 'Air Conditioning' },
  
    // Home Safety
    { category: 'Home Safety', icon: <LockIcon />, label: 'Smart Home Lock' },
    { category: 'Home Safety', icon: <SecurityIcon />, label: 'Security Cameras' },
    { category: 'Home Safety', icon: <SmokeFreeIcon />, label: 'Smoke Alarm' },
    { category: 'Home Safety', icon: <MedicalServicesIcon />, label: 'First Aid Kit' },
    { category: 'Home Safety', icon: <FireExtinguisherIcon />, label: 'Fire Extinguisher' },
  
    // Outdoor
    { category: 'Outdoor', icon: <DeckIcon />, label: 'Front Patio' },
    { category: 'Outdoor', icon: <ChairIcon />, label: 'Swivel Chairs' },
    { category: 'Outdoor', icon: <TableBarIcon />, label: 'End Table' },
  
    // Parking
    { category: 'Parking', icon: <DirectionsCarIcon />, label: 'Street Parking' },
  
    // Health and Fitness
    { category: 'Health and Fitness', icon: <FitnessCenterIcon />, label: 'Gym' },
    { category: 'Health and Fitness', icon: <PoolIcon />, label: 'Pool' },
  
    // Services
    { category: 'Services', icon: <CleaningServicesIcon />, label: 'Cleaning Service' },
  ];

  const groupAmenitiesByCategory = (amenities: Amenities): Record<string, Amenities> => {
    return amenities.reduce((groupedAmenities: Record<string, Amenities>, amenity: Amenity) => {
      (groupedAmenities[amenity.category] = groupedAmenities[amenity.category] || []).push(amenity);
      return groupedAmenities;
    }, {});
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const groupedAmenities = groupAmenitiesByCategory(amenities);

  return (
    <Grid container spacing={2}>
      {amenities.slice(0, 10).map((amenity, index) => (
        <Grid item xs={6} key={index}>
          <Box display="flex" alignItems="center">
            {amenity.icon}
            <Typography variant="body1" style={{ marginLeft: '8px' }}>{amenity.label}</Typography>
          </Box>
        </Grid>
      ))}
      <Button variant="outlined" sx={{ mt: 2 }} onClick={handleOpen}>Show all amenities</Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ position: 'absolute', left: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle sx={{ mt: 5 }}>All Amenities</DialogTitle>
        <DialogContent>
          {Object.entries(groupedAmenities).map(([category, amenities], index) => (
            <Box key={index}>
              <Typography variant="h6" sx={{marginBottom: '20px'}}>{category}</Typography>
              {amenities.map((amenity: Amenity, index: number) => (
                <Box key={index}>
                  <Box display="flex" alignItems="center" mb={2}>
                    {amenity.icon}
                    <Typography variant="body1" style={{ marginLeft: '8px' }}>{amenity.label}</Typography>
                  </Box>
                  <Divider sx={{marginBottom: '20px'}} />
                </Box>
              ))}
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </Grid>
  );
}