import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import React from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the api...");
  }, []);
  useEffect(() => { {console.log("SEARCH FOR", keyword);}
  },[keyword]);
  useEffect(()=>{
    if(counter !== 0){console.log("i run when counter changes");}
  },[counter])
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type={"text"}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
