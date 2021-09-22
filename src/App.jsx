import React from 'react';

import Label from './components/Label';
import './App.css';
import Timer from './components/TImer';

function App() {
  return (
    <>
      <Label id="break" setValue="5">Break Length</Label>
      <Label id="session" setValue="25">Session Length</Label>
      <Timer />
    </>
  );
}

export default App;
