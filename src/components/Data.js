import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const DELAY = 10000;
  const [fact, setFact] = useState("");
  useEffect(() => {
    const interval = setInterval(async () => {
      let counter = Math.floor(Math.random() * 100) + 1;
      let result = await axios.get(`http://numbersapi.com/${counter}`);

      setFact(result.data);
    }, DELAY);
    return () => {
      clearInterval(interval);
    };
  }, [fact]);

  return <h1>Result from api call: {fact}</h1>;
};

export default Data;
