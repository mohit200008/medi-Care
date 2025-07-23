import React from "react";
import HomePageHeader from "./HomePageHeader";
import HomePageSlider from "./HomePageSlider";
import HomePageBody from "./HomePageBody";
import News from "./News/News";

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
