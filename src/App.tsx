import Divider from '@mui/material/Divider';

import './App.css';
import MenuAppBar from './AppBar';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import ReserveCard from './Reserve';

import MapLocation from './MapLocation';
import Gallery from './Gallery';
import Amenities from './Amenities';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import ConstructionIcon from '@mui/icons-material/Construction';
import FurnitureIcon from '@mui/icons-material/Weekend';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Summary from './Summary';


function App() {

  return (
    <>
    <Container maxWidth={false} sx={{ overflowX: 'hidden' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12 }md={12}>
            <MenuAppBar></MenuAppBar>
          </Grid>
          <Grid container xs={12}>
            <Grid md={2}></Grid>
            <Grid xs={12} sm={8} md={8}>
              <Box display="flex">
                <Typography variant="h5">Cozy Private Suite Nestled Near the Mountains</Typography>
              </Box>
            </Grid>
            <Grid sm={2}></Grid>
            <Grid md={2}></Grid>
            <Grid xs={12} sm={8} md={8}>
              <Box display="flex">
              <Typography variant="body2">
                <ConstructionIcon style={{ fontSize: 16, verticalAlign: 'middle' }} /> Brand New Construction 
                <span style={{ margin: '0 3px' }}> · </span>
                <FurnitureIcon style={{ fontSize: 16, verticalAlign: 'middle' }} /> Fully Furnished & Utilities Included
                <span style={{ margin: '0 3px' }}> · </span>
                <a href="#map" style={{ textDecoration: 'none', color: 'blue' }}>
                  Littleton, CO
                </a>  (Near Sterling Ranch and Roxborough Park) 
              </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container md={12}>
            <Grid md={2}></Grid>
            <Grid md={8}>
              <Gallery></Gallery>
            </Grid>
            <Grid md={2}></Grid>
          </Grid>
          <Grid container md={12}>
            <Grid md={2}></Grid>
            <Grid container md={5}>
              <Grid container alignItems="center" justifyContent="space-between" sx={{width: '100%'}}>
                <Grid> 
                  <Typography variant="h5" gutterBottom>
                    Private suite hosted by Virginia and Guy
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    2 guests <span style={{ margin: '0 1px' }}> · </span> 1 Bedroom <span style={{ margin: '0 1px' }}> · </span> 1 Bath
                  </Typography>
                  <Typography variant="subtitle2">$1950/month</Typography>
                </Grid>
                <Grid style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Avatar alt="Remy Sharp" src="https://storage.googleapis.com/mt-kataka-villas/guy-virginia.jpg" />
                </Grid>
              </Grid>
              <Grid md={12}>
                <Divider></Divider>
                <List sx={{ width: '100%' }}>
                  <ListItem style={{ display: 'flex', alignItems: 'start' }}>
                    <ListItemAvatar>
                      <Avatar>
                        <DirectionsCarIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText style={{ marginTop: 0 }} primary="Close to Work and Adventures" secondary="12 minutes to UCHealth Highlands Ranch, 5 minutes to Lockheed Martin, 5 minutes to Arrowhead golf course, and right next to Chatfield State Park." />
                  </ListItem>
                  <ListItem style={{ display: 'flex', alignItems: 'start' }}>
                    <ListItemAvatar>
                      <Avatar>
                        <HomeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText style={{ marginTop: 0 }} primary="Fully-furnished, Private, and Utilities Included" secondary="Private entrance with smart lock, brand new furniture, nespresso coffee machine, premium memory foam mattress, blazing fast Fiber internet, incredible views, and tons of included amenities." />
                  </ListItem>
                  <ListItem style={{ display: 'flex', alignItems: 'start' }}>
                    <ListItemAvatar>
                      <Avatar>
                        <EventAvailableIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                      style={{ marginTop: 0 }} 
                      primary="Flexible Lease without Outrageous Fees" 
                      secondary={
                        <>
                          Stay for 1 month, 3 months, or as long as you'd like (30 day minimum). Please request a reservation or contact  
                          {' '}
                          <a href="mailto:support@mtkatakasuites.com" style={{ textDecoration: 'none', color: 'blue' }}>
                            support@mtkatakasuites.com
                          </a> 
                          {' '}
                          for any special requests.
                        </>
                      } />
                  </ListItem>
                </List>
                <Divider></Divider>
              </Grid>
              <Grid md={12}>
                <Box display="flex">
                  <Typography variant="h5" gutterBottom>
                    Discover the Charm of Littleton, Colorado
                  </Typography>
                </Box>
                <Summary></Summary>
                <Divider sx={{ marginTop: '20px'}}></Divider>
              </Grid>
              <Grid xs={12} sm={8} md={8}>
                <Box display="flex">
                  <Typography variant="h5">Everything's included</Typography>
                </Box>
              </Grid>
              <Grid container xs={12}>
                <Grid xs={12} sm={12} md={12}>
                  <Box p={2}>
                    <Amenities></Amenities>
                  </Box>
                  <Divider></Divider>
                </Grid>
              </Grid>
              {/* <Grid container md={12}>
                <Grid md={12}><Typography variant="subtitle1" gutterBottom>Self check-in</Typography></Grid>
                <Grid md={12}><Typography variant="body2" gutterBottom>Easily check into the Airbnb using a convenient smart lock system.</Typography></Grid>
                <Grid md={12}><Typography variant="subtitle1" gutterBottom>Guy is a super host</Typography></Grid>
                <Grid md={12}><Typography variant="body2" gutterBottom>Meet Guy, your software architect Airbnb host in Colorado, who loves golf, gaming, and outdoor adventures. He lives in the main home with his two mini Labradoodles and is dedicated to ensuring your stay is comfortable and memorable, offering both technical expertise and local insights.</Typography></Grid>
                <Grid md={12}><Typography variant="subtitle1" gutterBottom>Flexible</Typography></Grid>
                <Grid md={12}><Typography variant="body2" gutterBottom>Discover the freedom of flexible leasing terms with our Airbnb! Whether you're looking to stay for a month, three months, or longer, we offer hassle-free options with no early cancellation fees or hidden charges. Your comfort and convenience are our top priorities – stay as long as you'd like, and leave whenever suits you best.</Typography></Grid>
              </Grid> */}
            </Grid> 
            <Grid sm={12} md={3}>
              <Grid xs display="flex" justifyContent="flex-end" alignItems="center" style={{ position: 'sticky', top: '64px', zIndex: 100 }}>
                <ReserveCard></ReserveCard>
              </Grid>
            </Grid>
            <Grid md={2}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid sm={2}></Grid>
            <Grid xs={12} sm={12} md={8}>
              <Box display="flex">
                <Typography variant="h5">Where you'll be staying</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid sm={2}></Grid>
            <Grid xs={12} sm={12} md={8}>
                <MapLocation></MapLocation>
            </Grid>
            <Grid sm={2}></Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
      <Grid container justifyContent="center" style={{ padding: '20px 0' }}>
        <Typography variant="body1">
          <a href="mailto:support@mtkatakavillas.com" style={{ textDecoration: 'none', color: 'blue' }}>
            support@mtkatakavillas.com
          </a> 
        </Typography>
      </Grid>
      </>
  )
}

export default App
