import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import React, { useContext } from "react";
import { UiContext } from "../../context/UiContext";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";
import { colors } from "../../styles/theme/theme";
const MiddleDivider = (props) => <Divider variant="middle" {...props} />;

const CustomizedDrawer = () => {
  const { openDrawer, setOpenDrawer } = useContext(UiContext);
  const content = (
    <>
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          left: 250,
          zIndex: 2000,
          visibility: openDrawer === true ? "visible" : "hidden",
          backgroundColor: lighten(0.5, colors.primary),
          "&:hover": {
            backgroundColor: lighten(0.2, colors.primary),
          },
        }}
        onClick={() => {
          setOpenDrawer((pre) => !pre);
        }}
      >
        <CloseIcon sx={{ color: "white" }} />
      </IconButton>
      <Drawer open={openDrawer}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
  return content;
};

export default CustomizedDrawer;
