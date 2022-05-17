import { Box, Container } from "@mui/material";
import React from "react";
import LineChart from "../components/LineChart";
import Linechart1 from "../components/Linechart1";
import { Equitysales } from "../Data";
import { useState } from "react";
import { Grid } from "@mui/material";

const Dashboard = () => {

  ////useState for equity buy

    const [userdata, setUserdata] = useState({
      labels: Equitysales.map((datas) => datas.date),
      datasets: [
        {
          label: "equity buy",
          data: Equitysales.map((datas) => datas.quantitybuy),
          backgroundColor: "blue",
          borderColor: "blue",
        },
      ],
    });

  ////usestate for equity sales  

  const [userdata1, setUserdata1] = useState({
    labels: Equitysales.map((datas) => datas.date),
    datasets: [
      {
        label: "equity sale",
        data: Equitysales.map((datas) => datas.quantitysale),
        backgroundColor:"red",
        borderColor:"red"
      },
    ],
  });



  return (
    <Box flex={8} sx={{ marginTop: "6rem" }}>
      <Container>
        <Grid container sx={{marginTop:"5rem"}} spacing={3} >
          <Grid item lg={6} boxSizing="border-box">
            <Linechart1 chartdata={userdata} />
          </Grid>
          <Grid item lg={6}>
            <LineChart chartdata={userdata1} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
