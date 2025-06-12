import React from "react";
import Contest from "./Contest";

const Problems = ({ accounts }) => {
  return (
    <div className="flex-grow container mx-auto p-4">
      <h2 className="text-2xl font-semibold">Upcoming Contests</h2>
      <p className="mt-4">
        We will let you mark all your contests and send you reminders if needed.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">
          Upcoming Contests for you
        </h3>

        <div className="grid gap-4">
          {accounts.map((acc, index) => (
            <Contest key={index} account={acc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;
