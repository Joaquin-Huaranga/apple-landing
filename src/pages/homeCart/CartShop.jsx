import React, { useState } from "react";
import styled from "styled-components";
import { ProductsData } from "./Components/ProductsData.js";
import { Image1 } from "../../../public/images/index.js";

export const CartShop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <div className="title">
        <h1>Carrito de compras</h1>
      </div>
      <div>
        {ProductsData.map((product) => (
          <ProductCard key={product.id}>
            <img src={Image1} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <Button onClick={handleBuyClick}>Comprar</Button>
            {isModalOpen && (
              <ModalOverlay>
                <ModalContent>
                  <h2>¡Compra realizada con éxito!</h2>
                  <Button onClick={handleCloseModal}>Cerrar</Button>
                </ModalContent>
              </ModalOverlay>
            )}
          </ProductCard>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-right: 5em;
  padding-left: 5em;
  width: 100vw;
  height: auto;
  background: black;
  color: white;

  .title {
    text-align: center;
    padding-top: 4em;
    padding-bottom: 4em;
  }
  .product-image {
    width: 22.6em;
    height: 15em;
    border-radius: 2em;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border: solid white;
  }
`;
const Button = styled.button`
  position: absolute;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }

  &:focus {
    outline: none;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: black;
  padding: 20px;
  border: solid white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
const ProductCard = styled.div`
  margin: 1em;
  color: white;
  border: solid white;
  display: inline-block;
  width: 23em;
  height: 30em;
  background-color: black;
  border-radius: 2em;
  position: relative;
  h2 {
    margin: 1em;
  }
  p {
    margin: 1em;
  }
  Button {
    margin: 1em;
  }
`;
