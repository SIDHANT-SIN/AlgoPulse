import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import PastContest from "./pages/PastContest";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [contests, setContests] = useState();
  const [hasFetchedContests, setHasFetchedContests] = useState(false);
  const BASE_API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    if (!hasFetchedContests) {
      const fetchContests = async () => {
        try {
          const res = await fetch(`${BASE_API_URL}/api/contests`);
          const data = await res.json();
          setContests(data);
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
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
        <Header />
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
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
