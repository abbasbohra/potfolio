import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Protfolio";
import Contact from "./components/contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ECommerceAppDetail from "./components/EcommerceAppDetail";
import HotelBookingAppDetail from "./components/HotelBookingAppDetail";
import JainSupplierDetail from "./components/JainSupplierDetail";
import RoyalMotors from "./components/RoyalMotorsDetail";
import InsuranceAppDetail from "./components/MehtaInsuranceDetail";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/About" />} />
          {/* Default Route */}
          <Route path="/About" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/e-commerce" element={<ECommerceAppDetail />} />
          <Route
            path="/project/hotel-booking"
            element={<HotelBookingAppDetail />}
          />
          <Route
            path="/project/jain-supplier"
            element={<JainSupplierDetail />}
          />
          <Route path="/project/royal-motors" element={<RoyalMotors />} />
          <Route
            path="/project/meheta-insurance"
            element={<InsuranceAppDetail />}
          />
          {/* Detail Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
