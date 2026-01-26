// src/components/Layout.js
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="layout">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;