import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import React from "react";
import { func, number } from "prop-types";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                <li></li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <select>
//           {coins.map((coin) => (
//             <option>
//               {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//             </option>
//           ))}
//         </select>
//       )}<br/><br/>
//       <div>
//         <label htmlFor="dollar">$</label>
//         <input placeholder="Write dollars" id="dollar" type={"number"}></input>
//         <button>Reset</button>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   };
//   console.log(toDos);
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to do..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr/>
//       <ul>
//       {toDos.map((item, index)=><li key={index}>{item}</li>)}
//       </ul>
//     </div>
//   );
// }

// function Hello() {
//   useEffect(()=>{
//     console.log("created");
//     return () => console.log("bye");
//   },[]);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello/> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("i run all the time");
//   useEffect(() => {
//     console.log("Call the api...");
//   }, []);
//   useEffect(() => { {console.log("SEARCH FOR", keyword);}
//   },[keyword]);
//   useEffect(()=>{
//     if(counter !== 0){console.log("i run when counter changes");}
//   },[counter])
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type={"text"}
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

export default App;
