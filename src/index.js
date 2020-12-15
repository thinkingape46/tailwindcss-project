import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import React Components here
import Header from "./components/Header";
import Grid from "./components/Grid";
import MoreStories from "./components/MoreStories";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Grid />
    <MoreStories />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
