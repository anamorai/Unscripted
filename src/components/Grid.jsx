import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>To Do List</Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>Shopping</Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>Goals</Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>API 1</Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>API 2</Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>API 3</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
