import React, { useState, useEffect } from "react";

const PastContest = ({ contests }) => {
  return (
    <div className="flex-grow container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2">Past Contests</h2>
      <p className="mb-4 text-gray-600">
        You can view all past contests here and their solution videos.
      </p>

      {!contests || !Array.isArray(contests) ? (
        <p className="text-red-500 italic">No contests data available</p>
      ) : (
        <div className="grid gap-4">
          {contests
            .filter((contest) => contest.phase === "FINISHED")
            .map((contest) => {
              const year = contest.startTime.slice(0, 4);
              const month = contest.startTime.slice(5, 7);
              const day = contest.startTime.slice(8, 10);

              return (
                <div
                  key={contest.id}
                  className="border border-gray-300 p-4 rounded-md shadow-sm bg-gray-50"
                >
                  <h3 className="text-lg font-bold">{contest.name}</h3>
                  <p className="text-sm text-gray-600">Platform: Codeforces</p>
                  <p className="text-sm text-gray-500">
                    Date: {day}-{month}-{year}
                  </p>
                  <a
                    href={""}
                    className="text-blue-600 hover:underline mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Solution
                  </a>
                  <div>
                    <a
                      href={`https://codeforces.com/contest/${contest.id}`}
                      className="text-blue-600 hover:underline mt-2 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contest Link
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
export default PastContest;
