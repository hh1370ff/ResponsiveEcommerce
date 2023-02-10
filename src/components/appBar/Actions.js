import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBarIcons,
  AppBarList,
  DesktopAppBarIcons,
  MobileAppBarIcons,
} from "../../styles/appBar";
import {
  Badge,
  IconButton,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { colors } from "../../styles/theme/theme";

const Actions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const IconWrapper = isMobile ? MobileAppBarIcons : DesktopAppBarIcons;
  return (
    <IconWrapper>
      <IconButton>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCartIcon sx={{ color: isMobile && colors.light }} />
        </Badge>
      </IconButton>
      <IconButton>
        <FavoriteIcon sx={{ color: isMobile && colors.light }} />
      </IconButton>
      <IconButton>
        <Badge badgeContent={2} color="secondary">
          <PersonIcon sx={{ color: isMobile && colors.light }} />
        </Badge>
      </IconButton>
    </IconWrapper>
  );
};

export default Actions;
