import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie._id}`}>
      <div className="movie-card">
        <img
          src={movie.poster}
          alt={movie.title}
          width="200"
        />

        <h2>{movie.title}</h2>
      </div>
    </Link>
  );
}

export default MovieCard;