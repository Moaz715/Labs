import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./styles.css";

function InputArea(props) {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [review, setReview] = useState("");

  return (
    <>
      <label>Title</label>
      <input onChange={(e) => setTitle(e.target.value)} />
      <br />
      <br />
      <label for="quantity">Select Rating:</label>
      <select
        id="quantity"
        name="quantity"
        onChange={(e) => setRate(e.target.value)}
      >
        <option value="1" selected>
          1
        </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <br />
      <label>Review</label>
      <input onChange={(e) => setReview(e.target.value)} />
      <br />
      <br />
      <button
        onClick={() => {
          props.addMovie({ index: props.movies.length, title, rate, review });
        }}
      >
        Add Movie
      </button>
    </>
  );
}

function MovieList(props) {
  const movies = props.movies;
  return (
    <>
      <h2>List of Movies</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <>
              <li>
                **{movie.title}** ({movie.rate}/5): {movie.review}
              </li>
              <button onClick={() => props.removeMovie(movie.index)}>
                Remove
              </button>
            </>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  const [arr, setArr] = useState([]);

  function addMovie(movie) {
    setArr((prevArr) => [...prevArr, movie]);
  }

  function removeMovie(index) {
    setArr((prevArr) => prevArr.filter((movie) => movie.index != index));
  }

  return (
    <div className="App">
      <InputArea movies={arr} addMovie={addMovie} />
      <MovieList movies={arr} removeMovie={removeMovie} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
