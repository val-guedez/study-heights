import Button from '@mui/material/Button';
import styles from './styles/Timers.module.css';
import { useEffect, useState } from 'react';

export default function Timers() {
  const [timerDisplay, setTimerDisplay] = useState(0);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    // Timer logic
  }, [showTimer, timerDisplay]);
  
  return (
    showTimer ? (
      <>
      <div id={styles.pageContainer}>
        <div> {timerDisplay} </div>
      </div>
      </>
    ) : (
      <>
      <div id={styles.pageContainer}>
        <button className={styles.timerButton} onClick={() => handlePomodoro(setShowTimer)}> Pomodoro </button>
        <button className={styles.timerButton}> Custom Pomodoro </button>
        <button className={styles.timerButton}> Custom Timer </button>

      </div>
      </>
    )
  );
}

const handlePomodoro = (setShowTimer: (p: boolean) => void) => {
  setShowTimer(true);
}