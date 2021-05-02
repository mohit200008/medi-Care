import React from "react";
import styled from "styled-components";

// components
import HomePageBody from "./HomePageBody";
import HomePageHeader from "./HomePageHeader";

const Container = styled.div``;

function HomePage() {
  return (
    <Container>
      <HomePageHeader />
      <HomePageBody />
    </Container>
  );
}

export default HomePage;
