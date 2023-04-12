import { useEffect, useState } from "react";
import "./countdown.css";

export default function Countdown() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const deadline = new Date("May 5, 2023 00:00:00").getTime();
      const distance = deadline - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown" aria-live="assertive">
      <span>Countdown to May 5, 2023:</span>
      <span>{countdown}</span>
    </div>
  );
}
