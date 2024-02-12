import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TodoComplete from "./TodoComplete"
import TodoDrag from "./TodoDrag"
import TrainingOptions from "./TrainingOptions"
import CookingOptions from "./CookingOptions"
import QuoteComponent from "./Quote"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({ diet, setDiet, bodyPart, setBodyPart, dataFromRecipeAPI, dataFromTrainingAPI }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>Exercises I will do today:<TodoDrag /> </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>Ingredients I need to buy:<TodoDrag /></Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>To do list:<TodoComplete /></Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <TrainingOptions bodyPart={bodyPart} setBodyPart={setBodyPart} dataFromTrainingAPI={dataFromTrainingAPI} />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CookingOptions diet={diet} setDiet={setDiet} dataFromRecipeAPI={dataFromRecipeAPI} />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <QuoteComponent />
                </Grid>
            </Grid>
        </Box>
    );
}
