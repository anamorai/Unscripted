import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TodoComplete from "./TodoComplete"
import TrainingOptions from "./TrainingOptions"
import CookingOptions from "./CookingOptions"
import QuoteComponent from "./Quote"
import { Typography } from '@mui/material';

const RoundedItem = ({ children }) => (
  <Paper style={{ borderRadius: 16, padding: 16 }}>
    {children}
  </Paper>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={4} md={4}>
          <RoundedItem>
            <Typography variant="h5" align="center">
              Exercises I will do today:<TodoComplete />
            </Typography>
          </RoundedItem>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <RoundedItem>
            <Typography variant="h5" align="center">
              Ingredients I need to buy:<TodoComplete />
            </Typography>
          </RoundedItem>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <RoundedItem>
            <Typography variant="h5" align="center">
              To do list:<TodoComplete />
            </Typography>
          </RoundedItem>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TrainingOptions />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CookingOptions />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <QuoteComponent />
        </Grid>
      </Grid>
    </Box>
  );
}
