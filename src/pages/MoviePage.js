import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

export default function MoviePage() {
    const params = useParams()
    const [movieData, set_movieData] = useState({})
    console.log("what are params", params.imdb_id)

    const fetchData = async () => {
        const response = await Axios.get(`http://www.omdbapi.com/?i=${ params.imdb_id}&apikey=7a19119e`)
        console.log("response", response.data)
        set_movieData(response.data)
    }

    useEffect(()=> {
        console.log("use effect running ")
        fetchData()
    },[params])


    return (
        <div>
           <h1>details page({params.imdb_id})</h1> 
            <p> Title: {movieData.Title}</p>
            <p> Genre: {movieData.Genre}</p>
            <p> Language: {movieData.Language}</p>
            <p> Runtime:   {movieData.Runtime}</p>
            <p> Rating:    {movieData.imdbRating}</p>
            <img src={movieData.Poster} />
        </div>
    )
}
