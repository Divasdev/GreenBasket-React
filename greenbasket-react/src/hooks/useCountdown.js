import { useState, useEffect } from 'react';

/**
 * useCountdown – converts the vanilla JS countdown timer from the HTML project into a React hook.
 *
 * Usage:
 *   const { days, hours, minutes, seconds } = useCountdown('2026-12-31T00:00:00Z');
 *
 * @param {string} targetDate – ISO 8601 date string for the countdown end date
 */
function useCountdown(targetDate) {
   const calculateTimeLeft = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
         days: Math.floor(diff / (1000 * 60 * 60 * 24)),
         hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
         minutes: Math.floor((diff / 1000 / 60) % 60),
         seconds: Math.floor((diff / 1000) % 60),
      };
   };

   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

   useEffect(() => {
      const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
      return () => clearInterval(timer); // cleanup on unmount
   }, [targetDate]);

   return timeLeft;
}

export default useCountdown;
