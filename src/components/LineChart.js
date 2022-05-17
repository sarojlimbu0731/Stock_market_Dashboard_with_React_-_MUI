import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';



const LineChart = ({chartdata}) => {
  return (
    <div><Line data={chartdata} /> </div>
  )
}

export default LineChart;