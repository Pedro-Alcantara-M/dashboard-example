import { Box, Typography, Button } from "@mui/material";
import UploadIcon from "@assets/icons/UploadIcon.svg?react";
import TotalSalesIcon from "@assets/icons/TotalSalesIcon.svg?react";
import TotalOrderIcon from "@assets/icons/TotalOrderIcon.svg?react";
import ProductSoldIcon from "@assets/icons/ProductSoldIcon.svg?react";
import {
  StyledBalanceValue,
  StyledBalanceLabel,
  StyledBalanceDetails,
} from "../styles";

export const BalanceSection = () => {
  return (
    <Box
      sx={{
        flex: 1.5,
        backgroundColor: "white",
        marginBottom: "32px",
        borderRadius: "20px",
        height: "350px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "self-start",
            padding: "23px 30px",
          }}
        >
          <Typography
            sx={{
              color: "#05004e !important",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "32px",
            }}
          >
            Today’s Sales
          </Typography>
          <Typography
            sx={{
              color: "#737791 !important",
              fontSize: "16px",
              lineHeight: "30px",
            }}
          >
            Sales Summery
          </Typography>
        </Box>
        <Box p={"23px 30px"}>
          <Button
            sx={{
              width: "100px",
              height: "40px",
              color: "#0f3659",
              borderColor: "#c3d3e2 !important",
              borderRadius: "8px",
            }}
            variant="outlined"
            startIcon={<UploadIcon />}
          >
            Export
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minWidth: "160px",
            width: "100%",
            height: "164px",
            backgroundColor: "#ffe2e5 !important",
            borderRadius: "16px",
            padding: "20px",
            gap: "8px",
            marginLeft: "32px",
          }}
        >
          <TotalSalesIcon />
          <StyledBalanceValue>$1k</StyledBalanceValue>
          <StyledBalanceLabel>Total Sales</StyledBalanceLabel>
          <StyledBalanceDetails>+8% from yesterday</StyledBalanceDetails>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minWidth: "160px",
            width: "100%",
            height: "164px",
            backgroundColor: "#fff4de !important",
            borderRadius: "16px",
            padding: "20px",
            gap: "8px",
            marginLeft: "32px",
          }}
        >
          <TotalOrderIcon />
          <StyledBalanceValue>300</StyledBalanceValue>
          <StyledBalanceLabel>Total Order</StyledBalanceLabel>
          <StyledBalanceDetails>+5% from yesterday</StyledBalanceDetails>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minWidth: "160px",
            width: "100%",
            height: "164px",
            backgroundColor: "#dcfce7 !important",
            borderRadius: "16px",
            padding: "20px",
            gap: "8px",
            marginLeft: "32px",
            marginRight: "32px",
          }}
        >
          <ProductSoldIcon />
          <StyledBalanceValue>5</StyledBalanceValue>
          <StyledBalanceLabel>Product Sold</StyledBalanceLabel>
          <StyledBalanceDetails>+1,2% from yesterday</StyledBalanceDetails>
        </Box>
      </Box>
    </Box>
  );
};
