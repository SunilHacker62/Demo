import React from "react";
import { useState, useEffect } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 100);
    return () => {
      clearInterval(id);
    };
  }, [isRunning]);
  console.log("sunil")
  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };
  return (
    <div>
      <h1>timer</h1>
      <h2>{time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
