// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Programs from '../pages/Programs';
import Aboutus from '../pages/Aboutus';
import OrganizationalStructure from '../pages/OrganizationalStructure';
import ProgramDetails from '../pages/ProgramDetails';
const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/OrganizationalStructure" element={<OrganizationalStructure />} />
        <Route path="/ProgramDetails" element={<ProgramDetails />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;