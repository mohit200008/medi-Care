import React, { useState } from "react";
import { TextField, Button, ThemeProvider, createTheme, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const HeartDiseaseForm = () => {
	const [formData, setFormData] = useState({
		age: '',
		sex: '',
		cp: '',
		trestbps: '',
		chol: '',
		fbs: '',
		restecg: '',
		thalach: '',
		exang: '',
		oldpeak: '',
		slope: '',
		ca: '',
    thal: ''
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
    
    if (!formData.age || formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Age must be between 1-120 years';
    }
    if (!formData.sex || (formData.sex !== '0' && formData.sex !== '1')) {
      newErrors.sex = 'Please select a valid gender';
    }
    if (!formData.cp || formData.cp < 0 || formData.cp > 3) {
      newErrors.cp = 'Chest pain type must be between 0-3';
    }
    if (!formData.trestbps || formData.trestbps < 90 || formData.trestbps > 200) {
      newErrors.trestbps = 'Resting blood pressure must be between 90-200 mmHg';
    }
    if (!formData.chol || formData.chol < 100 || formData.chol > 600) {
      newErrors.chol = 'Cholesterol level must be between 100-600 mg/dL';
    }
    if (!formData.fbs || (formData.fbs !== '0' && formData.fbs !== '1')) {
      newErrors.fbs = 'Please select fasting blood sugar status';
    }
    if (!formData.restecg || formData.restecg < 0 || formData.restecg > 2) {
      newErrors.restecg = 'Resting ECG results must be between 0-2';
    }
    if (!formData.thalach || formData.thalach < 60 || formData.thalach > 202) {
      newErrors.thalach = 'Maximum heart rate must be between 60-202 bpm';
    }
    if (!formData.exang || (formData.exang !== '0' && formData.exang !== '1')) {
      newErrors.exang = 'Please select exercise induced angina status';
    }
    if (!formData.oldpeak || formData.oldpeak < 0 || formData.oldpeak > 6.2) {
      newErrors.oldpeak = 'ST depression must be between 0-6.2 mm';
    }
    if (!formData.slope || formData.slope < 0 || formData.slope > 2) {
      newErrors.slope = 'Slope of peak exercise ST segment must be between 0-2';
    }
    if (!formData.ca || formData.ca < 0 || formData.ca > 4) {
      newErrors.ca = 'Number of major vessels must be between 0-4';
    }
    if (!formData.thal || formData.thal < 0 || formData.thal > 3) {
      newErrors.thal = 'Thalassemia type must be between 0-3';
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
        navigate('/report/heart', { 
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
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Heart Disease Risk Assessment
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enter your cardiovascular health data to assess your heart disease risk. 
              This tool analyzes various heart-related parameters to provide a comprehensive risk assessment.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <TextField
                  fullWidth
                  select
                  label="Sex"
                  variant="outlined"
						value={formData.sex}
                  onChange={handleChange('sex')}
                  error={!!errors.sex}
                  helperText={errors.sex || "Gender (0 = Female, 1 = Male)"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Gender</option>
                  <option value="0">Female</option>
                  <option value="1">Male</option>
                </TextField>
                <TextField
                  fullWidth
                  label="Chest Pain Type"
                  type="number"
                  variant="outlined"
						value={formData.cp}
                  onChange={handleChange('cp')}
                  error={!!errors.cp}
                  helperText={errors.cp || "Chest pain type (0-3)"}
                  InputProps={{
                    inputProps: { min: 0, max: 3 }
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
                  label="Resting Blood Pressure (mmHg)"
						type="number"
                  variant="outlined"
						value={formData.trestbps}
                  onChange={handleChange('trestbps')}
                  error={!!errors.trestbps}
                  helperText={errors.trestbps || "Resting blood pressure"}
                  InputProps={{
                    inputProps: { min: 90, max: 200 }
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
                  label="Cholesterol (mg/dL)"
						type="number"
                  variant="outlined"
						value={formData.chol}
                  onChange={handleChange('chol')}
                  error={!!errors.chol}
                  helperText={errors.chol || "Serum cholesterol level"}
                  InputProps={{
                    inputProps: { min: 100, max: 600 }
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
                  select
                  label="Fasting Blood Sugar"
                  variant="outlined"
                  value={formData.fbs}
                  onChange={handleChange('fbs')}
                  error={!!errors.fbs}
                  helperText={errors.fbs || "Fasting blood sugar &gt; 120 mg/dL"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="0">≤ 120 mg/dL</option>
                  <option value="1">&gt; 120 mg/dL</option>
                </TextField>
                <TextField
                  fullWidth
                  label="Resting ECG Results"
						type="number"
                  variant="outlined"
						value={formData.restecg}
                  onChange={handleChange('restecg')}
                  error={!!errors.restecg}
                  helperText={errors.restecg || "Resting electrocardiographic results"}
                  InputProps={{
                    inputProps: { min: 0, max: 2 }
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
                  label="Maximum Heart Rate (bpm)"
						type="number"
                  variant="outlined"
						value={formData.thalach}
                  onChange={handleChange('thalach')}
                  error={!!errors.thalach}
                  helperText={errors.thalach || "Maximum heart rate achieved"}
                  InputProps={{
                    inputProps: { min: 60, max: 202 }
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
                  select
                  label="Exercise Induced Angina"
                  variant="outlined"
						value={formData.exang}
                  onChange={handleChange('exang')}
                  error={!!errors.exang}
                  helperText={errors.exang || "Exercise induced angina"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </TextField>
                <TextField
                  fullWidth
                  label="ST Depression (mm)"
						type="number"
                  variant="outlined"
						value={formData.oldpeak}
                  onChange={handleChange('oldpeak')}
                  error={!!errors.oldpeak}
                  helperText={errors.oldpeak || "ST depression induced by exercise"}
                  InputProps={{
                    inputProps: { step: 0.1, min: 0, max: 6.2 }
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
                  label="Slope of Peak Exercise ST"
                  type="number"
                  variant="outlined"
						value={formData.slope}
                  onChange={handleChange('slope')}
                  error={!!errors.slope}
                  helperText={errors.slope || "Slope of peak exercise ST segment"}
                  InputProps={{
                    inputProps: { min: 0, max: 2 }
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
                  label="Number of Major Vessels"
						type="number"
                  variant="outlined"
						value={formData.ca}
                  onChange={handleChange('ca')}
                  error={!!errors.ca}
                  helperText={errors.ca || "Number of major vessels colored by fluoroscopy"}
                  InputProps={{
                    inputProps: { min: 0, max: 4 }
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
                  label="Thalassemia Type"
                  type="number"
                  variant="outlined"
						value={formData.thal}
                  onChange={handleChange('thal')}
                  error={!!errors.thal}
                  helperText={errors.thal || "Thalassemia type"}
                  InputProps={{
                    inputProps: { min: 0, max: 3 }
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
                  <li>• Age and gender factors</li>
                  <li>• Blood pressure and cholesterol</li>
                  <li>• ECG and heart rate measurements</li>
                  <li>• Exercise test results</li>
                  <li>• Medical history indicators</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Prevention Tips</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Maintain healthy blood pressure</li>
                  <li>• Control cholesterol levels</li>
                  <li>• Exercise regularly</li>
                  <li>• Eat a heart-healthy diet</li>
                  <li>• Avoid smoking and excessive alcohol</li>
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

export default HeartDiseaseForm;