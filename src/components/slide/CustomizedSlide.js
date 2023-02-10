import React, { useEffect, useState } from "react";
import { Box, Slide } from "@mui/material";
import { IndeterminateCheckBox } from "@mui/icons-material";
import { SlideContainer, SlideText } from "../../styles/slide/slide";

const message = ["message 1", "message 2", "message 3", "message 4"];

const CustomizedSlide = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((pre) => (pre + 1) % message.length);
      setShow((pre) => !pre);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  });

  const content = (
    <SlideContainer>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <SlideText>{message[index]}</SlideText>
      </Slide>
    </SlideContainer>
  );
  return content;
};

export default CustomizedSlide;
