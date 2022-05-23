import React from 'react'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';


  let theme = createTheme();
    theme = responsiveFontSizes(theme);



const ResponsiveFontSizes = () => {
  return (
    <>
     <ThemeProvider theme={theme}>
        <Typography sx={{fontWeight: 1000, textAlign: 'center'}} variant="h1">Responsive h1</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>


        





      </ThemeProvider>
      
    
    
    
    </>
  )
}

export default ResponsiveFontSizes