import React from "react";
import styled from "styled-components";
import { imgCarousel4 } from "../../../../public/ImagesCarousel/Index.js";

export const Carousel4 = () => {
  return (
    <Container>
      <div className="cuadro">
        <div className="image">
          <img src={imgCarousel4} />
        </div>
        <div className="text">
          <h1>Apple Event</h1>
          <p>September 12, 2023</p>
          <p>
            Introducing iPhone 15 Pro, iPhone 15, Apple Watch Series 9, Apple
            Watch Ultra 2, and a major step toward making all our products
            carbon neutral by 2030.
          </p>
          <a
            href="https://www.apple.com/apple-events/"
            target="_blank"
            rel="Watch"
          >
            Watch
          </a>
          <br /> <br />
          <a href="Watch in ASL"> Watch in ASL</a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 5em;
  padding-left: 6em;
  color: black;

  .cuadro {
    position: relative;
    border-radius: 2em;
    width: 22em;
    height: 33em;
    background-color: white;
  }

  img {
    border-radius: 2em;
    position: absolute;
    width: 22em;
    height: 15em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .text {
    padding-top: 11em;
    padding-left: 2em;
    padding-right: 2em;
    text-align: justify;

    h1 {
      color: black;
      font-size: 1.2em;
      text-align: left;
    }
    p {
      padding-bottom: 1em;
    }
  }
`;
