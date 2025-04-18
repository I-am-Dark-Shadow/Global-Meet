import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="bg-white pb-0" x-data="{expanded: false}">
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

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a href="#Partner" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Partners </a>

              <a href="#Reviews" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Reviews </a>

              <a href="#FAQ" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> FAQ </a>

              <a href="#Contact" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </a>
            </div>

            <Link to="/signin" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Sign in </Link>
          </nav>

        </div>
      </header >
    </>
  )
}

export default Navbar