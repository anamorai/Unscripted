import React from 'react';
import { Grid, Paper, Typography, Checkbox, FormControlLabel, Button } from '@material-ui/core';

const cookingOptions = ["Breakfast", "Lunch", "Dinner", "Vegan", "Healthy", "Vegetarian"];

const CookingOptions = ({diet, setDiet}) => {


  const handleToggleOption = (option) => {
    setDiet(option);
  };

  const handleGoBack = () => {
    setDiet(null);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Grid container justifyContent="space-between" alignItems="center">
            {diet && (
              <Grid item>
                <Button onClick={handleGoBack}>
                  Back
                </Button>
              </Grid>
            )}
            <Grid item>
              <Typography variant="h5" align="center">
                {diet ? `Top 3 recipes for ${diet}` : "What would you like to cook today?"}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {!diet && (
        <>
          <Grid item xs={6}>
            <Grid container direction="column" spacing={1}>
              {cookingOptions.slice(0, 3).map((option, index) => (
                <Grid item key={index}>
                  <FormControlLabel
                    control={<Checkbox checked={diet === option} onChange={() => handleToggleOption(option)} />}
                    label={option}
                    style={{ width: '100%' }}
                    disabled={!!diet}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" spacing={1}>
              {cookingOptions.slice(3).map((option, index) => (
                <Grid item key={index}>
                  <FormControlLabel
                    control={<Checkbox checked={diet === option} onChange={() => handleToggleOption(option)} />}
                    label={option}
                    style={{ width: '100%' }}
                    disabled={!!diet}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CookingOptions;