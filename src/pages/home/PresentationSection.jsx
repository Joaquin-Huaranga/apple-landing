import React from "react";
import styled from "styled-components";
import { Video } from "../../../public/videos/index.js";

export const PresentationSection = () => {
  return (
    <Container>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          aspernatur aut consequatur dicta error esse, itaque laboriosam magnam
          optio pariatur possimus, ratione repellat vitae. Autem impedit rerum
          saepe sunt tempore.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background: #000;

  .video-wrapper {
    width: 100vw;
    height: 100vh;
    .video {
      width: 100%;
      height: 100%;
    }
  }

  .description-wraper {
    color: #fff;
    font-weight: 500;
    font-size: 1.2em;
    margin: 3em 2em;
    width: 60%;
  }
`;
