import React from "react";
import styled from "styled-components";

// components
import HomePageSliderHi from "./HomePageSliderHi.jsx";
import HomePageBodyHi from "./HomePageBodyHi.jsx";

const Container = styled.div``;

function HomePage() {
	return (
		<Container>
			<HomePageSliderHi />
			<HomePageBodyHi />
		</Container>
	);
}

export default HomePage;
