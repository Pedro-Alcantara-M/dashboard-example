import { Box, Typography } from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChartSection = () => {
  const data = {
    labels: ["62% New", "13% Returning", "23% Inactive"],
    datasets: [
      {
        label: "",
        data: [62, 13, 23],
        backgroundColor: ["#3068f9", "#5180f9", "#e5e5e5"],
        borderColor: ["#3068f9", "#5180f9", "#e5e5e5"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifuContent: "center",
        flex: 1,
        backgroundColor: "white",
        borderRadius: "20px",
        height: "350px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: "15px",
          paddingLeft: "43px",
        }}
      >
        <Typography fontSize={20} fontWeight={600} color="#rgba(5, 0, 78, 1)">
          Users
        </Typography>
        <Typography fontSize={14}>4,209</Typography>
      </Box>
      <Doughnut
        height={185}
        width={185}
        data={data}
        options={{
          responsive: true,
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 100,
              bottom: 100,
            },
          },
          radius: 100,
          spacing: 5,
          plugins: {
            legend: {
              display: true,
              position: "left",
              align: "center",
              fullSize: true,
              labels: {
                boxHeight: 13,
                boxWidth: 19,
                padding: 20,
              },
            },
          },
        }}
      />
    </Box>
  );
};
