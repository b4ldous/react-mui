
import { Box} from '@mui/material'
import React from 'react'


const DisplayFlex = () => {
  return (
    <>
    
    <Box sx={{
        display: 'flex',
        background: 'red',
        

    }}>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
        


        }}>
            1
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
    
        }}>
            2
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
        
        }}>3

        </Box>


    </Box>
    
    
    
    </>
  )
}

export default DisplayFlex