import { AppBar, Container, Typography, Box, Divider } from '@mui/material'


import React from 'react'

const FifthAppBar = () => {
  return (
      <>
        <AppBar color='inherit'  elevation={6} position='static'>
        

        <Container>

<Box sx={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
    <Box>
    <Typography variant='body'>hello</Typography>


    </Box>
    <Box>
    <Typography variant='body' sx={{borderBottom: 'solid 5px', borderColor: 'orange', margin: '10px'}}>hi</Typography>


    </Box>

</Box>


</Container>


    
           
        


    </AppBar>
    <Divider/>
      
      </>
  
    
    
  )
}

export default FifthAppBar