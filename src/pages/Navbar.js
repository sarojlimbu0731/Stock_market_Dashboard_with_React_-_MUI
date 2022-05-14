import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Menu,MenuItem } from '@mui/material';



const useStyles= makeStyles({

    appbar:{
        height:"5rem"
        
    },
    logo:{
        flexGrow:1
    }
})



const Navbar = () => {

    
    const [open,setOpen]=useState(false)

    const classes=useStyles()


  return (
    <Box>
          {/* app bar */}
    
    <AppBar position="sticky" elevation="0" className={classes.appbar}
     sx={{
        backgroundColor:"#16003B",
        marginBottom:"1rem",
        
     }}
    >
        <Toolbar sx={{
          paddingTop:"0.5rem"
        }}>
            <Typography
                className={classes.logo}
            >
                LOGO
            </Typography>  
                <Button startIcon={<NotificationsNoneRoundedIcon/>} variant='outline'>Notification</Button> 
            
            <Button  onClick={e=>setOpen(true)} variant="outline">Danson Demo</Button>
            
        </Toolbar>

        {/* logout menu */}
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
 
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
    </Box>
  )
}

export default Navbar;

