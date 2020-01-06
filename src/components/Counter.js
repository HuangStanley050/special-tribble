import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const DELAY = 1000;
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, DELAY);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <h1>{count}</h1>;
};

export default Counter;
