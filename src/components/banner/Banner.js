import { Typography } from "@mui/material";
import React from "react";

import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";
const Banner = () => {
  const content = (
    <BannerContainer sx={{ mx: "auto" }}>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <BannerTitle>New Bags</BannerTitle>
        <BannerDescription>Lorem ipsum dolor</BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
  return content;
};

export default Banner;
