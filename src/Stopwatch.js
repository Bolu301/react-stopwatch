import React, { useState, useEffect } from "react";

const Timer = ({ time, setTime, btnstyle }) => {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="stopwatch text-center mt-9">
      <h1 className="text-5xl my-5"> Stopwatch</h1>
      <div className="text-3xl">
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons mt-5 flex space-x-9 justify-center">
        <button
          className={btnstyle}
          onClick={() => {
            setRunning(true);
          }}
        >
          Start
        </button>
        <button
          className={btnstyle}
          onClick={() => {
            setRunning(false);
          }}
        >
          Stop
        </button>
        <button
          className={btnstyle}
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
