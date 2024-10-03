import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InnerSlider } from "react-slick/lib/inner-slider.js";

export const CarouselSection = () => {
  return (
    <Container>
      <div className="Title">
        <h1>View recent Apple events</h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .Title {
    text-align: center;
    margin-top: 8em;
    margin-bottom: 3em;
    font-size: 1em;
  }
`;
