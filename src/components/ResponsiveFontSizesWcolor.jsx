
import React from 'react'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';


  let theme = createTheme();
    theme = responsiveFontSizes(theme);


const ResponsiveFontSizesWcolor = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Typography sx={{color: 'red', fontWeight: 500, textAlign:'center'}} variant="h1">Responsive h1</Typography>
        <Typography sx={{color: 'blue', fontWeight: 500}} variant="h4">Responsive h4</Typography>
        <Typography sx={{color: 'green', fontWeight: 500}} variant="h5">Responsive h5</Typography>
        <Typography sx={{fontWeight: 1000, textAlign: 'center', background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"}} variant="h1">Responsive h1</Typography>
      <br></br>

      <Typography variant='h6'>This is h6</Typography>
      
      </ThemeProvider>
      
    
    </>
  )
}

export default ResponsiveFontSizesWcolor