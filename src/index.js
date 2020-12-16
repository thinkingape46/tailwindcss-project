import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import React Components here
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import Grid from "./components/Grid";
import MoreStories from "./components/MoreStories";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <MainContainer>
      <Header />
      <Grid />
      <MoreStories />
      <Footer />
    </MainContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
