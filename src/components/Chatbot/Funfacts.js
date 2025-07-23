const Funfacts = [
  {
    id: "1",
    message: "Hey! I am Medi-bot, how are you feeling today?",
    trigger: "expressions",
  },
  {
    id: "expressions",
    options: [
      { value: "veryHappy", label: "😀", trigger: "veryHappy" },
      { value: "happy", label: "🙂", trigger: "happy" },
      { value: "normal", label: "😐", trigger: "normal" },
      { value: "sad", label: "☹️", trigger: "sad" },
      { value: "angry", label: "😡", trigger: "angry" },
    ],
  },
  {
    id: "veryHappy",
    message: "Great! I'm glad you're feeling wonderful!",
    trigger: "help",
  },
  {
    id: "happy",
    message: "Hmm, looks like you're in a good mood. I can make it even better!",
    trigger: "help",
  },
  {
    id: "normal",
    message: "Oh, are you feeling neutral? Don't worry, I'm here to help you!",
    trigger: "help",
  },
  {
    id: "sad",
    message: "I'm sorry to hear that. Let me share a fun fact to cheer you up!",
    trigger: "funFact",
  },
  {
    id: "angry",
    message: "Oops, did I do something wrong? But wait, I'm a bot, I can't do that... Well, I suggest you relax your mind, play some games, watch some movies, and eat a lot of healthy tasty food!",
    trigger: "help",
  },
  {
    id: "help",
    message: "How can I help you today?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: "services", label: "Services", trigger: "services" },
      { value: "calculateBMI", label: "Calculate BMI", trigger: "calculateBMI" },
      { value: "funFact", label: "Give me a random fun fact", trigger: "funFact" },
      { value: "exit", label: "Exit", trigger: "end" },
    ],
  },
  {
    id: "services",
    message: "Select one of these services:",
    trigger: "selectServices",
  },
  {
    id: "selectServices",
    options: [
      { value: "health", label: "Smart BMI Calculator", trigger: "selectedService" },
      { value: "Disease Detection", label: "Disease Detection", trigger: "selectedService" },
      { value: "goBack", label: "Go back", trigger: "options" },
    ],
  },
  {
    id: "selectedService",
    message: "Opening {previousValue} for you!",
    trigger: "end",
  },
  {
    id: "calculateBMI",
    message: "Let's calculate your BMI!",
    trigger: "BMIHeightMessage",
  },
  {
    id: "BMIHeightMessage",
    message: "Enter your height (in cm):",
    trigger: "BMIHeight",
  },
  {
    id: "BMIHeight",
    user: true,
    validator: (value) => {
      if (isNaN(value)) {
        return 'Value should be a number';
      }
      return true;
    },
    trigger: "BMIWeightMessage",
  },
  {
    id: "BMIWeightMessage",
    message: "Enter your weight (in kg):",
    trigger: "BMIWeight",
  },
  {
    id: "BMIWeight",
    user: true,
    validator: (value) => {
      if (isNaN(value)) {
        return 'Value should be a number';
      }
      return true;
    },
    trigger: "BMIResult",
  },
  {
    id: "BMIResult",
    component: <BMI />,
    asMessage: true,
    trigger: "BMIKnowMore",
  },
  {
    id: "BMIKnowMore",
    message: "Want to know more about BMI?",
    trigger: "BMIKnowMore-options",
  },
  {
    id: "BMIKnowMore-options",
    options: [
      { value: "health", label: "Yes", trigger: "selectedService" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "funFact",
    component: <FunFact />,
    asMessage: true,
    trigger: "moreHelp",
  },
  {
    id: "moreHelp",
    message: "Do you need more help?",
    trigger: "moreHelp-yes",
  },
  {
    id: "moreHelp-yes",
    options: [
      { value: "yes", label: "Yes", trigger: "help" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "end",
    message: "Thank you! See you again!",
    end: true,
  },
];

function BMI({ steps }) {
  const height = parseFloat(steps.BMIHeight.value);
  const weight = parseFloat(steps.BMIWeight.value);
  const bmi = ((weight / (height * height)) * 10000).toFixed(2);
  
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  return (
    <div>
      Your BMI is {bmi} ({category})
    </div>
  );
}

function FunFact() {
  const funfacts = [
    "Drink something hot to cool down.",
    "More than half your bones are located in your hands and feet.",
    "You can physically see high cholesterol.",
    "Cholesterol-free can be bad for your cholesterol.",
    "If you are tired, exercise will help.",
    "Cold temperature can be good for your health",
    "Bananas can help improve your mood",
    "Optimism may help you live longer",
  ];
  
  const randInt = Math.floor(Math.random() * funfacts.length);
  return <div>{funfacts[randInt]}</div>;
}

export default Funfacts;
