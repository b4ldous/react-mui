
import React from 'react'
import { AppBar, Container, Typography, Box, Divider, CssBaseline } from '@mui/material'



const SixthAppBar = () => {
  return (
    <>
   
    <AppBar color='inherit'  elevation={6} position='static'>       
     <Container>
     <CssBaseline/>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
                <Typography variant='body'>hello</Typography>
            </Box>
            <Box>
                <Typography variant='body' sx={{ bgcolor: 'green'}}>hi</Typography>
            </Box>
        </Box>
        </Container>
    </AppBar>
    <Divider/>
      
      </>
  
  )
}

export default SixthAppBar