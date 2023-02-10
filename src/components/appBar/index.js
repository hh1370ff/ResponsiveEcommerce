import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AppBarDesktop from "./AppBarDesktop";
import AppBarMobile from "./AppBarMobile";

const AppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const content = isMobile ? <AppBarMobile /> : <AppBarDesktop />;
  return content;
};

export default AppBar;
