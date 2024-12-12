import { useState, useEffect } from 'react';

export const useClock = () => {
  const [time, setTime] = useState(new Date());
  const [is12Hour, setIs12Hour] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return { time, is12Hour, setIs12Hour };
};
