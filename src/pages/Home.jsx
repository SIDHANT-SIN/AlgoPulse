import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const platforms = ["Codeforces", "CodeChef", "LeetCode"];

const Home = ({ accounts, setAccounts}) => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteAccount = async (accountId) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `http://localhost:8000/api/accounts/${accountId}`,
        {
          method: "DELETE",
        }
      );

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
        const res = await fetch("http://localhost:8000/api/accounts");
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
      const res = await fetch("http://localhost:8000/api/accounts", {
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
      <h2 className="text-2xl font-semibold mb-4">
        Congrats on Making it here Fellow Traveller
      </h2>

      <div className="flex gap-2 items-center mb-4">
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="border px-3 py-2"
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
          className="border px-3 py-2 flex-grow"
          autoComplete="off"
          disabled={isLoading}
        />

        <button
          onClick={handleAddAccount}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isLoading || !username.trim()}
        >
          Submit
        </button>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {
        <div>
          {accounts.map((acc) => (
            <div
              key={`${acc.platform}-${acc.username}`}
              className="bg-blue-100 p-3 mb-2 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-bold">
                  {acc.platform}: {acc.username}
                </p>
                <p>Rating: {acc.rating}</p>
                <p>Title: {acc.title}</p>
              </div>
              <button
                onClick={() => handleDeleteAccount(acc._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:bg-red-300"
                disabled={isLoading}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Home;
