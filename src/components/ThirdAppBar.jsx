import { AppBar, Box} from '@mui/material'

import React from 'react'

const ThirdAppBar = () => {
  return (
    <AppBar color='transparent' position='static' elevation={6}>
    

          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{ textAlign: 'center', margin: '10px'}}><h6>Logo</h6> </Box>
            <Box sx={{ textAlign: 'center', margin: '10px'}}><h6>other content</h6> </Box>
            <Box sx={{  textAlign: 'center', margin: '10px'}}> <h6>Content: contact, about, login, etc.</h6></Box>

          </Box>
            

      
    </AppBar>
  )
}

export default ThirdAppBar