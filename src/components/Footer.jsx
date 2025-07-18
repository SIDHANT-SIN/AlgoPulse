import React from "react";

const Footer = () => (
  <footer className="w-full border-t border-gray-200 bg-white/80 backdrop-blur py-4 mt-8">
    <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} AlgoPulse. All rights reserved.
    </div>
  </footer>
);

export default Footer;
