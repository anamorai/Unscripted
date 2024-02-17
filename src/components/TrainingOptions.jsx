import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Checkbox, FormControlLabel, Button, Box, CircularProgress, ListItem } from '@mui/material';
import ExerciseCard from "./ExerciseCard";
import axios from "axios";
import { v4 } from "uuid";

const options = ["Chest", "Back", "Legs", "Abs", "Shoulders", "Stretching"];

const TrainingOptions = () => {
  const [bodyPart, setBodyPart] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchRecipeAPI = async () => {
      setLoading(true);
      const options = {
        method: "GET",
        url: "https://work-out-api1.p.rapidapi.com/search",
        params: {
          Muscles: bodyPart,
        },
        headers: {
          "X-RapidAPI-Key": "f4143fa61cmshf9bc49eb2e901d5p1db820jsn655b1ffc1b4e",
          "X-RapidAPI-Host": "work-out-api1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipeAPI();
  }, [bodyPart]);

  const handleToggleOption = (option) => {
    setBodyPart(option);
  };

  const handleGoBack = () => {
    setBodyPart(null);
  };

  return (
    <Box
      sx={ {
        borderRadius: 8,
        boxShadow: 3,
        p: 2,
      } }
    >
      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 }>
          <Paper>
            <Grid container justify="space-between" alignItems="center">
              { bodyPart && (
                <Grid item>
                  <Button onClick={ handleGoBack }>
                    Back
                  </Button>
                </Grid>
              ) }
              <Grid item>
                <Typography variant="h5" align="center">
                  { bodyPart ? `Top 3 exercises for ${bodyPart}` : "What would you like to train today?" }
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          { loading && (
            <Grid item xs={ 12 } align="center">
              <CircularProgress />
            </Grid>
          ) }
          { bodyPart && !loading && (
            exercises?.slice(0, 3).map(exercise => <ExerciseCard workOut={exercise["WorkOut"]} explaination={exercise["Explaination"]} beginnerSets={exercise["Beginner Sets"]} intermediateSets={exercise["Intermediate Sets"]} expertSets={exercise["Expert Sets"]} />)
          ) }
        </Grid>
        { !bodyPart && (
          <>
            <Grid item xs={ 6 }>
              <Grid container direction="column" spacing={ 1 }>
                { options.slice(0, 3).map((option, index) => (
                  <Grid item key={ index }>
                    <FormControlLabel
                      control={ <Checkbox checked={ bodyPart === option } onChange={ () => handleToggleOption(option) } /> }
                      label={ option }
                      style={ { width: '100%' } }
                      disabled={ !!bodyPart }
                    />
                  </Grid>
                )) }
              </Grid>
            </Grid>
            <Grid item xs={ 6 }>
              <Grid container direction="column" spacing={ 1 }>
                { options.slice(3).map((option, index) => (
                  <Grid item key={ index }>
                    <FormControlLabel
                      control={ <Checkbox checked={ bodyPart === option } onChange={ () => handleToggleOption(option) } /> }
                      label={ option }
                      style={ { width: '100%' } }
                      disabled={ !!bodyPart }
                    />
                  </Grid>
                )) }
              </Grid>
            </Grid>
          </>
        ) }
      </Grid>
    </Box>
  );
};

export default TrainingOptions;
