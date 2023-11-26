import { Box, Dialog, DialogTitle, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function Summary() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Typography variant="body1" paragraph>
          In our newly built, elegantly furnished private suite, comfort meets nature's doorstep. Ideal for both work and leisure, this cozy retreat offers a tranquil haven with stunning views, just a short drive from local landmarks and corporate hubs.
        </Typography>

        <Typography variant="body1" paragraph>
          Relax in a space graced with high ceilings and stylish decor, including a plush queen bed, a spacious shower, and a fully-equipped kitchenette with a Nespresso machine. The living room, complete with a smart TV and Nintendo Switch, offers both...
        </Typography>

        <Typography 
            variant="subtitle2" 
            component="span" 
            sx={{ textDecoration: 'underline', cursor: 'pointer', mt: 2 }} 
            onClick={handleOpen}
            >
            See more {">"}
        </Typography>

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
          <DialogTitle sx={{ mt: 5 }}>
            <Typography variant="h5">
                Discover the Charm of Littleton, Colorado
            </Typography>
            </DialogTitle>
          <Box sx={{ p: 3 }}>
            <Typography variant="body1" paragraph>
            In our newly built, elegantly furnished private suite, comfort meets nature's doorstep. Ideal for both work and leisure, this cozy retreat offers a tranquil haven with stunning views, just a short drive from local landmarks and corporate hubs.
            </Typography>

            <Typography variant="body1" paragraph>
            Relax in a space graced with high ceilings and stylish decor, including a plush queen bed, a spacious shower, and a fully-equipped kitchenette with a Nespresso machine. The living room, complete with a smart TV and Nintendo Switch, offers both entertainment and relaxation.
            </Typography>

            <Typography variant="body1" paragraph>
              Connect effortlessly with gigabit fiber internet and stay secure with our advanced smart home features. Enjoy the convenience of an in-suite laundry, and unwind on the front patio, taking in the Colorado air.
            </Typography>

            <Typography variant="body1" paragraph>
              Whether staying for a month or longer, our flexible leasing options make your journey stress-free. Join us for an experience where every detail is tailored for your comfort and convenience, nestled in the picturesque landscape of Littleton. Your Coloado adventure awaits!
            </Typography>
          </Box>
        </Dialog>
      </Box>
    </>
  )
}