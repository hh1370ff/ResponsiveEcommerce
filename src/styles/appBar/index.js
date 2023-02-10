import { styled } from "@mui/material/styles";
import { Box, List, Typography } from "@mui/material";
import { colors } from "../theme/theme";
import "@fontsource/montez";
import { textShadowPopBl } from "../../animations/animations";

export const AppBarContainer = styled(Box)(() => ({
  width: "95%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const AppBarHeader = styled(Typography)(() => ({
  fontFamily: "montez",
  fontSize: "40px",
  color: colors.primary,
  display: "flex",
  justifyContent: "start",
  flexGrow: 1,
  "&:hover": {
    animation: `${textShadowPopBl} 0.6s both`,
  },
}));

export const AppBarList = styled(List)(() => ({
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  flexGrow: 3,
}));
export const DesktopAppBarIcons = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
}));
export const MobileAppBarIcons = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  height: "4rem",
  alignItems: "center",
  width: "100%",
  left: 0,
  position: "fixed",
  backgroundColor: colors.dark,
  bottom: 0,
  zIndex: 99,
}));
