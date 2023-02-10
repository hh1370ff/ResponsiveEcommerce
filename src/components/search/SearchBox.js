import { Slide, Box, TextField } from "@mui/material";
import React, { useContext } from "react";
import { SlideText } from "../../styles/slide/slide";
import { lighten } from "polished";
import { colors } from "../../styles/theme/theme";
import { Search } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { UiContext } from "../../context/UiContext";
const SearchBox = () => {
  const { openSearch, setOpenSearch } = useContext(UiContext);
  const content = (
    <Slide in={openSearch} direction="down" timeout={500}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 10000,
          position: "fixed",
          top: 0,
          backgroundColor: lighten(0.2, colors.primary),
          opacity: ".9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            gap: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextField sx={{ flex: 1 }} variant="standard" />
          <Search sx={{ cursor: "hover" }} />
          <CloseIcon
            sx={{ cursor: "hover" }}
            onClick={() => setOpenSearch((pre) => !pre)}
          />
        </Box>
      </Box>
    </Slide>
  );
  return content;
};

export default SearchBox;
