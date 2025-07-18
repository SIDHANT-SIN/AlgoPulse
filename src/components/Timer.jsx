import React from "react";

const Timer = ({ time }) => (
  <div className="inline-block bg-white/80 backdrop-blur px-6 py-3 rounded-xl shadow-md border border-gray-100 text-2xl font-bold text-gray-900">
    {time}
  </div>
);

export default Timer;
