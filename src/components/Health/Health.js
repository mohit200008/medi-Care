import React, { useState } from "react";
import { TextField, Button, ThemeProvider, createTheme, Alert, CircularProgress, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import fitness from '../../assets/images/fitness.jpg'

const Health = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3B82F6",
      },
      secondary: {
        main: "#10B981",
      },
    },
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!height || height < 100 || height > 250) {
      newErrors.height = "Height must be between 100-250 cm";
    }
    if (!weight || weight < 20 || weight > 300) {
      newErrors.weight = "Weight must be between 20-300 kg";
    }
    if (!age || age < 1 || age > 120) {
      newErrors.age = "Age must be between 1-120 years";
    }
    if (!gender) {
      newErrors.gender = "Please select your gender";
    }
    if (!activityLevel) {
      newErrors.activityLevel = "Please select your activity level";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setLoading(true);
      // Simulate loading for better UX
      setTimeout(() => {
        setShowResults(true);
        setLoading(false);
      }, 1000);
    }
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setGender('');
    setActivityLevel('');
    setShowResults(false);
    setErrors({});
  };

  const calculateBMI = () => {
    return (weight / (height * height)) * 10000;
  };

  const getBMIResult = () => {
    const bmi = calculateBMI();
    if (bmi < 16) return { category: "Severely Underweight", color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" };
    if (bmi < 18.5) return { category: "Underweight", color: "text-orange-600", bgColor: "bg-orange-50", borderColor: "border-orange-200" };
    if (bmi < 25) return { category: "Normal Weight", color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" };
    if (bmi < 30) return { category: "Overweight", color: "text-yellow-600", bgColor: "bg-yellow-50", borderColor: "border-yellow-200" };
    if (bmi < 35) return { category: "Obese Class I", color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" };
    if (bmi < 40) return { category: "Obese Class II", color: "text-red-700", bgColor: "bg-red-100", borderColor: "border-red-300" };
    return { category: "Obese Class III", color: "text-red-800", bgColor: "bg-red-200", borderColor: "border-red-400" };
  };

  const calculateBMR = () => {
    // Mifflin-St Jeor Equation
    if (gender === 'male') {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  };

  const getActivityMultiplier = () => {
    switch (activityLevel) {
      case 'sedentary': return 1.2;
      case 'light': return 1.375;
      case 'moderate': return 1.55;
      case 'active': return 1.725;
      case 'very_active': return 1.9;
      default: return 1.2;
    }
  };

  const calculateTDEE = () => {
    return calculateBMR() * getActivityMultiplier();
  };

  const getRecommendedCalories = () => {
    const tdee = calculateTDEE();
    const bmi = calculateBMI();
    
    if (bmi < 18.5) {
      return { min: Math.round(tdee + 300), max: Math.round(tdee + 500) };
    } else if (bmi > 25) {
      return { min: Math.round(tdee - 500), max: Math.round(tdee - 300) };
    } else {
      return { min: Math.round(tdee - 100), max: Math.round(tdee + 100) };
    }
  };

  const getRecommendedWeight = () => {
    const bmi = calculateBMI();
    if (bmi < 18.5) {
      return { min: Math.round((height * height * 18.5) / 10000), max: Math.round((height * height * 24.9) / 10000) };
    } else if (bmi > 25) {
      return { min: Math.round((height * height * 18.5) / 10000), max: Math.round((height * height * 24.9) / 10000) };
    } else {
      return { min: Math.round((height * height * 18.5) / 10000), max: Math.round((height * height * 24.9) / 10000) };
    }
  };

  const getDietRecommendations = () => {
    const bmi = calculateBMI();
    if (bmi < 18.5) {
      return {
        focus: "Weight Gain",
        recommendations: [
          "Increase caloric intake by 300-500 calories daily",
          "Eat protein-rich foods (eggs, lean meat, fish, legumes)",
          "Include healthy fats (nuts, avocados, olive oil)",
          "Consume complex carbohydrates (whole grains, sweet potatoes)",
          "Add strength training exercises 3-4 times per week",
          "Eat 5-6 smaller meals throughout the day"
        ]
      };
    } else if (bmi > 25) {
      return {
        focus: "Weight Loss",
        recommendations: [
          "Create a caloric deficit of 300-500 calories daily",
          "Focus on lean proteins (chicken, fish, tofu)",
          "Increase fiber intake (vegetables, fruits, whole grains)",
          "Limit processed foods and added sugars",
          "Include both cardio and strength training",
          "Stay hydrated with 8-10 glasses of water daily"
        ]
      };
    } else {
      return {
        focus: "Weight Maintenance",
        recommendations: [
          "Maintain current caloric intake",
          "Eat a balanced diet with all food groups",
          "Include regular physical activity",
          "Stay hydrated throughout the day",
          "Get adequate sleep (7-9 hours)",
          "Practice portion control"
        ]
      };
    }
  };

  const getWaterIntake = () => {
    return Math.round(weight * 0.033); // 33ml per kg of body weight
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Health Information Center
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get personalized health insights, BMI calculations, and nutrition recommendations 
              based on your body metrics and lifestyle.
            </p>
          </div>

          {!showResults ? (
            /* Input Form */
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form Section */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Calculate Your</h2>
                    <h3 className="text-4xl font-bold text-blue-600 mb-4">Body Mass Index</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Your BMI is a key indicator of your health status. It helps determine if your weight 
                      is in a healthy proportion to your height and provides insights for personalized 
                      nutrition and fitness recommendations.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TextField
                        fullWidth
                        label="Height (cm)"
                        type="number"
                        variant="outlined"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        error={!!errors.height}
                        helperText={errors.height}
                        InputProps={{
                          inputProps: { min: 100, max: 250 }
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            fontSize: '1rem',
                            padding: '12px 16px',
                            minHeight: '56px'
                          }
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Weight (kg)"
                        type="number"
                        variant="outlined"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        error={!!errors.weight}
                        helperText={errors.weight}
                        InputProps={{
                          inputProps: { min: 20, max: 300 }
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            fontSize: '1rem',
                            padding: '12px 16px',
                            minHeight: '56px'
                          }
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TextField
                        fullWidth
                        label="Age (years)"
                        type="number"
                        variant="outlined"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        error={!!errors.age}
                        helperText={errors.age}
                        InputProps={{
                          inputProps: { min: 1, max: 120 }
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            fontSize: '1rem',
                            padding: '12px 16px',
                            minHeight: '56px'
                          }
                        }}
                      />
                      <FormControl fullWidth error={!!errors.gender}>
                        <InputLabel>Gender</InputLabel>
                        <Select
                          value={gender}
                          label="Gender"
                          onChange={(e) => setGender(e.target.value)}
                          sx={{
                            fontSize: '1rem',
                            minHeight: '56px'
                          }}
                        >
                          <MenuItem value="">Select Gender</MenuItem>
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                        </Select>
                        {errors.gender && (
                          <div className="text-red-600 text-sm mt-1">{errors.gender}</div>
                        )}
                      </FormControl>
                    </div>

                    <FormControl fullWidth error={!!errors.activityLevel}>
                      <InputLabel>Activity Level</InputLabel>
                      <Select
                        value={activityLevel}
                        label="Activity Level"
                        onChange={(e) => setActivityLevel(e.target.value)}
                        sx={{
                          fontSize: '1rem',
                          minHeight: '56px'
                        }}
                      >
                        <MenuItem value="">Select Activity Level</MenuItem>
                        <MenuItem value="sedentary">Sedentary (little or no exercise)</MenuItem>
                        <MenuItem value="light">Lightly active (light exercise 1-3 days/week)</MenuItem>
                        <MenuItem value="moderate">Moderately active (moderate exercise 3-5 days/week)</MenuItem>
                        <MenuItem value="active">Very active (hard exercise 6-7 days/week)</MenuItem>
                        <MenuItem value="very_active">Extra active (very hard exercise, physical job)</MenuItem>
                      </Select>
                      {errors.activityLevel && (
                        <div className="text-red-600 text-sm mt-1">{errors.activityLevel}</div>
                      )}
                    </FormControl>

                    <Button 
                      variant="contained" 
                      color="primary"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full py-4 text-lg font-semibold"
                      sx={{
                        fontSize: '1.125rem',
                        padding: '16px 32px',
                        minHeight: '56px',
                        fontWeight: 600
                      }}
                    >
                      {loading ? (
                        <div className="flex items-center space-x-2">
                          <CircularProgress size={20} color="inherit" />
                          <span>Calculating...</span>
                        </div>
                      ) : (
                        'Calculate Health Metrics'
                      )}
                    </Button>
                  </form>
                </div>

                {/* Image Section */}
                <div className="hidden lg:block">
                  <div className="relative h-full">
                    <img 
                      src={fitness} 
                      alt="Health and fitness illustration" 
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Results Section */
            <div className="space-y-8">
              {/* Back Button */}
              <div className="text-left">
                <Button 
                  variant="outlined" 
                  onClick={handleReset}
                  className="mb-4"
                  sx={{
                    fontSize: '1rem',
                    padding: '12px 24px',
                    minHeight: '48px'
                  }}
                >
                  ← Back to Calculator
                </Button>
              </div>

              {/* Personal Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{age}</div>
                  <div className="text-gray-600">Years Old</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{height}</div>
                  <div className="text-gray-600">cm Height</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{weight}</div>
                  <div className="text-gray-600">kg Weight</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{getWaterIntake()}</div>
                  <div className="text-gray-600">L Water/Day</div>
                </div>
              </div>

              {/* BMI Result */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Your BMI: {calculateBMI().toFixed(1)}
                  </h2>
                  <div className={`inline-block px-6 py-3 rounded-full text-xl font-semibold ${getBMIResult().bgColor} ${getBMIResult().borderColor} border-2 ${getBMIResult().color}`}>
                    {getBMIResult().category}
                  </div>
                </div>

                {/* BMI Scale */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">BMI Categories</h3>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-sm">
                    <div className="text-center p-2 bg-red-100 rounded">Under 18.5<br/>Underweight</div>
                    <div className="text-center p-2 bg-green-100 rounded">18.5 - 24.9<br/>Normal</div>
                    <div className="text-center p-2 bg-yellow-100 rounded">25 - 29.9<br/>Overweight</div>
                    <div className="text-center p-2 bg-orange-100 rounded">30 - 34.9<br/>Obese I</div>
                    <div className="text-center p-2 bg-red-200 rounded">35 - 39.9<br/>Obese II</div>
                    <div className="text-center p-2 bg-red-300 rounded">40+<br/>Obese III</div>
                  </div>
                </div>
              </div>

              {/* Health Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calorie and Weight Recommendations */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Daily Recommendations</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Daily Calories:</span>
                      <span className="text-xl font-bold text-blue-600">
                        {getRecommendedCalories().min} - {getRecommendedCalories().max} kcal
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Target Weight:</span>
                      <span className="text-xl font-bold text-green-600">
                        {getRecommendedWeight().min} - {getRecommendedWeight().max} kg
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Water Intake:</span>
                      <span className="text-xl font-bold text-purple-600">
                        {getWaterIntake()} liters/day
                      </span>
                    </div>
                  </div>
                </div>

                {/* Diet Recommendations */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {getDietRecommendations().focus} Plan
                  </h3>
                  <div className="space-y-4">
                    {getDietRecommendations().recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{recommendation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Health Tips */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">💡 Health Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">🏃‍♂️ Physical Activity</h4>
                    <p className="text-blue-100">Aim for at least 150 minutes of moderate exercise or 75 minutes of vigorous exercise per week.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">😴 Sleep Quality</h4>
                    <p className="text-blue-100">Get 7-9 hours of quality sleep each night to support your health goals.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🥗 Balanced Nutrition</h4>
                    <p className="text-blue-100">Focus on whole foods, lean proteins, healthy fats, and complex carbohydrates.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">💧 Hydration</h4>
                    <p className="text-blue-100">Stay hydrated throughout the day to support metabolism and overall health.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Health;
