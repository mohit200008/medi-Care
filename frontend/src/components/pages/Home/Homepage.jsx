import React from "react";
import styled from "styled-components";

// components
import HomePageBody from "./HomePageBody.jsx";
// import HomePageHeader from "./HomePageHeader";
import HomePageSlider from "./HomePageSlider.jsx";

const Container = styled.div``;

function HomePage() {
  return (
    <Container>
      {/* <HomePageHeader /> */}
      <HomePageSlider />
      <HomePageBody />
    </Container>
  );
}

export default HomePage;
