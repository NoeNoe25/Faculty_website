// src/routes/AppRoutes.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import RouteEffects from '../components/RouteEffects';
import PageLoader from '../components/PageLoader';
import Home from '../pages/Home';

// Every page except Home is split into its own chunk and loaded on first visit.
const Programs = lazy(() => import('../pages/Programs'));
const Aboutus = lazy(() => import('../pages/Aboutus'));
const BscProgram = lazy(() => import('../pages/bsc'));
const ProgramDetailsWithNav = lazy(() => import('../pages/details'));
const NanoResearcherProfile = lazy(() => import('../pages/NanoResearcherProfile'));
const ManuResearcherProfile = lazy(() => import('../pages/ManuResearcherProfile'));
const SIITECAbout = lazy(() => import('../pages/About'));
const AcademicStaff = lazy(() => import('../pages/AcademicStaff'));
const NANODepartmentPage = lazy(() => import('../pages/nano'));
const MANUDepartmentPage = lazy(() => import('../pages/manu'));
const OrgStructure = lazy(() => import('../pages/OrgStructure'));
const Executive = lazy(() => import('../pages/Executive'));
const LecturerPage = lazy(() => import('../pages/LecturerPage'));
const ContactPage = lazy(() => import('../pages/Contact'));
const CiRAPage = lazy(() => import('../pages/Cira'));
const KAISEMPage = lazy(() => import('../pages/kaisem'));
const ATTACPage = lazy(() => import('../pages/attac'));
const InstrumentBooking = lazy(() => import('../pages/InstrumentBooking'));
const InternationalStudentPage = lazy(() => import('../pages/internationalstudent'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Paths are kept exactly as before so existing links and bookmarks keep working.
const ROUTES = [
  { path: '/', element: <Home />, titleKey: 'home' },
  { path: '/programs', element: <Programs />, titleKey: 'programs' },
  { path: '/aboutus', element: <Aboutus />, titleKey: 'aboutus' },
  { path: '/bsc', element: <BscProgram />, titleKey: 'bsc' },
  { path: '/ProgramDetailsWithNav', element: <ProgramDetailsWithNav />, titleKey: 'programDetails' },
  { path: '/NanoResearcherProfile', element: <NanoResearcherProfile />, titleKey: 'nanoResearchers' },
  { path: '/ManuResearcherProfile', element: <ManuResearcherProfile />, titleKey: 'manuResearchers' },
  { path: '/About2', element: <SIITECAbout />, titleKey: 'about' },
  { path: '/AcademicStaff', element: <AcademicStaff />, titleKey: 'staff' },
  { path: '/NANODepartmentPage', element: <NANODepartmentPage />, titleKey: 'deptNano' },
  { path: '/MANUDepartmentPage', element: <MANUDepartmentPage />, titleKey: 'deptManu' },
  { path: '/OrgStructure', element: <OrgStructure />, titleKey: 'orgStructure' },
  { path: '/Executive', element: <Executive />, titleKey: 'executive' },
  { path: '/LecturerPage', element: <LecturerPage />, titleKey: 'lecturers' },
  { path: '/Contact', element: <ContactPage />, titleKey: 'contact' },
  { path: '/CiRAPage', element: <CiRAPage />, titleKey: 'cira' },
  { path: '/KAISEMPage', element: <KAISEMPage />, titleKey: 'kaisem' },
  { path: '/ATTACPage', element: <ATTACPage />, titleKey: 'attac' },
  { path: '/InstrumentBooking', element: <InstrumentBooking />, titleKey: 'instrumentBooking' },
  { path: '/InternationalStudentPage', element: <InternationalStudentPage />, titleKey: 'international' },
  { path: '*', element: <NotFound />, titleKey: 'notFound' },
];

const AppRoutes = () => {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {ROUTES.map(({ path, element, titleKey }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <RouteEffects titleKey={titleKey} />
                  {element}
                </>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRoutes;
