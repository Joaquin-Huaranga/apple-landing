import React from "react";
import { HeaderLayout } from "./HeaderLayout.jsx";
import { FooterLayout } from "./FooterLayout.jsx";
import styled from "styled-components";

export const BaseLayout = ({ children }) => {
  return (
    <div>
      <HeaderLayout />
      <div className="main">{children}</div>
      <FooterLayout />
    </div>
  );
};

const container = styled.div`
  .main {
  }
`;
