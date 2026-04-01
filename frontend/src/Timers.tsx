import { Box, Button, TextField } from '@mui/material';
import styles from './styles/Timers.module.css';
import { useEffect, useRef, useState } from 'react';

// const MILISECONDS_WORK = 60 * 20 * 1000;
// const MILISECONDS_BREAK = 60 * 5 * 1000;
// const MILISECONDS_LONG_BREAK = 60 * 15 * 1000;
const MILISECONDS_WORK = 15 * 1000;
const MILISECONDS_BREAK = 5 * 1000;
const MILISECONDS_LONG_BREAK = 10 * 1000;
const INTERVAL_IN_MILISECONDS = 1000;

export default function Timers() {
  const [showTimer, setShowTimer] = useState(false);
  const [showPomodoroForm, setShowPomodoroForm] = useState(false);
  const [showTimerForm, setShowTimerForm] = useState(false);
  const [time, setTime] = useState(MILISECONDS_WORK);
  const referenceTime = useRef(Date.now());
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const workSessionCount = useRef(0);
  const workTimer = useRef(MILISECONDS_WORK);
  const shortBreakTimer = useRef(MILISECONDS_BREAK);
  const longBreakTimer = useRef(MILISECONDS_LONG_BREAK);
  const isCustomTimer = useRef(false);

  const handleCustomPomodoro = () => {
    setTime(workTimer.current);
    setShowPomodoroForm(true);
  }

  const handleCustomTimer = () => {
    isCustomTimer.current = true;
    setShowTimerForm(true);
  }

  const startTimer = () => {
    if (showPomodoroForm) setShowPomodoroForm(false);
    else if (showTimerForm) setShowTimerForm(false);
    setTime(workTimer.current);
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
        if (prevTime <= 0) {
          console.log(`isCustomTimer is ${isCustomTimer.current}`);
          if (!isCustomTimer.current) {
            const onBreak = !isBreak;
            setIsBreak(onBreak);
            if (onBreak) {
              console.log("on break!");
              workSessionCount.current++;
              return (workSessionCount.current % 4 === 0 ? longBreakTimer.current : shortBreakTimer.current);
            }
            console.log("Reset timer");
            return workTimer.current;
          }
        }

        const newTime = prevTime - interval;
        console.log("Timer now updated");
        console.log(`newTime == ${prevTime} - ${interval}`);
        return (newTime < 0 ? 0 : newTime);
      });
    }

    setTimeout(countDownUntilZero, INTERVAL_IN_MILISECONDS);
  }, [time, showTimer, isRunning]);
  
  return (
    <div id={styles.pageContainer}>
      {
        showTimer ? (
        <>
        <div id={styles.pageContainer}>
          <div id={styles.timerDisplayContainer}>
            <h1> {isBreak ? "On break!" : "Work! Work! Work!"} </h1>
            <div id={styles.timerDisplay}> {(time / 60000).toFixed(2)}min </div>
            <button className={styles.timerControlButton} onClick={handlePause}> {isRunning ? "Pause" : "Continue"} </button>
          </div>
        </div>
        </>
      ) : (showPomodoroForm ? (
        <div id={styles.formContainer}>
          <h1 className={styles.title}> Create Custom Pomodoro Timer </h1>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 2, width: '25rem' } }}
            noValidate
            autoComplete="off"
            id={styles.timerForm}
          >
            <TextField className={styles.inputField} type="number" id="work" label="Work" variant="outlined" onChange={(event) => workTimer.current = 60 * parseInt(event.target.value) * 1000}/>
            <TextField className={styles.inputField} type="number" id="shortBreak" label="Short Break" variant="outlined" onChange={(event) => shortBreakTimer.current = 60 * parseInt(event.target.value) * 1000} />
            <TextField className={styles.inputField} type="number" id="longBreak" label="Long Break" variant="outlined" onChange={(event) => longBreakTimer.current = 60 * parseInt(event.target.value) * 1000} />
            <Button variant="contained" id={styles.submitButton} onClick={startTimer}>Start</Button>
          </Box>
        </div>
      ) : showTimerForm ? (
        <div id={styles.formContainer}>
          <h1 className={styles.title}> Create Custom Timer </h1>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 2, width: '25rem' } }}
            noValidate
            autoComplete="off"
            id={styles.timerForm}
          >
            <TextField className={styles.inputField} type="number" id="time" label="Time" variant="outlined" onChange={(event) => workTimer.current = 60 * parseInt(event.target.value) * 1000}/>
            <Button variant="contained" id={styles.submitButton} onClick={startTimer}>Start</Button>
          </Box>
        </div>
      ) : (
      <>
        <button className={styles.timerButton} onClick={startTimer}> Pomodoro </button>
        <button className={styles.timerButton} onClick={handleCustomPomodoro}> Custom Pomodoro </button>
        <button className={styles.timerButton} onClick={handleCustomTimer}> Custom Timer </button>
      </>)
      )
    }
    </div>
  );
}