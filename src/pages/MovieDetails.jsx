import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://backend-0mp3.onrender.com/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const toggleWatched = async () => {
    try {
      const res = await axios.put(
        `https://backend-0mp3.onrender.com/api/movies/${id}/watched`
      );

      setMovie(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>{movie.title}</h1>

      <img
        src={movie.poster}
        alt={movie.title}
        width="300"
      />

      <p>{movie.description}</p>

      <h3>⭐ {movie.rating}</h3>

      <button onClick={toggleWatched}>
        {movie.watched
          ? "✅ Watched"
          : "☑ Mark as Watched"}
      </button>

      <br />
      <br />

      <button
        onClick={() => window.open(movie.trailer)}
      >
        Watch Trailer
      </button>
    </div>
  );
}

export default MovieDetails;
