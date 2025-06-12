import React from "react";
import Profile from "./Profile"; 

const Dashboard = ({ accounts }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Profiles</h2>
      <div className="flex flex-wrap gap-4">
        {accounts.map((acc, index) => (
          <Profile key={index} account={acc} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
