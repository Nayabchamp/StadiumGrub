import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import TheApp from "./Pages/The App/TheApp";
import Footer from "./Components/Footer/Footer";
import Card from "./Components/card/Card";
import VenueSolutions from "./Pages/Venue Solutions/VenueSolutions";
import ClientPartners from "./Pages/Clients & Partners/Client-Partners";
import News from "./Pages/News/News";
import Runners from "./Pages/Runners/Runners";
import ContactUS from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/About Us/AboutUS";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TheApp />} />
          <Route path="/news" element={<News />} />
          <Route path="/venue-solutions" element={<VenueSolutions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/runners" element={<Runners />} />
          <Route path="/contact-us" element={<ContactUS />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
