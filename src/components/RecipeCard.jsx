import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ListItem from '@mui/material/ListItem';

export default function ActionAreaCard({title, image, summary, ingrediants}) {
  return (
    <Card sx={{ maxWidth: 400, mt: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
            {ingrediants?.map(ingredient => <ListItem>{ingredient.nameClean}</ListItem>)}
          <ListItem></ListItem>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}