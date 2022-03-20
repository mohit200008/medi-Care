import React from "react";
import styled from "styled-components";

// components
import HomePageSliderHi from "./HomePageSliderHi.jsx";
import HomePageBodyHi from "./HomePageBodyHi.jsx";

const Container = styled.div``;

function HomePage() {
	return (
		<>
		<div >
        <div className="row">
          <HomePageSliderHi />
        </div>
      

        <div className="row center">
          <HomePageBodyHi />
        </div>
      </div>
		</>
	);
}

export default HomePage;
