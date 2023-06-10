import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from '../utils/manageCookies';
import { CgProfile } from 'react-icons/cg';
function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = getCookie('token');
    if (token?.length > 0) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="h-20 flex justify-between items-center px-10 bg-gradient-to-r from-violet-400 to-pink-400 shadow-2xl shadow-black">
          <Link
            to="/"
            className="text-Black text-2xl animate-bounce font-semibold font-serif"
          >
            Wedding Lawn
          </Link>
          <div>
            <div className="text-black items-center hidden md:flex md:items-center gap-10  ">
              <Link
                to="/"
                className="hover:text-blue-600 font-semibold font-serif"
              >
                Home
              </Link>

              <Link
                to="/booking"
                className="hover:text-blue-600 font-semibold font-serif"
              >
                Booking
              </Link>
              <Link
                to="/admin"
                className="hover:text-blue-600 font-semibold font-serif"
              >
                Admin
              </Link>

              {!isLogin ? (
                <>
                  <Link
                    to="/login"
                    className="hover:text-blue-600 font-semibold font-serif"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="hover:text-blue-600 font-semibold font-serif"
                  >
                    SignUp
                  </Link>
                </>
              ) : (
                <CgProfile size={30} />
              )}
              <Link
                to="/ContactUs"
                className="px-3 py-1.5 font-semibold rounded-xl transition-all duration-700 hover:bg-pink-600 hover:text-pink-200 font-serif"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {!isOpen && (
            <div className="md:hidden" onClick={() => setIsOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          )}
        </div>

        {isOpen && (
          <div>
            <div
              id="container"
              className="md:hidden fixed inset-0 z-30  h-screen bg-gray-500 bg-opacity-60 w-full"
              onClick={(element) => {
                if (element.target.id === 'container') setIsOpen(false);
              }}
            >
              <div className="flex justify-end w-52 h-full bg-gradient-to-r from-violet-200 to-pink-200 bg-opacity-50 ">
                <div className="w-full">
                  <div className="h-20 pr-10 flex justify-end items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center pt-4 font-extralight">
                    <div className="flex flex-col gap-5 text-center">
                      <Link
                        to="/"
                        className="hover:text-blue-600 font-semibold font-serif"
                      >
                        Home
                      </Link>
                      {!isLogin ? (
                        <>
                          <Link
                            to="/login"
                            className="hover:text-blue-600 font-semibold font-serif"
                          >
                            Login
                          </Link>
                          <Link
                            to="/signup"
                            className="hover:text-blue-600 font-semibold font-serif"
                          >
                            SignUp
                          </Link>
                        </>
                      ) : (
                        <Link
                          to="/my_account"
                          className="hover:text-blue-600 font-semibold font-serif"
                        >
                          My Account
                        </Link>
                      )}
                      <Link
                        to="/booking"
                        className="hover:text-blue-600 font-semibold font-serif"
                      >
                        Booking
                      </Link>
                      <Link
                        to="/admin"
                        className="hover:text-blue-600 font-semibold font-serif"
                      >
                        Admin
                      </Link>
                      <Link
                        to="ContactUs"
                        className="flex font-semibold justify-center bg-pink-600 px-3 py-1.5 rounded-xl transition-all duration-700  hover:bg-red-800"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
