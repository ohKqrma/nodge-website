import { useState, useEffect } from 'react';

export const useCountdown = (targetDate) => {
  const [countdown, setCountdown] = useState('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );

      if (distance < 0) {
        clearInterval(interval);
        setCountdown('00:00:00');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
};