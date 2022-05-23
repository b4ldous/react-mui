import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const TypoMain = () => {
  return (
    <Box sx={{display: 'flex', height: '500px', justifyContent: 'center', alignItems: 'center',  background: 'black'}}>

        <Box>
            <Typography sx={{fontWeight: 1000}} variant='h1' color='white'> hello!</Typography>

        </Box>


    </Box>
  )
}

export default TypoMain