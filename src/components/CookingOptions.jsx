import React from 'react';
import { Grid, Paper, Typography, Checkbox, FormControlLabel, Button, Box } from '@mui/material';

const cookingOptions = ["Breakfast", "Lunch", "Dinner", "Vegan", "Gluten Free", "Vegetarian"];

const CookingOptions = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleToggleOption = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    setSelectedOption(null);
  };

  return (
    <Box
      sx={{
        borderRadius: 8,
        boxShadow: 3, // You can adjust the shadow strength (0 to 24)
        p: 2, // Add padding as needed
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Grid container justify="space-between" alignItems="center">
              {selectedOption && (
                <Grid item>
                  <Button onClick={handleGoBack}>
                    Back
                  </Button>
                </Grid>
              )}
              <Grid item>
                <Typography variant="h5" align="center">
                  {selectedOption ? `Top 3 recipes for ${selectedOption}` : "What would you like to cook today?"}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {!selectedOption && (
          <>
            <Grid item xs={6}>
              <Grid container direction="column" spacing={1}>
                {cookingOptions.slice(0, 3).map((option, index) => (
                  <Grid item key={index}>
                    <FormControlLabel
                      control={<Checkbox checked={selectedOption === option} onChange={() => handleToggleOption(option)} />}
                      label={option}
                      style={{ width: '100%' }}
                      disabled={!!selectedOption}
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
                      control={<Checkbox checked={selectedOption === option} onChange={() => handleToggleOption(option)} />}
                      label={option}
                      style={{ width: '100%' }}
                      disabled={!!selectedOption}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default CookingOptions;
