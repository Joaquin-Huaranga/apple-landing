import React from "react";
import { PresentationSection } from "./PresentationSection.jsx";
import { AnunciosSection } from "./AnunciosSection.jsx";
import { CarouselSection } from "./CarouselSection.jsx";

export const Home = () => {
  return (
    <div>
      <PresentationSection />
      <AnunciosSection />
      <CarouselSection />
    </div>
  );
};
