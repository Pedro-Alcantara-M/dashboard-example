import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Typography,
  TypographyProps,
  ListItemButton,
  ListItemButtonProps,
  ListItem,
  ListItemProps,
  ListItemIcon,
  ListItemIconProps,
  ListItemText,
  ListItemTextProps,
} from "@mui/material";

const drawerWidth = 345;

interface ListText extends ListItemTextProps {
  selected: boolean;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  height: "120px",
  boxShadow: "none",
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  padding: theme.spacing(5),
  ...theme.mixins.toolbar,
  paddingBottom: 0,
  marginBottom: theme.spacing(5),
}));

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  backgroundColor: "#fafbfc",

  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? `${drawerWidth}px` : 0,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBarTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  boxShadow: "none",
  color: "#151D48",
  fontWeight: 600,
  fontSize: 36,
  lineHeight: "50px",
  backgroundColor: theme.palette.common.white,
  fontFamily: 'Po'
}));

export const MenuItemButton = styled(ListItemButton)<ListItemButtonProps>(
  () => ({
    "&.MuiListItemButton-root": {
      height: "64px",
      borderRadius: "16px",
      p: "16px, 24px, 16px, 24px",
      backgroundColor: "transparent !important",
    },
    "&.Mui-selected": {
      backgroundColor: "#5D5FEF !important",

      color: "white",
      boxShadow: "0px 20px 50px 0px rgba(55, 69, 87, 0.1)",
    },
  })
);

export const MenuItem = styled(ListItem)<ListItemProps>(() => ({
  padding: "14px 40px",
}));

export const StyledListItemIcon = styled(ListItemIcon)<ListItemIconProps>(
  () => ({
    fontSize: "27px !important",
  })
);

export const StyledListItemText = styled(ListItemText , {
  shouldForwardProp: (prop) => prop !== "selected",
})<ListText>(
  ({selected}) => ({
    "& .MuiTypography-root": {
       fontWeight: selected ? 600 : 400
    },
  })
);
