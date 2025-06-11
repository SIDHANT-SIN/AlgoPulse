import React from "react";
import Header from "../components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const Problems = () => {
  return (
    <>
      <div className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold">Problems Page</h2>
        <p className="mt-4">Looks like you need to practise up your skills, but no worries we have here best problems for you based on your stats</p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Recommended Problems for you</h3>
          
        </div>
      </div>
    </>
  );
}

export default Problems;
