import { Box } from '@mui/material'
import React from 'react'



const JustifyContet = () => {
  return (
    <>
    <h3>Justify Content</h3>
    <h4>center</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        justifyContent: 'center'
        

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

    <h4>flex-start</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        justifyContent: 'flex-start'
        

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
    <h4>flex-end</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        justifyContent: 'flex-end'
        

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
    <h4>space-around</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        justifyContent: 'space-around'
        

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
    
    <h4>space-between</h4>
    <Box sx={{
        display: 'flex',
        background: 'red',
        justifyContent: 'space-between'
        

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

export default JustifyContet