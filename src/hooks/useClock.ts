import { useState, useEffect } from 'react';

export const useClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return { time, is24Hour, setIs24Hour };
};
