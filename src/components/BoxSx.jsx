import React from 'react';
import Box from '@mui/material/Box';

const BoxSx = () => {
  return (

    <Box

    sx={{
      width: 200,
      height: 200,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  />
    
  )
}

export default BoxSx