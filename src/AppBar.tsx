import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

import './AppBar.css';

import Box from '@mui/material/Box';

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ zIndex: 1100 }}>
        <Toolbar>
          <div className="header-icon">
            <CottageOutlinedIcon></CottageOutlinedIcon>
          </div>
          <Typography variant="h6" component="div">
            Mount Kataka Villas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}