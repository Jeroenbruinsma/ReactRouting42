import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./style/global.scss";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import MoviePage from "./pages/MoviePage";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/DiscoverMoviesPage/:searchText" component={DiscoverMoviesPage}/>

        <Route path="/discover/:imdb_id" component={MoviePage} />

        <Route path="/AboutPage" component={AboutPage} />
        <Route path="/" component={HomePage} />

      </Switch>
      
    </div>
  );
}
