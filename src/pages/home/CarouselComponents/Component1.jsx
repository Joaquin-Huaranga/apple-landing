import React from "react";
import styled from "styled-components";
import { imgCarousel1 } from "../../../../public/ImagesCarousel/Index.js";

export const Component1 = () => {
  return (
    <Container>
      <div className="Carousel">
        <div className="image">
          <img src={imgCarousel1} />
        </div>
        <div className="textCarousel">
          <h4>
            <b>WWDC</b>
          </h4>
          <p>June 10, 2024</p>
          <p>
            Introducing Apple Intelligence, AI for the rest of us. And exciting
            updates coming with iOS 18, iPadOS 18, macOS Sequoia, watchOS 11,
            and visionOS 2.
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 23em;
  height: 31em;
  background-color: red;
  border-radius: 2em;
  img {
    width: 23em;
    border-radius: 2em;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .Carousel {
    position: relative;
    .image {
      position: absolute;
    }
    .textCarousel {
      color: black;
      padding-top: 16em;
      padding-left: 2em;
      padding-right: 2em;
      p {
        text-align: justify;
        padding-bottom: 1em;
      }
    }
  }
`;
