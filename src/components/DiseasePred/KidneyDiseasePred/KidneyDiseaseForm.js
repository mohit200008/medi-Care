import React, { useState } from "react";
import { TextField, Button, ThemeProvider, createTheme, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const KidneyDiseaseForm = () => {
	const [formData, setFormData] = useState({
		age: '',
    bloodPressure: '',
    specificGravity: '',
    albumin: '',
    sugar: '',
    redBloodCells: '',
    pusCell: '',
    pusCellClumps: '',
    bacteria: '',
    bloodGlucoseRandom: '',
    bloodUrea: '',
    serumCreatinine: '',
    sodium: '',
    potassium: '',
    hemoglobin: '',
    packedCellVolume: '',
    whiteBloodCellCount: '',
    redBloodCellCount: '',
    hypertension: '',
    diabetesMellitus: '',
    coronaryArteryDisease: '',
    appetite: '',
    pedalEdema: '',
    anemia: ''
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
    if (!formData.bloodPressure || formData.bloodPressure < 50 || formData.bloodPressure > 200) {
      newErrors.bloodPressure = 'Blood pressure must be between 50-200 mmHg';
    }
    if (!formData.specificGravity || formData.specificGravity < 1.0 || formData.specificGravity > 1.1) {
      newErrors.specificGravity = 'Specific gravity must be between 1.0-1.1';
    }
    if (!formData.albumin || formData.albumin < 0 || formData.albumin > 5) {
      newErrors.albumin = 'Albumin must be between 0-5 g/dL';
    }
    if (!formData.sugar || formData.sugar < 0 || formData.sugar > 5) {
      newErrors.sugar = 'Sugar must be between 0-5';
    }
    if (!formData.redBloodCells || (formData.redBloodCells !== 'normal' && formData.redBloodCells !== 'abnormal')) {
      newErrors.redBloodCells = 'Please select red blood cells status';
    }
    if (!formData.pusCell || (formData.pusCell !== 'normal' && formData.pusCell !== 'abnormal')) {
      newErrors.pusCell = 'Please select pus cell status';
    }
    if (!formData.pusCellClumps || (formData.pusCellClumps !== 'present' && formData.pusCellClumps !== 'notpresent')) {
      newErrors.pusCellClumps = 'Please select pus cell clumps status';
    }
    if (!formData.bacteria || (formData.bacteria !== 'present' && formData.bacteria !== 'notpresent')) {
      newErrors.bacteria = 'Please select bacteria status';
    }
    if (!formData.bloodGlucoseRandom || formData.bloodGlucoseRandom < 20 || formData.bloodGlucoseRandom > 500) {
      newErrors.bloodGlucoseRandom = 'Blood glucose must be between 20-500 mg/dL';
    }
    if (!formData.bloodUrea || formData.bloodUrea < 1.8 || formData.bloodUrea > 400) {
      newErrors.bloodUrea = 'Blood urea must be between 1.8-400 mg/dL';
    }
    if (!formData.serumCreatinine || formData.serumCreatinine < 0.5 || formData.serumCreatinine > 76) {
      newErrors.serumCreatinine = 'Serum creatinine must be between 0.5-76 mg/dL';
    }
    if (!formData.sodium || formData.sodium < 100 || formData.sodium > 200) {
      newErrors.sodium = 'Sodium must be between 100-200 mEq/L';
    }
    if (!formData.potassium || formData.potassium < 2.5 || formData.potassium > 10) {
      newErrors.potassium = 'Potassium must be between 2.5-10 mEq/L';
    }
    if (!formData.hemoglobin || formData.hemoglobin < 3.1 || formData.hemoglobin > 17.8) {
      newErrors.hemoglobin = 'Hemoglobin must be between 3.1-17.8 g/dL';
    }
    if (!formData.packedCellVolume || formData.packedCellVolume < 9 || formData.packedCellVolume > 54) {
      newErrors.packedCellVolume = 'Packed cell volume must be between 9-54%';
    }
    if (!formData.whiteBloodCellCount || formData.whiteBloodCellCount < 2200 || formData.whiteBloodCellCount > 26400) {
      newErrors.whiteBloodCellCount = 'White blood cell count must be between 2200-26400 cells/cumm';
    }
    if (!formData.redBloodCellCount || formData.redBloodCellCount < 2.1 || formData.redBloodCellCount > 8) {
      newErrors.redBloodCellCount = 'Red blood cell count must be between 2.1-8 millions/cmm';
    }
    if (!formData.hypertension || (formData.hypertension !== 'yes' && formData.hypertension !== 'no')) {
      newErrors.hypertension = 'Please select hypertension status';
    }
    if (!formData.diabetesMellitus || (formData.diabetesMellitus !== 'yes' && formData.diabetesMellitus !== 'no')) {
      newErrors.diabetesMellitus = 'Please select diabetes mellitus status';
    }
    if (!formData.coronaryArteryDisease || (formData.coronaryArteryDisease !== 'yes' && formData.coronaryArteryDisease !== 'no')) {
      newErrors.coronaryArteryDisease = 'Please select coronary artery disease status';
    }
    if (!formData.appetite || (formData.appetite !== 'good' && formData.appetite !== 'poor')) {
      newErrors.appetite = 'Please select appetite status';
    }
    if (!formData.pedalEdema || (formData.pedalEdema !== 'yes' && formData.pedalEdema !== 'no')) {
      newErrors.pedalEdema = 'Please select pedal edema status';
    }
    if (!formData.anemia || (formData.anemia !== 'yes' && formData.anemia !== 'no')) {
      newErrors.anemia = 'Please select anemia status';
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
        navigate('/report/kidney', { 
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Kidney Disease Risk Assessment
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enter your kidney health data to assess your kidney disease risk. 
              This tool analyzes various kidney function parameters to provide a comprehensive risk assessment.
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
                  label="Blood Pressure (mmHg)"
						type="number"
                  variant="outlined"
                  value={formData.bloodPressure}
                  onChange={handleChange('bloodPressure')}
                  error={!!errors.bloodPressure}
                  helperText={errors.bloodPressure || "Blood pressure"}
                  InputProps={{
                    inputProps: { min: 50, max: 200 }
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
                  label="Specific Gravity"
						type="number"
                  variant="outlined"
                  value={formData.specificGravity}
                  onChange={handleChange('specificGravity')}
                  error={!!errors.specificGravity}
                  helperText={errors.specificGravity || "Specific gravity of urine"}
                  InputProps={{
                    inputProps: { step: 0.001, min: 1.0, max: 1.1 }
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
                  label="Albumin (g/dL)"
						type="number"
                  variant="outlined"
                  value={formData.albumin}
                  onChange={handleChange('albumin')}
                  error={!!errors.albumin}
                  helperText={errors.albumin || "Albumin level"}
                  InputProps={{
                    inputProps: { step: 0.1, min: 0, max: 5 }
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
                  label="Sugar"
						type="number"
                  variant="outlined"
                  value={formData.sugar}
                  onChange={handleChange('sugar')}
                  error={!!errors.sugar}
                  helperText={errors.sugar || "Sugar level"}
                  InputProps={{
                    inputProps: { min: 0, max: 5 }
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
                  label="Red Blood Cells"
                  variant="outlined"
                  value={formData.redBloodCells}
                  onChange={handleChange('redBloodCells')}
                  error={!!errors.redBloodCells}
                  helperText={errors.redBloodCells || "Red blood cells in urine"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="normal">Normal</option>
                  <option value="abnormal">Abnormal</option>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Pus Cell"
                  variant="outlined"
                  value={formData.pusCell}
                  onChange={handleChange('pusCell')}
                  error={!!errors.pusCell}
                  helperText={errors.pusCell || "Pus cells in urine"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="normal">Normal</option>
                  <option value="abnormal">Abnormal</option>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Pus Cell Clumps"
                  variant="outlined"
                  value={formData.pusCellClumps}
                  onChange={handleChange('pusCellClumps')}
                  error={!!errors.pusCellClumps}
                  helperText={errors.pusCellClumps || "Pus cell clumps"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="present">Present</option>
                  <option value="notpresent">Not Present</option>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Bacteria"
                  variant="outlined"
                  value={formData.bacteria}
                  onChange={handleChange('bacteria')}
                  error={!!errors.bacteria}
                  helperText={errors.bacteria || "Bacteria in urine"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="present">Present</option>
                  <option value="notpresent">Not Present</option>
                </TextField>
                <TextField
                  fullWidth
                  label="Blood Glucose Random (mg/dL)"
						type="number"
                  variant="outlined"
                  value={formData.bloodGlucoseRandom}
                  onChange={handleChange('bloodGlucoseRandom')}
                  error={!!errors.bloodGlucoseRandom}
                  helperText={errors.bloodGlucoseRandom || "Random blood glucose"}
                  InputProps={{
                    inputProps: { min: 20, max: 500 }
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
                  label="Blood Urea (mg/dL)"
						type="number"
                  variant="outlined"
                  value={formData.bloodUrea}
                  onChange={handleChange('bloodUrea')}
                  error={!!errors.bloodUrea}
                  helperText={errors.bloodUrea || "Blood urea nitrogen"}
                  InputProps={{
                    inputProps: { step: 0.1, min: 1.8, max: 400 }
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
                  label="Serum Creatinine (mg/dL)"
						type="number"
                  variant="outlined"
                  value={formData.serumCreatinine}
                  onChange={handleChange('serumCreatinine')}
                  error={!!errors.serumCreatinine}
                  helperText={errors.serumCreatinine || "Serum creatinine"}
                  InputProps={{
                    inputProps: { step: 0.1, min: 0.5, max: 76 }
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
                  label="Sodium (mEq/L)"
						type="number"
                  variant="outlined"
                  value={formData.sodium}
                  onChange={handleChange('sodium')}
                  error={!!errors.sodium}
                  helperText={errors.sodium || "Sodium level"}
                  InputProps={{
                    inputProps: { min: 100, max: 200 }
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
                  label="Potassium (mEq/L)"
						type="number"
                  variant="outlined"
                  value={formData.potassium}
                  onChange={handleChange('potassium')}
                  error={!!errors.potassium}
                  helperText={errors.potassium || "Potassium level"}
                  InputProps={{
                    inputProps: { step: 0.1, min: 2.5, max: 10 }
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
                  label="Hemoglobin (g/dL)"
						type="number"
                  variant="outlined"
                  value={formData.hemoglobin}
                  onChange={handleChange('hemoglobin')}
                  error={!!errors.hemoglobin}
                  helperText={errors.hemoglobin || "Hemoglobin level"}
                  InputProps={{
                    inputProps: { step: 0.1, min: 3.1, max: 17.8 }
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
                  label="Packed Cell Volume (%)"
						type="number"
                  variant="outlined"
                  value={formData.packedCellVolume}
                  onChange={handleChange('packedCellVolume')}
                  error={!!errors.packedCellVolume}
                  helperText={errors.packedCellVolume || "Packed cell volume"}
                  InputProps={{
                    inputProps: { min: 9, max: 54 }
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
                  label="White Blood Cell Count (cells/cumm)"
						type="number"
                  variant="outlined"
                  value={formData.whiteBloodCellCount}
                  onChange={handleChange('whiteBloodCellCount')}
                  error={!!errors.whiteBloodCellCount}
                  helperText={errors.whiteBloodCellCount || "White blood cell count"}
                  InputProps={{
                    inputProps: { min: 2200, max: 26400 }
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
                  label="Red Blood Cell Count (millions/cmm)"
						type="number"
                  variant="outlined"
                  value={formData.redBloodCellCount}
                  onChange={handleChange('redBloodCellCount')}
                  error={!!errors.redBloodCellCount}
                  helperText={errors.redBloodCellCount || "Red blood cell count"}
                  InputProps={{
                    inputProps: { step: 0.1, min: 2.1, max: 8 }
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
                  label="Hypertension"
                  variant="outlined"
                  value={formData.hypertension}
                  onChange={handleChange('hypertension')}
                  error={!!errors.hypertension}
                  helperText={errors.hypertension || "History of hypertension"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Diabetes Mellitus"
                  variant="outlined"
                  value={formData.diabetesMellitus}
                  onChange={handleChange('diabetesMellitus')}
                  error={!!errors.diabetesMellitus}
                  helperText={errors.diabetesMellitus || "History of diabetes"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Coronary Artery Disease"
                  variant="outlined"
                  value={formData.coronaryArteryDisease}
                  onChange={handleChange('coronaryArteryDisease')}
                  error={!!errors.coronaryArteryDisease}
                  helperText={errors.coronaryArteryDisease || "History of coronary artery disease"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Appetite"
                  variant="outlined"
                  value={formData.appetite}
                  onChange={handleChange('appetite')}
                  error={!!errors.appetite}
                  helperText={errors.appetite || "Appetite status"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="good">Good</option>
                  <option value="poor">Poor</option>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Pedal Edema"
                  variant="outlined"
                  value={formData.pedalEdema}
                  onChange={handleChange('pedalEdema')}
                  error={!!errors.pedalEdema}
                  helperText={errors.pedalEdema || "Pedal edema status"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Anemia"
                  variant="outlined"
                  value={formData.anemia}
                  onChange={handleChange('anemia')}
                  error={!!errors.anemia}
                  helperText={errors.anemia || "Anemia status"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '1rem',
                      minHeight: '56px'
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </TextField>
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
                  <li>• Age and medical history</li>
                  <li>• Blood pressure and glucose levels</li>
                  <li>• Kidney function markers</li>
                  <li>• Urine analysis results</li>
                  <li>• Blood cell counts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Prevention Tips</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Control blood pressure</li>
                  <li>• Manage diabetes</li>
                  <li>• Stay hydrated</li>
                  <li>• Avoid excessive salt</li>
                  <li>• Regular kidney function tests</li>
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

export default KidneyDiseaseForm;