import { styled, Typography, Box } from "@mui/material";
import "@fontsource/montez";
import { colors } from "../theme/theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  width: "95%",
  marginTop: "2rem",
  display: "flex",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(src)`,
  width: "300px",
  height: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "400px",
    height: "400px",
  },
}));

export const BannerContent = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));
export const BannerTitle = styled(Typography)(() => ({
  fontSize: "72px",
  fontFamily: "montez",
  color: colors.primary,
}));
export const BannerDescription = styled(Typography)(() => ({}));
