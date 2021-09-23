import React, { useState } from 'react';

import './App.css';
import Controller from './components/Controller';
import Timer from './components/Timer';

function App() {
  const [breakValue, setBreakValue] = useState(5);
  const [sessionValue, setSessionValue] = useState(25);

  return (
    <>
      <Controller id="break" setValue={setBreakValue} value={breakValue}>Break Length</Controller>
      <Controller id="session" setValue={setSessionValue} value={sessionValue}>Session Length</Controller>
      <Timer
        setBreakValue={setBreakValue}
        breakValue={breakValue}
        setSessionValue={setSessionValue}
        sessionValue={sessionValue}
      />
    </>
  );
}

export default App;
