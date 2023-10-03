import { FC, useEffect, useState, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box } from "@mui/material";
import { StyledTableCell, BorderLinearProgress } from "./styles";
import { BalanceSection } from "./components/balanceSection";
import { PieChartSection } from "./components/pieChartSection";
import { BarSection } from "./components/barSection";
import { LineChartSection } from "./components/lineChartSection";
import { getUsers } from "@services/user";

interface IChipProps {
  borderColor: string;
  backgroundColor: string;
  percent: number;
}

const Home = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[] | []>([]);
  const StyledChip: FC<IChipProps> = ({
    borderColor,
    backgroundColor,
    percent,
  }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "lef",
          borderRadius: 8,
          width: "100%",
          maxWidth: "87px",
          height: "24px",
          border: `1px solid ${borderColor}`,
          backgroundColor: backgroundColor,
        }}
      >
        <span style={{ color: borderColor }}>{percent}%</span>
      </div>
    );
  };

  function createData(
    id: number,
    popularity: number,
    barColor: string,
    bgColor: string
  ) {
    const currentUser = users ? users[id] : undefined;
    return {
      id: currentUser?.id,
      name: currentUser?.name,
      popularity,
      barColor,
      bgColor,
    };
  }

  const rows = useMemo(
    () =>
      users
        ? [
            createData(0, 45, "#0095ff", "#f0f9ff"),
            createData(1, 29, "#00e096", "#f0fdf4"),
            createData(2, 18, "#884dff", "#fff1ff"),
            createData(3, 25, "#ff8f0d", "#fef6e6"),
          ]
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [users]
  );

  const fistRender = async () => {
    const response = await getUsers();
    if (response) {
      setUsers(response);
    }
  };

  useEffect(() => {
    fistRender();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
        <BalanceSection />
        <PieChartSection />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
        <BarSection />
        <LineChartSection />
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ borderRadius: "20px" }}
      >
        <Typography
          sx={{
            flex: "1 1 100%",
            textAlign: "start",
            pl: "45px",
            pt: "25px",
            color: "#05004e",
            fontWeight: 600,
            fontSize: "20px",
          }}
          variant="h6"
        >
          Top Sellers
        </Typography>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Popularity</StyledTableCell>
              <StyledTableCell align="left">Sales</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">
                  {row.popularity ? (
                    <BorderLinearProgress
                      barColor={row.barColor}
                      backgroundColor={row.bgColor}
                      variant="determinate"
                      value={row.popularity}
                    />
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell align="left">
                  <StyledChip
                    borderColor={row.barColor}
                    backgroundColor={row.bgColor}
                    percent={row.popularity}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
