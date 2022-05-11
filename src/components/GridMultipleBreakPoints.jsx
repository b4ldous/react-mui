import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const GridMultipleBreakPoints = () => {
  return (

    <Box>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8} >
                <Paper elevation={3}>
                    xs=12, sm=8
                </Paper>

            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper elevation={3}>
                    xs=12, sm=4
                </Paper>

            </Grid>



        </Grid>



    </Box>
   

  )
}

export default GridMultipleBreakPoints;