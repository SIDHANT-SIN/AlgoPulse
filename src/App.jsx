import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import PastContest from "./pages/PastContest";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [accounts, setAccounts] = useState([]);

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
              element={<Problems accounts={accounts} />}
            />
            <Route
              path="/pastcontest"
              element={<PastContest accounts={accounts} />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
