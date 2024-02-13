import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { v4 } from "uuid";

export default function ActionAreaCard({ title, image, ingredients }) {
  const ingredientsArr = ingredients.map(ingredient => ingredient.name);

  return (
    <Card sx={ { maxWidth: 400, mt: 2 } }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ image }
          alt={ title }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { title }
          </Typography>
          <Typography variant="body2" color="text.secondary">

          </Typography>
          {ingredientsArr.join(", ")}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}