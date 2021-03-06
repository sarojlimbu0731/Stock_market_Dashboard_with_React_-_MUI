import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Menu,MenuItem } from '@mui/material';
import logo from '../Images/logo.jpg';



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
    
    <AppBar elevation="10" className={classes.appbar}
     sx={{
        backgroundColor:"#16003B",
        marginBottom:"1rem",
        position:'fixed'
        
     }}
    >
        <Toolbar sx={{
          paddingTop:"0.5rem"
        }}>
            <Typography
                className={classes.logo}
            >
                <img src={logo} />
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
        <MenuItem >My Profile</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
    </Box>
  )
}

export default Navbar;

