export const milisecToMin = (time: number) => {
  const timeInMinutes = Math.floor(time / 1000 / 60);
  return timeInMinutes;
};
