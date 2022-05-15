import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';


export default function Racks() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);


  const handleClick1 = () => {

      setOpen1(!open1);
      
    }
  
  const handleClick2 = () => {

      setOpen2(!open2);
    }
      
  const handleClick3 = () => {

    setOpen3(!open3);
  }
        
  const handleClick4 = () => {

    setOpen4(!open4);
  }
        
        
  const handleClick6 = () => {

    setOpen6(!open6);
  }
        
  const handleClick7 = () => {

    setOpen7(!open7);
  }
        
  const handleClick8 = () => {

    setOpen8(!open8);
  }
        



  

  return (
    <Box flex={2}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton   onClick={handleClick1}>
        <ListItemText primary="Customer Management" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Customer Profile" />
                </ListItemButton>
              </List>
            </Collapse>

      <ListItemButton>
        <ListItemText primary="Fund Management" />
      </ListItemButton> 

      <ListItemButton onClick={handleClick2} >
        <ListItemText primary="Transaction Management" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Bond" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Equity" />
                </ListItemButton>
              </List>
            </Collapse> 

      <ListItemButton onClick={handleClick3} >
        <ListItemText primary="Company Management" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Company Profile" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Securities Profile" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Securities Snap" />
                </ListItemButton>
              </List>
            </Collapse>

      <ListItemButton onClick={handleClick4} >
        <ListItemText primary="User Management" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Add User" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Users" />
                </ListItemButton>
              </List>
            </Collapse> 
                        
      <ListItemButton onClick={handleClick6} >
        <ListItemText primary="Region Management" />
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open6} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Country" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="City" />
                </ListItemButton>
              </List>
            </Collapse> 

      <ListItemButton onClick={handleClick7} >
        <ListItemText primary="Settings" />
        {open7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open7} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Service Charge" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Master Settings" />
                </ListItemButton>
              </List>
            </Collapse> 
 
  
      <ListItemButton onClick={handleClick8} >
        <ListItemText primary="Reports" />
        {open8 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open8} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Transaction Report" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Fund Report" />
                </ListItemButton>
              </List>
            </Collapse> 


    </List>

    </Box>
  );
}
