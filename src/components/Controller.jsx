/* eslint-disable react/prop-types */
import React from 'react';

const Controller = ({
  id, children, value, setValue,
}) => {
  const handleClick = (e) => {
    switch (e.target.innerText) {
      case '▲':
        if (value < 60) setValue(value + 1);
        break;

      case '▼':
        if (value > 1) setValue(value - 1);
        break;

      default:
        break;
    }
  };

  return (
    <div className="control">
      <div id={`${id}-label`}>{children}</div>
      <div id={`${id}-increment`} onClick={(e) => handleClick(e)} aria-hidden="true">▲</div>
      <div id={`${id}-length`}>{value}</div>
      <div id={`${id}-decrement`} onClick={(e) => handleClick(e)} aria-hidden="true">▼</div>
    </div>
  );
};

export default Controller;
