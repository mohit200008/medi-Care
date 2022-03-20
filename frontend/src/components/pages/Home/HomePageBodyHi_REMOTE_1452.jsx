import React from "react";
import BodyCard from "./BodyCard";


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
