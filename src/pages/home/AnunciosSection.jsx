import React from "react";
import styled from "styled-components";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../../../public/images/index.js";

export const AnunciosSection = () => {
  return (
    <Container>
      <div className="Title">
        <h1>Here’s what we announced.</h1>
      </div>
      <div className="Cuadro">
        <div className="image1">
          <img src={Image1} />
        </div>
        <div className="text1">
          <h1>iPhone 16 Pro</h1>
          <p>
            Built for Apple Intelligence — personal, private, powerful. Camera
            Control, an easier way to quickly access camera tools. Stunning 4K
            120 fps Dolby Vision video. A18 Pro chip. And a huge leap in battery
            life.
          </p>
        </div>
      </div>
      <div className="Cuadro2">
        <div className="image2">
          <img src={Image2} />
        </div>
        <div className="text2">
          <h1>iPhone 16</h1>
          <p>
            Built for Apple Intelligence to help you write, express yourself,
            and get things done effortlessly. Camera Control, an easier way to
            quickly access camera tools. And the custom-built A18 chip.
          </p>
        </div>
      </div>
      <div className="Cuadro2">
        <div className="image2">
          <img src={Image3} />
        </div>
        <div className="text2">
          <h1>Apple Watch Series 10</h1>
          <p>
            Our thinnest watch with our biggest display. Invaluable health
            insights, including sleep apnea notifications. Tracking for your
            activity and workouts — with depth and water temperature. All in our
            fastest-charging watch ever.
          </p>
        </div>
      </div>
      <div className="Cuadro">
        <div className="image1">
          <img src={Image4} />
        </div>
        <div className="text1">
          <h1>Apple Watch Ultra 2</h1>
          <p>
            The ultimate sports and adventure watch features a stunning new
            black titanium case. With connectivity, health, and safety features
            for the everyday. And the most accurate GPS in a sports watch.
          </p>
        </div>
      </div>
      <div className="Cuadro2">
        <div className="image2">
          <img src={Image5} />
        </div>
        <div className="text2">
          <h1>Air Pods 4</h1>
          <p>
            Updated fit for all-day comfort. A totally transformed audio
            experience. And available with Active Noise Cancellation — a first
            for this open-ear design.
          </p>
        </div>
      </div>
      <div className="Cuadro">
        <div className="image1">
          <img src={Image6} />
        </div>
        <div className="text1">
          <h1>Air Pods Pro 2</h1>
          <p>
            Coming this fall with a free software update, the world’s first
            all-in-one hearing health experience — test, aid, and help protect
            your hearing.
          </p>
        </div>
      </div>
      <div className="Cuadro2">
        <div className="image2">
          <img src={Image7} />
        </div>
        <div className="text2">
          <h1>Air Pods Max</h1>
          <p>
            The ultimate over-ear personal listening experience. Now in fresh
            new colors with fast and easy USB‑C charging.
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .Title {
    text-align: center;
    margin-top: 3em;
    margin-bottom: 3em;
    font-size: 1em;
  }

  .Cuadro {
    left: 17%;
    position: relative;
    width: 55em;
    height: 20em;
    background-color: black;
    border-radius: 2em;
    margin: 2em;

    img {
      width: 22.5em;
      height: 20em;
      position: absolute;
      border-radius: 2em;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .text1 {
      color: white;
      h1 {
        padding-top: 2em;
        padding-left: 16em;
        font-size: 1.5em;
        padding-bottom: 2em;
      }
      p {
        text-align: justify;
        padding-left: 20em;
        padding-right: 2.5em;
        font-size: 1.2em;
      }
    }
  }
  .Cuadro2 {
    left: 17%;
    position: relative;
    width: 55em;
    height: 20em;
    background-color: white;
    border-radius: 2em;
    margin: 2em;
    img {
      width: 22.5em;
      height: 20em;
      position: absolute;
      border-radius: 2em;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .text2 {
      color: black;
      h1 {
        padding-top: 2em;
        padding-left: 16em;
        font-size: 1.5em;
        padding-bottom: 2em;
      }
      p {
        text-align: justify;
        padding-left: 20em;
        padding-right: 2.5em;
        font-size: 1.2em;
      }
    }
  }
`;
