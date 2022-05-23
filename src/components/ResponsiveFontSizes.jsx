import React from 'react'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';
import TypoMain from './TypoMain';

  let theme = createTheme();
    theme = responsiveFontSizes(theme);



const ResponsiveFontSizes = () => {
  return (
    <>
     <ThemeProvider theme={theme}>
        <Typography sx={{fontWeight: 500, textAlign: 'center'}} variant="h1">Responsive h3</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>
      </ThemeProvider>
      <TypoMain/>
    
    
    
    </>
  )
}

export default ResponsiveFontSizes