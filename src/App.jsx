import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import PastContest from "./pages/PastContest";


import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [contests, setContests] = useState();

  const [hasFetchedContests, setHasFetchedContests] = useState(false); // New flag

  useEffect(() => {
    if (!hasFetchedContests) {
      const fetchContests = async () => {
        try {
          const res = await fetch("http://localhost:8000/api/contests");
          const data = await res.json();
          setContests(data);
          console.log("raw data", data);
          setHasFetchedContests(true);
        } catch (err) {
          console.error("Contest fetch error:", err);
        }
      };
      fetchContests();
    }
  }, [hasFetchedContests]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <nav className="bg-gray-100 text-center py-4">
          <div className="flex justify-center gap-6">
            <Link to="/" className="text-black-600 hover:text-blue-500">
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-black-600 hover:text-blue-500"
            >
              Dashboard
            </Link>
            <Link to="/problems" className="text-black-600 hover:text-blue-500">
              Upcoming Contests
            </Link>
            <Link
              to="/pastcontest"
              className="text-black-600 hover:text-blue-500"
            >
              Past Contests
            </Link>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home accounts={accounts} setAccounts={setAccounts} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard accounts={accounts} />}
            />
            <Route
              path="/problems"
              element={<Problems contests={contests} />}
            />
            <Route
              path="/pastcontest"
              element={<PastContest contests={contests} />}
            />
            
          
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
