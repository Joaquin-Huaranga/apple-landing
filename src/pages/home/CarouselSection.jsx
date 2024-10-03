import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Component1 } from "./CarouselComponents/Component1.jsx";
import { Carouseles } from "./CarouselComponents/Carouseles.jsx";

export const CarouselSection = () => {
  const images = [{ Component1 }];

  // Configuración del slider
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Duración de la animación al cambiar de imagen
    slidesToShow: 1, // Cuántas imágenes mostrar al mismo tiempo
    slidesToScroll: 1, // Cuántas imágenes se mueven en un "scroll"
    autoplay: true, // Habilita el desplazamiento automático
    autoplaySpeed: 2000, // Velocidad del autoplay (en milisegundos)
  };
  return (
    <Container>
      <div className="Title">
        <h1>View recent Apple events</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Apple Event ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  .Title {
    text-align: center;
    margin-top: 8em;
    margin-bottom: 3em;
    font-size: 1em;
  }
`;
