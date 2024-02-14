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

export default function ResponsiveGrid() {

    return (
        <Box sx={ { flexGrow: 1 } }>
            <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 12, sm: 8, md: 12 } }>
                <Grid item xs={ 12 } sm={ 4 } md={ 4 }>
                    <Item>Exercises I will do today:<TodoComplete /> </Item>
                </Grid>
                <Grid item xs={ 12 } sm={ 4 } md={ 4 }>
                    <Item>Ingredients I need to buy:<TodoComplete /></Item>
                </Grid>
                <Grid item xs={ 12 } sm={ 4 } md={ 4 }>
                    <Item>To do list:<TodoComplete /></Item>
                </Grid>
                <Grid item xs={ 12 } sm={ 4 } md={ 4 }>
                    <TrainingOptions />
                </Grid>
                <Grid item xs={ 12 } sm={ 4 } md={ 4 }>
                    <CookingOptions />
                </Grid>
                <Grid item xs={ 12 } sm={ 4 } md={ 4 }>
                    <QuoteComponent />
                </Grid>
            </Grid>
        </Box>
    );
}
