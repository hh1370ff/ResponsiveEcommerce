import { Box, Typography } from "@mui/material";
import { products } from "../../data/data";
import SingleProduct from "./SingleProduct";
import "@fontsource/montez";
import { colors } from "../../styles/theme/theme";

const Products = () => {
  const content = (
    <Box sx={{ mb: "40px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          py: "4rem",
          fontFamily: "montez",
          color: colors.primary,
        }}
      >
        Our Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "repeat(auto-fill,250px)",
            md: "repeat(auto-fill,300px)",
          },
          rowGap: "2rem",
          justifyContent: "space-around",
        }}
      >
        {products.map((product) => (
          <Box>
            <SingleProduct product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
  return content;
};

export default Products;
