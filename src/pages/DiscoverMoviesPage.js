import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams, useHistory } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("Search for movies");
  const [movies, set_movies] = useState([]);
  const params = useParams()
  const history =  useHistory()

  console.log("what are my params?", params.searchText)

  const search = async () => {
    console.log("Start searching for:", searchText);
    set_searchState("Searching...");
    const data = await axios.get(
      `http://www.omdbapi.com/?s=${params.searchText}&apikey=7a19119e`
    );
    set_movies(data.data.Search);
    set_searchState("Done");
  };

  useEffect(()=> {
    search()
  }, [params.searchText])

  const newSearchFunctionInAdressbar = () => {
    const queryParam = encodeURIComponent(searchText);
    history.push(`/DiscoverMoviesPage/${queryParam}`)
  }

  const displayMovies = movies.map(movieCard => {
      return <NavLink to={`/discover/${movieCard.imdbID}`}>
                <div>
                  <p>{movieCard.Title}</p>
                  <p>{movieCard.Year}</p>
                  <img src={movieCard.Poster} alt="Movie Poster " width="250" height="300"></img>
                </div>
            </NavLink>
    })

  return (
    <div>
      <h1>Discover some movies!</h1>
      <h3>{searchState}</h3>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={newSearchFunctionInAdressbar}>Search</button>
        {displayMovies}
      </p>
    </div>
  )
}
