import { Dispatch, SetStateAction, FC } from "react";
import { Toolbar, IconButton, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, AppBarTitle } from "./styles";
import Notification from "@assets/icons/Notification.svg?react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ITopbarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const TopBar: FC<ITopbarProps> = ({ setOpen, open }) => {
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ height: "100%", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <AppBarTitle>Dashboard</AppBarTitle>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "25px",
            marginRight: "35px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Notification />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "#151d48",
              }}
              component="div"
            >
              User <ExpandMoreIcon />
            </Typography>
            <Typography
              sx={{ fontSize: "14px", lineHeight: "20px", color: "#737791" }}
            >
              Admin
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
