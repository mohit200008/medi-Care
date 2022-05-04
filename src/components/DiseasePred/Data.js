import img1 from "../../assets/images/BreastCancer.jpg"
import img2 from "../../assets/images/Diabetiesimg.jpg";
import img3 from "../../assets/images/heartimg.jpg";
import img4 from "../../assets/images/kidneyimg.png";

const Data = [
  {
    img: img1,
    title: "Breast cancer Disease Prediction",
    subtitle: "Detect breast cancer",
    para: "Symptoms of breast cancer include a lump in the breast, bloody discharge from the nipple and changes in the shape or texture of the nipple or breast.",
    url: "https://breastcancerdetectionweb.herokuapp.com/",
  },
  {
    img: img2,
    title: "Diabeties prediction",
    subtitle: "Predict the chances of getting diabeties",
    para: "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat.",
    url: "https://diabetiespredictionweb.herokuapp.com/",
  },
  {
    img: img3,
    title: "Heart disease",
    subtitle: "Predict Heart Disease<",
    para: "It develops when the arteries that supply blood to the heart become clogged with plaque. This causes them to harden and narrow.",
    url: "/heart-predict",
  },
  {
    img: img4,
    title: "Kidney disease",
    subtitle: "Predict kidney disease",
    para: "The kidneys filter waste and excess fluid from the blood. As kidneys fail, waste builds up.",
    url: "/kidney-predict",
  },
];
export default Data;
