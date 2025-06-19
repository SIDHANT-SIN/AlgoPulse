import React from "react";
import Timer from "../components/Timer";

const Contest = ({ contest }) => {
  const platform = "Codeforces";
  const name = contest.name;
  const timeLeft = contest.startTime;
  const link = `https://codeforces.com/contestRegistration/${contest.id}`;
  const phase = contest.phase;

  return phase === "FINISHED" ? null : (
    <div className="max-w-md mx-auto my-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-blue-600 font-semibold text-lg">
              {platform}
            </span>
            <a
              href={link}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Contest
            </a>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">{name}</h3>
          <div className="flex items-center justify-between">
            <div className="text-gray-600 font-medium">
              Time Left: <Timer startTime={timeLeft} />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
              Set Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
