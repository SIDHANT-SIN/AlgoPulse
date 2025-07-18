import React, { useState } from "react";

const Profile = () => (
  <div className="max-w-2xl mx-auto py-16 px-4">
    <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-8 border border-gray-100 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
        {/* Placeholder avatar */}
        <span>U</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">User Name</h2>
      <p className="text-gray-600 mb-4">user@email.com</p>
      <div className="w-full border-t border-gray-200 my-4"></div>
      <div className="text-gray-500">
        Profile details and stats coming soon...
      </div>
    </div>
  </div>
);

export default Profile;
