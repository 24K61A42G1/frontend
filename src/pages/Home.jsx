import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-0mp3.onrender.com/api/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Movie Watch List</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
