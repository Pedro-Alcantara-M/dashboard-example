import { Box, Divider, Typography } from "@mui/material";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import LinePoint from "@assets/icons/LinePointIcon.svg?react";
import LinerPointGreen from "@assets/icons/LinerPointGreen.svg?react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChartSection = () => {
  const data = {
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul", "Ago"],
    datasets: [
      {
        label: "Filled",
        fill: true,
        backgroundColor: "#07e098",
        borderColor: "#07e098",
        data: [70, 20, 50, 20, 40, 60, 30],
        tension: 0.4,
      },
      {
        label: "Filled",
        fill: true,
        backgroundColor: "#0095ff",
        borderColor: "#0095ff",
        data: [60, 30, 30, 10, 15, 50, 20],
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 100,
        bottom: 100,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: "Customer Satisfaction",
        align: "start" as const,
        color: "#05004e",
        font: {
          size: 20,
        },
        padding: {
          top: -60,
        },
      },
      legend: {
        display: false,
        position: "bottom" as const,
        align: "center" as const,
        fullSize: true,
        labels: {
          boxHeight: 13,
          boxWidth: 19,
          padding: 20,
        },
      },
    },

    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "white",
        borderRadius: "20px",
        height: "350px",
        padding: "10px",
      }}
    >
      <Line
        height={185}
        data={data}
        options={options}
        style={{ transform: "translatex(30px)" }}
      />

      <Divider sx={{ transform: "translateY(-40px)", marginX: "30px" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "16px",
          justifyContent: "center",
          transform: "translateY(-40px)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <LinePoint />

              <Typography sx={{ fontSize: "16px", color: "#96a5b8" }}>
                Last Month
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "14px", color: "#222b45", marginLeft: "35px" }}
            >
              $3,004
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            height: 30,
            width: "1px",
            backgroundColor: "#96a5b8",
            marginX: "15px",
          }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <LinerPointGreen />

              <Typography sx={{ fontSize: "16px", color: "#96a5b8" }}>
                This Month
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "14px", color: "#222b45", marginLeft: "35px" }}
            >
              $4,504
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
