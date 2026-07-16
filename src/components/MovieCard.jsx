import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <Link to={`/movie/${movie._id}`}>
      <div className="movie-card">
        <img
          src={movie.poster || "https://via.placeholder.com/200x300?text=No+Poster"}
          alt={movie.title || "Movie poster"}
          width="200"
        />

        <h2>{movie.title || "Untitled Movie"}</h2>
      </div>
    </Link>
  );
}

export default MovieCard;