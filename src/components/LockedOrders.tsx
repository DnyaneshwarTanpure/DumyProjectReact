import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { Box, LinearProgress, Typography } from "@mui/material";
export default function LockedOrders() {
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Dataset 2",
        data: [15, 25, 35, 45, 55],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: "y", // This makes the bar chart horizontal
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Horizontal Bar Charts",
      },
    },
  };
  const buyPrice = 5045.9;
  const sellPrice = 3000.9;
  const total = buyPrice + sellPrice;
  const buyPercentage = (buyPrice / total) * 100;
  const sellPercentage = (sellPrice / total) * 100;
  return (
    <div className="flex flex-col f-full item-center max-w-[92%] self-center">
      <span className="text-[#808080] text-sm pt-10">No Record Found</span>
    </div>
  );
}
