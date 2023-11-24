import { Box, Dialog, IconButton, ImageList, ImageListItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { styled } from '@mui/system';
import { useState } from 'react';

const images = [
  {
    img: "https://storage.googleapis.com/mt-kataka-villas/living-2.jpg",
    title: 'Living room',
    rows: 2,
    cols: 1,
  },
  {
    img: "https://storage.googleapis.com/mt-kataka-villas/living-1.jpg",
    title: 'Living Room',
    rows: 1,
    cols: 1,
  },
  {
    img: "https://storage.googleapis.com/mt-kataka-villas/kitchen.jpg",
    title: 'Kitchen',
    rows: 1,
    cols: 1,
  },
  {
    img: "https://storage.googleapis.com/mt-kataka-villas/bathroom.jpg",
    title: 'Bathroom',
    rows: 2,
    cols: 1,
  },
  {
    img: "https://storage.googleapis.com/mt-kataka-villas/bed-1.jpg",
    title: 'Bedroom',
    rows: 1,
    cols: 1,
  },
  {
    img: "https://storage.googleapis.com/mt-kataka-villas/bed-2.jpg",
    title: 'Bedroom',
    rows: 1,
    cols: 1,
  },
  {
    img: "https://storage.googleapis.com/mt-kataka-villas/laundry.jpg",
    title: 'Laundry',
    rows: 1,
    cols: 1,
  },
];

const StyledImage = styled('img')({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const StyledImageListItem = styled(ImageListItem)({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  height: '100%',
});

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClickOpen = (index: number) => {
    setSelectedImageIndex(index)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <ImageList variant="quilted" cols={3} sx={{ width: "100%", height: "80vh" }}>
        {images.map((item, index) => (
          <StyledImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1} onClick={() => handleClickOpen(index)}>
            <StyledImage src={item.img} alt={item.title} loading="lazy" />
          </StyledImageListItem>
        ))}
      </ImageList>
      <Dialog open={open} onClose={handleClose} fullScreen sx={{ zIndex: 99999999999999 }}>
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
        onClick={handleClose}
      >
        <Box 
          sx={{ 
            position: 'relative', 
            maxWidth: '100%', 
            maxHeight: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }} 
            aria-label="previous" 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: "10%", 
              transform: 'translate(-50%, -50%)', 
              color: 'white',
            }}
          >
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={(event) => {
              event.stopPropagation();
              handleClose();
            }} 
            aria-label="close" 
            sx={{ 
              position: 'absolute', 
              top: 16, 
              left: 16, 
              fontSize: '3rem',
              color: 'white', 
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <img 
            src={images[selectedImageIndex].img} 
            alt={images[selectedImageIndex].title} 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100vh', 
              width: 'auto', 
              height: 'auto', 
              objectFit: 'contain' 
            }} 
            onClick={(event) => event.stopPropagation()}
          />
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }} 
            aria-label="next" 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              right: "10%", 
              transform: 'translate(50%, -50%)', 
              color: 'white',
              // backgroundColor: 'rgba(0, 0, 0, 0.5)',
              // borderRadius: '50%',
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      </Dialog>
    </>
  );
}