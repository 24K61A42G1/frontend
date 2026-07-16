import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  const normalizeMovies = (data) => {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.movies)) return data.movies;
    if (data && typeof data === "object") return [data];
    return [];
  };

  useEffect(() => {
    axios
      .get("https://backend-0mp3.onrender.com/api/movies")
      .then((res) => setMovies(normalizeMovies(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Movie Watch List</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;