import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://storage.cloud.google.com/mount-kataka-suites/arrowhead.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Reserve your stay
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fill out a short application and Guy will get back to you as soon as possible!
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://form.jotform.com/232625903214147" target="_blank" size="small" variant="contained">
          Submit an application
        </Button>
      </CardActions>
    </Card>
  );
}