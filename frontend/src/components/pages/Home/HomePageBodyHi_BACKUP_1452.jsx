import React from "react";
<<<<<<< HEAD:frontend/src/components/pages/Home/HomePageBodyHi.jsx
import BodyCard from "./BodyCard.jsx";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  h1 {
    margin-top:10px;
    font-size: 3rem;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 100%;
    }
  }
`;
=======
import BodyCard from "./BodyCard";

>>>>>>> 5ad5c5e63d73b5174b42f1908f955f555723ab84:src/components/Home/HomePageBodyHi.jsx

function HomePageBody() {
  return (
    <>
    <BodyCard
      heading={"स्वास्थ्य क्यों आवश्यक है?"}
      para={` स्वास्थ्य एक व्यक्ति को अपने दैनिक जीवन के कार्यों को सही तरीके से करने में मदद करता है।स्वास्थ्य देखभाल हर किसी के लिए आवश्यक है, चाहे वह पुरुष हो या महिला।`}
      img="https://i.pinimg.com/originals/8a/28/8f/8a288fc55156d4dceffe0b47cb9c89ea.jpg"
      id={1}
      top={true}
    />
    <BodyCard
      heading={"स्वस्थ रहें"}
      para={`इस वेब एप्लिकेशन का उपयोग करके महिलाएं आसानी से अपने स्वास्थ्य का ट्रैक रख सकती हैं`}
      img="https://i.pinimg.com/originals/a3/04/05/a30405aa47967c5b9ab46896312df093.jpg"
      id={2}
      top={false}
    />
  </>
    
  );
}

export default HomePageBody;
