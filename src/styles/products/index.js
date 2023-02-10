import { IconButton, styled, Box, Button } from "@mui/material";
import { colors } from "../theme/theme";
import { slideInRight, slideInUp } from "../../animations/animations";

export const Product = styled(Box)(() => ({
  backgroundColor: colors.dove_gray,
  my: "10px",
  width: {
    sm: "250px",
    md: "300px",
  },
  position: "relative",
}));

export const ProductImage = styled("img")(({ src }) => ({
  width: "100%",
}));

export const IconContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
  width: "max-content",
  position: "absolute",
  top: ".25rem",
  right: ".25rem",
}));

export const HiddenIcons = styled(Box)(({ visibility }) => ({
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
  width: "max-content",
  visibility: visibility,
  animation:
    visibility === "visible" &&
    `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}));

export const IconWrapper = styled(IconButton)(({ theme }) => ({
  backgroundColor: colors.light_gray,
  [theme.breakpoints.down("md")]: {
    width: "2rem",
    height: "2rem",
  },
}));
export const ProductAddToCart = styled(Button)(({ visibility }) => ({
  visibility: visibility,
  position: "absolute",
  bottom: ".25rem",
  left: "0rem",
  width: "100%",
  animation:
    visibility === "visible" &&
    `${slideInUp} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}));
