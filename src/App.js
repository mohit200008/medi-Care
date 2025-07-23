import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './components/Home/Homepage.jsx';
import HomeHi from './components/Home/Homepagehi'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/Health/Health';
import Chatbot from './components/Chatbot/Chatbot';
import DiseaesPred from './components/DiseasePred/DiseaseDetection';
import Doctor from './components/Doctor/Doctor';
import Details from './components/Doctor/Details';
import NotfoundPage from "./components/NotfoundPage";
import HeartDiseaseForm from "./components/DiseasePred/HeartDiseasePred/HeartDiseaseForm";
import KidneyDiseaseForm from "./components/DiseasePred/KidneyDiseasePred/KidneyDiseaseForm";
import BreastCancerForm from "./components/DiseasePred/BreastCancerPred/BreastCancerForm";
import DiabetesForm from "./components/DiseasePred/DiabetesPred/DiabetesForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import DiseaseReport from './components/DiseasePred/DiseaseReport';
import Footer from './components/Footer/Footer.jsx';

function App() {

  const [mode, setMode] = useState('light');

  const showalert = (message, type) => {

    const alert = {
      msg: message,
      type: type
    };

    setTimeout(() => {
      // Alert will be cleared automatically
    }, 1800);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#050A30";
      showalert("Dark mode has been enabled", "primary");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "primary");
    }
  }

  return (
    <Router>
      <Chatbot />
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DiseaesPred" element={<DiseaesPred />} />
        <Route path="/hi" element={<HomeHi />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/health" element={<ContactUs />} />
        <Route path="/heart-predict" element={<HeartDiseaseForm />} />
        <Route path="/kidney-predict" element={<KidneyDiseaseForm />} />
        <Route path="/breast-cancer-predict" element={<BreastCancerForm />} />
        <Route path="/diabetes-predict" element={<DiabetesForm />} />
        <Route path="/report/:type" element={<DiseaseReport />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
