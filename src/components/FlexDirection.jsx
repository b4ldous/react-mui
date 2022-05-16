import { Box } from '@mui/material'
import React from 'react'

const FlexDirection = () => {
  return (
    <>
    <h3>Flex direction:</h3>
    <h4>Column</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        flexDirection: 'column'
        

    }}>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'


        }}>
            1
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'
            

            

        }}>
            2
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'
        }}>3

        </Box>


    </Box>

    <h4>column-reverse</h4>

    <Box sx={{
        display: 'flex',
        background: 'red',
        flexDirection: 'column-reverse'
        

    }}>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'


        }}>
            1
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'
            

            

        }}>
            2
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'
        }}>3

        </Box>


    </Box>
    <h4>row</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        flexDirection: 'row'
        

    }}>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'


        }}>
            1
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'
            

            

        }}>
            2
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'
        }}>3

        </Box>


    </Box>
    <h4>row-reverse</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        flexDirection: 'row-reverse'
        

    }}>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'


        }}>
            1
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'
            

            

        }}>
            2
        </Box>
        <Box sx={{
            background: 'yellow',
            margin: '10px',
            padding: '20px',
            fontSize: '30px',
            width: '100px',
            textAlign: 'center'
        }}>3

        </Box>


    </Box>

    
    
    
    </>
  )
}

export default FlexDirection