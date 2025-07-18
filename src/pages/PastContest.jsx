import React, { useState, useEffect } from "react";

const PastContest = ({ contests }) => (
  <div className="max-w-7xl mx-auto py-12 px-4">
    <h2 className="text-4xl font-bold text-gray-900 mb-8">Past Contests</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {contests && contests.length > 0 ? (
        contests
          .filter((contest) => contest.status === "past")
          .map((contest, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {contest.name}
              </h3>
              <p className="text-gray-600 mb-2">{contest.description}</p>
              <div className="text-sm text-gray-400">{contest.date}</div>
            </div>
          ))
      ) : (
        <div className="col-span-full text-center text-gray-400">
          No past contests found.
        </div>
      )}
    </div>
  </div>
);

export default PastContest;
