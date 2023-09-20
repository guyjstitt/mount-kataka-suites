
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ImageGallery from "react-image-gallery";

import './App.css';
import AppBar from './AppBar';
import MenuAppBar from './AppBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const styles = {
  row: {
    margin: 0,
    padding: 0,
  },
};

function App() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sx={styles.row}>
            <Item sx={styles.row}><MenuAppBar></MenuAppBar></Item>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={3}></Grid>
            <Grid xs={6}>
              <Item><ImageGallery items={images} /></Item>
            </Grid>
            <Grid xs={3}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={3}></Grid>
            <Grid container xs={4}>
              <Grid xs={12}>Entire place hosted by guy</Grid>
              <Grid container xs={12}>
                <Grid xs={12}>Self check-in</Grid>
                <Grid xs={12}>Guy is a super host</Grid>
                <Grid xs={12}>Flexible</Grid>
              </Grid>
            </Grid> 
            <Grid xs={2}>
              <Item>Reserve</Item>
            </Grid>
            <Grid xs={3}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={3}></Grid>
            <Grid xs={6}>
              <Item>Reviews</Item>
            </Grid>
            <Grid xs={3}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={3}></Grid>
            <Grid xs={6}>
              <Item>Where you'll be</Item>
            </Grid>
            <Grid xs={3}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={3}></Grid>
            <Grid xs={6}>
              <Item>Hosted by: Guy</Item>
            </Grid>
            <Grid xs={3}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={3}></Grid>
            <Grid xs={6}>
              <Item>Things to know</Item>
            </Grid>
            <Grid xs={3}></Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
