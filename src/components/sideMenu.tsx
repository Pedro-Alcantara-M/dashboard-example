import { Dispatch, FC, SetStateAction, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import DummyIcon from "@assets/icons/DummyLogo.svg?react";
import DashboardIcon from "@assets/icons/DashIcon.svg?react";
import LeaderboardIcon from "@assets/icons/LeaderboardIcon.svg?react";
import ProductsIcon from "@assets/icons/ProductsIcon.svg?react";
import Logout from "@assets/icons/Logout.svg?react";
import GraphIcon from "@assets/icons/GraphIcon.svg?react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  DrawerHeader,
  MenuItemButton,
  MenuItem,
  StyledListItemIcon,
  StyledListItemText,
} from "./styles";

import { Typography } from "@mui/material";

interface ISideMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SideMenu: FC<ISideMenuProps> = ({ open }) => {
  const drawerWidth = 345;
  const [currentMenu, setCurrentMenu] = useState<string | "Dashboard">(
    "Dashboard"
  );

  return (
    <Drawer
      sx={{
        position: "relative",
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: "#F0F0F0",
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Box sx={{ display: "flex", gap: "24px" }}>
          <DummyIcon />
          <Typography fontSize="30px" fontWeight="600">
            Site
          </Typography>
        </Box>

        {/*   <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton> */}
      </DrawerHeader>
      <List>
        <MenuItem disablePadding>
          <MenuItemButton
            onClick={() => setCurrentMenu("Dashboard")}
            selected={currentMenu === "Dashboard"}
          >
            <StyledListItemIcon>
              <DashboardIcon />
            </StyledListItemIcon>
            <StyledListItemText
              selected={currentMenu === "Dashboard"}
              primary={"Dashboard"}
            />
          </MenuItemButton>
        </MenuItem>
        <MenuItem disablePadding>
          <MenuItemButton
            onClick={() => setCurrentMenu("Leaderboard")}
            selected={currentMenu === "Leaderboard"}
          >
            <StyledListItemIcon>
              <LeaderboardIcon />
            </StyledListItemIcon>
            <StyledListItemText
              selected={currentMenu === "Leaderboard"}
              primary={"Leaderboard"}
            />
          </MenuItemButton>
        </MenuItem>
        <MenuItem disablePadding>
          <MenuItemButton
            onClick={() => setCurrentMenu("Order")}
            selected={currentMenu === "Order"}
          >
            <StyledListItemIcon>
              <ShoppingCartOutlinedIcon />
            </StyledListItemIcon>
            <StyledListItemText
              selected={currentMenu === "Order"}
              primary={"Order"}
            />
          </MenuItemButton>
        </MenuItem>
        <MenuItem disablePadding>
          <MenuItemButton
            onClick={() => setCurrentMenu("Products")}
            selected={currentMenu === "Products"}
          >
            <StyledListItemIcon>
              <ProductsIcon />
            </StyledListItemIcon>
            <StyledListItemText
              selected={currentMenu === "Products"}
              primary={"Products"}
            />
          </MenuItemButton>
        </MenuItem>
        <MenuItem disablePadding>
          <MenuItemButton
            onClick={() => setCurrentMenu("Sales Report")}
            selected={currentMenu === "Sales Report"}
          >
            <StyledListItemIcon>
              <GraphIcon />
            </StyledListItemIcon>
            <StyledListItemText
              selected={currentMenu === "Sales Report"}
              primary={"Sales Report"}
            />
          </MenuItemButton>
        </MenuItem>
        <MenuItem disablePadding>
          <MenuItemButton
            onClick={() => setCurrentMenu("Messages")}
            selected={currentMenu === "Messages"}
          >
            <StyledListItemIcon>
              <SmsOutlinedIcon />
            </StyledListItemIcon>
            <StyledListItemText
              selected={currentMenu === "Messages"}
              primary={"Messages"}
            />
          </MenuItemButton>
        </MenuItem>
        <MenuItem disablePadding>
          <MenuItemButton
            onClick={() => setCurrentMenu("Settings")}
            selected={currentMenu === "Settings"}
          >
            <StyledListItemIcon>
              <SettingsOutlinedIcon />
            </StyledListItemIcon>
            <StyledListItemText
              selected={currentMenu === "Settings"}
              primary={"Settings"}
            />
          </MenuItemButton>
        </MenuItem>

        <MenuItem
          disablePadding
          sx={{ position: "absolute", bottom: -180, color: "#8d1c1c" }}
        >
          <MenuItemButton
            onClick={() => setCurrentMenu("Sign Out")}
            selected={currentMenu === "Sign Out"}
          >
            <StyledListItemIcon>
              <Logout />
            </StyledListItemIcon>
            <ListItemText primary={"Sign Out"} />
          </MenuItemButton>
        </MenuItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
