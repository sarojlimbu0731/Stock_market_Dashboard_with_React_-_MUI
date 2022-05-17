import React from "react";
import {
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import FundManagementData from "../components/FundManagementData";
import FundManagementData1 from "../components/FundManagementData1";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { Divider } from "@mui/material";

////function for tab (deposit & withdraw)

const FundManagement = () => {
  const [value, setValue] = useState(0);
  const handleTabs = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box flex={8} sx={{ marginTop: "6rem" }}>
      {/* heading & search bar */}
      <Container>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item md={8}>
            <Toolbar>
              <Typography variant='h6'>
                <strong>Fund Management</strong>
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item md={4}>
            <Toolbar>
              <TextField
                id='outlined-search'
                label='search'
                size='small'
                variant='outlined'
              />
              <Button variant='contained'>Serach</Button>
            </Toolbar>
          </Grid>
        </Grid>

        {/* deposit & withdraw button of tabs */}
        <Grid container md={6}>
          <Tabs
            textColor='common'
            indicatorColor='#000'
            value={value}
            onChange={handleTabs}
          >
            <Tab
              label='Deposit'
              sx={{
                backgroundColor: "#2e7d32",
                color: "white",
                paddingRight: "3.2rem",
                paddingLeft: "3.2rem",
              }}
            />
            <Divider orientation='vertical' />
            <Tab
              label='WithDraw'
              sx={{
                backgroundColor: "#d32f2f",
                color: "white",
                paddingRight: "3rem",
                paddingLeft: "3rem",
              }}
            />
          </Tabs>
          <TabPanal value={value} index={0}>
            <FundManagementData />
          </TabPanal>
          <TabPanal value={value} index={2}>
            <FundManagementData1 />
          </TabPanal>
        </Grid>
      </Container>
    </Box>
  );
};

////function for tabpanal of deposit and withdraw
function TabPanal(props) {
  const { value, index, children } = props;

  return <div>{value === index && <div>{children}</div>}</div>;
}

export default FundManagement;
