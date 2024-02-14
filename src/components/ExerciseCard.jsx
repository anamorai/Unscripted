import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="h5"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({beginnerSets, intermediateSets, expertSets, explaination, workOut}) {
  return (
    <Card sx={{ minWidth: 275, marginTop: 2 }}>
      <CardContent>
        <h3>{workOut}</h3>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h5>Beginner Sets: </h5>{beginnerSets}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h5>Intermediate Sets: </h5>{intermediateSets}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h5>Expert Sets: </h5>{expertSets}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h5>Explaination: </h5>{explaination}
        </Typography>
      </CardContent>
    </Card>
  );
}