import React, { useState}from 'react'

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';




const FourthAppBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <>
    <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        >

          <Box sx={{width: '300px'}}>
          <List>
      <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              First
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              Second
            </ListItemText>
          </ListItem>



      </List>





          </Box>
      
    </Drawer>

    <AppBar position="static" color="inherit">


<Toolbar>
<IconButton onClick={() => setOpenDrawer(!openDrawer)}>
<MenuIcon/>
</IconButton>

</Toolbar>

</AppBar>
    </>
  
  )
}

export default FourthAppBar