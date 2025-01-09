import { useState, useEffect } from "react";

const OfferTime = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
      const storedEndDate = localStorage.getItem('endDate');
      let endDate;


      if (storedEndDate) {
        endDate = new Date(storedEndDate);
      } else {
        // Calculate the end date (Jan 9, 2025, 1 PM EST, + 5 days) 
        const startDate = new Date(Date.UTC(2025, 0, 9, 18, 0, 0)); // 1 PM EST Jan 9, 2025 (18:00 UTC)
        endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 5); 
        localStorage.setItem('endDate', endDate.toISOString());
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
  
      return () => clearInterval(interval);
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
