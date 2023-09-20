import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

import './AppBar.css';

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="header-icon">
            <CottageOutlinedIcon></CottageOutlinedIcon>
          </div>
          <Typography variant="h6" component="div">
            Mount Kataka Suites
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}