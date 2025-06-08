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
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';
import DiseaseReport from './components/DiseasePred/DiseaseReport';
import Chart from './components/chart/Chart';
import Footer from './components/Footer/Footer.jsx';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {

    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
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
        <Route path="/report/:type" element={<DiseaseReport />} />
        <Route path="/covid" element={<Chart />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
