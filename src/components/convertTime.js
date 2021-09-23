const convertTime = (seconds) => {
  let mm = Math.round(seconds / 60);
  let ss = Math.round(seconds % 60);
  if (mm <= 9) mm = `0${mm}`;
  if (ss <= 9) ss = `0${ss}`;

  return `${mm}:${ss}`;
};

export default convertTime;
