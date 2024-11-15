import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";




// Fetches all popular movies
export const MovieGallery = () => {

    // API key
  const apiEnv = import.meta.env.VITE_API_KEY;
  const URL =  `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`

  const [ movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {  
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const json = await response.json();
        setMovies(json.results);
        console.log("Fetched movies:", json.results); // Logs fetched movies to the console
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchMovies()
  }, [])
  
  //title
  //release_date
  //image poster_path

  return (
    <div>

      {movies.map((movie) => (
        <MovieCard 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
          // <img 
          //   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
          //   alt={movie.title} 
          />
        
      ))}
    </div>
  )
}


