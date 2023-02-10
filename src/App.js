import { Box, Button, Container } from "@mui/material";
import { useEffect } from "react";
import AppBar from "./components/appBar";
import Banner from "./components/banner/Banner";
import CustomizedDrawer from "./components/drawer/CustomizedDrawer";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import SearchBox from "./components/search/SearchBox";
import CustomizedSlide from "./components/slide/CustomizedSlide";
import { UiProvider } from "./context/UiContext";

function App() {
  useEffect(() => {
    document.title = "Bag E-commerce";
  }, []);
  return (
    <Box>
      <UiProvider>
        <AppBar />
        <Banner />
        <CustomizedSlide />
        <Products />
        <Footer />
        <CustomizedDrawer />
        <SearchBox />
      </UiProvider>
    </Box>
  );
}

export default App;
