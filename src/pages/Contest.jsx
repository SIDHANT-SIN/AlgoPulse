import React from "react";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";
const Contest = ({account}) => {
  const contests = [
    {
      platform: "Platform",
      name: "Contest Name",
      timeLeft: "2025-06-14T10:00:00Z",
      link: "https://codeforces.com/contest/891",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid gap-6 w-full max-w-4xl">
        {contests.map((contest, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-blue-100"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-600 font-semibold text-lg">
                {contest.platform}
              </span>
              <a
                href={contest.link}
                className="text-sm text-blue-500 hover:underline"
              >
                Visit Contest
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">{contest.name}</h3>
            <div className="flex items-center justify-between">
              <div className="text-gray-700 font-medium">
                Time Left: <Timer startTime={contest.timeLeft} />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Set Reminder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contest;
