import { AppBar, Box } from '@mui/material'
import React from 'react'

const FirstAppBar = () => {
  return (

    <Box sx={{flexGrow: 1}}>
       <AppBar position='static' color='inherit'>

<p>color: </p>



</AppBar>
<br></br>
<AppBar position='static' color='primary'>

<p>hello</p>



</AppBar>
<br></br>
<AppBar position='static' color='secondary'>

<p>hello</p>



</AppBar>
<br></br>
<AppBar position='static' color='transparent'>

<p>hello</p>



</AppBar>
<br></br>
<AppBar position='static' sx={{background: 'yellow'}}>

<p>hello</p>



</AppBar><br></br>





    </Box>
    
   
    
    
  
  )
}

export default FirstAppBar