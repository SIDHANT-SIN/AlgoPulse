import React from "react";
import Header from "../components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Problems from "./Problems";
let title = "User";
const Dashboard = () => {
  return (
    <>
      <div className="flex-grow container mx-auto p-4">
              <h2 className="text-2xl font-semibold">Yo how you doing {title}</h2>
        <p className="mt-4">Here you can view your progress and stats from various platforms.</p>
      
      </div>
    </>
  );
}

export default Dashboard;
