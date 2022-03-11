import React from "react";
import styled from "styled-components";

// components
import HomePageBody from "./HomePageBody";
// import HomePageHeader from "./HomePageHeader";
import HomePageSlider from "./HomePageSlider";

const Container = styled.div``;

function HomePage() {
  return (
    // <Container>
    //   {/* <HomePageHeader /> */}
    //   <HomePageSlider />
    //   <HomePageBody />
    // </Container>
    <>
    <div >
        <div className="row">
          <HomePageSlider />
        </div>
      

        <div className="row center">
          <HomePageBody />
        </div>
        </div>
    </>
  );
}

export default HomePage;
