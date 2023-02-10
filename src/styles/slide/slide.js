import { styled, Box, Typography } from "@mui/material";
import { colors } from "../../styles/theme/theme";
import "@fontsource/montez";

export const SlideContainer = styled(Box)(() => ({
  backgroundColor: colors.secondary,
  overflow: "hidden",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const SlideText = styled(Typography)(() => ({
  fontFamily: "montez",
  fontSize: "30px",
}));
