import React from 'react';
import { Grid, Paper, Typography, Checkbox, FormControlLabel, Button } from '@mui/material';

const options = ["Chest", "Back", "Legs", "Abs", "Arms", "Stretching"];

const TrainingOptions = ({bodyPart, setBodyPart, dataFromTrainingAPI}) => {
  console.log(dataFromTrainingAPI);

  const handleToggleOption = (option) => {
    setBodyPart(option);
  };

  const handleGoBack = () => {
    setBodyPart(null);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Grid container justifyContent="space-between" alignItems="center">
            {bodyPart && (
              <Grid item>
                <Button onClick={handleGoBack}>
                  Back
                </Button>
              </Grid>
            )}
            <Grid item>
              <Typography variant="h5" align="center">
                {bodyPart ? `Top 3 exercises for ${bodyPart}` : "What would you like to train today?"}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {!bodyPart && (
        <>
          <Grid item xs={6}>
            <Grid container direction="column" spacing={1}>
              {options.slice(0, 3).map((option, index) => (
                <Grid item key={index}>
                  <FormControlLabel
                    control={<Checkbox checked={bodyPart === option} onChange={() => handleToggleOption(option)} />}
                    label={option}
                    style={{ width: '100%' }}
                    disabled={!!bodyPart}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" spacing={1}>
              {options.slice(3).map((option, index) => (
                <Grid item key={index}>
                  <FormControlLabel
                    control={<Checkbox checked={bodyPart === option} onChange={() => handleToggleOption(option)} />}
                    label={option}
                    style={{ width: '100%' }}
                    disabled={!!bodyPart}
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

export default TrainingOptions;
