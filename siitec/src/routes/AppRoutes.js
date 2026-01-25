// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Programs from '../pages/Programs';
import Aboutus from '../pages/Aboutus';
import ProgramDetails from '../pages/bsc';
import ProgramDetailsWithNav from '../pages/details';
import NanoResearcherProfile from '../pages/NanoResearcherProfile';
import ManuResearcherProfile from '../pages/ManuResearcherProfile';
import SIITECAbout from '../pages/About';
import AcademicStaff from '../pages/AcademicStaff';
import NANODepartmentPage from '../pages/nano'; 
import MANUDepartmentPage from '../pages/manu';
import OrgStructure from '../pages/OrgStructure';
import Executive from '../pages/Executive';
import LecturerPage from '../pages/LecturerPage';
import ContactPage from '../pages/Contact';
import CiRAPage from '../pages/Cira';
import KAISEMPage from '../pages/kaisem';
import ATTACPage from '../pages/attac';
import InstrumentBooking from '../pages/InstrumentBooking';
import InternationalStudentPage from '../pages/internationalstudent';
const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/bsc" element={<ProgramDetails />} />
        <Route path="/ProgramDetailsWithNav" element={<ProgramDetailsWithNav />} />
        <Route path="/NanoResearcherProfile" element={<NanoResearcherProfile />} />
        <Route path="/ManuResearcherProfile" element={<ManuResearcherProfile />} />
        <Route path="/About2" element={<SIITECAbout />} />
        <Route path="/AcademicStaff" element={<AcademicStaff />} />
        <Route path="/NANODepartmentPage" element={<NANODepartmentPage />} />
        <Route path="/MANUDepartmentPage" element={<MANUDepartmentPage />} />
        <Route path="/OrgStructure" element={<OrgStructure />} />
        <Route path="/Executive" element={<Executive />} />
        <Route path="/LecturerPage" element={<LecturerPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/CiRAPage" element={<CiRAPage />} />
        <Route path="/KAISEMPage" element={<KAISEMPage />} />
        <Route path="/ATTACPage" element={<ATTACPage />} />
        <Route path="/InstrumentBooking" element={<InstrumentBooking />} />
        <Route path="/InternationalStudentPage" element={<InternationalStudentPage />} />
        
      </Routes>
    </Layout>
  );
};

export default AppRoutes;