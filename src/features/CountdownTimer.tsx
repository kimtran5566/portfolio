import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [counting, setCounting] = useState<boolean>(true);
  const [hours, setHours] = useState<number>(2);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counting) {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setCounting(false);
        } else {
          if (seconds > 0) {
            setSeconds(seconds => seconds - 1);
          } else {
            if (minutes > 0) {
              setMinutes(minutes => minutes- 1);
              setSeconds(59);
            } else {
              if (hours > 0) {
                setHours( hours => hours - 1);
                setMinutes(59);
                setSeconds(59);
              }
            }
          }
        }
      } else {
        setHours(2);
        setMinutes(0);
        setSeconds(0);
        setCounting(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counting, hours, minutes, seconds]);

  return (
    <div className='flex space-x-2 '>
      <p className='flex items-center justify-center  border bg-black rounded h-[22px] w-[26px]'>{`${String(hours).padStart(2, '0')}`}</p>
      <p className='flex items-center justify-center  border bg-black rounded h-[22px] w-[26px]'>{`${String(minutes).padStart(2, '0')}`}</p>
      <p className='flex items-center justify-center  border bg-black rounded h-[22px] w-[26px]'>{`${String(seconds).padStart(2, '0')}`}</p>
    </div>
  );
};

export default CountdownTimer;