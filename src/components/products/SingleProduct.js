import {
  Product,
  ProductImage,
  IconWrapper,
  IconContainer,
  ProductAddToCart,
  HiddenIcons,
} from "../../styles/products";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
import { Stack } from "@mui/system";
import ProductDialog from "./ProductDialog";

const SingleProduct = ({ product }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [optionsVisibility, setOptionsVisibility] = useState("hidden");

  const content = (
    <Product
      onMouseEnter={() => {
        setOptionsVisibility("visible");
      }}
      onMouseLeave={() => {
        setOptionsVisibility("hidden");
      }}
    >
      <ProductImage src={product.image} />
      <IconContainer>
        <IconWrapper>
          <FavoriteIcon />
        </IconWrapper>
        <HiddenIcons visibility={optionsVisibility}>
          <IconWrapper>
            <ShareIcon />
          </IconWrapper>
          <IconWrapper
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <FitScreenIcon />
          </IconWrapper>
        </HiddenIcons>
      </IconContainer>
      <ProductAddToCart variant="contained" visibility={optionsVisibility}>
        Add To Chart
      </ProductAddToCart>
      <ProductDialog
        product={product}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </Product>
  );
  return content;
};

export default SingleProduct;
