import React from "react";
import styled from "styled-components";
import { AppleBlack, AppleLogo } from "../../components/image/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";

export const HeaderShop = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="">
            <img src={AppleBlack} alt="Web Logo" className="logo" />
          </a>
        </li>
        <li>
          <a href="#">Store</a>
        </li>
        <li>
          <a href="#">Mac</a>
        </li>
        <li>
          <a href="#">iPad</a>
        </li>
        <li>
          <a href="#">iPhone</a>
        </li>

        <li>
          <a href="#">Watch</a>
        </li>
        <li>
          <a href="#">Vision</a>
        </li>
        <li>
          <a href="#">AirPods</a>
        </li>

        <li>
          <a href="#">TV & Home</a>
        </li>
        <li>
          <a href="#">Entertaiment</a>
        </li>
        <li>
          <a href="#">Accesories</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faMagnifyingGlassChart} className="icon" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  color: black;
  position: absolute;
  top: 0;

  ul {
    list-style: none;
    padding: 0.5em 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5em;

    li {
      padding: 0.3em 0.5em;
      font-size: 0.7em;
      font-weight: 400;

      a {
        text-decoration: none;
        color: rgb(0, 0, 0, 0.6);
      }

      .logo {
        width: auto;
        height: 1.8em;
        color: black;
      }

      .icon {
        font-size: 1em;
        color: black;
      }
    }
  }
`;
