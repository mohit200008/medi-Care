import React from "react";
import HomePageSlider from "./HomePageSlider";
import HomePageBody from "./HomePageBody";
import News from "./News/News";

function HomePage() {
  return (
    <div>
      <HomePageSlider />
      <HomePageBody />
      <News />
    </div>
  );
}

export default HomePage;
