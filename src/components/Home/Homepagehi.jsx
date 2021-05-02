import React from "react";
import styled from "styled-components";

// components
import HomePageBodyHi from "./HomePageBodyHi";
import HomePageHeaderHi from "./HomepageHeadHi";

const Container = styled.div``;

function HomePage() {
  return (
    <Container>
      <HomePageHeaderHi />
      <HomePageBodyHi />
    </Container>
  );
}

export default HomePage;
