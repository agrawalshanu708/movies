import React, { useState } from "react";
import "./styles.css";
var movies = {
  BOLLYWOOD: [
    {
      name: "Tanhaji -the unsung warrior",
      rating: 7.2
    },
    { name: "Antim", rating: 9.2 }
  ],
  HOLLYWOOD: [
    {
      name: " The Wolf of Wall Street ",
      rating: 8.3
    },
    { name: " Miracle in Cell No. 7 ", rating: 8.4 }
  ],
  TOLLYWOOD: [
    {
      name: "Ellam Sheriyakum",
      rating: 9.3
    },
    { name: "Ram Asur", rating: 9.2 }
  ]
};

var types = Object.keys(movies);
export default function App() {
  var [show, setShow] = useState([]);

  function onClickHandler(zone) {
    var zones = movies[zone];
    setShow(zones);
  }

  return (
    <div className="App">
      <h1 className="title">Movies categories </h1>
      <small className="small">explore your favourite zone!!</small>
      <div style={{ padding: "rem" }}>
        {types.map(function (zone) {
          return (
            <button
              onClick={() => onClickHandler(zone)}
              style={{ margin: "1rem", padding: "0.5rem" }}
            >
              {zone}
            </button>
          );
        })}{" "}
      </div>
      <h2>
        {show.map(function (item) {
          return (
            <div style={{ paddingTop: "2rem" }}>
              <div style={{ fontSize: "2rem" }}>{item.name}</div>
              <small>IMDB: {item.rating}</small>
            </div>
          );
        })}
      </h2>
    </div>
  );
}
