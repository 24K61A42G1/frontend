import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          width: "220px",
          borderRadius: "10px",
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src={movie.poster}
          alt={movie.title}
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <h3
          style={{
            textAlign: "center",
            padding: "10px",
            margin: 0,
          }}
        >
          {movie.title}
        </h3>
      </div>
    </Link>
  );
}

export default MovieCard;