/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Label = ({ id, children, setValue }) => {
  const [display, setDisplay] = useState(setValue);

  const handleClick = (e) => {
    switch (e.target.innerText) {
      case '▲':
        setDisplay(parseInt(display) + 1);
        break;

      case '▼':
        setDisplay(display - 1);
        break;

      default:
        break;
    }
  };

  return (
    <div className="control">
      <div id={`${id}-label`}>{children}</div>
      <div id={`${id}-increment`} onClick={(e) => handleClick(e)} aria-hidden="true">▲</div>
      <div id={`${id}-lenght`}>{display}</div>
      <div id={`${id}-decrement`} onClick={(e) => handleClick(e)} aria-hidden="true">▼</div>
    </div>
  );
};

export default Label;
