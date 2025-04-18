// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen"> {/* Adjust padding if your navbar is taller */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
