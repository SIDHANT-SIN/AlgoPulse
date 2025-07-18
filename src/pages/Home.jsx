import React, { useState, useEffect } from "react";

const platforms = ["Codeforces", "CodeChef", "LeetCode"];

const Home = ({ accounts, setAccounts }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const BASE_API_URL = import.meta.env.VITE_APP_API_URL;

  const handleDeleteAccount = async (accountId) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_API_URL}/api/accounts/${accountId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error(`status: ${res.status}`);
      }
      setAccounts(accounts.filter((account) => account._id !== accountId));
    } catch (err) {
      console.error("Failed to delete account:", err);
      setError("Failed to delete account");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_API_URL}/api/accounts`);
        if (!res.ok) {
          throw new Error(`status: ${res.status}`);
        }
        const data = await res.json();
        setAccounts(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to load accounts");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAccounts();
  }, [setAccounts]);

  const handleAddAccount = async () => {
    if (!username.trim()) {
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_API_URL}/api/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          platform: selectedPlatform,
          username: username.trim(),
        }),
      });
      if (!res.ok) {
        throw new Error(`status: ${res.status}`);
      }
      const newAccount = await res.json();
      setAccounts((prev) => [...prev, newAccount]);
      setUsername("");
    } catch (err) {
      console.error("Failed to add account:", err);
      setError("Failed to add account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Congrats on Making it here Fellow Traveller
      </h2>
      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white"
          disabled={isLoading}
        >
          {platforms.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 flex-grow rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white"
          autoComplete="off"
          disabled={isLoading}
        />
        <button
          onClick={handleAddAccount}
          className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:scale-105 transition disabled:opacity-50"
          disabled={isLoading || !username.trim()}
        >
          Submit
        </button>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div>
        {accounts.map((acc) => (
          <div
            key={`${acc.platform}-${acc.username}`}
            className="bg-indigo-50 p-4 mb-3 rounded-lg flex flex-col md:flex-row justify-between items-center shadow-sm border border-indigo-100"
          >
            <div>
              <p className="font-bold text-indigo-700">
                {acc.platform}: {acc.username}
              </p>
              <p className="text-gray-600">Rating: {acc.rating}</p>
              <p className="text-gray-600">Title: {acc.title}</p>
            </div>
            <button
              onClick={() => handleDeleteAccount(acc._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition disabled:opacity-50 mt-2 md:mt-0"
              disabled={isLoading}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
