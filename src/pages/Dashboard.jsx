import React from "react";
import Profile from "./Profile";

const Dashboard = ({ accounts }) => (
  <div className="max-w-7xl mx-auto py-12 px-4">
    <h2 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example placeholder cards */}
      <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Your Progress</h3>
        <p className="text-gray-600">
          Track your contest participation and problem-solving stats here.
        </p>
      </div>
      <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Upcoming Contests
        </h3>
        <p className="text-gray-600">
          Stay updated with the latest coding competitions.
        </p>
      </div>
      <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Leaderboard</h3>
        <p className="text-gray-600">See how you rank among your peers.</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
