import React from 'react';
import { Container, Box, Grid, Toolbar, TextField, Button, Typography} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { Divider } from '@mui/material';


import CustomerViewTap1 from '../components/CustomerViewTap1';
import CustomerViewTap2 from '../components/CustomerViewTap2';
import CustomerViewTap3 from '../components/CustomerViewTap3';
import CustomerViewTap4 from '../components/CustomerViewTap4';
import CustomerViewTap5 from '../components/CustomerViewTap5';





function CustomerView() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box flex={8} sx={{ marginTop: "6rem" }}>
            <Container >
                <Box sx={{ marginBottom: "30px" }}>

                    <Grid container spacing={2} square>
                        <Grid item xs={8}>
                            <Toolbar variant="dense">
                                <Button sx={{ paddingRight: '10px', color: 'black' }} href="/layout/cprofile">
                                    <ArrowBackIcon />
                                </Button>
                                <Typography variant="h5" color="inherit" component="div">
                                    <strong>All Customers</strong>
                                </Typography>
                            </Toolbar>

                        </Grid>
                        <Grid item xs={4}>
                            <Toolbar variant="dense">
                                <TextField id="outlined-basic" label="Search" variant="outlined" size="small" />
                                <Button variant="contained">Search</Button>
                            </Toolbar>

                        </Grid>
                    </Grid>
                </Box>

                <Box >
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="AML" value="1" sx={{ bgcolor: "#B9D9EB" }} />
                                <Divider orientation="vertical" />
                                <Tab label="Contract" value="2" sx={{ bgcolor: "#B9D9EB" }} />
                                <Divider orientation="vertical" />
                                <Tab label="Source Of Investment" value="3" sx={{ bgcolor: "#B9D9EB" }} />
                                <Divider orientation="vertical" />
                                <Tab label="CVM" value="4" sx={{ bgcolor: "#B9D9EB" }} />
                                <Divider orientation="vertical" />
                                <Tab label="Portfolio" value="5" sx={{ bgcolor: "#B9D9EB" }} />
                            </TabList>
                        </Box>

                        <TabPanel value='1' sx={{ border: '1px solid #C8C8C8' }} >
                           <CustomerViewTap1 />  
                        </TabPanel>
                        <TabPanel value='2' sx={{ border: '1px solid #C8C8C8' }}>
                            <CustomerViewTap2/>
                        </TabPanel>
                        <TabPanel value='3' sx={{ border: '1px solid #C8C8C8' }}>
                            <CustomerViewTap3 />
                        </TabPanel>
                        <TabPanel value='4' sx={{ border: '1px solid #C8C8C8' }}>
                            <CustomerViewTap4 />
                        </TabPanel>
                        <TabPanel value='5'sx={{ border: '1px solid #C8C8C8' }} >
                            <CustomerViewTap5 />
                        </TabPanel>
                    </TabContext>



                </Box>
            </Container>
        </Box>

    );
}

export default CustomerView;