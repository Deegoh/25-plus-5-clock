/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState('1500');
  const [isActive, setIsActive] = useState(false);

  const reset = () => {
    setTime('1500');
    setIsActive('false');
  };

  const play = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="display">
      <div id="timer-label">Session</div>
      <div id="time-left">{time}</div>
      <div onClick={play} aria-hidden="true">{isActive ? '⏸' : '▶'}</div>
      <div onClick={reset} aria-hidden="true">↺</div>
    </div>
  );
};

export default Timer;
