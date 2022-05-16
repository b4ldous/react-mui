import { Box } from '@mui/material'
import React from 'react'


const AlingItems = () => {
  return (
    <>
    <h3>Align Items</h3>

    <h4>center, flex-start, flex-end</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        height: '200px',
        alignItems: 'center'
        

    }}>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center',
            height: '75px'


        }}>
            1
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center',
            height: '75px'
            

            

        }}>
            2
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center',
            height: '75px'
        }}>3

        </Box>


    </Box>
    
    
    
    </>
  )
}

export default AlingItems