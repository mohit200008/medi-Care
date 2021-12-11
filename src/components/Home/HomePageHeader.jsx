import React from "react";
import styled from "styled-components";
import HomePageSlider from "./HomePageSlider"
const Container = styled.div`
width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  `;

function HomePageHeader() {
  return (
    <Container>
    {/* <HomePageSlider /> */}
      {/* <div className="left">
        <h1>MediCare</h1>
        <small>An all-in-one health platform.</small>
      </div>
      <div className="right">
        <a href="/">Know More</a>
      </div> */}
    </Container>
  );
}
export default HomePageHeader;
