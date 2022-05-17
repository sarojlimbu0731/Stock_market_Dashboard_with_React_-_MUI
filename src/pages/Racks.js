import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Racks() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);

  const navigate=useNavigate();


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
    <Box flex={2} sx={{boxShadow:'4px 4px 3px #BEBEBE',height:"150vh"}}>
    <List
      sx={{ 
        width: '17%',
        bgcolor: 'background.paper',
        position:'fixed',
        display:'inline-block',
        marginTop:'8rem'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
      <ListItemButton>
        {/* <Link to="/layout/dashboard"><ListItemText primary="Dashboard"/></Link> */}
        <ListItemText primary="Dashboard" onClick={()=>(navigate("/layout/dashboard"))}/>

      </ListItemButton>

      <ListItemButton   onClick={handleClick1}>
        <ListItemText primary="Customer Management" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  {/* <Link to="/layout/cprofile"><ListItemText primary="Customer Profile" /></Link> */}
                  <ListItemText primary="Customer Profile"  onClick={()=>(navigate("/layout/cprofile"))} />
                </ListItemButton>
              </List>
            </Collapse>

      <ListItemButton>
        {/* <Link to="/layout/fmanagement"> <ListItemText primary="Fund Management" /></Link> */}
        <ListItemText primary="Fund Management"  onClick={()=>(navigate("/layout/fmanagement"))} />
      </ListItemButton> 

      <ListItemButton onClick={handleClick2} >
        <ListItemText primary="Transaction Management" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  {/* <Link to="/layout/bond"><ListItemText primary="Bond" /></Link> */}
                  <ListItemText primary="Bond" onClick={()=>(navigate("/layout/bond"))}/>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                {/* <Link to="/layout/equity">  <ListItemText primary="Equity" /></Link>    */}
                <ListItemText primary="Equity"  onClick={()=>(navigate("/layout/equity"))} />             
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
                {/* <Link to="/layout/companyprofile">  <ListItemText primary="Company Profile" /></Link>    */}
                <ListItemText primary="Company Profile"  onClick={()=>(navigate("/layout/companyprofile"))}/>             
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                {/* <Link to="/layout/securityprofile"><ListItemText primary="Securities Profile" /></Link>    */}
                <ListItemText primary="Securities Profile" onClick={()=>(navigate("/layout/securityprofile"))} />               
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                {/* <Link to="/layout/securitysnap">  <ListItemText primary="Securities Snap" /></Link> */}
                <ListItemText primary="Securities Snap" onClick={()=>(navigate("/layout/securitysnap"))} />                
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
                {/* <Link to="/layout/adduser"><ListItemText primary="Add User" /></Link>     */}
                <ListItemText primary="Add User" onClick={()=>(navigate("/layout/adduser"))}/>              
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                {/* <Link to="/layout/users"><ListItemText primary="Users" /></Link>  */}
                <ListItemText primary="Users" onClick={()=>(navigate("/layout/users"))} />                 
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
                {/* <Link to="/layout/country"> <ListItemText primary="Country" /></Link>    */}
                <ListItemText primary="Country" onClick={()=>(navigate("/layout/country"))}/>              
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                {/* <Link to="/layout/city"> <ListItemText primary="City" /></Link>   */}
                <ListItemText primary="City" onClick={()=>(navigate("/layout/city"))} />               
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
                {/* <Link to="/layout/servicecharge">  <ListItemText primary="Service Charge" /></Link>  */}
                <ListItemText primary="Service Charge" onClick={()=>(navigate("/layout/servicecharge"))}  />               
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                {/* <Link to="/layout/mastersetting">  <ListItemText primary="Master Settings" /></Link>     */}
                <ListItemText primary="Master Settings" onClick={()=>(navigate("/layout/mastersetting"))} />            
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
                {/* <Link to="/layout/transactionreport">  <ListItemText primary="Transaction Report" /></Link>     */}
                <ListItemText primary="Transaction Report" onClick={()=>(navigate("/layout/transactionreport"))} />            
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  {/* <Link to="/layout/fundreport"><ListItemText primary="Fund Report" /></Link> */}
                  <ListItemText primary="Fund Report" onClick={()=>(navigate("/layout/fundreport"))}/>
                </ListItemButton>
              </List>
            </Collapse> 


    </List>
    </Box>
    
  );
}
