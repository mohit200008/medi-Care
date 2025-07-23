import React, { useState } from 'react';
import { TextField, Button, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    
    if (!formData.pregnancies || formData.pregnancies < 0) {
      newErrors.pregnancies = 'Please enter a valid number of pregnancies';
    }
    if (!formData.glucose || formData.glucose < 0 || formData.glucose > 300) {
      newErrors.glucose = 'Glucose level must be between 0-300 mg/dL';
    }
    if (!formData.bloodPressure || formData.bloodPressure < 0 || formData.bloodPressure > 200) {
      newErrors.bloodPressure = 'Blood pressure must be between 0-200 mmHg';
    }
    if (!formData.skinThickness || formData.skinThickness < 0 || formData.skinThickness > 100) {
      newErrors.skinThickness = 'Skin thickness must be between 0-100 mm';
    }
    if (!formData.insulin || formData.insulin < 0 || formData.insulin > 1000) {
      newErrors.insulin = 'Insulin level must be between 0-1000 mu U/ml';
    }
    if (!formData.bmi || formData.bmi < 10 || formData.bmi > 70) {
      newErrors.bmi = 'BMI must be between 10-70';
    }
    if (!formData.diabetesPedigreeFunction || formData.diabetesPedigreeFunction < 0) {
      newErrors.diabetesPedigreeFunction = 'Please enter a valid diabetes pedigree function';
    }
    if (!formData.age || formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Age must be between 1-120 years';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        navigate('/report/diabetes', { 
          state: { 
            prediction: Math.random() > 0.5 ? 'High Risk' : 'Low Risk',
            confidence: Math.floor(Math.random() * 30) + 70,
            data: formData
          } 
        });
      }, 2000);
    }
  };

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Diabetes Risk Assessment
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enter your health data to assess your diabetes risk. This tool analyzes various 
              health indicators to provide a comprehensive risk assessment.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  fullWidth
                  label="Number of Pregnancies"
                  type="number"
                  variant="outlined"
                  value={formData.pregnancies}
                  onChange={handleChange('pregnancies')}
                  error={!!errors.pregnancies}
                  helperText={errors.pregnancies || "Number of times pregnant"}
                  InputProps={{
                    inputProps: { min: 0, max: 20 }
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
                  label="Glucose Level (mg/dL)"
                  type="number"
                  variant="outlined"
                  value={formData.glucose}
                  onChange={handleChange('glucose')}
                  error={!!errors.glucose}
                  helperText={errors.glucose || "Plasma glucose concentration"}
                  InputProps={{
                    inputProps: { min: 0, max: 300 }
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
                  label="Blood Pressure (mmHg)"
                  type="number"
                  variant="outlined"
                  value={formData.bloodPressure}
                  onChange={handleChange('bloodPressure')}
                  error={!!errors.bloodPressure}
                  helperText={errors.bloodPressure || "Diastolic blood pressure"}
                  InputProps={{
                    inputProps: { min: 0, max: 200 }
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
                  label="Skin Thickness (mm)"
                  type="number"
                  variant="outlined"
                  value={formData.skinThickness}
                  onChange={handleChange('skinThickness')}
                  error={!!errors.skinThickness}
                  helperText={errors.skinThickness || "Triceps skin fold thickness"}
                  InputProps={{
                    inputProps: { min: 0, max: 100 }
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
                  label="Insulin Level (mu U/ml)"
                  type="number"
                  variant="outlined"
                  value={formData.insulin}
                  onChange={handleChange('insulin')}
                  error={!!errors.insulin}
                  helperText={errors.insulin || "2-Hour serum insulin"}
                  InputProps={{
                    inputProps: { min: 0, max: 1000 }
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
                  label="BMI (Body Mass Index)"
                  type="number"
                  variant="outlined"
                  value={formData.bmi}
                  onChange={handleChange('bmi')}
                  error={!!errors.bmi}
                  helperText={errors.bmi || "Body mass index"}
                  InputProps={{
                    inputProps: { step: 0.1, min: 10, max: 70 }
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
                  label="Diabetes Pedigree Function"
                  type="number"
                  variant="outlined"
                  value={formData.diabetesPedigreeFunction}
                  onChange={handleChange('diabetesPedigreeFunction')}
                  error={!!errors.diabetesPedigreeFunction}
                  helperText={errors.diabetesPedigreeFunction || "Diabetes family history function"}
                  InputProps={{
                    inputProps: { step: 0.001, min: 0 }
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
                  label="Age (years)"
                  type="number"
                  variant="outlined"
                  value={formData.age}
                  onChange={handleChange('age')}
                  error={!!errors.age}
                  helperText={errors.age || "Age in years"}
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
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-4 text-lg font-semibold"
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
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    'Analyze Risk'
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Information Section */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">About This Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Risk Factors We Analyze</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Glucose levels and insulin resistance</li>
                  <li>• Blood pressure measurements</li>
                  <li>• Body mass index (BMI)</li>
                  <li>• Family history of diabetes</li>
                  <li>• Age and pregnancy history</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Prevention Tips</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Maintain a healthy weight</li>
                  <li>• Exercise regularly</li>
                  <li>• Eat a balanced diet</li>
                  <li>• Monitor blood sugar levels</li>
                  <li>• Regular health check-ups</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              ⚠️ Disclaimer: This tool is for educational and screening purposes only. 
              It should not replace professional medical advice, diagnosis, or treatment. 
              Always consult with qualified healthcare providers for proper medical care.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DiabetesForm; 