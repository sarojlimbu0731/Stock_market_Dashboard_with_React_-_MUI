import { Box, Container } from "@mui/material";
import React from "react";
import LineChart from "../components/LineChart";
import { Equitysales } from "../Data";
import { useState } from "react";

const Dashboard = () => {
  const [userdata, setUserdata] = useState({
    labels: Equitysales.map((datas) => datas.date),
    datasets: [
      {
        label: "equity sale",
        data: Equitysales.map((datas) => datas.quantity),
        backgroundColor:"blue",
        borderColor:"blue"
      },
    ],
  });

  return (
    <Box flex={8} sx={{ marginTop: "6rem" }}>
      <Container>
        <LineChart chartdata={userdata} />
      </Container>
    </Box>
  );
};

export default Dashboard;
