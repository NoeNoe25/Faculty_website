// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Programs from '../pages/Programs';
import Aboutus from '../pages/Aboutus';
import OrganizationalStructure from '../pages/OrganizationalStructure';
import ProgramDetails from '../pages/bsc';
import ProgramDetailsWithNav from '../pages/details';
import AcademicCalendar from '../pages/academiccalendar';
import SIITECAbout from '../pages/About';
import AcademicStaff from '../pages/AcademicStaff';
import NANODepartmentPage from '../pages/nano'; 



const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/OrganizationalStructure" element={<OrganizationalStructure />} />
        <Route path="/bsc" element={<ProgramDetails />} />
        <Route path="/ProgramDetailsWithNav" element={<ProgramDetailsWithNav />} />
        <Route path="/AcademicCalendar" element={<AcademicCalendar />} />
        <Route path="/About2" element={<SIITECAbout />} />
        <Route path="/AcademicStaff" element={<AcademicStaff />} />
        <Route path="/NANODepartmentPage" element={<NANODepartmentPage />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;