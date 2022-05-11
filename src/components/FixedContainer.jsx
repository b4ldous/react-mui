import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const FixedContainer = () => {
  return (
    <>
    <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} >Fixed</Box>
      </Container>
    
    </>
  )
}

export default FixedContainer