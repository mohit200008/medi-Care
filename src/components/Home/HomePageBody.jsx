import React from "react";
import BodyCard from "./BodyCard";

function HomePageBody() {
  return (
    <>
      <BodyCard
        heading={"Why is health essential?"}
        para={` Health is the factor that helps a person perform his daily life
       tasks in a correct and right way. Health care is essential for
       everyone, whether its a men or women.`}
        img="https://i.pinimg.com/originals/8a/28/8f/8a288fc55156d4dceffe0b47cb9c89ea.jpg"
        id={1}
        top={true}
      />
      <BodyCard
        heading={"Stay Healthy"}
        para={`Using this web application women can easily keep track of their
        health.`}
        img="https://i.pinimg.com/originals/a3/04/05/a30405aa47967c5b9ab46896312df093.jpg"
        id={2}
        top={false}
      />
    </>
  );
}

export default HomePageBody;
