import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [fact, setFact] = useState("");
  useEffect(() => {
    const interval = setInterval(async () => {
      let counter = Math.floor(Math.random() * 100) + 1;
      let result = await axios.get(`http://numbersapi.com/${counter}`);
      //console.log(result.data);

      setFact(result.data);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [fact]);

  return <h1>Result from api call: {fact}</h1>;
};

export default Data;
