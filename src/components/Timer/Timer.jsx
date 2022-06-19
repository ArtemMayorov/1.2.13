import React, { useState, useEffect } from 'react';
import './Timer.css';
export default function Timer({ userMinutes, id, updateTimer }) {
  const [timeLeft, setTimeLeft] = useState(userMinutes);
  const [couting, setCouting] = useState(false);

  const getPadTime = (time) => time.toString().padStart(2, '0');
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (couting) {
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }
      updateTimer(id, timeLeft);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, couting]);

  const handleStart = () => {
    setCouting(true);
  };
  const handlePause = () => {
    setCouting(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleStart} className="icon icon-play" type="button" aria-label="Play button" />
      <button onClick={handlePause} type="button" aria-label="Pause button" className="icon icon-pause" />
      <span className="time">
        {minutes}:{seconds}
      </span>
    </React.Fragment>
  );
}
