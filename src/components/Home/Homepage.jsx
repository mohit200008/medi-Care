import React from "react";
import styled from "styled-components";
import News from "./News/News";
import BodyCard from './BodyCard';

// components
import HomePageBody from "./HomePageBody";
// import HomePageHeader from "./HomePageHeader";
import HomePageSlider from "./HomePageSlider";

function HomePage() {
  return (
    <>
      <HomePageSlider />
      <HomePageBody />
      <News />
    </>
  );
}

export default HomePage;
