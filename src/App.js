import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date to countdown to
    const countdownDate = new Date("May 1, 2023 00:00:00").getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the distance between now and the countdown date
      const distance = countdownDate - now;

      // Calculate the days, hours, minutes, and seconds remaining
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({ days, hours, minutes, seconds });

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      We are under maintenance
      <h3>We will be back on:</h3>
      <div className="countdown">
        {countdown.days} days, {countdown.hours} hours, {countdown.minutes}{" "}
        minutes, {countdown.seconds} seconds
      </div>
    </div>
  );
}

export default App;
