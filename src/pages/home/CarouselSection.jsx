import React, { useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
} from "./Carousels";

export const CarouselSection = () => {
  const settings = {
    dots: false, // Muestra puntos de navegación
    infinite: false, // Habilita el loop
    speed: 500, // Velocidad del cambio de imagen
    slidesToShow: 3, // Muestra un cuadro a la vez
    slidesToScroll: 1, // Desplaza de uno en uno
    autoplay: false, // Habilita autoplay si lo necesitas
    autoplaySpeed: 3000, // Velocidad del autoplay (en milisegundos)
  };
  return (
    <Container>
      <h1>View recent Apple events</h1>
      <div
        style={{
          width: "95%",
          margin: "auto",
          padding: "1em",
          paddingLeft: "1em",
        }}
      >
        <Slider {...settings}>
          <div>
            <Carousel1 />
          </div>
          <div>
            <Carousel2 />
          </div>
          <div>
            <Carousel3 />
          </div>
          <div>
            <Carousel4 />
          </div>
          <div>
            <Carousel5 />
          </div>
          <div>
            <Carousel6 />
          </div>
        </Slider>
      </div>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    padding-top: 5em;
    text-align: center;
    color: black;
    font-size: 2.5em;
  }
  div {
    padding-right: 0;
  }
  .slick-prev,
  .slick-next {
    /* Color de fondo de los botones */
    color: gray; /* Color del texto o icono de la flecha */
    border: none; /* Sin borde */
    border-radius: 50%; /* Hacer los botones redondeados */
    width: 80px; /* Ancho del botón */
    height: 80px; /* Alto del botón */
    display: flex;
    justify-content: center; /* Centrar el contenido (flechas) */
    align-items: center; /* Centrar el contenido (flechas) */
    cursor: pointer; /* Cambia el cursor al pasar el mouse */
    position: absolute;
    z-index: 1;
    top: 50%; /* Centrar verticalmente */
    transform: translateY(-50%);
    transition: background-color 0.3s ease; /* Transición suave */
  }
  .slick-prev::before,
  .slick-next::before {
    font-size: 70px; /* Cambia el tamaño de las flechas */
    color: gray; /* Color de la flecha */
  }
`;
