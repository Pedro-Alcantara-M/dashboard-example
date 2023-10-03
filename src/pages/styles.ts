import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Typography, TypographyProps } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

interface CustomLinearProgressProps {
  barColor: string;
  backgroundColor: string;
}

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: " #96a5b8",
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
  },
}));

export const BorderLinearProgress = styled(
  LinearProgress
)<CustomLinearProgressProps>(({ barColor, backgroundColor }) => ({
  height: 4,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: backgroundColor,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: barColor,
  },
}));

export const StyledBalanceValue = styled(Typography)<TypographyProps>(() => ({
  fontSize: "24px",
  lineHeight: "32px",
  color: "#05004e",
  alignSelf: "start",
  fontWeight: 600,
}));

export const StyledBalanceLabel = styled(Typography)<TypographyProps>(() => ({
  fontSize: "16px",
  lineHeight: "24px",
  color: "#425166",
  alignSelf: "start",
}));

export const StyledBalanceDetails = styled(Typography)<TypographyProps>(() => ({
  fontSize: "12px",
  lineHeight: "16px",
  color: "#3679ed",
  alignSelf: "start",
}));
