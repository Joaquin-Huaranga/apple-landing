import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Video } from "../../../public/videos/index.js";

export const PresentationSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Hook useEffect para escuchar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 44; // Cambia este valor a la posición donde quieres que el título se quede fijo

      if (scrollPosition > triggerPosition) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <div className={`title-wrapper ${isSticky ? "sticky" : ""}`}>
        <h1>Apple Events</h1>
      </div>
      <div className="video-wrapper">
        <video
          className="video"
          poster={Image}
          autoPlay
          loop
          muted
          controls={false}
        >
          <source src={Video} />
        </video>
      </div>
      <div className="description-wraper">
        <h1>Apple Event</h1>
        <br />
        <p>
          Introducing iPhone 16 Pro and iPhone 16, built for Apple Intelligence.
          All-new Apple Watch Series 10 and AirPods 4. Apple Watch Ultra 2 and
          AirPods Max in fresh new colors. And AirPods Pro 2, with hearing
          health features coming this fall.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background: #000;
  .title-wrapper {
    position: absolute;
    top: 8%;
    left: 15%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    padding: 0 10px;
    z-index: 10;
    transition: all 1s ease;
  }
  .title-wrapper.sticky {
    position: fixed;
    top: 10px;
    transition: background-position;
  }
  .title-wrapper h1 {
    color: #fff;
    font-size: 1.3em;
    margin: 0;
    font-weight: bold;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    border-bottom: 0.09em solid #fff;
    padding-bottom: 10px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .video-wrapper {
    width: 100vw;
    height: 100vh;

    .video {
      width: 100%;
      height: 100%;
    }
  }

  .description-wraper {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 500;
    font-size: 1.2em;
    text-align: center;
    padding: 1em;
    width: 60%;
    h1 {
      font-size: 3em;
    }
  }
`;
