import React from "react";
import styled from "styled-components";

// components
import HomePageBody from "./HomePageBody";
// import HomePageHeader from "./HomePageHeader";
import HomePageSlider from "./HomePageSlider";
import Footer from "./Footer";

const Container = styled.div``;

function HomePage() {
  return (
    <Container>
      {/* <HomePageHeader /> */}
      <HomePageSlider />
      <HomePageBody />
      <Footer />
    </Container>
  );
}

export default HomePage;
