import React from "react";
import styled from "styled-components";

// components
import HomePageSliderHi from "./HomePageSliderHi";
import HomePageBodyHi from "./HomePageBodyHi";

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
