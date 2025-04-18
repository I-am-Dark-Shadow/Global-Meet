import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="/" title="" className="flex items-center gap-2">
                <img className="w-auto h-10 lg:h-14" src="/tittle_logo.png" alt="" />
                <p className="text-2xl lg:text-3xl font-bold">
                  <span className="text-blue-600">G</span>
                  <span className="text-red-600">l</span>
                  <span className="text-yellow-400">o</span>
                  <span className="text-blue-600">b</span>
                  <span className="text-green-600">a</span>
                  <span className="text-red-600">l</span>
                  <span className="text-gray-500">-</span>
                  <span className="text-blue-600">M</span>
                  <span className="text-red-600">e</span>
                  <span className="text-yellow-400">e</span>
                  <span className="text-green-600">t</span>
                </p>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a href="#Partner" className="text-base font-medium text-black hover:text-blue-600 transition-all">Partners</a>
              <a href="#Reviews" className="text-base font-medium text-black hover:text-blue-600 transition-all">Reviews</a>
              <a href="#FAQ" className="text-base font-medium text-black hover:text-blue-600 transition-all">FAQ</a>
              <a href="#Contact" className="text-base font-medium text-black hover:text-blue-600 transition-all">Contact</a>
            </div>

            <Link to="/signin" className="hidden lg:inline-flex items-center justify-center px-4 py-3 ml-10 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign in</Link>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <button onClick={toggleMobileMenu} className="text-3xl text-black focus:outline-none">
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`fixed  bottom-0 w-full h-fit bg-yellow-50 z-50 transform transition-transform duration-300 ease-in-out rounded-t-2xl border-t-4 border-yellow-500  ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="p-6 flex flex-col gap-5 text-lg">
            <a href="#Partner" onClick={closeMenu} className="text-black hover:text-blue-600 transition-all">Partners</a>
            <a href="#Reviews" onClick={closeMenu} className="text-black hover:text-blue-600 transition-all">Reviews</a>
            <a href="#FAQ" onClick={closeMenu} className="text-black hover:text-blue-600 transition-all">FAQ</a>
            <a href="#Contact" onClick={closeMenu} className="text-black hover:text-blue-600 transition-all">Contact</a>
            <Link to="/signin" onClick={closeMenu} className="text-white bg-blue-600 py-2 text-center rounded-md hover:bg-blue-700 transition-all">Sign in</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
