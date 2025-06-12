import React, { useState, useEffect } from "react";

const PastContest = ({ accounts }) => {
  const [pastContests, setPastContests] = useState([]);

  const dummyPastContests = [
    {
      platform: "Codeforces",
      contestName: "Codeforces Round #905",
      date: "2025-05-20",
      videoLink: "",
    },
    {
      platform: "LeetCode",
      contestName: "LeetCode Weekly Contest 398",
      date: "2025-05-18",
      videoLink: "",
    },
    {
      platform: "CodeChef",
      contestName: "CodeChef Starters 142",
      date: "2025-05-15",
      videoLink: "",
    },
  ];

  useEffect(() => {
    const usedPlatforms = accounts.map((acc) =>
      acc.split(":")[0].trim().toLowerCase()
    );

    const filtered = dummyPastContests.filter((contest) =>
      usedPlatforms.includes(contest.platform.toLowerCase())
    );

    setPastContests(filtered);
  }, [accounts]);

  return (
    <div className="flex-grow container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2">Past Contests</h2>
      <p className="mb-4 text-gray-600">
        You can view all past contests here and their solution videos.
      </p>

      {pastContests.length === 0 ? (
        <p className="text-gray-500 italic">
          No past contests found for your selected platforms.
        </p>
      ) : (
        <div className="grid gap-4">
          {pastContests.map((contest, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-md shadow-sm bg-gray-50"
            >
              <h3 className="text-lg font-bold">{contest.contestName}</h3>
              <p className="text-sm text-gray-600">
                Platform: {contest.platform}
              </p>
              <p className="text-sm text-gray-500">Date: {contest.date}</p>
              <a
                href={contest.videoLink}
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                 Watch Solution
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PastContest;
