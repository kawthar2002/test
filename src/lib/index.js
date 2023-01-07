export const getDestinationMS = () => {
  const destination = new Date();
  const minutesInNow = destination.getMinutes();
  destination.setSeconds(0);

  if (minutesInNow % 2 === 0) {
    destination.setMinutes(minutesInNow + 2);
  } else {
    destination.setMinutes(minutesInNow + 1);
  }

  return destination;
};

export const formatTime = (timeValue) => (timeValue > 9 ? `${timeValue}` : `0${timeValue}`);

export const toReadableTimerString = ({ hours, minutes, seconds }) => {
  return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
};
