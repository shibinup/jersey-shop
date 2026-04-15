import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" w-full border-b border-gray-100 bg-white shadow-sm">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Mobile Menu Button Container */}
          <div className="flex items-center lg:hidden">
            <button className="text-gray-900 hover:text-blue-600 focus:outline-none transition-colors">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center  flex-1 ">
            <Link href="/" className="text-3xl font-black tracking-tighter flex items-center gap-1">
              <span className="text-slate-900">JERSEY</span>
              <span className="text-orange-500">HUB</span>
            </Link>
          </div>



          {/* Right side Icons (Search, User, Cart) */}
          <div className="flex items-center gap-5 sm:gap-6 justify-end flex-shrink-0">

           {/*home button i navbar*/}

                <Link href="/">
                  <button className="text-gray-900 hover:text-blue-600 transition-colors">
                    <svg
                      className="h-[22px] w-[22px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10.5L12 3l9 7.5M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"
                      />
                    </svg>
                  </button>
                </Link>
                
            <button className="text-gray-900 hover:text-blue-600 transition-colors">
              <svg className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

           {/*button for navigate in to profile*/}
          <Link href={"/profile"}>
            <button className="hidden sm:block text-gray-900 hover:text-blue-600 transition-colors">
              <svg className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          
          </Link>

            {/* button for add to cart icon*/}
            <Link href={"/cart"}>

            <button  className="text-gray-900 hover:text-blue-600 relative transition-colors flex items-center">
              <svg className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-bold rounded-full h-[18px] w-[18px] flex items-center justify-center border-2 border-white">
                0
              </span>
            </button>


            </Link>


          </div>
        </div>
      </div>
    </nav>
  );
}
