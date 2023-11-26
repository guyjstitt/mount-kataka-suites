import { Box } from '@mui/material';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface IconMarker {
   url: string;
   scaledSize: google.maps.Size;
 }

const MapLocation = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
    zIndex: 1,
    minHeight: "300px"
  };
  
   const defaultCenter = {
      lat: 39.48529465864245, lng: -105.07322572142847
   }

   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyALM8ykhCfC5I6657LOg5ocDa5CxvFZqiU" // replace with your Google Maps API key
   })

   const iconMarker: IconMarker | undefined= isLoaded ? {
      url: "https://storage.googleapis.com/mt-kataka-villas/location-rental.png", // path to your icon
      scaledSize: new window.google.maps.Size(50, 50), // size of the icon
   } : undefined;
  
   return isLoaded ? (
      <Box>
         <GoogleMap 
         id='map'
         mapContainerStyle={mapStyles}
         zoom={13}
         center={defaultCenter}>
         <Marker key="marker_1" position={defaultCenter} icon={iconMarker}/>
         </GoogleMap>
      </Box>
    ) : <></>
}

export default MapLocation;