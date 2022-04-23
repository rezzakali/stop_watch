import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import StopIcon from "@mui/icons-material/Stop";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [millisecond, setMillisecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [stop, setStop] = useState(false);

  const startMethod = () => {
    setStop(true);
  };
  const stopMethod = () => {
    setStop(false);
  };
  const resetMethod = () => {
    setMillisecond(0);
    setSecond(0);
    setMinute(0);
    setHour(0);
  };
  useEffect(() => {
    let interval = null;
    if (stop) {
      interval = setInterval(() => {
        if (minute > 59) {
          setHour(hour + 1);
          setMinute(0);
          clearInterval(interval);
        }
        if (second > 59) {
          setMinute(minute + 1);
          setSecond(0);
          clearInterval(interval);
        }
        if (millisecond > 99) {
          setSecond(second + 1);
          setMillisecond(0);
          clearInterval(interval);
        }
        if (millisecond <= 99) {
          setMillisecond(millisecond + 1);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="container mt-5">
      <h1>StopWatch</h1>
      <div className="timer">
        <span>{hour}:</span>
        <span>{minute}:</span>
        <span>{second}:</span>
        <span>{millisecond}</span>
      </div>
      <div className="buttons">
        <a onClick={resetMethod}>
          <RotateLeftIcon id="resetIcon" />
        </a>
        <a onClick={startMethod}>
          <PlayArrowIcon id="startIcon" />
        </a>
        <a onClick={stopMethod}>
          <StopIcon id="stopIcon" />
        </a>
      </div>
    </div>
  );
}

export default App;
