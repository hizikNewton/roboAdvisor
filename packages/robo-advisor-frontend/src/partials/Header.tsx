import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [top, setTop] = useState(true);
  const nav = ["Home", "Service", "Feature", "Payment"];
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl px-5 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block">
              Logo
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex">
            <ul className="flex flex-wrap items-center flex-grow">
              {nav.map((i) => (
                <li>
                  <Link
                    to="/"
                    className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  >
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a
              className="w-full mb-4 text-white bg-blue-600 btn hover:bg-blue-700"
              href="#0"
            >
              Download the App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
