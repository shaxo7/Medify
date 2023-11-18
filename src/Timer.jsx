import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(  24 * 60 * 60); // 2 days in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

 
  const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <div className='timing-con'>
      <h1 className='head-timer'>Best Deals of week!</h1>
       
        <span className='time-timer-1'>{hours} </span>
        <span className='time-timer-2'>{minutes} </span>
        <span className='time-timer-3'>{seconds} </span>
      </div>
      
    </div>
  );
}

export default CountdownTimer;
