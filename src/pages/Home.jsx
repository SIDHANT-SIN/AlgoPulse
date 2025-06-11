import React, { useState } from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Problems from "./Problems";

const platforms = ["Codeforces", "CodeChef", "LeetCode"];

const Home = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [username, setUsername] = useState("");
  const [accounts, setAccounts] = useState([]);

  function handleAddAccount() {
    if (username.trim() === "") return;

    const newAccount = `${selectedPlatform}: ${username}`;
    setAccounts((a) => [...a, newAccount]);

    setUsername("");
  }

  return (
    <>
      <div className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold">
          Congrats on Making it here Fellow Traveller
        </h2>
        <div >
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="Codeforces">Codeforces</option>
            <option value="CodeChef">CodeChef</option>
            <option value="LeetCode">LeetCode</option>
          </select>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=""
            autoComplete="off"
            autoFocus
            
          />

          <button onClick={handleAddAccount} className="">
            Submit
          </button>
        </div>

        <div>
          {accounts.map((acc, index) => (
            <div key={index} className="bg-blue-100 p-3 mb-2 rounded font-bold">
              {acc}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
