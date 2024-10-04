import React from "react";
import styled from "styled-components";
import { imgCarousel3 } from "../../../../public/ImagesCarousel/Index.js";

export const Carousel3 = () => {
  return (
    <Container>
      <div className="cuadro">
        <div className="image">
          <img src={imgCarousel3} />
        </div>
        <div className="text">
          <h1>Apple Event</h1>
          <p>October 30, 2023</p>
          <p>
            Introducing the new MacBook Pro 14” and 16” and the new iMac. Now
            supercharged by the M3 family of chips.
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
