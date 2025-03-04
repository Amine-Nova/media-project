import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Adsmanagement from './Adsmanage'; 
import Leadgen from './Leadgen';
import Morelead from "./Morelead";

const Dashboard = () => {
  return (
    <div className="navtxt flex">
      <Sidebar/>
          <Link to="/dashboard/ads"></Link>
          <Link to="/dashboard/leadgen"></Link>
        <Routes>
          <Route path="ads" element={<Adsmanagement />} />
          <Route path="leadgen/" element={<Leadgen />} />
          <Route path="leadgen/moreinfo" element={<Morelead />} />
        </Routes>
      </div>
  );
};

export default Dashboard;
