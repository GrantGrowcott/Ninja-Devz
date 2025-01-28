import { useState, useEffect } from "react";

const OfferTime = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Define the start and end dates
    const endDate = new Date(Date.UTC(2025, 0, 31, 23, 0, 0));


    // Function to update the remaining time
    const updateTimeLeft = () => {
      const now = new Date(); // Get the current time in local time
      const difference = endDate.getTime() - now.getTime(); // Difference between now and end date

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Call the updateTimeLeft function initially
    updateTimeLeft();

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTimeLeft, 1000);

    // Cleanup the interval when the component unmounts or when the timer ends
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="banner">
      <p>
        Offer Ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
};

export default OfferTime;
