import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Facts.css";

const Facts = () => {
  const [results, setResults] = useState({});
  const [count, setCount] = useState(0);

  const API = `https://catfact.ninja/fact?max_length=64`;

  //GET method for result and set state
  const searchAPI = () => {
    axios.get(API).then((response) => {
      setResults(response.data);
      console.log(response.data);
    });

    setCount(count+1);
  };

  useEffect(() => {
    searchAPI();
  }, []);

  return (
    <div class="factsCon">
      <h1 className="display-3 text-center pb-5">Random Facts</h1>
      <div class="card">
        <div class="card-body text-center">
          {results.fact ? <h2>{results.fact}</h2> : null}
        </div>
      </div>
      <div class="d-grid col-5 mx-auto my-4">
        <button class="btn button" onClick={searchAPI} >
          Random A Fact !
        </button>
      </div>
      <h5 className="text-center"> Congrats!! You now know { count } Fun Fact(s) about cat</h5>
    </div>
  );
};

export default Facts;
