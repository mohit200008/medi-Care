import React, { useState } from "react";
import "../../styles/Health.css";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "../../styles/Button_Animation.css"
import fitness from '../../assets/images/fitness.jpg'

function Health() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [page1, setPage1] = useState(true);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#32A899",
      },
      secondary: {
        main: "#31D570",
      },
    },
  });

  const handleSubmit = () => {
    if (height < 1 || weight < 1 || age < 1) {
      return;
    }
    setPage1(!page1);
  };

  const getBMIResultMessage = () => {
    const bmi = (weight / (height * height)) * 10000;
    if (bmi <= 16) {
      return "Severely Thin";
    } else if (bmi > 16 && bmi <= 17) {
      return "Moderately Thin";
    } else if (bmi > 17 && bmi <= 18.5) {
      return "Mild Thin";
    } else if (bmi > 18.5 && bmi <= 25) {
      return "Normal";
    } else if (bmi > 25 && bmi <= 30) {
      return "Over Weight";
    } else {
      return "Obese";
    }
  };

  const getRecommendedCalories = () => {
    const bmi = (weight / (height * height)) * 10000;

    if (bmi <= 18.5) {
      return "2000-2500 ";
    } else if (bmi > 18.5 && bmi <= 25) {
      return "1800-2200";
    } else if (bmi > 25 && bmi <= 30) {
      return "1500-1900";
    } else {
      return "1300-1700";
    }
  };

  const getRecommendedDiet = () => {
    const bmi = (weight / (height * height)) * 10000;

    if (bmi <= 18.5) {
      return "eat protein rich food with carbs and good vitamins. Such as eggs, green vegetables, high toned milk,  green dals and have a moderate workout daily, avoid eating junk food..";
    } else if (bmi > 18.5 && bmi <= 25) {
      return "keep maintaining your normal eating habits with little excercise and stay witin your daily calorie requirements..  Avoid junk food and prefer juices for good immunity and better metabolism..";
    } else if (bmi > 25 && bmi <= 30) {
      return "Use Green tea with zero sugars,  Avoid oily food and junk food,  Eat 3 times a day only with green vegetables,  milk,  wheat chappatis and dahi..  You can also eat chocolate (1-2 pcs) as it helps to reduce fat ..";
    } else {
      return "Remove bad habits of eating, and avoid any  kind of oil based food,  avoid rice as much as possible,  drink bitter melon juice for fast fat burn,  a daily moderate excercise is also recommend..";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bmi">
        {page1 ? (
          <div className="bmi__firstPage">
            <div className="bmi__calculatorContainer">
              <div className="bmi__formContainer">
                <div className="BmiSmall">Find out your</div>
                <div className="BmiLarge">Body Mass Index</div>
                <div className="BmiContent">Your BMI is a measurement that is a ratio of your weight and height. It’s a good way to gauge whether your weight is in healthy proportion to your height. In fact, knowing your BMI can help you – and your GP – determine any health risks you may face if it’s outside of the healthy range.</div>
                <form className="bmi__form">
                  <TextField
                    label="Height (cm)"
                    type="number"
                    variant="outlined"
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <TextField
                    label="Weight (kg)"
                    type="number"
                    variant="outlined"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <TextField
                    label="Age (yrs)"
                    type="number"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <Button onClick={handleSubmit} 
                   //button rubberband animation
                    onMouseDown ={ e =>e.currentTarget.classList.add("btn-animation")}
                    onMouseUp ={ e=> e.currentTarget.classList.remove("btn-animation")}
                  
                  >Calculate</Button>
                </form>
              </div>
            </div>
            <div className="bmi__imgContainer">
              <img src={fitness} alt="bmi image" />
            </div>
          </div>
        ) : (
          <div className="bmi__secondPage">
            <div className="bmi__resultContainer">
              <div className="bmi__resultHeader">
                <div className="bmi__inputData">
                  <div>
                    <img src={"/images/age.svg"} />
                    <p>{age} years</p>
                  </div>
                </div>
                <div className="bmi__inputData">
                  <div>
                    <img src={"/images/height.svg"} />
                    <p>{height} cm</p>
                  </div>
                </div>
                <div className="bmi__inputData">
                  <div>
                    <img src={"/images/scale.svg"} />
                    <p>{weight} kg</p>
                  </div>
                </div>
              </div>
              <div className="bmi__resultData">
                <div className="bmi__resultBMI">
                  Your BMI : {((weight / (height * height)) * 10000).toFixed(2)}
                </div>
                <div className="bmi__resultMessage">
                  <p>You are {getBMIResultMessage()}</p>
                </div>
              </div>
              <div className="bmi__waterContainer">
                <img src={"/images/water.svg"} />
                <p>Drink At least 8 litres of water daily</p>
              </div>
              <div className="bmi__recommendations">
                <table>
                  <tr>
                    <td>Recommended Calories</td>
                    <td>{getRecommendedCalories()} per day</td>
                  </tr>
                  <tr>
                    <td>Recommended Body Weight</td>
                    <td>{((height * height * 21) / 10000).toFixed(2)} kg</td>
                  </tr>
                  <tr>
                    <td>Recommended Diet</td>
                    <td>{getRecommendedDiet()}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default Health;
