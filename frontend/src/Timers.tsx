import styles from './styles/Timers.module.css';
import { useEffect, useRef, useState } from 'react';

const TIME_IN_MILISECONDS_TO_COUNTDOWN = 60*20*1000;
const INTERVAL_IN_MILISECONDS = 1000;

export default function Timers() {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);
  const referenceTime = useRef(Date.now());
  const [isRunning, setIsRunning] = useState(false);

  const handlePomodoro = () => {
    setShowTimer(true);
    setIsRunning(true);
    referenceTime.current = Date.now();
  }

  const handlePause = () => {
    if (!isRunning) {
      referenceTime.current = Date.now();
    }
    setIsRunning(prev => !prev);
  }

  useEffect(() => {
    console.log("effect ran", { showTimer, time });
    if (!showTimer || !isRunning) return;  
    const countDownUntilZero = () => {
      console.log("tick");
      const now = Date.now();
      const interval = now - referenceTime.current;
      referenceTime.current = now;
      setTime(prevTime => {
        console.log("interval:", interval, "prevTime:", prevTime);
        if (prevTime <= 0) return 0;

        return prevTime - interval;
      });
    }

    setTimeout(countDownUntilZero, INTERVAL_IN_MILISECONDS);
  }, [time, showTimer, isRunning]);
  
  return (
    showTimer ? (
      <>
      <div id={styles.pageContainer}>
        <div id={styles.timerDisplayContainer}>
          <div id={styles.timerDisplay}> {(time/60000).toFixed(2)}min </div>
          <div id={styles.timerControlButtonsContainer}>
            <button className={styles.timerControlButton} onClick={handlePause}> {isRunning ? "Pause" : "Continue"} </button>
          </div>
        </div>
      </div>
      </>
    ) : (
      <>
      <div id={styles.pageContainer}>
        <button className={styles.timerButton} onClick={handlePomodoro}> Pomodoro </button>
        <button className={styles.timerButton}> Custom Pomodoro </button>
        <button className={styles.timerButton}> Custom Timer </button>
      </div>
      </>
    )
  );
}