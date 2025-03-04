import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CopyRights from "./components/Footer/CopyRights";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashborad"; // Ensure correct import

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="overflow-x-hidden">
                <Hero />
                <About />
                <Services />
              </main>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
        <Footer />
        <CopyRights />
      </main>
    </Router>
  );
};

export default App;
