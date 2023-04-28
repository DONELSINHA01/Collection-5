import { useState, useRef, useEffect } from "react";
import './App.css';
export default function App() {
  let id = useRef(null); //{current:null}
  let h1Ref = useRef(null);
  let btn1Ref = useRef(null);
  let btn2Ref = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      h1Ref.current.innerText = `Timer is ${count}`;
      h1Ref.current.style.color = "black";
    } else {
      h1Ref.current.innerText = `Timer started and the value is ${count}`;
      h1Ref.current.style.color = "green";
    }
  });

  const handleStart = () => {
    btn1Ref.current.disabled = true;
    btn2Ref.current.disabled = false;
    id.current = setInterval(() => {
      setCount((previousCount) => {
        return previousCount + 1;
      });
    }, 1000);
  };
  const handleStop = () => {
    h1Ref.current.innerText = `Timer Stopped at value ${count}`;
    h1Ref.current.style.color = "red";
    btn1Ref.current.disabled = false;
    btn2Ref.current.disabled = true;
    clearInterval(id.current);
  };

  return (
    <div className="App">
      <h1 ref={h1Ref}>Count is {count} </h1>
      <button className="start" onClick={handleStart} ref={btn1Ref}>
        Start
      </button>
      &nbsp;&nbsp;&nbsp;
      <button className="stop" onClick={handleStop} ref={btn2Ref}>
        Stop
      </button>
    </div>
  );
}
