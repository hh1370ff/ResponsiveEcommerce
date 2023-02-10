import { Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { AppBarContainer, AppBarHeader } from "../../styles/appBar";
import Actions from "./Actions";
import { UiContext } from "../../context/UiContext";
import { useContext } from "react";
const AppBarMobile = () => {
  const { setOpenDrawer, setOpenSearch } = useContext(UiContext);

  const content = (
    <AppBarContainer sx={{ mx: "auto" }}>
      <IconButton
        onClick={() => {
          setOpenDrawer((pre) => !pre);
        }}
      >
        <MenuIcon />
      </IconButton>
      <AppBarHeader onClick={() => {}}>Bag</AppBarHeader>
      <Search
        sx={{ cursor: "pointer" }}
        onClick={() => {
          setOpenSearch((pre) => !pre);
        }}
      />
      <Actions />
    </AppBarContainer>
  );
  return content;
};

export default AppBarMobile;
