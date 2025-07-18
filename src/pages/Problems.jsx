import React from "react";
import Contest from "./Contest";

const Problems = ({ contests }) => {
  if (!contests || !Array.isArray(contests)) {
    return (
      <div className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Upcoming Contests
        </h2>
        <p className="mt-4 text-red-500">
          {!contests ? "Loading contests" : "Codeforces Site is down"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex-grow container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Upcoming Contests
      </h2>
      <p className="mt-4 text-gray-700">
        We will let you mark all your contests and send you reminders if needed.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-indigo-700">
          Upcoming Contests for you
        </h3>
        <div className="grid gap-4">
          {contests.length > 0 ? (
            contests.map((contest) => (
              <Contest key={contest.id || contest._id} contest={contest} />
            ))
          ) : (
            <p className="text-gray-500">No upcoming contests found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problems;
