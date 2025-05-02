import { useState, useEffect, useLayoutEffect } from "react";

const Hookexample = () => {
  const [effectValue, setEffectValue] = useState('initial value');
  const [layoutEffectValue, setLayoutEffectValue] = useState('initial value');

  useEffect(() => {
      console.log("useEffect called");
      // Runs after the first render and after every update
      setEffectValue('updated value');
    }
, []);

  useLayoutEffect(() => {
      console.log("useLayoutEffect called");
      // Runs after the first render and before the browser has a chance to paint
      setLayoutEffectValue('updated value');
      }
  , []);

  return (
    <div>
      <h1>useEffect and useLayoutEffect Example</h1>
      <p>useEffect Value: {effectValue}</p>
      <p>useLayoutEffect Value: {layoutEffectValue}</p>
      <button onClick={() => setEffectValue('new value')}>Change useEffect Value</button>
      <button onClick={() => setLayoutEffectValue('new value')}>Change useLayoutEffect Value</button>
    </div>
  )
}

export default Hookexample






