import React from "react";
import { CartShop } from "./CartShop.jsx";
import { HeaderShop } from "./HeaderShop.jsx";
import { FooterShop } from "./FooterShop.jsx";

export const HomeCart = () => {
  return (
    <div>
      <HeaderShop />
      <CartShop />
      <FooterShop />
    </div>
  );
};
