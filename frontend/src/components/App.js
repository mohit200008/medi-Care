import React from 'react';
import Navbar from './pages/Navbar';
import './App.css';
import Home from './pages/Home/Homepage.jsx';
import HomeHi from './pages/Home/Homepagehi.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './pages/Health/Health';
import Chatbot from './pages/Chatbot/Chatbot';
import DiseaseDetection from './pages/DiseasePred/DiseaseDetection';
import Doctor from './pages/Doctor/Doctor';
import Details from './pages/Doctor/Details';
import DiseaseReport from './pages/DiseasePred/DiseaseReport';
import {render} from "react-dom";

function App() {
  return (
    <Router>
    <Chatbot />
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/DiseasePred' element={<DiseaseDetection />} />
          <Route path='/hi' exact element={<HomeHi />} />
          <Route path='/Doctor' element={<Doctor />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/health' element={<ContactUs />} />
          <Route path='/report/:type' element={<DiseaseReport />} />
        </Routes>
    </Router>
  );
}

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);