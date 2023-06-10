import React from 'react';
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from 'react-icons/rx';
import { FaFacebookSquare, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <div className="w-full bg-gray-900 ">
          <div className="flex justify-center p-10">
            <div>
              <h1 className="font-sans whitespace-nowrap text-white font-bold text-base sm:text-lg md:text-2xl mt-3">
                Developed By Pushpendra Kumar Kashyap
              </h1>

              <div className="flex justify-center gap-2 md:gap-5 mt-10">
                <RxGithubLogo className="h-8 w-8 md:h-12 md:w-12 text-white text-5xl cursor-pointer hover:text-gray-600" />
                <RxLinkedinLogo className="h-8 w-8 md:h-12 md:w-12 text-white text-5xl cursor-pointer hover:text-blue-900 " />
                <RxTwitterLogo className="h-8 w-8 md:h-12 md:w-12 text-white text-5xl cursor-pointer hover:text-blue-600" />
                <FaFacebookSquare className="h-8 w-8 md:h-12 md:w-12 text-white text-5xl cursor-pointer hover:text-blue-600" />
                <FaUserAlt className="h-8 w-8 md:h-12 md:w-12 text-white text-5xl cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row md:justify-between bg-black p-2 items-center gap-2">
          <h3 className="ml-5 font-semibold text-white whitespace-nowrap">
            Copyright @2023{' || '}
            <a
              className="text-white font-bold hover:text-cyan-500 whitespace-nowrap"
              href="https://inflection.org.in"
            >
              Inflection Org
            </a>
          </h3>

          <div className="hidden md:flex text-white gap-5 text-xs font-extrabold">
            <h1 className="animate-spin">.</h1>
            <h1 className="animate-bounce">.</h1>
            <h1 className="animate-bounce">.</h1>
            <h1 className="animate-bounce">.</h1>
            <h1 className="animate-bounce">.</h1>
            <h1 className="animate-spin">.</h1>
          </div>
          <div className="mr-5">
            <Link
              to="/"
              className="text-white mr-5 font-bold hover:text-cyan-500"
            >
              Home
            </Link>
            <Link
              to="/ContactUs"
              className="text-white font-bold hover:text-cyan-500"
            >
              ContactUs
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
