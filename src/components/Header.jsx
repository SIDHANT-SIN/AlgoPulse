import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">AlgoPulse</h1>
          <div className="space-x-4">
            <Link
              to="/signin"
              className="hover:text-blue-200 transition-colors"
            >
              Sign In
            </Link>
            <Link to="/login" className="hover:text-blue-200 transition-colors">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
