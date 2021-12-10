import React from "react";
import styled from "styled-components";

// components
import HomePageBody from "./HomePageBody";
import HomePageHeader from "./HomePageHeader";
import HomePageSlider from "./HomePageSlider";

const Container = styled.div``;

function HomePage() {
  return (
    <Container>
      <HomePageHeader />
      <HomePageSlider />
      <HomePageBody />
    </Container>
  );
}

export default HomePage;
