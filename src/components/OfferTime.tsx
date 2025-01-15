import { useState, useEffect } from "react";

const OfferTime = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const storedEndDate = localStorage.getItem("endDate");
    let endDate;

    if (storedEndDate) {
      endDate = new Date(storedEndDate);
    } else {
      // Set the start date to Jan 14th, 2025 at 6pm EST
      const startDate = new Date(Date.UTC(2025, 0, 14, 23, 0, 0)); // UTC (Jan 14, 2025 at 6pm EST)
      endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 5); // Set the end date 5 days later
      localStorage.setItem("endDate", endDate.toISOString());
    }

    const updateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="banner">
      <p>
        Offer Ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
};

export default OfferTime;
