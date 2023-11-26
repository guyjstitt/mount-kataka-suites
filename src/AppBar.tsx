import Typography from '@mui/material/Typography';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import './AppBar.css';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Divider } from '@mui/material';

export default function MenuAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container md={12} style={{ margin: '20px 0' }}>
          <Grid2 container md={2}/>
          <Grid2 container md={8} justifyContent="flex-start" alignItems="center">
            <div className="header-icon">
              <CottageOutlinedIcon fontSize="large" />
            </div>
            <Typography variant="h6" component="div" style={{ color: 'red' }}>
              Mount Kataka Villas
            </Typography>
          </Grid2>
          <Grid2 container md={2}/>
        </Grid2>
      </Box>
      <Divider sx={{marginLeft: '-24px', marginRight: '-24px'}}/>
    </>
  );
}