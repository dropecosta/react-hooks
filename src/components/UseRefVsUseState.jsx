import { useState, useRef } from "react";

const UseRefVsUseState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const incrementState = () => {
    setCount(count + 1);
    console.log("Count State: ", count + 1);
  }

  const incrementRef = () => {
    countRef.current += 1;
    console.log("Count Ref: ", countRef.current);
  }


  return (
    <div>
      <h1>useRef vs useState</h1>
      <p>Count State: {count}</p>
      <p>Count Ref: {countRef.current}</p>
      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  )
}

export default UseRefVsUseState