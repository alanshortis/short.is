import { useState, useEffect, useLayoutEffect } from 'react';

export const useClock = () => {
  const [time, setTime] = useState(new Date());
  const [is12HourState, setIs12HourState] = useState<boolean>();

  useLayoutEffect(() => {
    setIs12HourState(window.localStorage.getItem('clockMode') === '12hour');
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  const setIs12Hour = () => {
    setIs12HourState(!is12HourState);
    window.localStorage.setItem('clockMode', is12HourState ? '24hour' : '12hour');
  };

  return {
    time,
    is12Hour: is12HourState,
    setIs12Hour,
  };
};
