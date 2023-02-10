import { Search } from "@mui/icons-material";
import { ListItem, ListItemText } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { UiContext } from "../../context/UiContext";
import {
  AppBarContainer,
  AppBarHeader,
  AppBarIcons,
  AppBarList,
} from "../../styles/appBar";
import Actions from "./Actions";

const AppBarDesktop = () => {
  const { setOpenSearch } = useContext(UiContext);

  // const navigate = useNavigate();
  const content = (
    <AppBarContainer sx={{ mx: "auto" }}>
      <AppBarHeader onClick={() => {}}>Bag</AppBarHeader>
      <AppBarList>
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
      </AppBarList>
      <Search
        sx={{ flexGrow: 1, cursor: "pointer" }}
        onClick={() => {
          setOpenSearch((pre) => !pre);
        }}
      />
      <Actions />
    </AppBarContainer>
  );
  return content;
};

export default AppBarDesktop;
