import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const SimpleContainer = () => {
  return (
    <>
    <CssBaseline />
    <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} >
        Just Container
        </Box>
      </Container><br></br>
    

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} >
        maxWidth='sm'
        </Box>
      </Container>
      <br></br>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} >
        maxWidth='md'
        </Box>
      </Container>
      <br></br>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} >
        maxWidth='lg'
        </Box>
      </Container>
    
    
    </>
  )
}

export default SimpleContainer