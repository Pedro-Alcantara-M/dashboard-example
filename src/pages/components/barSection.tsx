import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import RealitySales from "@assets/icons/RealitySalesIcon.svg?react";
import TargetSales from "@assets/icons/TargetSalesIcon.svg?react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  layout: {
    padding: {
      left: 10,
      right: 10,
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
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Target vs Reality",
      align: "start" as const,
      color: "#05004e",
      font: {
        size: 20,
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
  },
};

const labels = ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 40, 50, 50, 60],
      backgroundColor: "#4ab58e",
      borderRadius: 8,
      borderSkipped: false,
    },
    {
      label: "Dataset 2",
      data: [60, 30, 30, 10, 20, 50, 60],
      backgroundColor: "#ffcf00",
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
};

export const BarSection = () => {
  return (
    <Box
      sx={{
        flex: 1.5,
        backgroundColor: "white",
        marginBottom: "32px",
        borderRadius: "20px",
        height: "350px",
        padding: "10px",
      }}
    >
      <Bar options={options} data={data} height={28} width={"100%"} />

      <Box>
        <Box
          sx={{
            display: "flex",
            maxWidth: "60%",
            paddingLeft: "40px",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "18px",
            paddingTop: "20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
            <RealitySales />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{
                  alignSelf: "start",
                  fontSize: "12px",
                  color: "#05004e",
                  fontWeight: 600,
                }}
                component="span"
              >
                Reality Sales
              </Typography>
              <Typography
                sx={{ alignSelf: "start", fontSize: "10px", color: "#737791" }}
                component="span"
              >
                Global
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              alignSelf: "start",
              fontSize: "14px",
              color: "#27ae60",
              fontWeight: 600,
            }}
            component="span"
          >
            8.823
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            maxWidth: "60%",
            paddingLeft: "40px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
            <TargetSales />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{
                  alignSelf: "start",
                  fontSize: "12px",
                  color: "#05004e",
                  fontWeight: 600,
                }}
                component="span"
              >
                Target Sales
              </Typography>
              <Typography
                sx={{ alignSelf: "start", fontSize: "10px", color: "#737791" }}
                component="span"
              >
                Commercial
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              alignSelf: "start",
              fontSize: "14px",
              color: "#ffa412",
              fontWeight: 600,
            }}
            component="span"
          >
            12.122
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
