/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';

import convertTime from './convertTime';

const DIVIDER = 60;

const Timer = ({
  breakValue, sessionValue, setBreakValue, setSessionValue,
}) => {
  const [seconds, setSeconds] = useState(sessionValue * DIVIDER);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const beepElement = useRef();

  const reset = () => {
    setIsActive(false);
    setIsBreak(false);
    setBreakValue(5);
    setSessionValue(25);
    beepElement.current.pause();
    beepElement.current.currentTime = 0;
    setSeconds(sessionValue * DIVIDER);
  };

  const play = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    if (isActive && seconds === -1) {
      if (isBreak) {
        setSeconds(sessionValue * DIVIDER);
      } else {
        beepElement.current.play();
        setSeconds(breakValue * DIVIDER);
      }
      setIsBreak(!isBreak);
    }
    return () => clearInterval(interval);
  }, [seconds, isActive, isBreak]);

  useEffect(() => {
    if (!isActive) setSeconds(sessionValue * DIVIDER);
  }, [sessionValue]);

  useEffect(() => {
    beepElement.current.volume = 0.05;
  }, []);

  return (
    <div className="display">
      <div id="timer-label">{!isBreak ? 'Session' : 'Break'}</div>
      <div id="time-left">{convertTime(seconds)}</div>
      <audio ref={beepElement} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" id="beep" />
      <div id="start_stop" onClick={play} aria-hidden="true">{isActive ? '⏸' : '▶'}</div>
      <div id="reset" onClick={reset} aria-hidden="true">↺</div>
    </div>
  );
};

export default Timer;
