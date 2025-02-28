import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CopyRights from "./components/Footer/CopyRights";
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
        </Routes>
        <Footer />
        <CopyRights />
      </main>
    </Router>
  );
};

export default App;
