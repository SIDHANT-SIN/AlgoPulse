import React, { useEffect, useState } from "react";

const Timer = ({ startTime }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const start = new Date(startTime);
    return Math.max(0, Math.floor((start - new Date()) / 1000));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const provider = (element) => {
    if (element < 10) {
      return `0${element}`;
    } else {
      return element;
    }
  };

  const formatCountdown = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return (
      `${provider(days)} day${days !== 1 ? "s" : ""}, ` +
      `${provider(hours)} hour${hours !== 1 ? "s" : ""}, ` +
      `${provider(minutes)} minute${minutes !== 1 ? "s" : ""}, ` +
      `${provider(secs)} second${secs !== 1 ? "s" : ""}`
    );
  };

  return (
    <div className="text-sm text-blue-700 font-semibold bg-white px-4 py-2 rounded shadow inline-block">
      Starts in: {formatCountdown(timeLeft)}
    </div>
  );
};

export default Timer;
