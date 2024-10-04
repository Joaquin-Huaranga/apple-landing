import React from "react";
import styled from "styled-components";
import { imgCarousel2 } from "../../../../public/ImagesCarousel/Index.js";

export const Carousel2 = () => {
  return (
    <Container>
      <div className="cuadro">
        <div className="image">
          <img src={imgCarousel2} />
        </div>
        <div className="text">
          <h1>Apple Event</h1>
          <p>May 7, 2024</p>
          <p>
            Introducing the unbelievably thin and portable iPad Pro with Apple
            M4 chip, the redesigned iPad Air in two sizes, and the all‑new Apple
            Pencil Pro.
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
