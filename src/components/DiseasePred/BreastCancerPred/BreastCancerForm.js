import React, { useState } from 'react';
import { TextField, Button, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BreastCancerForm = () => {
  const [formData, setFormData] = useState({
    radius_mean: '',
    texture_mean: '',
    perimeter_mean: '',
    area_mean: '',
    smoothness_mean: '',
    compactness_mean: '',
    concavity_mean: '',
    concave_points_mean: '',
    symmetry_mean: '',
    fractal_dimension_mean: ''
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
    Object.keys(formData).forEach(key => {
      if (!formData[key] || formData[key] === '') {
        newErrors[key] = 'This field is required';
      } else if (isNaN(formData[key])) {
        newErrors[key] = 'Please enter a valid number';
      }
    });
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
        navigate('/report/breast-cancer', { 
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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Breast Cancer Risk Assessment
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enter your medical data to assess your breast cancer risk. This tool analyzes various 
              cellular characteristics to provide a risk assessment.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  fullWidth
                  label="Radius Mean"
                  type="number"
                  variant="outlined"
                  value={formData.radius_mean}
                  onChange={handleChange('radius_mean')}
                  error={!!errors.radius_mean}
                  helperText={errors.radius_mean || "Average radius of tumor cells"}
                  InputProps={{
                    inputProps: { step: 0.01, min: 0 }
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
                  label="Texture Mean"
                  type="number"
                  variant="outlined"
                  value={formData.texture_mean}
                  onChange={handleChange('texture_mean')}
                  error={!!errors.texture_mean}
                  helperText={errors.texture_mean || "Standard deviation of gray-scale values"}
                  InputProps={{
                    inputProps: { step: 0.01, min: 0 }
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
                  label="Perimeter Mean"
                  type="number"
                  variant="outlined"
                  value={formData.perimeter_mean}
                  onChange={handleChange('perimeter_mean')}
                  error={!!errors.perimeter_mean}
                  helperText={errors.perimeter_mean || "Perimeter of tumor cells"}
                  InputProps={{
                    inputProps: { step: 0.01, min: 0 }
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
                  label="Area Mean"
                  type="number"
                  variant="outlined"
                  value={formData.area_mean}
                  onChange={handleChange('area_mean')}
                  error={!!errors.area_mean}
                  helperText={errors.area_mean || "Area of tumor cells"}
                  InputProps={{
                    inputProps: { step: 0.01, min: 0 }
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
                  label="Smoothness Mean"
                  type="number"
                  variant="outlined"
                  value={formData.smoothness_mean}
                  onChange={handleChange('smoothness_mean')}
                  error={!!errors.smoothness_mean}
                  helperText={errors.smoothness_mean || "Local variation in radius lengths"}
                  InputProps={{
                    inputProps: { step: 0.001, min: 0, max: 1 }
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
                  label="Compactness Mean"
                  type="number"
                  variant="outlined"
                  value={formData.compactness_mean}
                  onChange={handleChange('compactness_mean')}
                  error={!!errors.compactness_mean}
                  helperText={errors.compactness_mean || "Perimeter² / area - 1.0"}
                  InputProps={{
                    inputProps: { step: 0.001, min: 0, max: 1 }
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
                  label="Concavity Mean"
                  type="number"
                  variant="outlined"
                  value={formData.concavity_mean}
                  onChange={handleChange('concavity_mean')}
                  error={!!errors.concavity_mean}
                  helperText={errors.concavity_mean || "Severity of concave portions of the contour"}
                  InputProps={{
                    inputProps: { step: 0.001, min: 0, max: 1 }
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
                  label="Concave Points Mean"
                  type="number"
                  variant="outlined"
                  value={formData.concave_points_mean}
                  onChange={handleChange('concave_points_mean')}
                  error={!!errors.concave_points_mean}
                  helperText={errors.concave_points_mean || "Number of concave portions of the contour"}
                  InputProps={{
                    inputProps: { step: 0.001, min: 0, max: 1 }
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
                  label="Symmetry Mean"
                  type="number"
                  variant="outlined"
                  value={formData.symmetry_mean}
                  onChange={handleChange('symmetry_mean')}
                  error={!!errors.symmetry_mean}
                  helperText={errors.symmetry_mean || "Symmetry of the tumor"}
                  InputProps={{
                    inputProps: { step: 0.001, min: 0, max: 1 }
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
                  label="Fractal Dimension Mean"
                  type="number"
                  variant="outlined"
                  value={formData.fractal_dimension_mean}
                  onChange={handleChange('fractal_dimension_mean')}
                  error={!!errors.fractal_dimension_mean}
                  helperText={errors.fractal_dimension_mean || "Coastline approximation - 1"}
                  InputProps={{
                    inputProps: { step: 0.001, min: 0, max: 1 }
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
                <h4 className="font-semibold text-gray-800 mb-2">What We Analyze</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Cell radius and texture characteristics</li>
                  <li>• Perimeter and area measurements</li>
                  <li>• Smoothness and compactness features</li>
                  <li>• Concavity and symmetry analysis</li>
                  <li>• Fractal dimension calculations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Important Notes</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• This is a screening tool only</li>
                  <li>• Consult healthcare professionals for diagnosis</li>
                  <li>• Regular check-ups are recommended</li>
                  <li>• Early detection improves outcomes</li>
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

export default BreastCancerForm; 