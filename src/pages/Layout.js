import React from 'react';
import { Stack } from '@mui/material';
import Racks from './Racks';
import Navbar from './Navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';







const Layout = () => {
  return (
    <Box>

    <div>
      <Navbar />
      <Stack direction="row">
        <Racks />

        <Outlet />      
      </Stack>
      </div>
    

    </Box>

  );
}

export default Layout;






