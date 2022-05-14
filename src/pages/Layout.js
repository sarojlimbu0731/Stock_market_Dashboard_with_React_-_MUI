import React from 'react';
import { Stack } from '@mui/material';
import Racks from './Racks';
import Navbar from './Navbar';





const Layout = () => {
  return (
      
    <div>
    <Navbar/>
    <Stack direction="row">
  
      <Racks />
      
  
      
    </Stack>
    </div> 
    
  );
}

export default Layout;






