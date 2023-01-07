import { useRef, useState, useEffect } from "react";
import { getDestinationMS } from "../lib";

const MS_IN_SECOND = 1000;

export const useTimer = () => {
  const destinationRef = useRef(getDestinationMS());
  const intervalRef = useRef();
  const [remaningTime, setRemaningTime] = useState(0);

  const tick = () => {
    const timeToFinish = destinationRef.current - new Date();
    if (timeToFinish <= 0) {
      destinationRef.current = getDestinationMS();
    }
    setRemaningTime(Math.round(timeToFinish / MS_IN_SECOND));
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    hours: 0,
    minutes: Math.floor(remaningTime / 60),
    seconds: remaningTime % 60,
  };
};
