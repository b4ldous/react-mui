import Box  from '@mui/material/Box';
import Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import React from 'react';
import ResponsiveFontSizes from './ResponsiveFontSizes';

const MuiTypography = () => {
  return (
    <Box>
        <Container>
            <h1>MUI typography</h1>
            <Typography textAlign={'center'} color='greenyellow' variant='h1'>h1. Hello</Typography>
            <Typography textAlign={'justify'} color='red' variant='h2'>h2. Hello</Typography>
            <Typography textAlign={'left'} color='blueviolet' variant='h3'>h3. Hello</Typography>
            <Typography textAlign={'right'} color='yellow'  variant='h4'>h4. Hello</Typography>
            <Typography color='purple' variant='h5'>h5. Hello</Typography>
            <Typography color='orangered' variant='h6'>h6. Hello</Typography>
            <h1>Custom typography</h1>
            <h2>Custom by theming</h2>
            <ResponsiveFontSizes/>

        </Container>
    </Box>
  )
}

export default MuiTypography