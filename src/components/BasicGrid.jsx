import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const BasicGrid = () => {
  return (

    <Box>
        <Grid container spacing={2}>
            <Grid item xs={8} >
                <Paper elevation={3}>
                    xs=8
                </Paper>

            </Grid>
            <Grid item xs={4}>
                <Paper elevation={3}>
                    xs=4
                </Paper>

            </Grid>



        </Grid>



    </Box>
    
    
  )
}

export default BasicGrid