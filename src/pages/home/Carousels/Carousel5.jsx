import React from "react";
import styled from "styled-components";
import { imgCarousel5 } from "../../../../public/ImagesCarousel/Index.js";

export const Carousel5 = () => {
  return (
    <Container>
      <div className="cuadro">
        <div className="image">
          <img src={imgCarousel5} />
        </div>
        <div className="text">
          <h1>Apple Event</h1>
          <p>June 5, 2023</p>
          <p>
            Introducing Apple Vision Pro, the new 15‑inch MacBook Air with M2,
            Mac Studio with M2 Max and M2 Ultra, Mac Pro with M2 Ultra, and
            previews of iOS 17, iPadOS 17, macOS Sonoma, and watchOS 10.
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
