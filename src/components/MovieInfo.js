import { Params, useParams } from "react-router-dom";

const MovieInfo = (Movie) => {
  const { idmovie } = useParams();
  const movie = Movie.find((el) => el.id == idmovie);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} />
      <p>{movie.description}</p>
      <iframe
        height="100%"
        src={movie.trailer}
        title="Trailer"
      ></iframe>
    </div>
  );
};

export default MovieInfo;
