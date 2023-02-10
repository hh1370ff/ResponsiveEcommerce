import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../../styles/theme/theme";
import { lighten } from "polished";
import { ProductImage } from "../../styles/products";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import Button from "@mui/material/Button";

const ProductDialog = ({ product, setOpenDialog, openDialog }) => {
  const [count, setCount] = useState(1);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleCount = (value) => {
    setCount((pre) => pre + value);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openDialog}
      onClose={handleClose}
      maxWidth="md"
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            height: "4rem",
            alignItems: "center",
            justifyContent: "space-between",
            px: "2rem",
            backgroundColor: colors.secondary,
          }}
        >
          <Typography variant="body1">Full description</Typography>
          <IconButton
            sx={{
              backgroundColor: colors.secondary,
              "&:hover": { backgroundColor: lighten(0.2, colors.secondary) },
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <ProductImage src={product.image} sx={{ flex: 1 }} />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            mb: "1rem",
          }}
        >
          <DialogContentText>{product.description}</DialogContentText>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  borderRadius: 0,
                  backgroundColor: colors.secondary,
                  height: "2.5rem",
                  "&:hover": {
                    backgroundColor: lighten(0.1, colors.secondary),
                  },
                }}
                onClick={() => handleCount(-1)}
                disabled={count < 1}
              >
                <RemoveIcon />
              </IconButton>

              <Box
                sx={{
                  padding: "5px",
                  border: `1px solid ${colors.secondary}`,
                  height: "2.5rem",
                  width: "2.5rem",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {count}
              </Box>

              <IconButton
                sx={{
                  borderRadius: 0,
                  backgroundColor: colors.secondary,
                  "&:hover": {
                    backgroundColor: lighten(0.1, colors.secondary),
                  },
                }}
                onClick={() => handleCount(+1)}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "primary",
                width: "max-content",
                height: "2.5rem",
              }}
            >
              Add to Chart
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
